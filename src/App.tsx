import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProjectGrid } from './components/ProjectGrid';
import { Terminal } from './components/Terminal';
import { Education } from './components/Education';
import { Activities } from './components/Activities';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PlaceholderGuideModal } from './components/PlaceholderGuideModal';
import { CvModal } from './components/CvModal';
import { PlaceholderAlertModal } from './components/PlaceholderAlertModal';
import { Project } from './types';

export const App: React.FC = () => {
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [placeholderAlertInfo, setPlaceholderAlertInfo] = useState<{
    name: string;
    path: string;
  } | null>(null);

  const handlePlaceholderClick = (name: string, path: string) => {
    setPlaceholderAlertInfo({ name, path });
  };

  const handleGithubPlaceholderClick = (project: Project) => {
    if (project.githubUrl && project.githubUrl.length > 0) {
      window.open(project.githubUrl, '_blank');
    } else {
      setPlaceholderAlertInfo({
        name: `${project.title} Repository`,
        path: `src/data/projects.ts (project: "${project.id}")`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg dark:bg-dark-bg light:bg-light-bg text-dark-text dark:text-dark-text light:text-light-text font-sans antialiased transition-colors duration-200">
      {/* Navigation Header */}
      <Navbar
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 2. About */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4 & 5. Projects (Featured & All with Filters) */}
        <ProjectGrid onGithubPlaceholderClick={handleGithubPlaceholderClick} />

        {/* Interactive Terminal Feature */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Terminal />
        </div>

        {/* 6. Education */}
        <Education />

        {/* 7. Activities and Learning */}
        <Activities />

        {/* 8. Achievements and Certifications */}
        <Achievements />

        {/* 9. Contact */}
        <Contact
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onPlaceholderClick={handlePlaceholderClick}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onPlaceholderClick={handlePlaceholderClick}
      />

      {/* Owner Setup Checklist Modal */}
      <PlaceholderGuideModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />

      {/* CV Download / Instructions Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Dynamic Placeholder Alert Modal */}
      <PlaceholderAlertModal
        isOpen={Boolean(placeholderAlertInfo)}
        onClose={() => setPlaceholderAlertInfo(null)}
        info={placeholderAlertInfo}
      />
    </div>
  );
};

export default App;
