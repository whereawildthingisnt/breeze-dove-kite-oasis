#!/usr/bin/env python3
"""Corpus brand cards: museum anatomical plate × living Godot scene tree."""

from __future__ import annotations

import math
import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

INK = (18, 16, 14, 255)
PAPER = (239, 236, 230)
BONE = (217, 210, 197)
STEEL = (185, 196, 200)
NERVE = (142, 173, 175)
TAUPE = (154, 148, 138)
CORAL = (196, 92, 74)

SERIF_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"
SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"


def _rgba(rgb, a: int):
    return (*rgb, a)


def lerp(a, b, t):
    return a + (b - a) * t


def mix(c0, c1, t):
    return tuple(int(lerp(a, b, t)) for a, b in zip(c0, c1))


def paper(w: int, h: int, rng: np.random.Generator) -> Image.Image:
    base = np.zeros((h, w, 3), dtype=np.float32)
    base[:] = np.array((20, 17, 15), dtype=np.float32)

    # Fine fiber only — no low-frequency blotches (those read as landscape).
    grain = rng.normal(0, 1, (h, w)).astype(np.float32)
    base[:, :, 0] += grain * 3.2
    base[:, :, 1] += grain * 2.6
    base[:, :, 2] += grain * 1.8

    speckle = rng.random((h, w))
    base[speckle > 0.993] += np.array(TAUPE, dtype=np.float32) * 0.22
    base[speckle < 0.004] -= 6

    yy, xx = np.mgrid[0:h, 0:w]
    nx = (xx - w / 2) / (w * 0.78)
    ny = (yy - h / 2) / (h * 0.72)
    vig = np.clip(nx * nx + ny * ny, 0, 1) ** 1.4
    base -= vig[..., None] * 8

    return Image.fromarray(np.clip(base, 0, 255).astype(np.uint8), "RGB").convert("RGBA")


def plate_border(img: Image.Image, inset: int, weight: int) -> None:
    d = ImageDraw.Draw(img)
    w, h = img.size
    m = inset
    d.rectangle([m, m, w - m - 1, h - m - 1], outline=_rgba(TAUPE, 110), width=weight)
    m2 = inset + weight * 6
    d.rectangle([m2, m2, w - m2 - 1, h - m2 - 1], outline=_rgba(STEEL, 55), width=max(1, weight))
    arm = int(42 * (weight / 2))
    c = _rgba(STEEL, 130)
    t = weight + 1
    corners = [
        (m2, m2, 1, 1),
        (w - m2 - 1, m2, -1, 1),
        (m2, h - m2 - 1, 1, -1),
        (w - m2 - 1, h - m2 - 1, -1, -1),
    ]
    for x, y, sx, sy in corners:
        d.line([(x, y), (x + sx * arm, y)], fill=c, width=t)
        d.line([(x, y), (x, y + sy * arm)], fill=c, width=t)


def construction_plate(layer: Image.Image, cx: float, cy: float, r: float, scale: int) -> None:
    d = ImageDraw.Draw(layer)
    for k, alpha in ((1.0, 36), (0.72, 22), (0.48, 14)):
        rr = r * k
        d.ellipse([cx - rr, cy - rr, cx + rr, cy + rr], outline=_rgba(TAUPE, alpha), width=scale)
    gap = r * 0.18
    col = _rgba(TAUPE, 36)
    d.line([(cx - r, cy), (cx - gap, cy)], fill=col, width=scale)
    d.line([(cx + gap, cy), (cx + r, cy)], fill=col, width=scale)
    d.line([(cx, cy - r), (cx, cy - gap)], fill=col, width=scale)
    d.line([(cx, cy + gap), (cx, cy + r)], fill=col, width=scale)


def glow_disk(size: tuple[int, int], x: float, y: float, radius: float, color, alpha: int, blur: float) -> Image.Image:
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.ellipse([x - radius, y - radius, x + radius, y + radius], fill=_rgba(color, alpha))
    if blur > 0:
        layer = layer.filter(ImageFilter.GaussianBlur(blur))
    return layer


