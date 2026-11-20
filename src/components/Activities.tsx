import React from 'react';
import { Users, CheckCircle2 } from 'lucide-react';
import { activitiesData } from '../data/activities';

export const Activities: React.FC = () => {
  return (
    <section className="py-20 bg-dark-secondary/30 dark:bg-dark-secondary/30 light:bg-light-secondary/40 border-t border-dark-border dark:border-dark-border light:border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Activities & Collaborative Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white dark:text-white light:text-light-text tracking-tight">
            Peer collaboration, workshops & practical labs.
          </h2>
          <p className="mt-2 text-sm text-dark-muted dark:text-dark-muted light:text-light-muted">
            Engagement with university developer clubs, group software projects, and hands-on hardware exploration.
          </p>
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activitiesData.map((activity, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border p-6 flex flex-col justify-between hover:border-accent/40 transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-accent uppercase tracking-wider font-semibold">
                    {activity.roleOrType}
                  </span>
                  <span className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted">
                    DIU CSE
                  </span>
                </div>

                <h3 className="text-base font-bold font-heading text-white dark:text-white light:text-light-text mb-2">
                  {activity.title}
                </h3>
                <p className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted mb-4 leading-relaxed">
                  {activity.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-3 border-t border-dark-border/60 dark:border-dark-border/60 light:border-light-border">
                  {activity.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-xs text-dark-text dark:text-dark-text light:text-light-text"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-dark-border/60 dark:border-dark-border/60 light:border-light-border text-[11px] font-mono text-dark-muted dark:text-dark-muted light:text-light-muted">
                {activity.organization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
