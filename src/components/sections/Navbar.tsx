import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';
import { portfolioData } from '../../data/portfolioData';
import { Sun, Moon, Menu, X, FileText, Code2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'tech-stack', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/80 shadow-lg shadow-black/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Sleek Rotated Icon Box */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
          aria-label="Oluwapelumi Sotoyinbo Home"
        >
          <div className="w-9 h-9 bg-cyan-500 rounded-lg rotate-12 flex items-center justify-center font-extrabold text-slate-950 text-sm shadow-md shadow-cyan-500/20 group-hover:rotate-0 transition-transform duration-300">
            OS
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-slate-900 dark:text-white text-base leading-snug group-hover:text-cyan-500 transition-colors">
              Israel
            </span>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
              Frontend Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200/50 dark:border-slate-700/50 -z-10"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800/80 transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Resume CTA */}
          <a
            href={portfolioData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 rounded-full text-xs font-semibold hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-slate-950 transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none"
            aria-label="Toggle Navigation Drawer"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-cyan-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={portfolioData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold text-sm shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