def line_on(layer: Image.Image, a, b, color, width: int, alpha: int = 255) -> None:
    d = ImageDraw.Draw(layer)
    d.line([a, b], fill=_rgba(color, alpha), width=max(1, width))


def bezier_points(p0, p1, p2, n=28):
    pts = []
    for i in range(n + 1):
        t = i / n
        u = 1 - t
        x = u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0]
        y = u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]
        pts.append((x, y))
    return pts


def draw_curve(layer, p0, p1, p2, color, width, alpha=220):
    pts = bezier_points(p0, p1, p2)
    d = ImageDraw.Draw(layer)
    d.line(pts, fill=_rgba(color, alpha), width=width, joint="curve")


def hatch_field(layer, cx, cy, w, h, angle_deg, scale, alpha=22):
    d = ImageDraw.Draw(layer)
    ang = math.radians(angle_deg)
    dx, dy = math.cos(ang), math.sin(ang)
    px, py = -dy, dx
    step = 5.5 * scale
    half = math.hypot(w, h)
    col = _rgba(TAUPE, alpha)
    for i in range(-int(half / step), int(half / step) + 1):
        ox, oy = cx + px * i * step, cy + py * i * step
        x0, y0 = ox - dx * half, oy - dy * half
        x1, y1 = ox + dx * half, oy + dy * half
        pts = []
        for t in np.linspace(0, 1, 40):
            x = x0 + (x1 - x0) * t
            y = y0 + (y1 - y0) * t
            if ((x - cx) / (w / 2)) ** 2 + ((y - cy) / (h / 2)) ** 2 <= 1:
                pts.append((x, y))
            else:
                if len(pts) > 1:
                    d.line(pts, fill=col, width=max(1, scale))
                pts = []
        if len(pts) > 1:
            d.line(pts, fill=col, width=max(1, scale))


def figure_nodes(cx: float, top: float, height: float):
    """Named joints. height is crown-to-sole."""
    H = height

    def y(t):
        return top + H * t

    def x(off):
        return cx + off * H

    return {
        "head": (x(0), y(0.068)),
        "neck": (x(0), y(0.15)),
        "l_shoulder": (x(-0.125), y(0.185)),
        "r_shoulder": (x(0.125), y(0.185)),
        "sternum": (x(0), y(0.225)),
        "heart": (x(-0.032), y(0.248)),
        "l_elbow": (x(-0.20), y(0.345)),
        "r_elbow": (x(0.205), y(0.345)),
        "solar": (x(0), y(0.33)),
        "l_hand": (x(-0.255), y(0.50)),
        "r_hand": (x(0.265), y(0.50)),
        "navel": (x(0), y(0.41)),
        "pelvis": (x(0), y(0.50)),
        "l_hip": (x(-0.078), y(0.535)),
        "r_hip": (x(0.078), y(0.535)),
        "l_knee": (x(-0.085), y(0.725)),
        "r_knee": (x(0.09), y(0.725)),
        "l_ankle": (x(-0.09), y(0.91)),
        "r_ankle": (x(0.095), y(0.91)),
        "c_head": (x(0.145), y(0.05)),
        "c_rhand": (x(0.36), y(0.46)),
        "c_lhip": (x(-0.20), y(0.58)),
        "c_heart": (x(-0.145), y(0.205)),
    }


EDGES = [
    ("head", "neck"),
    ("neck", "sternum"),
    ("neck", "l_shoulder"),
    ("neck", "r_shoulder"),
    ("sternum", "heart"),
    ("sternum", "solar"),
    ("solar", "navel"),
    ("navel", "pelvis"),
    ("l_shoulder", "l_elbow"),
    ("r_shoulder", "r_elbow"),
    ("l_elbow", "l_hand"),
    ("r_elbow", "r_hand"),
    ("pelvis", "l_hip"),
    ("pelvis", "r_hip"),
    ("l_hip", "l_knee"),
    ("r_hip", "r_knee"),
    ("l_knee", "l_ankle"),
    ("r_knee", "r_ankle"),
]

