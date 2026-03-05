import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Background</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-white">
          Education
        </h2>

        <div className="max-w-lg">
          <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-glow">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
              <FaGraduationCap className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Georgia Institute of Technology</h3>
            <p className="text-sm text-slate-400">Bachelor of Science, Computer Science</p>
            <p className="text-xs text-slate-500 mt-2">2012 – 2017</p>
          </div>
        </div>
      </div>
    </section>
  )
}
