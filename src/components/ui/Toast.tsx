import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/90 dark:bg-slate-100/90 text-white dark:text-slate-900 shadow-2xl backdrop-blur-md border border-slate-700/50 dark:border-slate-300/50 text-sm font-medium"
        >
          <CheckCircle className="w-5 h-5 text-teal-400 dark:text-teal-600 flex-shrink-0" />
          <span>{message}</span>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-800 dark:hover:bg-slate-200 rounded-lg transition-colors ml-2"
            aria-label="Close notification"
          >
            <X className="w-4 h-4 opacity-70" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
