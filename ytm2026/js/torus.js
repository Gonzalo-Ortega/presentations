import { project, drawPoints } from './points-render.js';

(function () {
  const canvas = document.getElementById('torusCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  const R = 100, r = 50, N = 2000;
  let angle = 0;

  const pts = [];

  for (let i = 0; i < N; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 2;

    const x = (R + r * Math.cos(v)) * Math.cos(u);
    const y = (R + r * Math.cos(v)) * Math.sin(u);
    const z = r * Math.sin(v);

    pts.push([x, y, z]);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const ax = angle * 0.4;
    const ay = angle;
    const color = `#F54927BF`;

    const projected = pts.map(p => project(p[0], p[1], p[2], ax, ay, W, H));
    drawPoints(ctx, projected, color);

    angle -= 0.008;
    requestAnimationFrame(draw);
  }

  draw();
})();