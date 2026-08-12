import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-10 text-slate-800 dark:text-slate-100"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-black/30" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-all border border-white/20 hover:scale-105"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Tag */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-teal-500/90 text-white backdrop-blur-md shadow-sm">
                {project.category}
              </span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Subtitle */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-teal-600 dark:text-teal-400 font-medium text-base mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold tracking-wider text-slate-400 uppercase flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-500" />
                Project Overview
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.extendedDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold tracking-wider text-slate-400 uppercase flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  Key Highlights & Capabilities
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Highlights */}
            {project.architectureHighlights && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold tracking-wider text-slate-400 uppercase flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-teal-500" />
                  Technical & Engineering Architecture
                </h4>
                <ul className="space-y-2">
                  {project.architectureHighlights.map((arch, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium text-sm transition-all shadow-md shadow-teal-500/20 active:scale-95"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all border border-slate-200 dark:border-slate-700 active:scale-95"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors ml-auto"
              >
                Press ESC or click outside to close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