CHILD_EDGES = [
    ("head", "c_head"),
    ("r_hand", "c_rhand"),
    ("l_hip", "c_lhip"),
    ("heart", "c_heart"),
]

CHILD_KEYS = {e[1] for e in CHILD_EDGES}
MAJOR = {"head", "pelvis", "sternum", "solar", "heart"}


def capsule(draw, a, b, width, fill):
    draw.line([a, b], fill=fill, width=int(width))
    r = width / 2
    for p in (a, b):
        draw.ellipse([p[0] - r, p[1] - r, p[0] + r, p[1] + r], fill=fill)


def draw_silhouette(layer, n, scale):
    d = ImageDraw.Draw(layer)
    fill = _rgba(BONE, 120)
    hx, hy = n["head"]
    hr = 26 * scale
    d.ellipse([hx - hr, hy - hr * 1.18, hx + hr, hy + hr * 1.05], fill=fill)
    capsule(d, n["head"], n["neck"], 14 * scale, fill)
    capsule(d, n["neck"], n["sternum"], 16 * scale, fill)
    torso = [
        n["l_shoulder"],
        (n["l_elbow"][0] * 0.15 + n["l_shoulder"][0] * 0.85, n["solar"][1]),
        n["l_hip"],
        n["pelvis"],
        n["r_hip"],
        (n["r_elbow"][0] * 0.15 + n["r_shoulder"][0] * 0.85, n["solar"][1]),
        n["r_shoulder"],
        n["neck"],
    ]
    d.polygon(torso, fill=fill)
    capsule(d, n["l_shoulder"], n["l_elbow"], 13 * scale, fill)
    capsule(d, n["l_elbow"], n["l_hand"], 10 * scale, fill)
    capsule(d, n["r_shoulder"], n["r_elbow"], 13 * scale, fill)
    capsule(d, n["r_elbow"], n["r_hand"], 10 * scale, fill)
    capsule(d, n["l_hip"], n["l_knee"], 14 * scale, fill)
    capsule(d, n["l_knee"], n["l_ankle"], 11 * scale, fill)
    capsule(d, n["r_hip"], n["r_knee"], 14 * scale, fill)
    capsule(d, n["r_knee"], n["r_ankle"], 11 * scale, fill)
    foot_w = 16 * scale
    for key in ("l_ankle", "r_ankle"):
        ax, ay = n[key]
        d.ellipse([ax - foot_w, ay - 3.2 * scale, ax + foot_w * 0.35, ay + 5.5 * scale], fill=fill)
    outline = _rgba(STEEL, 130)
    d.ellipse([hx - hr, hy - hr * 1.18, hx + hr, hy + hr * 1.05], outline=outline, width=max(1, int(1.6 * scale)))


def mix_pt(a, b, t, y_off=0):
    return (lerp(a[0], b[0], t), lerp(a[1], b[1], t) + y_off)


def draw_ribs(layer, n, scale):
    sx, sy = n["sternum"]
    for i in range(5):
        y = sy + (18 + i * 16) * scale
        spread = (52 + i * 10) * scale
        drop = (10 + i * 3) * scale
        draw_curve(
            layer,
            (sx, y),
            (sx - spread * 0.55, y + drop * 0.35),
            (sx - spread, y + drop),
            STEEL,
            max(1, int(2.0 * scale)),
            190,
        )
        draw_curve(
            layer,
            (sx, y),
            (sx + spread * 0.55, y + drop * 0.35),
            (sx + spread, y + drop),
            STEEL,
            max(1, int(2.0 * scale)),
            190,
        )
    draw_curve(
        layer,
        n["neck"],
        mix_pt(n["neck"], n["l_shoulder"], 0.5, -10 * scale),
        n["l_shoulder"],
        STEEL,
        max(1, int(2.6 * scale)),
        210,
    )
    draw_curve(
        layer,
        n["neck"],
        mix_pt(n["neck"], n["r_shoulder"], 0.5, -10 * scale),
        n["r_shoulder"],
        STEEL,
        max(1, int(2.6 * scale)),
        210,
    )


