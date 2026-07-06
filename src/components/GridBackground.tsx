"use client";

import { useEffect, useRef } from "react";

interface GridBackgroundProps {
  /** Opacity of the grid lines (0-1). Default 0.15 */
  opacity?: number;
  /** Grid cell size in px. Default 40 */
  cellSize?: number;
  /** Line width in px. Default 1 */
  lineWidth?: number;
  /** Scroll speed in px per frame (positive = down). Default 0.5 */
  speed?: number;
}

export default function GridBackground({
  opacity = 0.15,
  cellSize = 40,
  lineWidth = 1,
  speed = 0.5,
}: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let offsetY = 0;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = `rgba(0, 255, 65, ${opacity})`;
      ctx.lineWidth = lineWidth;

      // Vertical lines — static
      const cols = Math.floor(canvas.width / cellSize) + 1;
      for (let c = 0; c <= cols; c++) {
        const x = c * cellSize;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines — scroll downward
      const rows = Math.floor(canvas.height / cellSize) + 2;
      for (let r = -1; r <= rows; r++) {
        const y = r * cellSize + (offsetY % cellSize);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      offsetY += speed;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, [opacity, cellSize, lineWidth, speed]);

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
