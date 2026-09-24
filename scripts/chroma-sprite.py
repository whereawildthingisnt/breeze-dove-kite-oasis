#!/usr/bin/env python3
"""Key solid magenta sprites to transparent WebP and crop to content."""

from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
from PIL import Image

MAGENTA = np.array([255, 0, 255], dtype=np.int32)


def key_magenta(src: Path, dst: Path, pad: int = 12) -> None:
    im = Image.open(src).convert("RGBA")
    arr = np.array(im)
    rgb = arr[:, :, :3].astype(np.int32)
    dist = np.sqrt(np.sum((rgb - MAGENTA) ** 2, axis=2))
    r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]
    # Pure-ish magenta plus jpeg fringes (high R+B, low G).
    mag = (r > 170) & (b > 170) & (g < 110) & ((r + b - 2 * g) > 180)
    near = dist < 90
    alpha = np.ones(dist.shape, dtype=np.float32)
    alpha = np.where(mag | near, 0.0, alpha)
    # Soft edge: fade remaining near-magenta.
    fringe = (~(mag | near)) & (dist < 140) & (g < 140)
    alpha = np.where(fringe, np.clip((dist - 90) / 50.0, 0, 1), alpha)
    arr[:, :, 3] = np.clip(alpha * 255, 0, 255).astype(np.uint8)

    ys, xs = np.where(arr[:, :, 3] > 16)
    if len(xs) == 0 or len(ys) == 0:
        Image.fromarray(arr).save(dst, "WEBP", quality=90)
        return
    x0, x1 = int(xs.min()), int(xs.max())
    y0, y1 = int(ys.min()), int(ys.max())
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(arr.shape[1] - 1, x1 + pad)
    y1 = min(arr.shape[0] - 1, y1 + pad)
    cropped = arr[y0 : y1 + 1, x0 : x1 + 1]
    Image.fromarray(cropped).save(dst, "WEBP", quality=90)


def main() -> None:
    if len(sys.argv) < 3:
        raise SystemExit("usage: chroma-sprite.py src dst")
    key_magenta(Path(sys.argv[1]), Path(sys.argv[2]))


if __name__ == "__main__":
    main()
