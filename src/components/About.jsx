export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">About</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-white">
          A bit about me
        </h2>

        <div className="max-w-3xl space-y-5">
          <p className="text-slate-300 text-lg leading-relaxed">
            I'm a Product Manager who brings the best practices of program and project
            management to achieve peak team productivity. I love building new processes,
            streamlining existing ones, and constantly inspecting for gains.
          </p>
          <p className="text-slate-400 leading-relaxed">
            At RIDI, I led the expansion of{' '}
            <a href="https://manta.net" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-primary underline underline-offset-2 decoration-primary/30">Manta</a>
            {' '}to Spanish-speaking markets, grew international traffic to over 10% of total,
            and built backoffice systems that scaled operations without increasing headcount.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Before that, I spent four years at Citi across Singapore and New York — managing
            authentication framework rollouts across 15+ countries, leading a Google partnership
            program, and launching products through the D10X venture accelerator.
          </p>

          <p className="text-slate-400 leading-relaxed">
            Currently focused on AI-powered product experiences — exploring how intelligent
            systems can transform the way users discover, interact with, and get value
            from products at scale.
          </p>

          <div className="flex items-center gap-3 pt-4">
            <span className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary-light border border-primary/20 font-medium">English — Native</span>
            <span className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary-light border border-primary/20 font-medium">Korean — Native</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {['Product Management', 'Program Management', 'Agile / Scrum', 'Data Analysis', 'Redash', 'Cross-functional Leadership'].map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
