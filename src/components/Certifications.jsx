import { FaAward } from 'react-icons/fa'

const certifications = [
  {
    name: 'Project Management Professional (PMP)',
    issuer: 'Project Management Institute (PMI)',
    icon: '🏛️',
  },
  {
    name: 'Professional Scrum Master (PSM)',
    issuer: 'Scrum.org',
    icon: '⚡',
  },
  {
    name: 'Scaled Professional Scrum (SPS)',
    issuer: 'Scrum.org',
    icon: '📐',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-surface-light">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Credentials</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-white">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-glow text-center"
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-semibold text-white mb-2">{c.name}</h3>
              <p className="text-sm text-slate-400">{c.issuer}</p>

              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
