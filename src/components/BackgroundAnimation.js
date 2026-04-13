"use client";

import { useEffect, useRef } from "react";

export default function BackgroundAnimation({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrame;
    let width = 0;
    let height = 0;
    let nodes = [];
    const pointer = { x: -9999, y: -9999 };

    const createNodes = () => {
      const count = Math.min(Math.floor((width * height) / 24000), 68);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.8 + 0.6,
      }));
    };

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createNodes();
    };

    const onMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        const pdx = pointer.x - node.x;
        const pdy = pointer.y - node.y;
        const pointerDistance = Math.sqrt(pdx * pdx + pdy * pdy);
        const pointerInfluence = Math.max(0, 1 - pointerDistance / 220);

        if (pointerInfluence > 0) {
          node.x -= pdx * 0.0025 * pointerInfluence;
          node.y -= pdy * 0.0025 * pointerInfluence;
        }

        for (let j = i + 1; j < nodes.length; j += 1) {
          const sibling = nodes[j];
          const dx = node.x - sibling.x;
          const dy = node.y - sibling.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 128;

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.14;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(sibling.x, sibling.y);
            context.strokeStyle = `rgba(35, 119, 214, ${alpha})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(node.x, node.y, node.size + pointerInfluence * 1.3, 0, Math.PI * 2);
        context.fillStyle = `rgba(20, 110, 214, ${0.24 + pointerInfluence * 0.4})`;
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
