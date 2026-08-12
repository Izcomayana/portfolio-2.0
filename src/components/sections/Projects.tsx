import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../../data/portfolioData';
import { Project } from '../../types';
import { ExternalLink, Github, ArrowUpRight, Layers } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = [
    'All',
    ...Array.from(new Set(portfolioData.projects.map((p) => p.category))),
  ];

  const filteredProjects =
    filterCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase">
            Featured Works
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Key Software Projects
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Real-world applications built for NHS compliance, medical research publishing, digital editorial media, and workspace team collaboration.
          </p>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Project Category Filter */}
        <div className="mt-8 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                filterCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Header Preview Image */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category & Tech Pills Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-cyan-500 text-slate-950 backdrop-blur-md shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Direct Action Buttons */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-md transition-all active:scale-95"
                    aria-label={`Live Demo for ${project.title}`}
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/90 text-white hover:bg-slate-900 border border-white/20 shadow-md transition-all active:scale-95"
                    aria-label={`Source Code for ${project.title}`}
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Monospace Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors group/btn"
                  >
                    <span>View Case Study & Architecture</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
                  >
                    Live Site <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
