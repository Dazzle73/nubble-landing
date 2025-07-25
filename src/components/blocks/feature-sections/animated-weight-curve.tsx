"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedWeightCurveProps {
  className?: string;
  style?: React.CSSProperties;
}

// Given control points, return a smooth path for each segment
function getCubicSegment(p0: {x:number;y:number}, p1: {x:number;y:number}, p2: {x:number;y:number}, p3: {x:number;y:number}) {
  // Approximates Catmull-Rom to Bezier conversion (for natural curve)
  const cp1x = p1.x + (p2.x - p0.x) / 6;
  const cp1y = p1.y + (p2.y - p0.y) / 6;
  const cp2x = p2.x - (p3.x - p1.x) / 6;
  const cp2y = p2.y - (p3.y - p1.y) / 6;
  return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
}

export const AnimatedWeightCurve: React.FC<AnimatedWeightCurveProps> = ({ 
  className = "", 
  style = {} 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Use framer-motion useScroll to drive animation on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 1", "end 0.5"]
  });

  const weightData = [90, 87, 83, 80, 77, 75];
  const svgWidth = 600;
  const svgHeight = 350;
  const padding = 60;
  const chartWidth = svgWidth - padding * 2;
  const chartHeight = svgHeight - padding * 2;

  // Calculate points on the SVG
  const points = weightData.map((weight, index) => ({
    x: padding + (index / (weightData.length - 1)) * chartWidth,
    y: padding + ((90 - weight) / (90 - 75)) * chartHeight,
    weight
  }));

  // Split into curve segments: [start, next1], [next1, next2], ...
  const segments = points.map((pt, idx) => {
    if (idx === 0) return null;
    // Find neighbors for Catmull-Rom smoothing (clamp to ends)
    const p0 = points[idx - 2] ?? points[0];
    const p1 = points[idx - 1];
    const p2 = points[idx];
    const p3 = points[idx + 1] ?? points[points.length - 1];
    return {
      path:`M ${p1.x} ${p1.y} ` + getCubicSegment(p0, p1, p2, p3),
      startPoint: p1,
      endPoint: p2,
      idx
    };
  }).filter(Boolean) as {
    path: string;
    startPoint: {x:number;y:number;weight:number};
    endPoint: {x:number;y:number;weight:number};
    idx: number;
  }[];

  // Animate each segment sequentially as you scroll over the container
  // Tie the reveal of each curve segment to a slice of the scroll progress
  const steps = segments.length;
  // Calculate per-segment intervals in [0.10, 0.74] scroll, spread across the journey
  function segmentInterval(idx: number) {
    // Slightly shifted earlier: was [0.18, 0.82], now [0.10, 0.74]
    const start = 0.10 + (0.64 * idx / steps);
    const end = start + 0.64 / steps;
    return [start, end];
  }

  return (
    <div 
      ref={containerRef}
      className={`relative w-full max-w-[600px] mx-auto ${className}`}
      style={style}
    >
      <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl border border-white/[0.09] shadow-xl p-6">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto"
          style={{ aspectRatio: `${svgWidth}/${svgHeight}` }}
        >
          {/* X-axis */}
          <line
            x1={padding}
            y1={svgHeight - padding}
            x2={svgWidth - padding}
            y2={svgHeight - padding}
            stroke="#4d4d4d"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Curve segments animate on scroll */}
          {segments.map((seg, i) => {
            const [start, end] = segmentInterval(i);
            // Path draw progress 0->1 as you scroll over this segment window
            const pathLen = useTransform(scrollYProgress, [start, end], [0, 1], { clamp: true });
            // Markers and labels fade/slide in as their segment reveals
            const markerOpacity = useTransform(scrollYProgress, [start + 0.23*(end-start), end], [0, 1], { clamp: true });
            const labelOpacity = useTransform(scrollYProgress, [start + 0.32*(end-start), end], [0, 1], { clamp: true });
            const labelY = useTransform(scrollYProgress, [start + 0.32*(end-start), end], [0, -14], { clamp: true });

            return (
              <g key={i}>
                <motion.path
                  d={seg.path}
                  fill="none"
                  stroke="#4ADE80"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    pathLength: pathLen,
                    filter: "drop-shadow(0 0 6px rgba(74, 222, 128, 0.4))"
                  }}
                />
                {/* End-point marker */}
                <motion.circle
                  cx={seg.endPoint.x}
                  cy={seg.endPoint.y}
                  r="6"
                  fill="#4ADE80"
                  style={{
                    opacity: markerOpacity,
                    scale: markerOpacity,
                    filter: "drop-shadow(0 0 8px rgba(74, 222, 128, 0.6))"
                  }}
                />
                {/* End-point label */}
                <motion.text
                  x={seg.endPoint.x}
                  y={seg.endPoint.y - 20}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="16"
                  fontWeight="bold"
                  fontFamily="Inter, sans-serif"
                  style={{
                    opacity: labelOpacity
                  }}
                >
                  {seg.endPoint.weight}kg
                </motion.text>
              </g>
            );
          })}
          {/* Draw the very first marker separately, fade in at the very beginning */}
          <motion.circle
            cx={points[0].x}
            cy={points[0].y}
            r="6"
            fill="#4ADE80"
            style={{
              opacity: useTransform(scrollYProgress, [0.02, 0.13], [0, 1], { clamp: true }),
              scale: useTransform(scrollYProgress, [0.02, 0.13], [0.2, 1], { clamp: true }),
              filter: "drop-shadow(0 0 8px rgba(74, 222, 128, 0.6))"
            }}
          />
          <motion.text
            x={points[0].x}
            y={points[0].y - 20}
            textAnchor="middle"
            fill="#ffffff"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Inter, sans-serif"
            style={{
              opacity: useTransform(scrollYProgress, [0.02, 0.15], [0, 1], { clamp: true }),
              y: useTransform(scrollYProgress, [0.02, 0.15], [points[0].y - 10, points[0].y - 20], { clamp: true })
            }}
          >
            {points[0].weight}kg
          </motion.text>
        </svg>
      </div>
    </div>
  );
};