import React from 'react';
import { X, FileText, Download, AlertCircle } from 'lucide-react';
import { profileData } from '../data/profile';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const hasRealCv = profileData.socialLinks.cvFile && profileData.socialLinks.cvFile.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#141414] border border-[#303030] text-[#F5F5F5] shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#252525] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-accent">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-white">Curriculum Vitae</h3>
            <p className="text-xs text-[#A1A1AA]">Md. Moktadur Rahman Porag</p>
          </div>
        </div>

        {hasRealCv ? (
          <div>
            <p className="text-sm text-[#D4D4D8] mb-6">
              Download the official curriculum vitae for Md. Moktadur Rahman Porag detailing academic coursework, practical projects, and technical skills.
            </p>
            <a
              href={profileData.socialLinks.cvFile}
              download="Moktadur_Rahman_Porag_CV.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium transition-colors shadow-lg shadow-accent/20"
            >
              <Download className="w-4 h-4" />
              Download Official CV (PDF)
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold mb-1 text-amber-300">
                  CV Document Pending Placement
                </strong>
                As per specification instructions, no fake resume or placeholder credentials have been fabricated.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] text-xs text-[#A1A1AA] space-y-2">
              <div className="font-semibold text-white">How to enable your real CV:</div>
              <ol className="list-decimal list-inside space-y-1.5 pl-1">
                <li>Export your verified CV as a PDF file named <code className="text-accent">resume.pdf</code></li>
                <li>Place it in the <code className="text-accent">porag-portfolio/public/</code> directory</li>
                <li>Set <code className="text-accent">cvFile: "/resume.pdf"</code> in <code className="text-accent">src/data/profile.ts</code></li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <a
                href="#contact"
                onClick={onClose}
                className="flex-1 py-2.5 px-4 text-center rounded-xl bg-accent text-white font-medium text-xs hover:bg-accent-hover transition-colors"
              >
                Reach Out Directly Via Contact
              </a>
              <button
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl bg-[#252525] hover:bg-[#303030] text-xs text-white font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
