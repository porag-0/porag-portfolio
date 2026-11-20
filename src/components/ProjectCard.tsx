import React from 'react';
import { Project } from '../types';
import {
  Activity,
  Search,
  Cpu,
  ShoppingBag,
  Briefcase,
  CheckSquare,
  Bot,
  Github,
  ArrowRight,
  Code2,
  Sparkles,
} from 'lucide-react';

interface Props {
  project: Project;
  onOpenModal: (project: Project) => void;
  onGithubPlaceholderClick: (project: Project) => void;
}

export const ProjectCard: React.FC<Props> = ({
  project,
  onOpenModal,
  onGithubPlaceholderClick,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-accent" />;
      case 'SearchCheck':
        return <Search className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-purple-400" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 text-pink-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-accent" />;
    }
  };

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return {
          bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          dot: 'bg-emerald-400',
        };
      case 'In Progress':
        return {
          bg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
          dot: 'bg-blue-400',
        };
      case 'Prototype':
        return {
          bg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
          dot: 'bg-purple-400',
        };
      case 'Concept':
        return {
          bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          dot: 'bg-amber-400',
        };
    }
  };

  const statusStyle = getStatusBadge(project.status);

  return (
    <article className="group rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-accent/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/20">
      <div>
        {/* Top Graphic Banner */}
        <div className="relative h-44 bg-gradient-to-br from-dark-secondary via-dark-bg to-[#121212] dark:from-dark-secondary dark:via-dark-bg dark:to-[#121212] light:from-slate-100 light:to-slate-200 border-b border-dark-border dark:border-dark-border light:border-light-border p-5 flex flex-col justify-between overflow-hidden">
          {/* Subtle geometric pattern & accent glow */}
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
            style={{ backgroundColor: project.accentColor || '#FF6B35' }}
          />

          <div className="flex items-center justify-between relative z-10">
            <div className="p-2 rounded-xl bg-dark-card dark:bg-dark-card light:bg-white border border-dark-border dark:border-dark-border light:border-light-border shadow-md">
              {getIcon(project.iconName)}
            </div>

            <div className="flex items-center gap-2">
              {project.isFeatured && (
                <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 font-semibold">
                  <Sparkles className="w-2.5 h-2.5" />
                  Featured
                </span>
              )}
              <span
                className={`flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full border uppercase tracking-wider font-semibold ${statusStyle.bg}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
                {project.status}
              </span>
            </div>
          </div>

          <div className="relative z-10">
            <span className="text-[11px] font-mono text-dark-muted dark:text-dark-muted light:text-light-muted uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-lg font-bold font-heading text-white dark:text-white light:text-light-text group-hover:text-accent transition-colors line-clamp-1">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <p className="text-xs text-accent font-medium mb-2 line-clamp-1">
            {project.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed line-clamp-3 mb-4">
            {project.shortDescription}
          </p>

          {/* Technology tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border/80 dark:border-dark-border/80 light:border-light-border text-dark-text dark:text-dark-text light:text-light-text"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 text-dark-muted dark:text-dark-muted light:text-light-muted">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-dark-border/60 dark:border-dark-border/60 light:border-light-border gap-2">
        <button
          onClick={() => onOpenModal(project)}
          className="flex-1 py-2 px-3 rounded-xl bg-accent/10 hover:bg-accent hover:text-white text-accent border border-accent/30 text-xs font-medium transition-all duration-200 flex items-center justify-center gap-1.5 group/btn"
        >
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={() => onGithubPlaceholderClick(project)}
          className="p-2 rounded-xl bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary hover:bg-dark-border/50 border border-dark-border dark:border-dark-border light:border-light-border text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-light-text transition-colors"
          title={project.githubUrl ? 'View GitHub Repository' : 'GitHub Link Placeholder'}
          aria-label="GitHub Repository"
        >
          <Github className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
