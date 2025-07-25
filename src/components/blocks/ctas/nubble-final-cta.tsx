'use client'

import { motion } from 'framer-motion'

export default function NubbleFinalCTA() {
  return (
    <section className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Centered card with gradient background */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f4639] via-[#133537] to-[#17493d] px-8 py-16 sm:px-16">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-32 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-500"></div>
              <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/10 rounded-full blur-xl animate-pulse delay-1500"></div>
            </div>
          </div>
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
          
          {/* Content */}
          <div className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main headline */}
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
              Ready to transform your diet?
            </h2>
            
            {/* Subheading */}
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of users who have already improved their health with Nubble's smart food tracking. 
              Download now and start your journey toward better nutrition.
            </p>

            {/* Download buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              {/* iOS Download Button */}
              <motion.a
                href="https://apps.apple.com/app/nubble"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
                aria-label="Download for iOS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute -inset-2 bg-white/20 rounded-2xl blur-lg group-hover:bg-white/30 transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-white/80">Download for</div>
                      <div className="text-lg font-semibold text-white">iOS</div>
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Android Download Button */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.nubble.app"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
                aria-label="Get it on Google Play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute -inset-2 bg-white/20 rounded-2xl blur-lg group-hover:bg-white/30 transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-white/80">Available on</div>
                      <div className="text-lg font-semibold text-white">Google Play</div>
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-8 space-y-4"
            >
              <p className="text-white/70 text-sm">
                Trusted by users worldwide • Free to download • Premium features available
              </p>
              
              {/* Security badges */}
              <div className="flex items-center justify-center gap-6 opacity-80">
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>No Ads</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Regular Updates</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
