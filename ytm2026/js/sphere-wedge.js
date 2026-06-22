import { project, drawPoints } from './points-render.js';

(function () {
  const canvas = document.getElementById('sphereCanvas');
  
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  const R = 100, N = 2000;
  const circlePoints = 50;
  const circleRadius = 50;
  const noise = 8;
  let angle = 0;

  const pts = [];

  // Sphere
  for (let i = 0; i < N; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.acos(2 * Math.random() - 1);

    const x = R * Math.sin(v) * Math.cos(u);
    const y = R * Math.sin(v) * Math.sin(u);
    const z = R * Math.cos(v);

    pts.push([x, y, z]);
  }

  // Circle 1
  for (let i = 0; i < circlePoints; i++) {
    const t = (i / circlePoints) * Math.PI * 2;

    pts.push([
      150 + circleRadius * Math.cos(t) + (Math.random() - 0.5) * noise,
      circleRadius * Math.sin(t) + (Math.random() - 0.5) * noise,
      (Math.random() - 0.5) * noise
    ]);
  }

  // Circle 2
  for (let i = 0; i < circlePoints; i++) {
    const t = (i / circlePoints) * Math.PI * 2;

    pts.push([
      -150 + circleRadius * Math.cos(t) + (Math.random() - 0.5) * noise,
      circleRadius * Math.sin(t) + (Math.random() - 0.5) * noise,
      (Math.random() - 0.5) * noise
    ]);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const ax = angle * 0.4;
    const ay = angle;
    const color = `#99C1F1BF`;

    const projected = pts.map(p => project(p[0], p[1], p[2], ax, ay, W, H));
    drawPoints(ctx, projected, color);

    angle += 0.008;
    requestAnimationFrame(draw);
  }

  draw();
})();