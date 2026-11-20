import React from 'react';
import { CheckCircle2, BookOpen, Terminal, Cpu, Compass } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Terminal className="w-5 h-5 text-accent" />,
      title: "Strong Programming Foundation",
      description: "Rooted in C, C++, and Java with a disciplined understanding of memory, data structures, and object-oriented architecture."
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent" />,
      title: "Pragmatic Problem Solving",
      description: "Applying computer science fundamentals to real-world tasks—ranging from desktop applications to IoT sensor tracking."
    },
    {
      icon: <Compass className="w-5 h-5 text-accent" />,
      title: "Continuous Exploration",
      description: "Actively studying modern full-stack web technologies (React, TypeScript, FastAPI) and experimenting with local AI systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-secondary/40 dark:bg-dark-secondary/40 light:bg-light-secondary/50 border-y border-dark-border dark:border-dark-border light:border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white dark:text-white light:text-light-text tracking-tight">
            Engineering software with curiosity, discipline, and purpose.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Bio Column */}
          <div className="lg:col-span-7 space-y-5 text-dark-muted dark:text-dark-muted light:text-light-muted text-sm sm:text-base leading-relaxed">
            <p className="text-white dark:text-white light:text-light-text font-medium text-base sm:text-lg">
              {profileData.aboutIntro}
            </p>

            {profileData.aboutBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Factual Highlights Box */}
            <div className="mt-6 pt-6 border-t border-dark-border dark:border-dark-border light:border-light-border">
              <h3 className="text-xs uppercase font-mono tracking-wider text-white dark:text-white light:text-light-text font-semibold mb-3">
                Key Technical Competencies & Experience:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {profileData.factualHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border/80 dark:border-dark-border/80 light:border-light-border text-xs text-dark-text dark:text-dark-text light:text-light-text"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Core Engineering Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs uppercase font-mono tracking-wider text-dark-muted dark:text-dark-muted light:text-light-muted font-semibold px-1">
              Engineering Mindset
            </div>
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border hover:border-accent/40 transition-colors shadow-sm"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-heading text-white dark:text-white light:text-light-text mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Academic Transparency Note */}
            <div className="p-4 rounded-xl bg-accent/5 border border-dashed border-accent/30 text-xs text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
              <strong className="text-white dark:text-white light:text-light-text block mb-1">
                Student & Developer Perspective:
              </strong>
              Currently building academic and personal projects while preparing for professional software engineering internships and collaborative opportunities.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
