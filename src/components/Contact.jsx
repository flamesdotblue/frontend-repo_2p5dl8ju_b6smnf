import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(244,114,182,0.08),transparent_60%)]" />
      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Let’s build something great
          </motion.h2>
          <p className="mt-3 text-white/70">
            I’m open to freelance, full‑time roles, and interesting collaborations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-black transition hover:bg-white/90"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 backdrop-blur transition hover:bg-white/20"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 backdrop-blur transition hover:bg-white/20"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <p className="mt-10 text-xs text-white/50">
            © {new Date().getFullYear()} Your Name — Crafted with care.
          </p>
        </div>
      </div>
    </section>
  );
}
