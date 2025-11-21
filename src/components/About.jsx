import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/30 to-amber-300/30 blur-2xl" />
              <div className="relative rounded-3xl bg-slate-800/60 border border-blue-500/20 p-6">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-blue-500/20 to-amber-300/20" />
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-white mb-6">
              I turn complex ideas into polished products
            </motion.h2>
            <p className="text-blue-100/80 leading-relaxed mb-6">
              With a background across design systems, front-end engineering and product strategy, I help teams move faster without sacrificing quality. My work spans fintech, e‑commerce and SaaS—always with a focus on clarity and craft.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { k: 'Expertise', v: 'Design systems, UX engineering, performance' },
                { k: 'Stack', v: 'React, TypeScript, Next.js, Tailwind, Node' },
                { k: 'Location', v: 'Remote • Available for select work' },
              ].map((item) => (
                <div key={item.k} className="rounded-2xl bg-slate-800/60 border border-blue-500/20 p-4">
                  <p className="text-xs text-blue-100/60 mb-1">{item.k}</p>
                  <p className="text-blue-50">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
