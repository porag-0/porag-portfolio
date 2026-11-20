import React from 'react';
import { GraduationCap, MapPin, BookOpen, Calendar } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white dark:text-white light:text-light-text tracking-tight">
            Education & Computer Science Foundation
          </h2>
          <p className="mt-2 text-sm text-dark-muted dark:text-dark-muted light:text-light-muted">
            Formal undergraduate studies focusing on computer science theory, systems architecture, and core software engineering.
          </p>
        </div>

        {/* Education Institution Card */}
        <div className="rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle accent border line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent" />

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-dark-border dark:border-dark-border light:border-light-border">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                  Undergraduate Degree
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Enrolled CSE Student
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white dark:text-white light:text-light-text">
                {educationData.institution}
              </h3>
              <p className="text-base sm:text-lg text-accent font-medium mt-1">
                {educationData.degree}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-dark-muted dark:text-dark-muted light:text-light-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  {educationData.location}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-dark-muted/80">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  {educationData.periodPlaceholder}
                </span>
              </div>
            </div>

            {/* Optional CGPA note */}
            <div className="p-3.5 rounded-xl bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border text-xs text-dark-muted dark:text-dark-muted light:text-light-muted max-w-xs shrink-0">
              <span className="text-white dark:text-white light:text-light-text font-semibold block mb-0.5">
                Academic Standing:
              </span>
              <span>{educationData.cgpaPlaceholder}</span>
              <p className="text-[11px] text-dark-muted/70 mt-1">
                Grade point information is kept as an honest placeholder pending official confirmation.
              </p>
            </div>
          </div>

          {/* Relevant Coursework Section */}
          <div className="pt-6">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white dark:text-white light:text-light-text font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accent" />
              Relevant Computer Science Coursework:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {educationData.relevantCoursework.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border/70 dark:border-dark-border/70 light:border-light-border text-xs text-dark-text dark:text-dark-text light:text-light-text hover:border-accent/40 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>

            {/* Coursework Focus Summary */}
            <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-dashed border-accent/25 text-xs text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
              <strong className="text-white dark:text-white light:text-light-text">
                Theoretical Rigor & Practical Labs:
              </strong>{' '}
              {educationData.notes}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
