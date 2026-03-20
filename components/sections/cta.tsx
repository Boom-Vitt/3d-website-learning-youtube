'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
            Join thousands of developers who are shipping faster with our platform. Start free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 text-lg">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors text-lg">
              Talk to Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
