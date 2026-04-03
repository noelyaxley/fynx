"use client";

import { motion } from "framer-motion";

/**
 * Animated SVG showing modular home assembly sequence.
 * Pure CSS/SVG — no image assets needed. No text elements.
 * Visual metaphor: modules moving from factory → transport → site → assembled home.
 */
export function ModuleAssembly() {
  const gold = "#FFB82C";
  const orange = "#F5940C";
  const muted = "#8A8A96";

  return (
    <div className="relative w-full max-w-lg mx-auto" aria-hidden="true">
      <svg
        viewBox="0 0 480 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Grid lines */}
        {Array.from({ length: 25 }).map((_, i) => (
          <line
            key={`vg-${i}`}
            x1={i * 20}
            y1={0}
            x2={i * 20}
            y2={300}
            stroke="rgba(255,184,44,0.04)"
            strokeWidth={0.5}
          />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={`hg-${i}`}
            x1={0}
            y1={i * 20}
            x2={480}
            y2={i * 20}
            stroke="rgba(255,184,44,0.04)"
            strokeWidth={0.5}
          />
        ))}

        {/* Ground line */}
        <motion.line
          x1={40}
          y1={260}
          x2={440}
          y2={260}
          stroke={gold}
          strokeWidth={1}
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />

        {/* Foundation / slab */}
        <motion.rect
          x={120}
          y={252}
          width={240}
          height={8}
          fill="#2A2A32"
          stroke={gold}
          strokeWidth={0.5}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ transformOrigin: "240px 256px" }}
        />

        {/* Module 1 — left section, drops in from above */}
        <motion.g
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        >
          <rect
            x={124}
            y={172}
            width={112}
            height={80}
            fill="#18181C"
            stroke={gold}
            strokeWidth={1}
          />
          {/* Windows */}
          <rect x={148} y={188} width={28} height={24} fill="none" stroke={gold} strokeWidth={0.5} opacity={0.5} />
          <rect x={192} y={188} width={28} height={24} fill="none" stroke={gold} strokeWidth={0.5} opacity={0.5} />
        </motion.g>

        {/* Module 2 — right section, drops in later */}
        <motion.g
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
        >
          <rect
            x={244}
            y={172}
            width={112}
            height={80}
            fill="#18181C"
            stroke={orange}
            strokeWidth={1}
          />
          {/* Door */}
          <rect x={278} y={200} width={22} height={52} fill="none" stroke={orange} strokeWidth={0.5} opacity={0.5} />
          {/* Window */}
          <rect x={316} y={188} width={28} height={24} fill="none" stroke={orange} strokeWidth={0.5} opacity={0.5} />
        </motion.g>

        {/* Roof — draws after modules land */}
        <motion.path
          d="M 112 172 L 240 110 L 368 172"
          stroke={gold}
          strokeWidth={1.5}
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 3.2 }}
        />

        {/* Crane line — fades out */}
        <motion.g
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 3.5 }}
        >
          <line
            x1={300}
            y1={20}
            x2={300}
            y2={170}
            stroke={muted}
            strokeWidth={0.5}
            strokeDasharray="3 3"
            opacity={0.3}
          />
          <path
            d="M 295 165 L 300 172 L 305 165"
            stroke={muted}
            strokeWidth={0.5}
            fill="none"
            opacity={0.3}
          />
        </motion.g>

        {/* Connection points flash — yellow to orange */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4] }}
          transition={{ duration: 0.6, delay: 3.0, times: [0, 0.5, 1] }}
        >
          <circle cx={236} cy={212} r={3} fill={gold} />
          <circle cx={244} cy={212} r={3} fill={orange} />
        </motion.g>

        {/* Progress bar at bottom — fills yellow → orange → red-orange */}
        <motion.line
          x1={120}
          y1={280}
          x2={360}
          y2={280}
          stroke="url(#progressGradient)"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 0.5 }}
        />

        <defs>
          <linearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={gold} />
            <stop offset="60%" stopColor={orange} />
            <stop offset="100%" stopColor="#E8461E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
