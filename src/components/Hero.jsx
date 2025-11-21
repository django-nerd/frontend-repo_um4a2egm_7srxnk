import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(29,78,216,0.25),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(245,197,66,0.18),transparent_25%)]" />
      </div>

      <div className="absolute right-0 top-0 h-[80vh] w-full md:w-1/2">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-slate-900/40 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="text-xs text-blue-100/80">Designer • Engineer • Builder</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                I craft elegant, high-performance digital experiences
              </h1>

              <p className="text-lg text-blue-100/80 leading-relaxed max-w-xl">
                Blending aesthetics with engineering to ship products that feel premium. I obsess over details, accessibility, and performance.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-400 text-slate-900 font-semibold px-5 py-3 shadow-[0_10px_30px_rgba(245,197,66,0.35)] hover:shadow-[0_10px_40px_rgba(245,197,66,0.55)] transition-shadow">
                  Work with me
                </a>
                <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-slate-800/60 border border-blue-500/20 text-blue-100 px-5 py-3 hover:bg-slate-800/80 transition-colors">
                  View projects
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div>
                  <p className="text-3xl font-bold text-white">7+ years</p>
                  <p className="text-xs text-blue-100/60">building on the web</p>
                </div>
                <div className="h-10 w-px bg-blue-400/20" />
                <div>
                  <p className="text-3xl font-bold text-white">50+ projects</p>
                  <p className="text-xs text-blue-100/60">shipped end-to-end</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:block md:col-span-6 lg:col-span-6" />
        </div>
      </div>
    </section>
  )
}
