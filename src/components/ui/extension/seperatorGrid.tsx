"use client";

import { motion } from "framer-motion";

interface SeparatorGridProps {
  height?: number;
  className?: string;
}

export function SeparatorGrid({
  height = 40,
  className = "",
}: SeparatorGridProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            height: `${height}px`,
          }}
        />

        {/* Animated scanlines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
              backgroundSize: "100% 100%",
              animation: "scanline 3s linear infinite",
            }}
          />
        </div>
      </motion.div>

      {/* Terminal-style border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-border/50" />
    </div>
  );
}
