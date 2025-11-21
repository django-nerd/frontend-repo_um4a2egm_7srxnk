import { motion } from 'framer-motion'

const items = [
  {
    title: 'Fintech Platform Redesign',
    desc: 'End-to-end revamp focusing on conversion, accessibility and performance.',
    tags: ['Design system', 'Next.js', 'A/B testing'],
  },
  {
    title: 'E‑commerce Growth Engine',
    desc: 'Component library and storefront optimizations that lifted revenue by 18%.',
    tags: ['React', 'Edge', 'Analytics'],
  },
  {
    title: 'SaaS Onboarding',
    desc: 'Progressive onboarding that reduced time-to-value by 42%.',
    tags: ['Flows', 'Experimentation', 'UX'],
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#projects" className="text-amber-300 hover:text-amber-200">View all</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative group rounded-3xl bg-slate-800/60 border border-blue-500/20 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 to-amber-300/10" />
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-blue-100/80 text-sm mb-4">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-lg bg-slate-700/70 border border-blue-500/20 text-blue-100/80">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
