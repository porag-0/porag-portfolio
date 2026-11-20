import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Strong foundation':
        return 'bg-accent/15 text-accent border-accent/40';
      case 'Working knowledge':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'Currently exploring':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
      default:
        return 'bg-dark-secondary text-dark-muted border-dark-border';
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white dark:text-white light:text-light-text tracking-tight">
              Honest technical foundations and tools.
            </h2>
            <p className="mt-2 text-sm text-dark-muted dark:text-dark-muted light:text-light-muted">
              Classified by verifiable academic grounding, practical implementation, and active exploration. No arbitrary percentages.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/30">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Strong foundation
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Working knowledge
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Currently exploring
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-accent text-white shadow-md shadow-accent/20 font-semibold'
                  : 'bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-light-text hover:border-accent/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border p-6 hover:border-accent/40 transition-all duration-200 flex flex-col justify-between shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold font-heading text-white dark:text-white light:text-light-text group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-[11px] font-mono text-dark-muted dark:text-dark-muted light:text-light-muted">
                    {cat.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/skill flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border/80 dark:border-dark-border/80 light:border-light-border hover:border-accent/50 transition-colors"
                      title={`${skill.name} — ${skill.levelLabel}`}
                    >
                      <span className="text-xs font-medium text-white dark:text-white light:text-light-text">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded border uppercase tracking-wider ${getBadgeStyle(
                          skill.levelLabel
                        )}`}
                      >
                        {skill.levelLabel === 'Strong foundation'
                          ? 'Core'
                          : skill.levelLabel === 'Working knowledge'
                          ? 'Applied'
                          : 'Exploring'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-dark-border/60 dark:border-dark-border/60 light:border-light-border flex items-center justify-between text-[11px] font-mono text-dark-muted dark:text-dark-muted light:text-light-muted">
                <span>{cat.title}</span>
                <span className="text-accent/80">Curriculum & Projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
