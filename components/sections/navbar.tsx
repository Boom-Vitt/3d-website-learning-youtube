'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Features', 'Pricing', 'Docs', 'Blog']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-white">Nexus</span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
              {link}
            </a>
          ))}
          <button className="px-5 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 bg-black/95 border-b border-white/5">
          {navLinks.map((link) => (
            <a key={link} href="#" className="block py-3 text-sm text-neutral-400 hover:text-white transition-colors">
              {link}
            </a>
          ))}
          <button className="mt-2 w-full px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg">
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}
