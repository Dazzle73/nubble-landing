"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const DISH_IMAGE =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753091647557-mon7k9bbw8h.png";

const DishScanAnimationFeature = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end -0.2"]
  });

  const scanProgress = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const scanY = useTransform(scanProgress, [0, 1], [0, 320]);

  const foodItems = [
    { id: 'drumstick', y: 80, name: 'Chicken Drumstick', calories: '185', protein: '26g', carbs: '0g', fat: '8g' },
    { id: 'broccoli', y: 120, name: 'Broccoli', calories: '34', protein: '3g', carbs: '7g', fat: '0g' },
    { id: 'rice', y: 180, name: 'Brown Rice', calories: '306', protein: '7g', carbs: '62g', fat: '2g' }
  ];

  return (
    <section ref={containerRef} className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            AI-Powered Food Scanning
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
          >
            Simply point your camera at any dish and instantly get detailed nutritional breakdowns 
            with automatic macro tracking powered by advanced computer vision.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Plate Animation */}
          <div className="relative flex-1 max-w-xl">
            <div className="relative mx-auto w-[440px] h-[440px] md:w-[500px] md:h-[500px] lg:w-[540px] lg:h-[540px] flex items-center justify-center">
              {/* Circle background - match page, fully transparent so no mismatch */}
              <div className="absolute inset-0 rounded-full" style={{ background: 'none' }} />

              {/* 3D Dish Image - Large, centered */}
              <img
                src={DISH_IMAGE}
                alt="3D photorealistic dish with chicken, broccoli, and rice"
                className="object-contain select-none pointer-events-none z-10"
                draggable={false}
                loading="eager"
                width={500} height={500}
                style={{ width: '90%', height: '90%', margin: '0 auto', display: 'block' }}
              />

              {/* --- CIRCLE MASKED SCAN REGION (ABOVE IMAGE) --- */}
              <div
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                style={{ width: '100%', height: '100%' }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 500 500"
                  style={{ width: '100%', height: '100%', display: 'block' }}
                >
                  <defs>
                    <clipPath id="plate-clip">
                      <circle cx="250" cy="250" r="210" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#plate-clip)">
                    {/* Green Scan Lines inside the plate circle */}
                    <motion.rect
                      x="0"
                      y={scanY}
                      width="500"
                      height="5"
                      fill="var(--color-accent-green)"
                      opacity="0.85"
                      style={{ filter: 'blur(0.5px)' }}
                    />
                    <motion.rect
                      x="0"
                      y={scanY}
                      width="500"
                      height="2"
                      fill="var(--color-accent-green)"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="flex-1 max-w-lg">
            <div className="bg-[var(--color-glass)] backdrop-blur-sm rounded-xl border border-[var(--color-border)] p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Nutritional Breakdown</h3>
              
              <div className="space-y-6">
                {foodItems.map((item, index) => {
                  const itemRevealProgress = useTransform(
                    scanY,
                    [item.y - 20, item.y + 20],
                    [0, 1]
                  );

                  return (
                    <motion.div
                      key={item.id}
                      style={{ opacity: itemRevealProgress }}
                      className="bg-black/30 rounded-lg p-4 border border-[var(--color-border)]"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-white">{item.name}</h4>
                        <span className="text-[var(--color-accent-green)] font-bold text-lg">
                          {item.calories} kcal
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-[var(--color-text-secondary)]">Protein</div>
                          <div className="text-white font-medium">{item.protein}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[var(--color-text-secondary)]">Carbs</div>
                          <div className="text-white font-medium">{item.carbs}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[var(--color-text-secondary)]">Fat</div>
                          <div className="text-white font-medium">{item.fat}</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Total Summary */}
              <motion.div 
                style={{ 
                  opacity: useTransform(scrollYProgress, [0.4, 0.55], [0, 1])
                }}
                className="mt-8 pt-6 border-t border-[var(--color-border)]"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-white">Total Meal</span>
                  <span className="text-[var(--color-accent-green)] text-2xl font-bold">525 kcal</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                  <div className="text-center">
                    <div className="text-[var(--color-text-secondary)]">Protein</div>
                    <div className="text-white font-medium">36g</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[var(--color-text-secondary)]">Carbs</div>
                    <div className="text-white font-medium">69g</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[var(--color-text-secondary)]">Fat</div>
                    <div className="text-white font-medium">10g</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { DishScanAnimationFeature };