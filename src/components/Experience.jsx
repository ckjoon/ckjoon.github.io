const jobs = [
  {
    company: 'RIDI',
    period: 'Jul 2021 – Present',
    location: 'Seoul, South Korea',
    color: 'from-primary to-accent',
    roles: [
      {
        title: 'Product Manager',
        period: 'Jul 2021 – Present',
        points: [
          'Led platform language expansion to Spanish, driving 10%+ of total traffic from Spanish-speaking countries',
          'Redesigned home layout to shift focus onto individual series, improving user engagement',
          'Built user-segment-based push notifications, ticketing and campaign modules for re-engagement',
          'Introduced agile practices — backlog management, QA processes, kick-offs and retrospectives',
        ],
      },
      {
        title: 'Software Engineer',
        period: 'Jan 2022 – Nov 2025',
        points: [
          <>Built and maintained the backoffice system for <a href="https://manta.net" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-primary underline underline-offset-2 decoration-primary/30">Manta</a> — data management and user engagement</>,
          'Identified, redesigned, and automated manual processes to scale platform operations without increasing headcount',
          'Modernized backoffice with validation, toasts, and alignment with current standards',
        ],
      },
    ],
  },
  {
    company: 'Citi',
    period: 'Jul 2017 – Jun 2021',
    location: 'New York · Singapore',
    color: 'from-cyan-400 to-blue-500',
    roles: [
      {
        title: 'Technical Program Manager',
        period: 'Oct 2020 – Jun 2021 · Singapore',
        points: [
          'E2E project manager for login & authentication framework rollout across APAC/EMEA (15+ countries)',
          'Scrum Master for 2 digital teams on Identity and Authentication framework',
        ],
      },
      {
        title: 'Business Program Manager',
        period: 'Nov 2018 – Oct 2020 · New York',
        points: [
          'Managed agile lifecycle across 10+ teams for Google partnership and D10X Venture Accelerator',
          'Launched 4 products (iOS + Web) to market in 6 months through D10X release cadence',
          'Built Citi\'s first consolidated view of 30MM customers, migrating data to big data platform',
        ],
      },
      {
        title: 'Innovation Officer',
        period: 'Mar 2018 – Nov 2018 · New York',
        points: [
          'Co-established Citi Private Bank\'s Innovation Office',
          'Showcased proof of concept cases for digital innovation tying Voice and Data Insights',
        ],
      },
      {
        title: 'Microservice Developer',
        period: 'Jul 2017 – Mar 2018 · New York',
        points: [
          'Built Citi Quick Lock (Debit) and Replace Card omnichannel microservices for Citibank Mobile & Online',
          'Improved CI/CD flow by creating automated workflows that reduced deployment steps and time',
        ],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface-light">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Career</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-white">
          Experience
        </h2>

        <div className="space-y-8">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-glow overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className={`h-px bg-gradient-to-r ${job.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Company header */}
              <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">{job.company}</h3>
                  <p className="text-sm text-slate-500">{job.location}</p>
                </div>
                <p className="text-sm text-slate-500">{job.period}</p>
              </div>

              {/* Roles */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6">
                {job.roles.map((role, j) => (
                  <div key={j} className={j > 0 ? 'pt-6 border-t border-border/50' : ''}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h4 className="font-semibold text-slate-200">{role.title}</h4>
                      <span className="text-xs text-slate-500">{role.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {role.points.map((p, k) => (
                        <li key={k} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
