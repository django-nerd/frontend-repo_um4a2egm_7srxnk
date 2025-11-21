import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks — I’ll be in touch shortly!')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something exceptional</h2>
            <p className="text-blue-100/80 mt-4">Tell me about your goals. I typically respond within 24 hours.</p>
            {status && <p className="mt-4 text-amber-300">{status}</p>}
          </div>

          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="rounded-3xl bg-slate-800/60 border border-blue-500/20 p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-blue-100/70">Name</label>
                  <input required className="mt-1 w-full rounded-xl bg-slate-900/60 border border-blue-500/20 px-3 py-2 text-white placeholder:text-blue-100/40 focus:outline-none focus:ring-2 focus:ring-amber-300/60" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-sm text-blue-100/70">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-xl bg-slate-900/60 border border-blue-500/20 px-3 py-2 text-white placeholder:text-blue-100/40 focus:outline-none focus:ring-2 focus:ring-amber-300/60" placeholder="jane@studio.com" />
                </div>
              </div>
              <div>
                <label className="text-sm text-blue-100/70">How can I help?</label>
                <textarea required rows="4" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-blue-500/20 px-3 py-2 text-white placeholder:text-blue-100/40 focus:outline-none focus:ring-2 focus:ring-amber-300/60" placeholder="Briefly describe your project" />
              </div>
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-400 text-slate-900 font-semibold px-5 py-3 shadow-[0_10px_30px_rgba(245,197,66,0.35)] hover:shadow-[0_10px_40px_rgba(245,197,66,0.55)] transition-shadow">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
