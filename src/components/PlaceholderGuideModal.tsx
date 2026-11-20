import React from 'react';
import { X, CheckCircle2, AlertCircle, FileCode } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const PlaceholderGuideModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const checklist = [
    {
      item: "Professional Portrait Image",
      status: "Placeholder active (Abstract monogram card)",
      file: "public/images/portrait.jpg (or update Hero.tsx)",
      action: "Drop your square photo into public/images/portrait.jpg",
      required: true,
    },
    {
      item: "Confirmed Email Address",
      status: "Placeholder active: [ADD EMAIL]",
      file: "src/data/profile.ts (socialLinks.email)",
      action: "Set your real contact email in profile.ts",
      required: true,
    },
    {
      item: "GitHub Profile URL",
      status: "Placeholder active: [ADD GITHUB URL]",
      file: "src/data/profile.ts (socialLinks.github)",
      action: "Paste your GitHub profile URL",
      required: true,
    },
    {
      item: "LinkedIn Profile URL",
      status: "Placeholder active: [ADD LINKEDIN URL]",
      file: "src/data/profile.ts (socialLinks.linkedin)",
      action: "Paste your LinkedIn profile URL",
      required: true,
    },
    {
      item: "CV / Resume PDF",
      status: "Placeholder active: [ADD CV PDF]",
      file: "public/resume.pdf & src/data/profile.ts",
      action: "Add your resume.pdf to the public/ folder",
      required: true,
    },
    {
      item: "Academic Timeline / Dates",
      status: "Placeholder: [ENROLLMENT TIMELINE TO BE CONFIRMED]",
      file: "src/data/education.ts (periodPlaceholder)",
      action: "Confirm your starting year / expected graduation year",
      required: false,
    },
    {
      item: "Project Repository URLs",
      status: "Placeholders active on all 7 project cards",
      file: "src/data/projects.ts (githubUrl fields)",
      action: "Add your GitHub repositories as they become public",
      required: false,
    },
    {
      item: "Project Screenshots",
      status: "Interactive code illustrations active",
      file: "public/projects/ & src/data/projects.ts",
      action: "Add real screenshots into public/projects/ when available",
      required: false,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#141414] border border-[#303030] text-[#F5F5F5] shadow-2xl p-6 md:p-8">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#303030]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/30 text-accent">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-title" className="text-xl font-bold font-heading text-white">
                Owner Setup & Asset Checklist
              </h2>
              <p className="text-xs text-[#A1A1AA]">
                Specification Section 20 — Review of placeholders ready for your personal links
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#252525] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6 p-4 rounded-xl bg-accent/5 border border-accent/20 text-xs text-[#E5E5E5] leading-relaxed">
          <strong className="text-accent font-semibold block mb-1">
            Strict Factuality Policy Maintained:
          </strong>
          No employment, metrics, fake GitHub statistics, certificates, or URLs were fabricated. Every item below is neatly isolated in easy-to-edit configuration files.
        </div>

        <div className="space-y-3">
          {checklist.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] hover:border-[#3D3D3D] transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  {item.required ? (
                    <AlertCircle className="w-4 h-4 text-accent shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                  <span className="text-sm font-semibold text-white">{item.item}</span>
                  {item.required && (
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-accent/20 text-accent border border-accent/30">
                      Needed
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-[#A1A1AA] shrink-0">{item.status}</span>
              </div>
              <div className="mt-2 text-xs text-[#A1A1AA] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span>{item.action}</span>
                <code className="text-[11px] font-mono text-accent/90 bg-[#252525] px-2 py-0.5 rounded border border-[#353535]">
                  {item.file}
                </code>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-[#303030] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A1A1AA]">
          <span>Central data located in <code className="text-accent">src/data/</code></span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
          >
            Close & Explore Site
          </button>
        </div>
      </div>
    </div>
  );
};
