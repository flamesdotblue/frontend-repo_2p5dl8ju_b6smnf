import { motion } from 'framer-motion';
import { Code2, Globe, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description:
      'Streaming analytics with live charts, role-based access, and responsive design.',
    icon: Globe,
    tech: ['React', 'WebSockets', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Design System',
    description:
      'Reusable component library with tokens, themes, and accessibility baked in.',
    icon: Layers,
    tech: ['TypeScript', 'Radix', 'Storybook'],
    link: '#',
  },
  {
    title: 'AI Assistant',
    description:
      'Conversational app with tool use, streaming responses, and memory.',
    icon: Code2,
    tech: ['FastAPI', 'Python', 'OpenAI'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-white/70">
              A few projects that highlight my approach to quality and polish.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm backdrop-blur hover:bg-white/10 md:inline"
          >
            Let’s collaborate
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 blur-2xl" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-md bg-white/10 p-2">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
