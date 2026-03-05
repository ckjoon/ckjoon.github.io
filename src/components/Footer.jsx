import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-display text-lg font-bold bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent mb-1">
              joon.
            </p>
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Yeonjoon Choi
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { href: 'https://github.com/ckjoon', icon: FaGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/yeonjoon-choi', icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'mailto:ckjoon@gmail.com', icon: FaEnvelope, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
