'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for side projects and experiments.',
    features: ['Up to 3 projects', '10k requests/month', 'Community support', 'Basic analytics'],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For teams building production applications.',
    features: ['Unlimited projects', '1M requests/month', 'Priority support', 'Advanced analytics', 'Custom domains', 'Team collaboration'],
    cta: 'Start Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced needs.',
    features: ['Everything in Pro', 'Unlimited requests', 'Dedicated support', 'SSO & SAML', 'SLA guarantee', 'Custom integrations'],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-neutral-400">
            Start free and scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 rounded-2xl border ${
                plan.highlighted
                  ? 'border-white/20 bg-white/[0.05] ring-1 ring-white/10'
                  : 'border-white/5 bg-white/[0.02]'
              } flex flex-col`}
            >
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-neutral-500">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-neutral-400">{plan.description}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-neutral-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'border border-white/20 text-white hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
