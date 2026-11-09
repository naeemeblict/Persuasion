import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CourseCurriculumView } from './components/CourseCurriculumView';
import { StudyGuideView } from './components/StudyGuideView';
import { BlueprintStudio } from './components/BlueprintStudio';
import { DefenseSimulator } from './components/DefenseSimulator';
import { FinalExamView } from './components/FinalExamView';
import { ExportModal } from './components/ExportModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'curriculum' | 'study-guide' | 'blueprint' | 'defense' | 'exam' | 'resources'>('curriculum');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cialdini_completed_lessons');
      return saved ? JSON.parse(saved) : ['lesson-01'];
    } catch {
      return ['lesson-01'];
    }
  });

  const [examPassed, setExamPassed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('cialdini_exam_passed') === 'true';
    } catch {
      return false;
    }
  });

  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);

  // Sync theme with HTML classList
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Persist completed lessons
  const handleToggleCompleteLesson = (lessonId: string) => {
    setCompletedLessons(prev => {
      let updated: string[];
      if (prev.includes(lessonId)) {
        updated = prev.filter(id => id !== lessonId);
      } else {
        updated = [...prev, lessonId];
      }
      try {
        localStorage.setItem('cialdini_completed_lessons', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleExamPassed = (score: number) => {
    setExamPassed(true);
    try {
      localStorage.setItem('cialdini_exam_passed', 'true');
    } catch {}
  };

  // Base XP starts at 100 (Level 10 baseline from curriculum)
  const xpPoints = 100 + (completedLessons.length * 50) + (examPassed ? 250 : 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors font-sans">
      {/* Top Bar Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenExport={() => setIsExportOpen(true)}
        xpPoints={xpPoints}
        completedLessonsCount={completedLessons.length}
      />

      {/* Hero Section (Rendered on curriculum or accessible via nav) */}
      {activeTab === 'curriculum' && (
        <HeroSection
          onStartCourse={() => {
            const el = document.getElementById('curriculum-workspace');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenBlueprint={() => setActiveTab('blueprint')}
          onOpenDefense={() => setActiveTab('defense')}
          completedLessonsCount={completedLessons.length}
        />
      )}

      {/* Main Content Workspace */}
      <main id="curriculum-workspace" className="flex-1">
        {activeTab === 'curriculum' && (
          <CourseCurriculumView
            completedLessons={completedLessons}
            onToggleCompleteLesson={handleToggleCompleteLesson}
            onTakeQuiz={() => setActiveTab('exam')}
            onOpenBlueprint={() => setActiveTab('blueprint')}
          />
        )}

        {activeTab === 'study-guide' && (
          <StudyGuideView />
        )}

        {activeTab === 'blueprint' && (
          <BlueprintStudio />
        )}

        {activeTab === 'defense' && (
          <DefenseSimulator />
        )}

        {activeTab === 'exam' && (
          <FinalExamView
            onExamPassed={handleExamPassed}
            onOpenCurriculum={() => setActiveTab('curriculum')}
          />
        )}
      </main>

      {/* Official ASCENDIX CONSULTING Publishing Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/80 text-xs">
            <div>
              <div className="font-bold text-slate-900 dark:text-white font-display text-sm tracking-tight">
                PUBLISHED BY ASCENDIX CONSULTING
              </div>
              <div className="text-slate-600 dark:text-slate-400 mt-0.5">
                Written and Published by <span className="font-semibold text-slate-800 dark:text-slate-200">Ihtishamul Haque Naeem</span> (Chairman, Seerat Academy Foundation)
              </div>
              <a
                href="https://seeratfoundation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 dark:text-amber-400 font-medium underline inline-flex items-center gap-1 mt-0.5"
              >
                <span>https://seeratfoundation.com</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <button 
                onClick={() => setActiveTab('curriculum')}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Lessons (6)
              </button>
              <button 
                onClick={() => setActiveTab('study-guide')}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Publishing Profile & Ethics
              </button>
              <button 
                onClick={() => setIsExportOpen(true)}
                className="font-semibold text-amber-600 hover:text-amber-700 dark:text-amber-400 transition-colors"
              >
                Download Full Markdown Course (.md)
              </button>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 dark:text-slate-500 font-mono">
            <div>
              Professionalism · Knowledge · Quality · Trust · Innovation · Educational Excellence
            </div>
            <div>
              Persuasion & Influence Masterclass · Executive Publishing
            </div>
          </div>
        </div>
      </footer>

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
