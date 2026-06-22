export function project(x, y, z, ax, ay, W, H) {
  const cosX = Math.cos(ax), sinX = Math.sin(ax);
  const y1 = y * cosX - z * sinX;
  const z1 = y * sinX + z * cosX;

  const cosY = Math.cos(ay), sinY = Math.sin(ay);
  const x2 = x * cosY + z1 * sinY;
  const z2 = -x * sinY + z1 * cosY;

  const fov = 700;
  const scale = fov / (fov + z2 + 300);

  return [x2 * scale + W / 2, y1 * scale + H / 2, z2, scale];
}

export function drawPoints(ctx, projected, color) {
  projected.sort((a, b) => a[2] - b[2]);

  const zMin = Math.min(...projected.map(p => p[2]));
  const zMax = Math.max(...projected.map(p => p[2]));

  for (const [px, py, pz, scale] of projected) {
    const t = (pz - zMin) / (zMax - zMin);

    const radius = scale * 1.8;
    const r = Math.round(55 + t * 180);
    const g = Math.round(120 + t * 80);
    const b = Math.round(200 - t * 80);
    const alpha = 0.3 + t * 0.7;

    ctx.beginPath();
    ctx.arc(px, py, radius, 0, Math.PI * 2);
    //ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
    ctx.fillStyle = color;
    ctx.fill();
  }
}
