import React from 'react';
import { COURSE_METADATA } from '../data/courseData';
import { ArrowRight, BookOpen, Sparkles, Shield, Clock, Award, Compass } from 'lucide-react';

interface HeroSectionProps {
  onStartCourse: () => void;
  onOpenBlueprint: () => void;
  onOpenDefense: () => void;
  completedLessonsCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartCourse,
  onOpenBlueprint,
  onOpenDefense,
  completedLessonsCount
}) => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Two-column hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet text kicker with typographic separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-3 tracking-wide uppercase font-mono">
              <span>ASCENDIX CONSULTING</span>
              <span aria-hidden="true">·</span>
              <span>Official Publication</span>
              <span aria-hidden="true">·</span>
              <span>Ihtishamul Haque Naeem</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance font-display">
              Master the Art of Persuasion & Ethical Influence
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Transform your proposals into decisive stakeholder action. Learn why human minds rely on automatic subconscious shortcuts—and how to master the six foundational principles: <strong className="text-slate-900 dark:text-slate-100 font-semibold">Reciprocation, Consistency, Social Proof, Liking, Scarcity, and Authority</strong>.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={onStartCourse}
                className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap shrink-0"
              >
                <span>{completedLessonsCount > 0 ? 'Continue Curriculum' : 'Begin Lesson 01: Reciprocation'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBlueprint}
                className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Proposal Blueprint Studio</span>
              </button>

              <button
                onClick={onOpenDefense}
                className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Defense Simulator</span>
              </button>
            </div>

            {/* Official Mandatory Publishing Credit Bar */}
            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Published by ASCENDIX CONSULTING
              </span>
              <span aria-hidden="true">·</span>
              <span>
                Written and Published by <strong className="font-semibold text-slate-900 dark:text-white">Ihtishamul Haque Naeem</strong> (Chairman, Seerat Academy Foundation)
              </span>
              <span aria-hidden="true">·</span>
              <a
                href="https://seeratfoundation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 dark:text-amber-400 font-medium underline inline-flex items-center gap-1"
              >
                <span>seeratfoundation.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Studio Image with Fallback */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl aspect-16/10 lg:aspect-4/3 bg-slate-100 dark:bg-slate-800">
              <img
                src={COURSE_METADATA.heroImage}
                alt="Executive strategy desk with architecture compass and leather-bound notebook"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback container if image fails to render
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold font-mono">
                  ASCENDIX CONSULTING · OFFICIAL PUBLICATION
                </span>
                <p className="text-sm font-medium mt-1 text-slate-100">
                  "These principles are ingrained in our subconscious minds as part of our evolutionary heritage."
                </p>
                <div className="text-xs text-slate-300 mt-1.5 flex flex-wrap items-center gap-x-2">
                  <span>Written & Published by Ihtishamul Haque Naeem</span>
                  <span aria-hidden="true">·</span>
                  <a 
                    href="https://seeratfoundation.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-amber-300 hover:underline"
                  >
                    seeratfoundation.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metadata & Metric Strip Below Hero Split */}
        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Core Modules & Lessons</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1 tabular-nums">
              1 Module · 6 Lessons
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              100% Curriculum Coverage
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Programme Duration</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1 tabular-nums">
              4 to 6 Hours
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              27 Min Video Baseline
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <Compass className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Prerequisites & Depth</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1 tabular-nums">
              XP Level 10
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Simple English · Executive Rigor
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Assessments & Rubrics</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1 tabular-nums">
              20-Q Exam + Capstone
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Instant Rubric Feedback
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
