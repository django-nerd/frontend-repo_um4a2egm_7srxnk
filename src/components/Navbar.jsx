import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-md bg-slate-900/50 border border-blue-400/20 rounded-2xl">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-300 ring-2 ring-amber-300/70 shadow-[0_0_35px_rgba(2,132,199,0.45)]" />
              <span className="text-white/90 font-semibold tracking-tight">Your Name</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-amber-300 to-amber-400 text-slate-900 font-semibold px-4 py-2 shadow-[0_10px_30px_rgba(245,197,66,0.35)] hover:shadow-[0_10px_40px_rgba(245,197,66,0.55)] transition-shadow"
              >
                Let’s Talk <ArrowUpRight size={16} />
              </a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white/80">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-blue-400/10 px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-blue-100/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block text-slate-900 font-semibold rounded-xl bg-gradient-to-br from-amber-300 to-amber-400 px-4 py-2 text-center"
                onClick={() => setOpen(false)}
              >
                Let’s Talk
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
