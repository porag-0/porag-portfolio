import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/profile';

interface Props {
  onOpenChecklist: () => void;
  onPlaceholderClick: (name: string, path: string) => void;
}

export const Footer: React.FC<Props> = ({ onOpenChecklist, onPlaceholderClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-bg dark:bg-dark-bg light:bg-white border-t border-dark-border dark:border-dark-border light:border-light-border pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-dark-border dark:border-dark-border light:border-light-border">
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-dark-card dark:bg-dark-card light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border flex items-center justify-center font-mono text-xs text-accent font-bold">
                MP
              </div>
              <span className="font-heading text-base font-bold text-white dark:text-white light:text-light-text">
                {profileData.fullName}
              </span>
            </div>
            <p className="text-dark-muted dark:text-dark-muted light:text-light-muted max-w-md leading-relaxed">
              {profileData.professionalTitle} • CSE Student at Daffodil International University.
            </p>
            <p className="text-[11px] font-mono text-accent italic">
              "Designed and built with curiosity, consistency, and code."
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white dark:text-white light:text-light-text font-semibold">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Setup Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white dark:text-white light:text-light-text font-semibold">
              Connect & Customize
            </h4>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  profileData.socialLinks.github
                    ? window.open(profileData.socialLinks.github, '_blank')
                    : onPlaceholderClick('GitHub URL', 'src/data/profile.ts')
                }
                className="p-2.5 rounded-lg bg-dark-card dark:bg-dark-card light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-light-text hover:border-accent/40 transition-colors"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() =>
                  profileData.socialLinks.linkedin
                    ? window.open(profileData.socialLinks.linkedin, '_blank')
                    : onPlaceholderClick('LinkedIn URL', 'src/data/profile.ts')
                }
                className="p-2.5 rounded-lg bg-dark-card dark:bg-dark-card light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-light-text hover:border-accent/40 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="p-2.5 rounded-lg bg-dark-card dark:bg-dark-card light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-light-text hover:border-accent/40 transition-colors"
                title="Contact Direct"
                aria-label="Contact Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenChecklist}
                className="text-[11px] font-mono text-accent hover:underline flex items-center gap-1"
              >
                <span>Owner Configuration Checklist</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-dark-muted dark:text-dark-muted light:text-light-muted">
          <div>
            © {currentYear} Md. Moktadur Rahman Porag. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono">
              Dhaka, Bangladesh
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-card dark:bg-dark-card light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border hover:border-accent/50 text-white dark:text-white light:text-light-text transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
