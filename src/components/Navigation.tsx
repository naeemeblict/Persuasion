import React from 'react';
import { 
  BookOpen, 
  Compass, 
  ShieldCheck, 
  Award, 
  Download, 
  Sun, 
  Moon, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface NavigationProps {
  activeTab: 'curriculum' | 'study-guide' | 'blueprint' | 'defense' | 'exam' | 'resources';
  setActiveTab: (tab: 'curriculum' | 'study-guide' | 'blueprint' | 'defense' | 'exam' | 'resources') => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  onOpenExport: () => void;
  xpPoints: number;
  completedLessonsCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  isDark,
  setIsDark,
  onOpenExport,
  xpPoints,
  completedLessonsCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark - ASCENDIX CONSULTING */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => setActiveTab('curriculum')}
              className="text-left group flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-sm font-display">
                AC
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap block font-display">
                  ASCENDIX CONSULTING
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                  Persuasion & Influence · Executive Publishing
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Clean single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'curriculum'
                  ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Lessons</span>
              <span className="text-[11px] font-mono opacity-80">({completedLessonsCount}/6)</span>
            </button>

            <button
              onClick={() => setActiveTab('study-guide')}
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'study-guide'
                  ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Study Guide</span>
            </button>

            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'blueprint'
                  ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Blueprint Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('defense')}
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'defense'
                  ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Defense Lab</span>
            </button>

            <button
              onClick={() => setActiveTab('exam')}
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'exam'
                  ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Final Exam</span>
            </button>
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* XP Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
              <span className="text-amber-600 dark:text-amber-400 font-bold">XP:</span>
              <span className="tabular-nums">{xpPoints}</span>
            </div>

            {/* Dark Mode Switch */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle visual theme"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action: Export Course Package */}
            <button
              onClick={onOpenExport}
              className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-amber-600 rounded-lg hover:bg-slate-800 dark:hover:bg-amber-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Sub-Navigation Strip */}
      <div className="lg:hidden border-t border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 px-4 py-1.5 flex items-center justify-between gap-1 overflow-x-auto">
        <button
          onClick={() => setActiveTab('curriculum')}
          className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap shrink-0 flex items-center gap-1 ${
            activeTab === 'curriculum'
              ? 'bg-amber-600 text-white font-semibold'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Lessons ({completedLessonsCount}/6)</span>
        </button>

        <button
          onClick={() => setActiveTab('study-guide')}
          className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap shrink-0 flex items-center gap-1 ${
            activeTab === 'study-guide'
              ? 'bg-amber-600 text-white font-semibold'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Guide</span>
        </button>

        <button
          onClick={() => setActiveTab('blueprint')}
          className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap shrink-0 flex items-center gap-1 ${
            activeTab === 'blueprint'
              ? 'bg-amber-600 text-white font-semibold'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Blueprint</span>
        </button>

        <button
          onClick={() => setActiveTab('defense')}
          className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap shrink-0 flex items-center gap-1 ${
            activeTab === 'defense'
              ? 'bg-amber-600 text-white font-semibold'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Defense</span>
        </button>

        <button
          onClick={() => setActiveTab('exam')}
          className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap shrink-0 flex items-center gap-1 ${
            activeTab === 'exam'
              ? 'bg-amber-600 text-white font-semibold'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Exam</span>
        </button>
      </div>
    </header>
  );
};
