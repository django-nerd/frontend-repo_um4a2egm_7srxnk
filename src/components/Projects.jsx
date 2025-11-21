import { motion } from 'framer-motion'

const projects = [
  { name: 'Aurora UI', description: 'A refined component library for high-velocity teams.', year: '2024' },
  { name: 'Ledger', description: 'Minimal personal finance tracker with delightful details.', year: '2023' },
  { name: 'Pulse', description: 'Lightweight analytics for indie products.', year: '2022' },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <p className="text-blue-100/70 mt-2">Thoughtful experiments and tools I built along the way.</p>
        </div>

        <div className="space-y-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-blue-500/20 bg-slate-800/60 hover:bg-slate-800/80 transition-colors"
            >
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="text-white font-medium">{p.name}</p>
                  <p className="text-blue-100/70 text-sm">{p.description}</p>
                </div>
                <span className="text-amber-300 text-sm">{p.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
