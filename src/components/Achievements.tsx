import React from 'react';
import { Award, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-accent/10 border border-accent/25 text-accent shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                  Milestones & Recognitions
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border text-dark-muted dark:text-dark-muted light:text-light-muted">
                  Strict Verification Standard
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white dark:text-white light:text-light-text">
                Continuous Learning & Milestones
              </h3>
              <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted light:text-light-muted mt-1 max-w-xl italic">
                "More learning milestones, competitive coding results, and verified course certifications will be added here as the journey continues."
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border text-xs font-mono text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>In Continuous Progress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