def draw_figure(base: Image.Image, cx, top, height, scale: int) -> tuple[dict, Image.Image]:
    w, h = base.size
    n = figure_nodes(cx, top, height)

    base.alpha_composite(glow_disk((w, h), n["solar"][0], n["solar"][1], height * 0.40, NERVE, 42, 40 * scale))
    base.alpha_composite(glow_disk((w, h), n["heart"][0], n["heart"][1], 96 * scale, CORAL, 110, 28 * scale))

    sil = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw_silhouette(sil, n, scale)
    sil = sil.filter(ImageFilter.GaussianBlur(0.35 * scale))
    base.alpha_composite(sil)

    hatch = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    hatch_field(hatch, n["sternum"][0] + 12 * scale, n["solar"][1], 110 * scale, 200 * scale, 58, scale, 18)
    base.alpha_composite(hatch)

    lines = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    spine = ["head", "neck", "sternum", "solar", "navel", "pelvis"]
    for a, b in zip(spine, spine[1:]):
        line_on(lines, n[a], n[b], STEEL, int(5.4 * scale), 255)
    for a, b in EDGES:
        if {a, b} <= set(spine):
            continue
        line_on(lines, n[a], n[b], STEEL, int(4.2 * scale), 240)
    draw_ribs(lines, n, scale)
    for a, b in CHILD_EDGES:
        line_on(lines, n[a], n[b], NERVE, max(1, int(2.0 * scale)), 190)
    base.alpha_composite(lines)

    glows = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    for key, (x, y) in n.items():
        if key == "heart":
            continue
        r = (24 if key in MAJOR else 16 if key not in CHILD_KEYS else 12) * scale
        col = NERVE if key in ("solar", "c_head", "c_rhand", "c_lhip") else STEEL
        glows.alpha_composite(glow_disk((w, h), x, y, r, col, 95, 5.5 * scale))
    glows.alpha_composite(glow_disk((w, h), *n["heart"], 38 * scale, CORAL, 190, 10 * scale))
    base.alpha_composite(glows)

    cores = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(cores)
    for key, (x, y) in n.items():
        if key in CHILD_KEYS:
            s = 5.4 * scale
            d.rounded_rectangle(
                [x - s, y - s, x + s, y + s],
                radius=1.6 * scale,
                fill=_rgba(NERVE, 245),
            )
            continue
        if key == "heart":
            r = 13.5 * scale
            d.ellipse([x - r, y - r, x + r, y + r], fill=_rgba(CORAL, 255))
            d.ellipse(
                [x - r * 0.42, y - r * 0.48, x + r * 0.28, y + r * 0.18],
                fill=_rgba(PAPER, 180),
            )
            continue
        r = 10.4 * scale if key in MAJOR else 7.8 * scale
        d.ellipse([x - r, y - r, x + r, y + r], fill=_rgba(STEEL, 255))
        d.ellipse(
            [x - r * 0.42, y - r * 0.5, x + r * 0.22, y + r * 0.18],
            fill=_rgba(PAPER, 160),
        )
    hx, hy = n["head"]
    hr = 26 * scale
    d.ellipse([hx - hr, hy - hr, hx + hr, hy + hr], outline=_rgba(STEEL, 210), width=max(1, int(2.2 * scale)))
    base.alpha_composite(cores)
    return n, base


def draw_tracked_text(draw: ImageDraw.ImageDraw, text: str, font, cx, cy, fill, tracking: float):
    widths = [draw.textlength(ch, font=font) for ch in text]
    total = sum(widths) + tracking * (len(text) - 1)
    x = cx - total / 2
    for ch, w in zip(text, widths):
        bbox = font.getbbox(ch)
        h = bbox[3] - bbox[1]
        draw.text((x, cy - h / 2 - bbox[1] * 0.15), ch, font=font, fill=fill)
        x += w + tracking
    return total


