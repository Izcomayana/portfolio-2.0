import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUp, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-4 sm:px-8 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-cyan-500 flex items-center justify-center text-slate-950 font-extrabold text-xs">
            OS
          </div>
          <span>
            © {currentYear} {portfolioData.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={portfolioData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="hover:text-cyan-500 transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 transition-all focus:outline-none"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
