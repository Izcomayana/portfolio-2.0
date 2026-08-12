import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../../data/portfolioData';
import { Mail, MessageSquare, Copy, Check, Github, Linkedin, ArrowUpRight, Send, Sparkles } from 'lucide-react';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    onShowToast('Copied email to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase">
            Let&apos;s Build Together
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Open for full-time senior engineering roles, contract engagements, and architectural consultations worldwide.
          </p>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Main Contact Card Container */}
        <div className="mt-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl space-y-10 relative overflow-hidden group hover:border-cyan-500/40 transition-colors"
          >
            {/* Top Info Header */}
            <div className="grid md:grid-cols-2 gap-8 items-center border-b border-slate-100 dark:border-slate-800/80 pb-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Direct Communication Line</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Start a Conversation
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Response time: usually under 2 hours during business hours.
                </p>
              </div>

              {/* Quick Copy Box */}
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Direct Email
                  </p>
                  <p className="text-sm font-mono font-semibold text-slate-900 dark:text-cyan-400 truncate">
                    {portfolioData.email}
                  </p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs flex items-center gap-1.5 hover:bg-cyan-400 transition-colors active:scale-95 shadow-sm"
                  aria-label="Copy Email Address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Channel Actions Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Email CTA */}
              <a
                href={`mailto:${portfolioData.email}`}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all group/card flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover/card:text-cyan-500 transition-colors">
                      Send Email
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Open mail client
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover/card:text-cyan-400 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
              </a>

              {/* WhatsApp CTA */}
              <a
                href={portfolioData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/10 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all group/card flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover/card:text-emerald-500 transition-colors">
                      Chat on WhatsApp
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {portfolioData.whatsappNumber}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover/card:text-emerald-400 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Links Footer Row */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Professional Profiles:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 text-xs font-semibold transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
