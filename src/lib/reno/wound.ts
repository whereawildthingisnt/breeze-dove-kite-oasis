import * as THREE from "three";

let tex: THREE.Texture | null = null;

/** A few dark holes on a clear plate. Drawn once. */
export function woundTexture(): THREE.Texture {
  if (tex) return tex;
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const g = canvas.getContext("2d");
  if (!g) {
    tex = new THREE.Texture();
    return tex;
  }
  g.clearRect(0, 0, 128, 128);
  const holes = [
    [46, 58, 11],
    [74, 40, 7],
    [62, 78, 9],
    [34, 36, 5],
  ] as const;
  for (const [x, y, r] of holes) {
    g.fillStyle = "rgba(90, 8, 10, 0.92)";
    g.beginPath();
    g.ellipse(x, y, r, r * 0.72, 0.4, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "rgba(40, 0, 0, 0.85)";
    g.beginPath();
    g.arc(x, y, r * 0.38, 0, Math.PI * 2);
    g.fill();
  }
  tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}
