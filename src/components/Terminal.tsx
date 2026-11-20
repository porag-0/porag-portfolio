import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { educationData } from '../data/education';

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs text-dark-muted dark:text-dark-muted light:text-light-muted">
          <p className="text-accent font-semibold">
            Porag Portfolio Interactive Shell v1.0.0
          </p>
          <p>
            Type <span className="text-white font-mono bg-dark-card px-1.5 py-0.5 rounded border border-dark-border">help</span> to view available commands, or click any suggested pill below.
          </p>
        </div>
      ),
    },
  ]);
  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setCommandIndex(-1);

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs text-dark-text dark:text-dark-text light:text-light-text font-mono">
            <p className="text-accent font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              <div><span className="text-white font-bold">about</span> - Summary of developer profile</div>
              <div><span className="text-white font-bold">skills</span> - Overview of technical foundations</div>
              <div><span className="text-white font-bold">projects</span> - List of all 7 portfolio projects</div>
              <div><span className="text-white font-bold">education</span> - Academic background & institution</div>
              <div><span className="text-white font-bold">contact</span> - Contact channels & links</div>
              <div><span className="text-white font-bold">clear</span> - Clear current terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="text-xs space-y-1.5 font-mono text-dark-text dark:text-dark-text light:text-light-text">
            <p className="text-white font-bold">{profileData.fullName}</p>
            <p className="text-accent">{profileData.professionalTitle}</p>
            <p className="text-dark-muted dark:text-dark-muted light:text-light-muted">{profileData.aboutIntro}</p>
            <p className="text-emerald-400">Location: {profileData.location}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs space-y-2 font-mono">
            <p className="text-accent font-bold">Technical Competencies:</p>
            <p className="text-dark-text dark:text-dark-text light:text-light-text">
              <span className="text-emerald-400 font-semibold">[Core Languages]:</span> C, C++, Java, Python, JavaScript, TypeScript
            </p>
            <p className="text-dark-text dark:text-dark-text light:text-light-text">
              <span className="text-blue-400 font-semibold">[CS Foundations]:</span> OOP, Data Structures, Algorithms, DBMS, Networks
            </p>
            <p className="text-dark-text dark:text-dark-text light:text-light-text">
              <span className="text-purple-400 font-semibold">[Exploration]:</span> React, Vite, Tailwind CSS, FastAPI, Express, MySQL
            </p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-xs space-y-1.5 font-mono">
            <p className="text-accent font-bold">Documented Projects ({projectsData.length}):</p>
            {projectsData.map((p, i) => (
              <div key={p.id} className="flex items-center justify-between text-dark-text dark:text-dark-text light:text-light-text">
                <span>{i + 1}. <strong className="text-white">{p.title}</strong></span>
                <span className="text-[11px] text-accent/80 font-mono">[{p.status}]</span>
              </div>
            ))}
            <p className="text-dark-muted dark:text-dark-muted light:text-light-muted pt-1">
              Scroll to the Projects section or click any card for in-depth architecture.
            </p>
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="text-xs space-y-1 font-mono text-dark-text dark:text-dark-text light:text-light-text">
            <p className="text-white font-bold">{educationData.institution}</p>
            <p className="text-accent">{educationData.degree}</p>
            <p className="text-dark-muted dark:text-dark-muted light:text-light-muted">Location: {educationData.location}</p>
            <p className="text-[11px] text-emerald-400">Status: Enrolled CSE Student</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs space-y-1 font-mono text-dark-text dark:text-dark-text light:text-light-text">
            <p className="text-accent font-bold">Let's Connect:</p>
            <p>Email: <span className="text-white font-mono">{profileData.socialLinks.email || '[ADD EMAIL ADDRESS]'}</span></p>
            <p>GitHub: <span className="text-white font-mono">{profileData.socialLinks.github || '[ADD GITHUB URL]'}</span></p>
            <p>LinkedIn: <span className="text-white font-mono">{profileData.socialLinks.linkedin || '[ADD LINKEDIN URL]'}</span></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        outputNode = (
          <div className="text-xs text-red-400 font-mono">
            Command not recognized: <span className="underline">{trimmed}</span>. Type <span className="text-accent font-bold">help</span> to view supported commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: outputNode }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = commandIndex === -1 ? commandHistory.length - 1 : Math.max(0, commandIndex - 1);
      setCommandIndex(nextIdx);
      setInput(commandHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex === -1) return;
      const nextIdx = commandIndex + 1;
      if (nextIdx >= commandHistory.length) {
        setCommandIndex(-1);
        setInput('');
      } else {
        setCommandIndex(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    }
  };

  const commandChips = ['help', 'about', 'skills', 'projects', 'education', 'contact', 'clear'];

  return (
    <div className="my-12 rounded-2xl bg-[#0F0F0F] border border-[#2D2D2D] overflow-hidden shadow-2xl font-mono text-left">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-[#2D2D2D]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-2 text-xs text-[#A1A1AA] flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-accent" />
            <span>guest@moktadur-porag:~</span>
          </span>
        </div>

        <div className="text-[11px] text-[#71717A] hidden sm:block">
          Interactive Portfolio CLI
        </div>
      </div>

      {/* Terminal Output Area */}
      <div
        className="p-5 max-h-72 overflow-y-auto space-y-4 text-xs font-mono select-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-dark-muted dark:text-dark-muted light:text-light-muted">
              <span className="text-accent font-bold">porag@portfolio:~$</span>
              <span className="text-white font-semibold">{entry.command}</span>
            </div>
            <div className="pl-4 border-l border-[#333333] py-0.5">{entry.output}</div>
          </div>
        ))}
        <div ref={terminalBottomRef} />
      </div>

      {/* Suggested Command Chips */}
      <div className="px-5 py-2.5 bg-[#141414] border-t border-[#262626] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        <span className="text-[10px] uppercase font-mono text-[#71717A] shrink-0 mr-1">
          Quick Run:
        </span>
        {commandChips.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#202020] hover:bg-accent/20 hover:text-accent hover:border-accent/40 text-[#A1A1AA] border border-[#303030] transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Input Bar */}
      <div className="flex items-center px-4 py-3 bg-[#111111] border-t border-[#2D2D2D]">
        <span className="text-accent text-xs font-bold mr-2 shrink-0">
          porag@portfolio:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command (e.g. 'help', 'projects', 'about') and press Enter..."
          className="flex-1 bg-transparent text-xs text-white placeholder:text-[#52525B] focus:outline-none"
        />
        <button
          onClick={() => executeCommand(input)}
          className="p-1 rounded text-[#71717A] hover:text-accent transition-colors"
          aria-label="Run command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
