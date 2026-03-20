'use client'

import { motion } from 'framer-motion'

const logos = [
  'Vercel', 'Stripe', 'Linear', 'Notion', 'Figma', 'Supabase'
]

export function LogosSection() {
  return (
    <section className="py-16 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm text-neutral-500 uppercase tracking-widest mb-10">
          Trusted by teams at
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {logos.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
