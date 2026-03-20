'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, BarChart3, Layers, Globe, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built on edge infrastructure for sub-50ms response times worldwide.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security with SOC 2 compliance and end-to-end encryption.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track every metric that matters with beautiful, actionable dashboards.',
  },
  {
    icon: Layers,
    title: 'Composable Architecture',
    description: 'Modular building blocks that scale from startup to enterprise.',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Deploy to 200+ edge locations with zero configuration.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered',
    description: 'Intelligent automation that learns and adapts to your workflow.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Everything you need to ship
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A complete platform that handles the complexity so you can focus on building great products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors">
                <feature.icon className="w-6 h-6 text-neutral-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
