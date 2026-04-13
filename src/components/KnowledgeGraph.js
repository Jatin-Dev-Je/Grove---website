"use client";

import { useEffect, useRef } from "react";

export default function KnowledgeGraph() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let mouse = { x: -1000, y: -1000 };
    let nodes = [];
    let time = 0;

    const COLORS = {
      node: "rgba(16, 185, 129, 0.6)",
      nodeCore: "rgba(52, 211, 153, 0.9)",
      nodeBright: "rgba(110, 231, 183, 1)",
      line: "rgba(16, 185, 129, 0.08)",
      lineActive: "rgba(16, 185, 129, 0.25)",
      pulse: "rgba(16, 185, 129, 0.15)",
    };

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.scale(dpr, dpr);
      initNodes(rect.width, rect.height);
    }

    function initNodes(w, h) {
      const count = Math.min(Math.floor((w * h) / 12000), 120);
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          baseRadius: Math.random() * 2 + 1,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.01 + 0.005,
          brightness: Math.random(),
        });
      }
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    function draw() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      time += 0.005;

      /* Subtle radial gradient background glow */
      const grad = ctx.createRadialGradient(w * 0.5, h * 0.4, 0, w * 0.5, h * 0.4, w * 0.6);
      grad.addColorStop(0, "rgba(16, 185, 129, 0.03)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      /* Update + draw nodes */
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        /* Float animation */
        n.x += n.vx + Math.sin(time + n.phase) * 0.15;
        n.y += n.vy + Math.cos(time + n.phase * 1.3) * 0.15;

        /* Wrap around */
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;

        /* Mouse interaction */
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseInfluence = Math.max(0, 1 - dist / 200);

        n.radius = n.baseRadius + mouseInfluence * 3;

        /* Pulsing */
        const pulse = Math.sin(time * 2 + n.phase) * 0.3 + 0.7;
        const alpha = (0.3 + n.brightness * 0.5 + mouseInfluence * 0.5) * pulse;

        /* Draw connections */
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const cdx = n.x - m.x;
          const cdy = n.y - m.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          const maxDist = 150 + mouseInfluence * 50;

          if (cdist < maxDist) {
            const lineAlpha = (1 - cdist / maxDist) * (0.08 + mouseInfluence * 0.15);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.5 + mouseInfluence * 0.5;
            ctx.stroke();
          }
        }

        /* Draw node glow */
        if (mouseInfluence > 0.1) {
          const glowGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 8);
          glowGrad.addColorStop(0, `rgba(16, 185, 129, ${mouseInfluence * 0.15})`);
          glowGrad.addColorStop(1, "transparent");
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 8, 0, Math.PI * 2);
          ctx.fill();
        }

        /* Draw node */
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${alpha})`;
        ctx.fill();

        /* Inner bright core */
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 243, 208, ${alpha * 1.5})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
