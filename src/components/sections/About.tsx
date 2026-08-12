import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../../data/portfolioData';
import { Code, Zap, Shield, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      icon: Zap,
      title: 'Performance-First Architecture',
      description:
        'Engineered for 95+ Lighthouse scores, rapid hydration, server component splitting, and zero layout shift.',
    },
    {
      icon: Shield,
      title: 'Accessibility & Standards',
      description:
        'WCAG 2.1 AA compliant keyboard navigation, ARIA landmark hierarchy, and contrast-checked color palettes.',
    },
    {
      icon: Code,
      title: 'Type-Safe Modular Code',
      description:
        'Clean component separation in TypeScript with strict API validation and scalable state boundaries.',
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase">
            Engineering Philosophy
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            About Oluwapelumi Sotoyinbo
          </p>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Bio & Metrics Grid */}
        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-center">
          {/* Detailed Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300"
          >
            <p className="text-base sm:text-lg leading-relaxed font-normal">
              {portfolioData.bio}
            </p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Whether architecting high-stakes medical logistics dashboards like{' '}
              <strong className="text-slate-900 dark:text-white">Medilogic</strong>,
              scientific peer-review publishing hubs like{' '}
              <strong className="text-slate-900 dark:text-white">Gregory Medical Journal</strong>,
              or interactive cashback engines like{' '}
              <strong className="text-slate-900 dark:text-white">Balancee Rewards</strong>,
              my mission is delivering resilient, accessible software that creates tangible business value.
            </p>

            {/* Engineering Pillars */}
            <div className="space-y-3 pt-2">
              {principles.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {p.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Metrics Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {portfolioData.metrics.map((m) => (
              <div
                key={m.label}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group hover:border-cyan-500/50 transition-all"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-black text-cyan-500">
                    {m.value}
                  </span>
                  <CheckCircle className="w-5 h-5 text-cyan-500 opacity-60" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                  {m.label}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {m.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
