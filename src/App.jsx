import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white scroll-smooth">
      <Navbar />
      <main className="pt-16">
        <Hero />

        {/* About section */}
        <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.08),transparent_60%)]" />
          <div className="relative grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">About</h2>
              <p className="mt-4 text-white/80">
                I’m a full‑stack developer who loves bridging design and engineering.
                My toolkit includes React, TypeScript, Tailwind, FastAPI, and cloud tooling.
                I value clarity, performance, and thoughtful interactions.
              </p>
              <p className="mt-3 text-white/70">
                Outside of work, you’ll find me exploring new frameworks, sketching UI ideas,
                and contributing to open‑source.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[{
                title: 'Frontend',
                items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
              },{
                title: 'Backend',
                items: ['FastAPI', 'Python', 'Node', 'PostgreSQL'],
              },{
                title: 'Tools',
                items: ['Git', 'Vite', 'Docker', 'Storybook'],
              },{
                title: 'Focus',
                items: ['DX', 'Accessibility', 'Performance', 'Testing'],
              }].map((cat) => (
                <div key={cat.title} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <h3 className="text-sm font-semibold text-white/90">{cat.title}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-white/70">
                    {cat.items.map((it) => (
                      <li key={it}>• {it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>
    </div>
  );
}
