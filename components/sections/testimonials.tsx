'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "This platform cut our development time by 60%. We shipped our entire product redesign in two weeks.",
    name: 'Sarah Chen',
    role: 'CTO, Streamline',
    avatar: 'SC',
  },
  {
    quote: "The best developer experience I've ever had. It just works, and the performance is incredible.",
    name: 'Marcus Rivera',
    role: 'Lead Engineer, Pulse',
    avatar: 'MR',
  },
  {
    quote: "We migrated from three different tools to this one platform. Our team has never been more productive.",
    name: 'Aiko Tanaka',
    role: 'VP Engineering, NovaTech',
    avatar: 'AT',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Loved by engineers
          </h2>
          <p className="text-lg text-neutral-400">
            See what teams are saying about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <p className="text-neutral-300 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center text-xs font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
