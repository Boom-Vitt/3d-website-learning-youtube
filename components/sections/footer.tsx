const links = {
  Product: ['Features', 'Pricing', 'Changelog', 'Docs'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security'],
}

export function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold text-white">Nexus</span>
            <p className="mt-3 text-sm text-neutral-500 max-w-xs">
              The modern platform for building exceptional products.
            </p>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-sm font-semibold text-neutral-400 mb-4">{category}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-neutral-600">&copy; 2026 Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
