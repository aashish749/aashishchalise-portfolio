"use client";

import { useEffect, useRef } from "react";

interface BinaryRainProps {
  /** Opacity of the binary characters (0-1). Default 0.4 */
  opacity?: number;
  /** Fall speed in pixels per frame. Default 0.8 */
  speed?: number;
  /** Font size in px. Default 14 */
  fontSize?: number;
}

export default function BinaryRain({
  opacity = 0.4,
  speed = 0.8,
  fontSize = 14,
}: BinaryRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const spacing = fontSize * 0.8;
    const getColumns = () => Math.floor(canvas.width / spacing);
    let columns = getColumns();
    let drops: number[] = Array.from({ length: columns }, () =>
      Math.floor(Math.random() * -canvas.height),
    );

    const draw = () => {
      const newCols = getColumns();
      if (newCols !== columns) {
        columns = newCols;
        drops = Array.from({ length: columns }, () =>
          Math.floor(Math.random() * -canvas.height),
        );
      }

      // Clear canvas completely
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "VT323", monospace`;
      ctx.textAlign = "center";

      for (let i = 0; i < drops.length; i++) {
        const x = i * spacing + spacing / 2;
        const y = drops[i];

        // Draw trail — 8 characters behind the head, fading out
        for (let t = 0; t < 8; t++) {
          const trailY = y - t * (fontSize * 0.6);
          if (trailY < 0) break;

          const trailChar = Math.random() > 0.5 ? "0" : "1";
          const fade = 1 - t / 8;
          ctx.fillStyle = `rgba(0, 255, 65, ${opacity * fade * 0.6})`;
          ctx.fillText(trailChar, x, trailY);
        }

        // Head character — bright white-green
        ctx.fillStyle = `rgba(180, 255, 180, ${Math.min(opacity * 2, 1)})`;
        ctx.fillText(Math.random() > 0.5 ? "0" : "1", x, y);

        // Reset drop when off screen
        if (y > canvas.height + 20 && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speed;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, [opacity, speed, fontSize]);

  return (
    <div
      ref={parentRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
}
