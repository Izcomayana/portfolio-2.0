import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../../data/portfolioData';
import { Cpu, Check, Sparkles } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...portfolioData.skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? portfolioData.skillCategories
      : portfolioData.skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase">
            Technical Proficiency
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Tech Stack & Core Competencies
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Specialized in modern TypeScript ecosystems, enterprise web frameworks, and high-performance UI engines.
          </p>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Core Badges Row */}
        <div className="mt-10 p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
              <span>Primary Enterprise Stack:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {portfolioData.coreTechStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-bold bg-slate-100 dark:bg-slate-900 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 shadow-xs"
                >
                  <Check className="w-3 h-3 text-cyan-500 dark:text-cyan-400" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredCategories.map((catGroup, idx) => (
              <motion.div
                key={catGroup.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-cyan-500" />
                      {catGroup.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {catGroup.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-2.5 rounded-xl text-xs font-medium border transition-all ${
                        skill.highlight
                          ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 font-semibold'
                          : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] font-mono font-semibold text-cyan-500">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
