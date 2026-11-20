import React from 'react';
import { ArrowRight, Mail, FileText, MapPin, Code2, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[250px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Eyebrow and Location Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border text-xs font-mono tracking-wider uppercase text-accent font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                <span>HELLO, I'M</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border text-xs text-dark-muted dark:text-dark-muted light:text-light-muted">
                <MapPin className="w-3.5 h-3.5 text-accent/80" />
                <span>{profileData.location}</span>
              </div>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white dark:text-white light:text-light-text leading-[1.08]">
                {profileData.heroDisplayName}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-accent font-heading">
                {profileData.professionalTitle}
              </p>
            </div>

            {/* Tagline & Core Bio */}
            <blockquote className="border-l-2 border-accent pl-4 py-1 text-sm sm:text-base italic text-dark-text/90 dark:text-dark-text/90 light:text-light-text font-serif">
              "{profileData.tagline}"
            </blockquote>

            <p className="text-sm sm:text-base text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed max-w-2xl">
              I am a Computer Science and Engineering student at Daffodil International University interested in software development, problem-solving, and building practical applications. I enjoy exploring technologies, working on projects, and turning ideas into functional digital products.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => handleScroll('projects')}
                className="group w-full sm:w-auto px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/35 hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScroll('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-dark-card dark:bg-dark-card light:bg-light-card hover:bg-dark-secondary dark:hover:bg-dark-secondary light:hover:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border text-white dark:text-white light:text-light-text font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenCvModal}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-dark-secondary/60 dark:bg-dark-secondary/60 light:bg-light-secondary/60 hover:bg-dark-secondary dark:hover:bg-dark-secondary light:hover:bg-light-secondary border border-dashed border-dark-border dark:border-dark-border light:border-light-border hover:border-accent/50 text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-light-text font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
                title="Curriculum Vitae"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Core Tech Foundation Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-dark-muted dark:text-dark-muted light:text-light-muted">
              <span className="text-[11px] uppercase tracking-wider text-dark-muted/80 dark:text-dark-muted/80 mr-1">
                Core Stack:
              </span>
              {['C / C++', 'Java & OOP', 'Python', 'React', 'MySQL', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border text-xs text-white/90 dark:text-white/90 light:text-light-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Abstract Technical Profile Card (No fake portrait!) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative background glow behind card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent/30 via-accent/5 to-transparent rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

              <div className="rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border p-6 shadow-2xl relative overflow-hidden">
                {/* Card Header: Fake terminal tab controls */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-dark-border dark:border-dark-border light:border-light-border">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-xs text-dark-muted dark:text-dark-muted light:text-light-muted">
                      porag.dev ~ identity
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/30 font-semibold">
                    CSE Student
                  </span>
                </div>

                {/* Profile Visual Graphic (Monogram & Code Representation) */}
                <div className="relative aspect-square max-h-56 rounded-xl bg-gradient-to-br from-dark-secondary via-dark-bg to-[#121212] dark:from-dark-secondary dark:via-dark-bg dark:to-[#121212] light:from-slate-100 light:to-slate-200 border border-dark-border dark:border-dark-border light:border-light-border flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
                  {/* Subtle code pattern overlay */}
                  <div className="absolute inset-0 opacity-10 font-mono text-[9px] text-accent p-3 leading-tight select-none pointer-events-none overflow-hidden text-left">
                    {`#include <iostream>
using namespace std;
class Developer {
public:
  string name = "Moktadur Rahman Porag";
  string focus = "Software Engineering";
  void build() { cout << "Problem Solved!"; }
};`}
                  </div>

                  {/* Central Initials Monogram Badge */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-dark-card dark:bg-dark-card light:bg-white border-2 border-accent/40 flex items-center justify-center shadow-xl group-hover:border-accent transition-colors">
                    <div className="text-3xl font-heading font-bold text-white dark:text-white light:text-light-text tracking-tighter">
                      M<span className="text-accent">P</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-accent text-white shadow-md">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="relative z-10 mt-4 text-xs font-mono text-dark-muted dark:text-dark-muted light:text-light-muted">
                    <span className="text-white dark:text-white light:text-light-text font-semibold">
                      Md. Moktadur Rahman Porag
                    </span>
                    <div className="text-[11px] text-accent">Daffodil International University</div>
                  </div>
                </div>

                {/* Technical highlights summary inside card */}
                <div className="mt-5 space-y-2.5">
                  <div className="p-2.5 rounded-lg bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border/60 dark:border-dark-border/60 light:border-light-border flex items-center justify-between text-xs">
                    <span className="text-dark-muted dark:text-dark-muted light:text-light-muted">Degree</span>
                    <span className="font-medium text-white dark:text-white light:text-light-text text-right">
                      BSc in Computer Science & Engineering
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border/60 dark:border-dark-border/60 light:border-light-border flex items-center justify-between text-xs">
                    <span className="text-dark-muted dark:text-dark-muted light:text-light-muted">Primary Focus</span>
                    <span className="font-medium text-accent">
                      Software Engineering & Problem Solving
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border/60 dark:border-dark-border/60 light:border-light-border flex items-center justify-between text-xs">
                    <span className="text-dark-muted dark:text-dark-muted light:text-light-muted">Featured Projects</span>
                    <span className="font-mono text-white dark:text-white light:text-light-text">
                      7 Documented Systems
                    </span>
                  </div>
                </div>

                {/* Footer note on card */}
                <div className="mt-4 pt-3 border-t border-dark-border dark:border-dark-border light:border-light-border text-center">
                  <p className="text-[11px] font-mono text-dark-muted dark:text-dark-muted light:text-light-muted flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>Real Projects • Factual Information • Verifiable Code</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
