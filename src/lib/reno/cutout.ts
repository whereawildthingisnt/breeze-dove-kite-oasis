import * as THREE from "three";

const cache = new Map<string, THREE.Texture>();

/** Punch the magenta plate off a painted sprite so it stands as a cutout. */
export function cutoutTexture(source: THREE.Texture, key: string): THREE.Texture {
  const hit = cache.get(key);
  if (hit) return hit;
  const image = source.image as CanvasImageSource & { width?: number; height?: number };
  const w = image.width || 0;
  const h = image.height || 0;
  if (w < 8 || h < 8) return source;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return source;
  ctx.drawImage(image, 0, 0, w, h);
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const r = d[i] ?? 0;
    const g = d[i + 1] ?? 0;
    const b = d[i + 2] ?? 0;
    // Magenta plates and the hot-pink screens on the cop / junkie art.
    const plate = g < 105 && r > 145 && b > 85 && r - g > 70 && b - g > 35 && r > b * 0.65;
    if (!plate) continue;
    const strength = Math.min(r - g, b - g);
    const alpha = strength > 90 ? 0 : Math.max(0, 255 - strength * 4);
    d[i + 3] = Math.min(d[i + 3] ?? 255, alpha);
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  cache.set(key, tex);
  return tex;
}
