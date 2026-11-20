import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/projects';
import { ProjectFilters } from './ProjectFilters';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { FolderGit2, Info } from 'lucide-react';

interface Props {
  onGithubPlaceholderClick: (project: Project) => void;
}

export const ProjectGrid: React.FC<Props> = ({ onGithubPlaceholderClick }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      All: projectsData.length,
      'Desktop Applications': 0,
      'Web Development': 0,
      'AI / Experiments': 0,
      'IoT / Embedded': 0,
      Concepts: 0,
    };

    projectsData.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData
      .filter((project) => {
        const matchesCategory =
          activeCategory === 'All' || project.category === activeCategory;
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          project.title.toLowerCase().includes(query) ||
          project.shortDescription.toLowerCase().includes(query) ||
          project.tags.some((t) => t.toLowerCase().includes(query));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => a.order - b.order);
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 bg-dark-secondary/30 dark:bg-dark-secondary/30 light:bg-light-secondary/40 border-t border-dark-border dark:border-dark-border light:border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Software Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white dark:text-white light:text-light-text tracking-tight">
              Featured work, academic systems & prototypes.
            </h2>
            <p className="mt-2 text-sm text-dark-muted dark:text-dark-muted light:text-light-muted">
              Documented implementations across Java desktop applications, embedded systems, API pipelines, and product architectures.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 p-3 rounded-xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border text-xs text-dark-muted dark:text-dark-muted light:text-light-muted">
            <Info className="w-4 h-4 text-accent shrink-0" />
            <span>Select any project to inspect the full case study & architecture.</span>
          </div>
        </div>

        {/* Project Filters Component */}
        <ProjectFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          counts={categoryCounts}
        />

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={setSelectedProject}
                onGithubPlaceholderClick={onGithubPlaceholderClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border">
            <FolderGit2 className="w-10 h-10 text-dark-muted dark:text-dark-muted light:text-light-muted mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-semibold text-white dark:text-white light:text-light-text mb-1">
              No matching projects found
            </h3>
            <p className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted max-w-sm mx-auto mb-4">
              No projects matched the search term "{searchQuery}". Try searching for Java, Python, React, or RFID.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-accent text-white text-xs font-medium hover:bg-accent-hover transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
        allProjects={projectsData}
        onGithubPlaceholderClick={onGithubPlaceholderClick}
      />
    </section>
  );
};
