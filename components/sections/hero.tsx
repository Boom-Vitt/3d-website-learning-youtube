'use client'

import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <Card className="w-full min-h-[600px] bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col md:flex-row h-full min-h-[600px]">
        <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10 mb-6">
              Next-Gen Platform
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
              Build the
              <br />
              Future Today
            </h1>
            <p className="mt-6 text-lg text-neutral-400 max-w-lg leading-relaxed">
              Ship stunning products faster with our AI-powered platform.
              From concept to launch in days, not months.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-3.5 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative min-h-[300px] md:min-h-0">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
