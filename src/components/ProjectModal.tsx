import React, { useEffect } from 'react';
import { Project } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  FileCode,
} from 'lucide-react';

interface Props {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
  onGithubPlaceholderClick: (project: Project) => void;
}

export const ProjectModal: React.FC<Props> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
  onGithubPlaceholderClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'In Progress':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'Prototype':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
      case 'Concept':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#141414] border border-[#303030] text-[#F5F5F5] shadow-2xl p-6 sm:p-8 md:p-10 my-auto">
        {/* Top Bar: Breadcrumb & Close */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2B2B2B]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] overflow-hidden">
            <span className="text-accent">Projects</span>
            <span>/</span>
            <span className="hidden sm:inline">{project.category}</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-white truncate font-medium">{project.title}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Quick Prev / Next Switchers */}
            <div className="hidden sm:flex items-center border border-[#303030] rounded-lg overflow-hidden">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="p-1.5 hover:bg-[#252525] text-[#A1A1AA] hover:text-white transition-colors"
                title={`Previous: ${prevProject.title}`}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 text-[11px] font-mono text-[#71717A] border-x border-[#303030]">
                {currentIndex + 1}/{allProjects.length}
              </span>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="p-1.5 hover:bg-[#252525] text-[#A1A1AA] hover:text-white transition-colors"
                title={`Next: ${nextProject.title}`}
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#252525] transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Title & Metadata */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
            <span
              className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border uppercase tracking-wider font-semibold ${getStatusBadge(
                project.status
              )}`}
            >
              {project.status}
            </span>
            <span className="text-xs font-mono text-[#A1A1AA] bg-[#202020] px-2.5 py-0.5 rounded-full border border-[#303030]">
              {project.category}
            </span>
          </div>

          <h2 id="project-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white">
            {project.title}
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-accent font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Status Disclaimer Banner (Ensuring no false claims) */}
        <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-8 text-xs text-[#D4D4D8] flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <div>
            <strong className="text-accent font-semibold block mb-0.5">
              Project Status Transparency:
            </strong>
            {project.status === 'Completed' &&
              'This is an implemented academic application developed and tested for coursework requirements.'}
            {project.status === 'Prototype' &&
              'This is a functional prototype built to test technical feasibility and API communication flows.'}
            {project.status === 'Concept' &&
              'This is a structured product concept and architectural proposal. Features represent planned capabilities rather than a fully deployed SaaS.'}
          </div>
        </div>

        {/* Problem and Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#2D2D2D]">
            <div className="flex items-center gap-2 text-xs uppercase font-mono text-red-400 font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              The Problem
            </div>
            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#2D2D2D]">
            <div className="flex items-center gap-2 text-xs uppercase font-mono text-emerald-400 font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              The Solution & Architecture
            </div>
            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features List */}
        <div className="mb-8">
          <h3 className="text-sm uppercase font-mono tracking-wider text-white font-semibold mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent" />
            Key Modules & Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, fIdx) => (
              <div
                key={fIdx}
                className="p-3 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] text-xs text-[#E4E4E7] flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="mb-8 p-5 rounded-xl bg-[#181818] border border-[#2D2D2D]">
          <h3 className="text-sm uppercase font-mono tracking-wider text-white font-semibold mb-3 flex items-center gap-2">
            <FileCode className="w-4 h-4 text-accent" />
            Technical Implementation Highlights
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#D4D4D8]">
            {project.technicalImplementation.map((tech, tIdx) => (
              <li key={tIdx} className="flex items-start gap-2">
                <span className="text-accent font-mono font-bold">›</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges & Learnings */}
        <div className="mb-8 p-5 rounded-xl bg-[#181818] border border-[#2D2D2D]">
          <h3 className="text-sm uppercase font-mono tracking-wider text-white font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            Key Challenges & Lessons Learned
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#D4D4D8]">
            {project.challengesAndLearnings.map((item, cIdx) => (
              <li key={cIdx} className="flex items-start gap-2">
                <span className="text-amber-400 font-mono font-bold">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack Tags */}
        <div className="mb-8">
          <span className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA] font-semibold block mb-2.5">
            Technologies & Tools Used:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-[#202020] border border-[#353535] text-xs font-mono text-[#F5F5F5]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions & Navigation */}
        <div className="pt-6 border-t border-[#303030] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onGithubPlaceholderClick(project)}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2C2C2C] border border-[#383838] text-xs font-medium text-white transition-colors"
            >
              <Github className="w-4 h-4 text-accent" />
              <span>Inspect Source Code</span>
            </button>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-xs font-medium text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1C1C1C] hover:bg-[#252525] border border-[#303030] text-xs text-[#A1A1AA] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev Project</span>
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1C1C1C] hover:bg-[#252525] border border-[#303030] text-xs text-[#A1A1AA] hover:text-white transition-colors"
            >
              <span className="hidden sm:inline">Next Project</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