def title_block(img: Image.Image, cx, cy, size, tracking, scale, subtitle=None, align="center"):
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    font = ImageFont.truetype(SERIF_BOLD, size)
    tmp = Image.new("RGBA", (8, 8), (0, 0, 0, 0))
    td = ImageDraw.Draw(tmp)
    widths = [td.textlength(ch, font=font) for ch in "CORPUS"]
    total = sum(widths) + tracking * 5
    text_cx = cx if align == "center" else cx + total / 2

    rule_w = total * 0.96
    rule_y0 = cy - size * 0.78
    rule_y1 = cy + size * 0.62

    # Soft ink bloom under glyphs only — no rectangular plate (reads as a house).
    shadow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    draw_tracked_text(sd, "CORPUS", font, text_cx, cy, _rgba((8, 7, 6), 255), tracking)
    shadow = shadow.filter(ImageFilter.GaussianBlur(7 * scale))
    img.alpha_composite(shadow)
    # Second tighter shadow for edge crispness
    shadow2 = Image.new("RGBA", img.size, (0, 0, 0, 0))
    s2 = ImageDraw.Draw(shadow2)
    draw_tracked_text(s2, "CORPUS", font, text_cx, cy + 1.5 * scale, _rgba((8, 7, 6), 255), tracking)
    img.alpha_composite(shadow2)

    d.line(
        [(text_cx - rule_w / 2, rule_y0), (text_cx + rule_w / 2, rule_y0)],
        fill=_rgba(STEEL, 150),
        width=max(1, scale),
    )
    d.line(
        [(text_cx - rule_w / 2, rule_y1), (text_cx + rule_w / 2, rule_y1)],
        fill=_rgba(STEEL, 120),
        width=max(1, scale),
    )
    draw_tracked_text(d, "CORPUS", font, text_cx, cy, _rgba(PAPER, 255), tracking)

    if subtitle:
        sf = ImageFont.truetype(SERIF, max(11, int(size * 0.168)))
        sw = d.textlength(subtitle, font=sf)
        d.text(
            (text_cx - sw / 2, rule_y1 + 10 * scale),
            subtitle,
            font=sf,
            fill=_rgba(TAUPE, 200),
        )
    img.alpha_composite(layer)
    return total


def render_og(path: str) -> None:
    scale = 2
    W, H = 1200 * scale, 630 * scale
    rng = np.random.default_rng(42)
    img = paper(W, H, rng)
    cx, cy = W / 2, H / 2
    construction_plate(img, cx, H * 0.50, 300 * scale, scale)
    plate_border(img, 28 * scale, scale)
    fig_h = 560 * scale
    fig_top = (H - fig_h) / 2 + 6 * scale
    draw_figure(img, cx, fig_top, fig_h, scale)
    title_block(
        img,
        cx,
        cy,
        148 * scale,
        28 * scale,
        scale,
        subtitle="THE BODY IS A SCENE TREE",
    )
    out = img.convert("RGB").resize((1200, 630), Image.Resampling.LANCZOS)
    out.save(path, "PNG")


def render_banner(path: str) -> None:
    scale = 2
    W, H = 1200 * scale, 264 * scale
    rng = np.random.default_rng(42)
    img = paper(W, H, rng)
    fig_h = 720 * scale
    fig_top = -90 * scale
    cx = W * 0.66
    construction_plate(img, cx, H * 0.42, 220 * scale, scale)
    plate_border(img, 16 * scale, scale)
    draw_figure(img, cx, fig_top, fig_h, scale)
    # Left-half lockup, sitting above the midline, empty strip along the bottom.
    title_block(img, 72 * scale, 96 * scale, 84 * scale, 14 * scale, scale, align="left")
    out = img.convert("RGB").resize((1200, 264), Image.Resampling.LANCZOS)
    out.save(path, "PNG")


if __name__ == "__main__":
    os.makedirs("/workspace/.grok", exist_ok=True)
    render_og("/workspace/.grok/og-raw.png")
    render_banner("/workspace/.grok/banner-raw.png")
    print("wrote og-raw and banner-raw")
