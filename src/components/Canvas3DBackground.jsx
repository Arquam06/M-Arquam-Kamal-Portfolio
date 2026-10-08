import React, { useEffect, useRef } from "react";

export default function Canvas3DBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Floating Code Fragments
    const codeTokens = [
      "{ }", "</>", "const", "npm", "git", "API", "React", "Node",
      "express", "useState", "useEffect", "async", "await", "FastAPI",
      "MongoDB", "JSON", "def", "export", "import", "=>", "0101"
    ];

    const floatingSnippets = Array.from({ length: 28 }, (_, i) => ({
      text: codeTokens[i % codeTokens.length],
      x: (Math.random() - 0.5) * width * 1.4,
      y: (Math.random() - 0.5) * height * 1.4,
      z: Math.random() * 800 + 200,
      alpha: Math.random() * 0.35 + 0.1,
      speedY: (Math.random() - 0.5) * 0.4,
      fontSize: Math.floor(Math.random() * 6) + 12
    }));

    // Floating Glowing Particles
    const particles = Array.from({ length: 35 }, () => ({
      x: (Math.random() - 0.5) * width * 1.4,
      y: (Math.random() - 0.5) * height * 1.4,
      z: Math.random() * 900 + 100,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.15
    }));

    // 3D Wireframe Cubes
    class WireframeCube {
      constructor(x, y, z, size) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.rx = Math.random() * Math.PI;
        this.ry = Math.random() * Math.PI;
        this.speedX = (Math.random() - 0.5) * 0.006;
        this.speedY = (Math.random() - 0.5) * 0.006;

        const s = size / 2;
        this.vertices = [
          [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
          [-s, -s, s],  [s, -s, s],  [s, s, s],  [-s, s, s]
        ];

        this.edges = [
          [0, 1], [1, 2], [2, 3], [3, 0],
          [4, 5], [5, 6], [6, 7], [7, 4],
          [0, 4], [1, 5], [2, 6], [3, 7]
        ];
      }

      update() {
        this.rx += this.speedX;
        this.ry += this.speedY;
      }

      draw(ctx, fov, cx, cy) {
        const cosX = Math.cos(this.rx), sinX = Math.sin(this.rx);
        const cosY = Math.cos(this.ry), sinY = Math.sin(this.ry);

        const projected = this.vertices.map(([vx, vy, vz]) => {
          let y1 = vy * cosX - vz * sinX;
          let z1 = vy * sinX + vz * cosX;
          let x2 = vx * cosY + z1 * sinY;
          let z2 = -vx * sinY + z1 * cosY + this.z;

          const scale = fov / (fov + z2);
          return {
            x: (x2 + this.x) * scale + cx,
            y: (y1 + this.y) * scale + cy
          };
        });

        ctx.strokeStyle = "rgba(250, 204, 21, 0.22)";
        ctx.lineWidth = 1.1;

        this.edges.forEach(([p1, p2]) => {
          ctx.beginPath();
          ctx.moveTo(projected[p1].x, projected[p1].y);
          ctx.lineTo(projected[p2].x, projected[p2].y);
          ctx.stroke();
        });
      }
    }

    const cubes = [
      new WireframeCube(-340, -160, 250, 85),
      new WireframeCube(360, 160, 320, 105),
      new WireframeCube(260, -260, 480, 75)
    ];

    let angle = 0;

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2 + (mouse.x - width / 2) * 0.04;
      const cy = height / 2 + (mouse.y - height / 2) * 0.04;
      const fov = 400;

      // 1. Mouse Ambient Glow
      const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 350);
      glowGrad.addColorStop(0, "rgba(250, 204, 21, 0.07)");
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Orbital Rings
      angle += 0.004;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle * 0.5);
      ctx.beginPath();
      ctx.ellipse(0, 0, width * 0.36, height * 0.22, angle, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(250, 204, 21, 0.04)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // 3. 3D Wireframe Cubes
      cubes.forEach((cube) => {
        cube.update();
        cube.draw(ctx, fov, cx, cy);
      });

      // 4. Floating Code Fragments
      ctx.font = "13px 'Fira Code', monospace";
      floatingSnippets.forEach((item) => {
        item.y += item.speedY;
        if (item.y > height * 0.8) item.y = -height * 0.8;
        if (item.y < -height * 0.8) item.y = height * 0.8;

        const scale = fov / (fov + item.z);
        const x2d = item.x * scale + cx;
        const y2d = item.y * scale + cy;

        ctx.fillStyle = `rgba(250, 204, 21, ${item.alpha * scale * 0.8})`;
        ctx.fillText(item.text, x2d, y2d);
      });

      // 5. Particles
      particles.forEach((p) => {
        p.z -= 0.6;
        if (p.z <= 0) {
          p.z = 900;
          p.x = (Math.random() - 0.5) * width * 1.4;
          p.y = (Math.random() - 0.5) * height * 1.4;
        }

        const scale = fov / (fov + p.z);
        const x2d = p.x * scale + cx;
        const y2d = p.y * scale + cy;

        if (x2d >= 0 && x2d <= width && y2d >= 0 && y2d <= height) {
          ctx.beginPath();
          ctx.arc(x2d, y2d, p.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(250, 204, 21, ${p.alpha * scale})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0
      }}
    />
  );
}
