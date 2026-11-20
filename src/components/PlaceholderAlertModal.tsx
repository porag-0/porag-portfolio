import React from 'react';
import { X, AlertCircle, FileCode } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  info: { name: string; path: string } | null;
}

export const PlaceholderAlertModal: React.FC<Props> = ({ isOpen, onClose, info }) => {
  if (!isOpen || !info) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-[#141414] border border-[#303030] text-[#F5F5F5] shadow-2xl p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#252525] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-accent/15 border border-accent/30 text-accent">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-heading text-white">
              Placeholder Link
            </h3>
            <p className="text-xs text-[#A1A1AA]">{info.name}</p>
          </div>
        </div>

        <p className="text-xs text-[#D4D4D8] leading-relaxed mb-4">
          In strict compliance with the AI build specification, no fake URL was fabricated. This link is currently reserved for the owner's verified link.
        </p>

        <div className="p-3 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] text-xs space-y-1.5 mb-5">
          <span className="text-[#A1A1AA] block text-[11px] font-mono">
            How to configure:
          </span>
          <div className="text-white flex items-center gap-2">
            <FileCode className="w-4 h-4 text-accent shrink-0" />
            <code className="text-accent font-mono text-[11px]">{info.path}</code>
          </div>
          <p className="text-[11px] text-[#A1A1AA]">
            Open this file and enter your official URL or asset path.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-medium transition-colors"
        >
          Understood
        </button>
      </div>
    </div>
  );
};
