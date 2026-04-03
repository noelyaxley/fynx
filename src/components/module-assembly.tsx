"use client";

import { motion } from "framer-motion";

/**
 * Animated SVG showing modular home assembly sequence.
 * Pure CSS/SVG — no image assets needed.
 * Visual metaphor: modules moving from factory → transport → site → assembled home.
 */
export function ModuleAssembly() {
  return (
    <div className="relative w-full max-w-lg mx-auto" aria-hidden="true">
      <svg
        viewBox="0 0 480 320"
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
            y2={320}
            stroke="rgba(212,168,83,0.06)"
            strokeWidth={0.5}
          />
        ))}
        {Array.from({ length: 17 }).map((_, i) => (
          <line
            key={`hg-${i}`}
            x1={0}
            y1={i * 20}
            x2={480}
            y2={i * 20}
            stroke="rgba(212,168,83,0.06)"
            strokeWidth={0.5}
          />
        ))}

        {/* Ground line */}
        <motion.line
          x1={40}
          y1={260}
          x2={440}
          y2={260}
          stroke="#D4A853"
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
          stroke="#D4A853"
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
            stroke="#D4A853"
            strokeWidth={1}
          />
          {/* Window */}
          <rect
            x={148}
            y={188}
            width={28}
            height={24}
            fill="none"
            stroke="#D4A853"
            strokeWidth={0.5}
            opacity={0.5}
          />
          <rect
            x={192}
            y={188}
            width={28}
            height={24}
            fill="none"
            stroke="#D4A853"
            strokeWidth={0.5}
            opacity={0.5}
          />
          {/* Module label */}
          <text
            x={180}
            y={244}
            textAnchor="middle"
            fill="#D4A853"
            fontSize={8}
            fontFamily="monospace"
            opacity={0.4}
          >
            MOD-A
          </text>
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
            stroke="#D4A853"
            strokeWidth={1}
          />
          {/* Door */}
          <rect
            x={278}
            y={200}
            width={22}
            height={52}
            fill="none"
            stroke="#D4A853"
            strokeWidth={0.5}
            opacity={0.5}
          />
          {/* Window */}
          <rect
            x={316}
            y={188}
            width={28}
            height={24}
            fill="none"
            stroke="#D4A853"
            strokeWidth={0.5}
            opacity={0.5}
          />
          <text
            x={300}
            y={244}
            textAnchor="middle"
            fill="#D4A853"
            fontSize={8}
            fontFamily="monospace"
            opacity={0.4}
          >
            MOD-B
          </text>
        </motion.g>

        {/* Roof — draws after modules land */}
        <motion.path
          d="M 112 172 L 240 110 L 368 172"
          stroke="#D4A853"
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
            stroke="#D4A853"
            strokeWidth={0.5}
            strokeDasharray="3 3"
            opacity={0.3}
          />
          {/* Crane hook */}
          <path
            d="M 295 165 L 300 172 L 305 165"
            stroke="#D4A853"
            strokeWidth={0.5}
            fill="none"
            opacity={0.3}
          />
        </motion.g>

        {/* Annotation: Factory → Site */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.8 }}
        >
          <text
            x={60}
            y={290}
            fill="#8A8A96"
            fontSize={9}
            fontFamily="monospace"
          >
            FACTORY
          </text>
          <line
            x1={108}
            y1={287}
            x2={180}
            y2={287}
            stroke="#8A8A96"
            strokeWidth={0.5}
            markerEnd="url(#arrow)"
          />
          <text
            x={190}
            y={290}
            fill="#D4A853"
            fontSize={9}
            fontFamily="monospace"
          >
            SITE
          </text>
          <line
            x1={218}
            y1={287}
            x2={340}
            y2={287}
            stroke="#D4A853"
            strokeWidth={0.5}
          />
          <text
            x={350}
            y={290}
            fill="#D4A853"
            fontSize={9}
            fontFamily="monospace"
          >
            COMPLETE
          </text>
        </motion.g>

        {/* Connection points flash */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4] }}
          transition={{ duration: 0.6, delay: 3.0, times: [0, 0.5, 1] }}
        >
          <circle cx={236} cy={212} r={3} fill="#D4A853" />
          <circle cx={244} cy={212} r={3} fill="#D4A853" />
        </motion.g>

        <defs>
          <marker
            id="arrow"
            markerWidth={6}
            markerHeight={6}
            refX={5}
            refY={3}
            orient="auto"
          >
            <path d="M 0 0 L 6 3 L 0 6" fill="none" stroke="#8A8A96" strokeWidth={0.5} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
