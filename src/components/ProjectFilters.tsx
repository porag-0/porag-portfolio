import React from 'react';
import { ProjectCategory } from '../types';
import { Search } from 'lucide-react';

interface Props {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  counts: Record<ProjectCategory, number>;
}

export const ProjectFilters: React.FC<Props> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  counts,
}) => {
  const categories: ProjectCategory[] = [
    'All',
    'Desktop Applications',
    'Web Development',
    'AI / Experiments',
    'IoT / Embedded',
    'Concepts',
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count = counts[category] || 0;

          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-accent text-white shadow-md shadow-accent/25 font-semibold'
                  : 'bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-light-text hover:border-accent/40'
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary text-dark-muted dark:text-dark-muted light:text-light-muted'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search Input */}
      <div className="relative w-full md:w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-muted dark:text-dark-muted light:text-light-muted" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter by tech or keyword..."
          className="w-full pl-9 pr-3.5 py-2 rounded-xl text-xs bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border text-white dark:text-white light:text-light-text placeholder:text-dark-muted/60 dark:placeholder:text-dark-muted/60 light:placeholder:text-light-muted/60 focus:outline-none focus:border-accent"
        />
      </div>
    </div>
  );
};
