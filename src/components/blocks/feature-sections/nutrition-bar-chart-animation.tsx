"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

// Hard-coded data, but now will render each bar as a SINGLE color only
const stackedNutritionData = [
  { day: 'Mon', protein: 60, carbs: 75, fats: 30 },
  { day: 'Tue', protein: 70, carbs: 72, fats: 33 },
  { day: 'Wed', protein: 55, carbs: 70, fats: 30 },
  { day: 'Thu', protein: 86, carbs: 85, fats: 29 },
  { day: 'Fri', protein: 95, carbs: 87, fats: 38 },
  { day: 'Sat', protein: 50, carbs: 65, fats: 22 },
  { day: 'Sun', protein: 59, carbs: 68, fats: 29 },
];

const stackedMaxValue = Math.max(
  ...stackedNutritionData.map(d => d.protein + d.carbs + d.fats)
);
const GUTTER = 26; // space between bars, visually cleaner than BAR_SPACING
const BAR_WIDTH = 36;
const BAR_SPACING = BAR_WIDTH + GUTTER; // So total slot per bar is bar+gap
const CHART_HEIGHT = 260;
const BAR_RADIUS = 8;

// Calculate SVG width to perfectly contain all bars, with left/right margin
const LEFT_MARGIN = 44;
const RIGHT_MARGIN = 24;
const SVG_WIDTH = LEFT_MARGIN + stackedNutritionData.length * BAR_SPACING - GUTTER + RIGHT_MARGIN;

export const NutritionBarChartAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Framer motion: Animate all bars as they scroll into view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 1.2", "end -0.5"],
  });
  const sectionProgress = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);
  const yAxisTicks = [0, 50, 100, 150, 200]; // Removed 220, max ordinate now 200

  function renderStackedBar(dayData: typeof stackedNutritionData[0], idx: number) {
    // Calculate macro heights
    const barTotal = dayData.protein + dayData.carbs + dayData.fats;
    const scale = CHART_HEIGHT / stackedMaxValue;
    const proteinHeight = dayData.protein * scale;
    const carbsHeight = dayData.carbs * scale;
    const fatsHeight = dayData.fats * scale;
    // so sum = total bar height for this day
    const barX = LEFT_MARGIN + idx * BAR_SPACING;
    // Animate entire bar stack as it enters viewport
    const animatedTotal = useTransform(sectionProgress, v => v * (proteinHeight + carbsHeight + fatsHeight));
    // Each segment's height is animated proportionately (animation is always upward from base)
    // Stacked from bottom (fats), middle (carbs), top (protein)
    // Compute top position for each (SVG y = CHART_HEIGHT - currentStackHeight)
    // We'll animate each segment height as { segment/total } * animatedTotal
    return (
      <g key={dayData.day}>
        {/* Fats (bottom, blue #64b5f6) */}
        <motion.rect
          x={barX}
          width={BAR_WIDTH}
          rx={0} // No rounded corners
          style={{
            // Height proportional to (fats / total) of current animatedTotal
            height: useTransform(animatedTotal, t => Math.max(0, Math.min(fatsHeight, t))),
            y: useTransform(animatedTotal, t => CHART_HEIGHT - Math.max(0, Math.min(fatsHeight, t))),
          }}
          fill="#64b5f6"
        />
        {/* Carbs (middle, orange #f4a361), sits atop Fats */}
        <motion.rect
          x={barX}
          width={BAR_WIDTH}
          rx={0} // No rounded corners
          style={{
            height: useTransform(animatedTotal, t => Math.max(0, Math.min(carbsHeight, Math.max(0, t - fatsHeight)))),
            y: useTransform(animatedTotal, t => CHART_HEIGHT - Math.max(0, Math.min(fatsHeight + carbsHeight, t))),
          }}
          fill="#f4a361"
        />
        {/* Protein (top, red #e57373), sits atop Carbs+Fats */}
        <motion.rect
          x={barX}
          width={BAR_WIDTH}
          rx={0} // No rounded corners
          style={{
            height: useTransform(animatedTotal, t => Math.max(0, t - fatsHeight - carbsHeight)),
            y: useTransform(animatedTotal, t => CHART_HEIGHT - t),
          }}
          fill="#e57373"
        />
        {/* Day label */}
        <text
          x={barX + BAR_WIDTH / 2}
          y={CHART_HEIGHT + 24}
          textAnchor="middle"
          className="text-sm fill-gray-400"
          fontFamily="Inter, sans-serif"
        >{dayData.day}</text>
      </g>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full max-w-4xl mx-auto p-6 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10"
    >
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Daily Macro Breakdown</h3>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-white">Average: 170g</span>
            <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-lg">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">+12%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${CHART_HEIGHT + 70}`}
          className="w-full h-auto"
          style={{ maxHeight: '370px', minHeight: '320px' }}
        >
          {/* Y-axis */}
          <line x1={LEFT_MARGIN - 6} y1={0} x2={LEFT_MARGIN - 6} y2={CHART_HEIGHT} stroke="#4d4d4d" strokeWidth={1.2} />
          {/* Ticks and labels */}
          {yAxisTicks.map((tick) => {
            const y = CHART_HEIGHT - (tick / 200) * CHART_HEIGHT; // Update max ordinate
            return (
              <g key={tick}>
                <line x1={LEFT_MARGIN - 12} y1={y} x2={LEFT_MARGIN - 6} y2={y} stroke="#4d4d4d" strokeWidth={1} />
                <text
                  x={LEFT_MARGIN - 16}
                  y={y + 4}
                  textAnchor="end"
                  className="text-xs fill-gray-400"
                  fontFamily="Inter, sans-serif"
                >{tick}</text>
              </g>
            );
          })}
          {/* Stacked, colored Bars */}
          {stackedNutritionData.map(renderStackedBar)}
        </svg>
        {/* Legend: moved under the graph */}
        <div className="flex justify-center gap-6 mt-8 select-none">
          {/* Fats */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-5 h-3 rounded-sm" style={{ background: '#64b5f6' }} />
            <span className="text-sm text-gray-300 font-medium">Fats</span>
          </div>
          {/* Carbs */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-5 h-3 rounded-sm" style={{ background: '#f4a361' }} />
            <span className="text-sm text-gray-300 font-medium">Carbs</span>
          </div>
          {/* Protein */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-5 h-3 rounded-sm" style={{ background: '#e57373' }} />
            <span className="text-sm text-gray-300 font-medium">Protein</span>
          </div>
        </div>
      </div>
    </div>
  );
};