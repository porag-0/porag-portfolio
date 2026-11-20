import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, FileText, CheckSquare } from 'lucide-react';

interface NavbarProps {
  onOpenChecklist: () => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChecklist, onOpenCvModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/85 dark:bg-dark-bg/85 light:bg-light-bg/90 backdrop-blur-md border-b border-dark-border dark:border-dark-border light:border-light-border shadow-lg shadow-black/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-white dark:text-white light:text-light-text"
          >
            <div className="w-9 h-9 rounded-lg bg-dark-secondary dark:bg-dark-secondary light:bg-white border border-dark-border dark:border-dark-border light:border-light-border flex items-center justify-center font-mono text-sm text-accent font-bold group-hover:border-accent/60 transition-colors shadow-sm">
              MP
            </div>
            <span className="hidden sm:inline-block">
              Moktadur Rahman <span className="text-accent">Porag</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white dark:text-white light:text-light-text bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border dark:border-dark-border light:border-light-border'
                      : 'text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-light-text hover:bg-dark-secondary/50 dark:hover:bg-dark-secondary/50 light:hover:bg-light-secondary/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Owner checklist button */}
            <button
              onClick={onOpenChecklist}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-dark-card dark:bg-dark-card light:bg-white border border-dark-border dark:border-dark-border light:border-light-border text-dark-muted dark:text-dark-muted light:text-light-muted hover:border-accent/40 hover:text-accent transition-all"
              title="View Owner Configuration Checklist"
            >
              <CheckSquare className="w-3.5 h-3.5 text-accent" />
              <span>Owner Guide</span>
            </button>

            {/* CV Download button */}
            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-dark-card dark:bg-dark-card light:bg-white hover:bg-accent/10 border border-dark-border dark:border-dark-border light:border-light-border hover:border-accent/50 text-white dark:text-white light:text-light-text transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>CV</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-dark-border dark:border-dark-border light:border-light-border text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-light-text transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-dark-border dark:border-dark-border light:border-light-border bg-dark-bg/95 dark:bg-dark-bg/95 light:bg-light-bg/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-slide-up">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent/10 text-accent font-semibold'
                      : 'text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-white dark:hover:text-white light:hover:text-light-text hover:bg-dark-card dark:hover:bg-dark-card light:hover:bg-light-card'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

            <div className="mt-3 pt-3 border-t border-dark-border dark:border-dark-border light:border-light-border flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChecklist();
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-dark-muted dark:text-dark-muted light:text-light-muted hover:text-accent bg-dark-card dark:bg-dark-card light:bg-white border border-dark-border dark:border-dark-border light:border-light-border"
              >
                <CheckSquare className="w-4 h-4 text-accent" />
                <span>Owner Guide</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-accent text-white hover:bg-accent-hover transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
