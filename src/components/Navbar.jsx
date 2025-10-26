import { useState, useEffect } from 'react';
import { Menu, X, Rocket, GitBranch, Mail, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const LinkItem = ({ href, icon: Icon, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-cyan-400 to-fuchsia-500 text-black">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-white">Dev Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-sm text-white/90">
            <LinkItem href="#about" icon={User} label="About" />
            <LinkItem href="#projects" icon={GitBranch} label="Projects" />
            <LinkItem href="#contact" icon={Mail} label="Contact" />
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/90">
              <LinkItem href="#about" icon={User} label="About" />
              <LinkItem href="#projects" icon={GitBranch} label="Projects" />
              <LinkItem href="#contact" icon={Mail} label="Contact" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
