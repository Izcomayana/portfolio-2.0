import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/ui/CustomCursor';
import { Toast } from './components/ui/Toast';
import { ProjectModal } from './components/ui/ProjectModal';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-400 relative overflow-x-hidden transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200 light:bg-slate-50 light:text-slate-900">
        {/* Custom Interactive Fluid Cursor */}
        <CustomCursor />

        {/* Global Toast Notification */}
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Layout */}
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects onSelectProject={(p) => setSelectedProject(p)} />
          <Contact onShowToast={handleShowToast} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Project Details Interactive Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </ThemeProvider>
  );
}
