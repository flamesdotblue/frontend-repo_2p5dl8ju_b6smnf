import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col items-start justify-center px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for new projects
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Building modern, interactive experiences for web and beyond
          </h1>
          <p className="mt-4 text-white/80">
            I’m a software developer focused on delightful UI, robust APIs, and smooth user flows.
            I craft performant products with React, TypeScript, and Python.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-black transition hover:bg-white/90"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 backdrop-blur transition hover:bg-white/20"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
