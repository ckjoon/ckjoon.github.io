import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />

      <div className="relative text-center px-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-slate-400">Building AI-powered product experiences</span>
        </div>

        <h1 className="font-display text-[clamp(3rem,8vw,5.5rem)] font-800 leading-[1.05] mb-6 tracking-tight">
          <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Yeonjoon Choi
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
          Building products that scale globally. Bridging engineering and business
          to ship what matters.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/yeonjoon-choi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dim text-white text-sm font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="mailto:ckjoon@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-slate-500 text-slate-300 text-sm font-medium rounded-xl transition-all hover:bg-white/5"
          >
            <FaEnvelope /> Contact
          </a>
          <a
            href="https://github.com/ckjoon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-slate-500 text-slate-300 text-sm font-medium rounded-xl transition-all hover:bg-white/5"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </a>
      </div>
    </section>
  )
}
