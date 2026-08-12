import React from 'react';
import { motion } from 'motion/react';
import { portfolioData, avatarImage } from '../../data/portfolioData';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Radial Grid Pattern & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.08] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
            >
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                {portfolioData.availability}
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                A Frontend Architect & Full Stack Engineer
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
                Oluwapelumi<br />
                <span className="text-cyan-500 dark:text-cyan-400">Israel</span>
              </h1>
            </div>

            {/* Elevator Pitch Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl font-normal">
              A Certified Frontend Developer crafting high-performance, intelligent web experiences for the global stage with React, Next.js, Vue.js, Nuxt.js, and TypeScript.
            </p>

            {/* Core Tech Stack Monospace Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-cyan-500" /> Stack:
              </span>
              {portfolioData.coreTechStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-xs font-mono text-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-sm border border-slate-200 dark:border-slate-800 transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Direct Connect Quick Card */}
            <div className="pt-2 bg-slate-900/40 border border-slate-800 p-5 rounded-2xl flex items-center justify-between max-w-lg">
              <div className="min-w-0 pr-2">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">
                  Let&apos;s Connect
                </p>
                <p className="text-xs sm:text-sm font-mono font-medium text-slate-200 truncate">
                  {portfolioData.email}
                </p>
              </div>
              <div className="flex gap-2.5 flex-shrink-0">
                <a
                  href={portfolioData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-800 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-800 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 to-emerald-500 opacity-20 blur-xl animate-pulse" />

              {/* Card Surface */}
              <div className="relative rounded-3xl bg-white dark:bg-slate-900/80 p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 backdrop-blur-md">
                {/* Avatar Image Wrapper */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 group">
                  <img
                    src={avatarImage}
                    alt={portfolioData.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px]">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      Lagos, Nigeria
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-500 text-slate-950 font-bold text-[11px]">
                      <Sparkles className="w-3 h-3" />
                      Full Stack Engineer
                    </span>
                  </div>
                </div>

                {/* Quick Info Grid inside card */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                    <div className="text-xl font-black text-cyan-500">3+ Yrs</div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Experience</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                    <div className="text-xl font-black text-cyan-500">95+</div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Lighthouse Score</div>
                  </div>
                </div>

                {/* Assurance badge */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-cyan-500/5 p-3 rounded-xl border border-cyan-500/15">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  <span className="font-medium">WCAG 2.1 AA Compliant & Clean Modular Architecture</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
