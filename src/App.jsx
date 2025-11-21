import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_0%,rgba(30,64,175,0.35),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(245,197,66,0.18),transparent_25%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>

      <footer className="relative border-t border-blue-500/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-100/60">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <div className="text-blue-100/60">Crafted with care • Blue & Gold</div>
        </div>
      </footer>
    </div>
  )
}

export default App
