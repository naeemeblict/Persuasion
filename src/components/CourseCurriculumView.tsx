import React, { useState } from 'react';
import { 
  COURSE_METADATA, 
  COURSE_LESSONS, 
  COURSE_OUTCOMES, 
  CourseLesson,
  LessonKnowledgeCheckQuestion 
} from '../data/courseData';
import { 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  ShieldAlert, 
  Lightbulb, 
  FileText, 
  Check, 
  X, 
  ArrowRight, 
  BookmarkCheck,
  HelpCircle,
  Briefcase,
  UserCheck,
  Layers,
  Sparkles
} from 'lucide-react';

interface CourseCurriculumViewProps {
  completedLessons: string[];
  onToggleCompleteLesson: (lessonId: string) => void;
  onTakeQuiz: () => void;
  onOpenBlueprint: () => void;
}

export const CourseCurriculumView: React.FC<CourseCurriculumViewProps> = ({
  completedLessons,
  onToggleCompleteLesson,
  onTakeQuiz,
  onOpenBlueprint
}) => {
  const [selectedItem, setSelectedItem] = useState<string>('overview');
  // State for interactive knowledge check questions within lessons:
  // Key: question id -> selected answer string
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [submittedQuizQuestions, setSubmittedQuizQuestions] = useState<Record<string, boolean>>({});

  const activeLesson: CourseLesson | undefined = COURSE_LESSONS.find(l => l.id === selectedItem);

  const handleSelectAnswer = (questionId: string, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
    setSubmittedQuizQuestions(prev => ({ ...prev, [questionId]: true }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Lesson Directory & Progression Nav */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 lg:sticky lg:top-24 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Curriculum Structure
              </span>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                Module 01: Six Principles
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-amber-700 dark:text-amber-400 tabular-nums">
              {completedLessons.length} / 6 Complete
            </span>
          </div>

          <div className="space-y-1">
            {/* Overview / Curriculum Map */}
            <button
              onClick={() => setSelectedItem('overview')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                selectedItem === 'overview'
                  ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>00. Course Overview & Analysis</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            {/* Individual Lessons */}
            {COURSE_LESSONS.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id);
              const isSelected = selectedItem === lesson.id;

              return (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedItem(lesson.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                    isSelected
                      ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleCompleteLesson(lesson.id);
                      }}
                      className="cursor-pointer text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 shrink-0"
                      title={isCompleted ? "Mark as uncompleted" : "Mark as completed"}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Circle className="w-4 h-4" />
                      )}
                    </span>
                    <span className="truncate">
                      0{lesson.number}. {lesson.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono opacity-70 shrink-0 ml-1">
                    {lesson.number * 4 + 1}m
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick CTA to Interactive Tools */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <button
              onClick={onTakeQuiz}
              className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>Take Final Exam (20 Qs)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenBlueprint}
              className="w-full py-2 px-3 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Open Blueprint Studio</span>
            </button>
          </div>
        </div>

        {/* Right Column: Detailed Reader Container */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          {selectedItem === 'overview' ? (
            /* OVERVIEW & CURRICULUM MAP VIEW */
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
                  <span>Curriculum DNA & Analysis</span>
                  <span aria-hidden="true">·</span>
                  <span>Robert Cialdini Master Framework</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
                  {COURSE_METADATA.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 italic">
                  {COURSE_METADATA.subtitle}
                </p>

                {/* Official Publishing Imprint Card */}
                <div className="mt-4 p-4 rounded-xl border border-amber-200/90 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/60 dark:border-amber-900/40 pb-2 mb-2">
                    <span className="font-mono text-[11px] font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                      Official Publishing Imprint
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      Educational Publication Standard
                    </span>
                  </div>
                  <div className="space-y-1 text-slate-700 dark:text-slate-300">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">PUBLISHED BY: </span>
                      <span className="font-semibold text-amber-700 dark:text-amber-400">ASCENDIX CONSULTING</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">Written and Published by: </span>
                      <span>Ihtishamul Haque Naeem</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Chairman, Seerat Academy Foundation
                    </div>
                    <div className="pt-1">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">Official Website: </span>
                      <a
                        href="https://seeratfoundation.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 dark:text-amber-400 underline font-semibold inline-flex items-center gap-1"
                      >
                        <span>https://seeratfoundation.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decision Model Architectural Visual */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 relative bg-slate-100 dark:bg-slate-800 aspect-16/9">
                <img
                  src={COURSE_METADATA.decisionModelImage}
                  alt="Six interconnected psychological decision nodes model"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    Cognitive Pathway Architecture
                  </span>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Subconscious mental shortcuts: Reciprocation, Consistency, Social Proof, Liking, Scarcity, and Authority
                  </p>
                </div>
              </div>

              {/* Course Analysis DNA */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  1. Curriculum Analysis & Scientific Rationale
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  In modern life, people process millions of bytes of information daily. To survive and function efficiently, the human subconscious mind relies on evolved mental shortcuts (what ethologists call <strong>fixed-action patterns</strong> or <strong>heuristics</strong>). When a specific trigger appears, an automatic behavioral pattern plays.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  By understanding these six subconscious triggers, professionals can craft messages that fit how human decision-makers naturally evaluate ideas—while building active self-defense shields against manipulative actors.
                </p>
              </div>

              {/* 5 Core Learning Outcomes */}
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  2. Core Learning Outcomes ("What You Learn")
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COURSE_OUTCOMES.map((outcome) => (
                    <div 
                      key={outcome.id}
                      className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800"
                    >
                      <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 block mb-1">
                        Outcome {outcome.id}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {outcome.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                        {outcome.description}
                      </p>
                      <div className="mt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        Target: {outcome.competency}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Curriculum Coverage Checklist */}
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  3. Complete Curriculum Coverage Checklist
                </h3>
                <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                      <tr>
                        <th className="py-2 px-3">Original Curriculum Item</th>
                        <th className="py-2 px-3">Type</th>
                        <th className="py-2 px-3">Estimated Time</th>
                        <th className="py-2 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900 dark:text-white">Module 01: The six principles of persuasion</td>
                        <td className="py-2 px-3">Core Module</td>
                        <td className="py-2 px-3">27m Baseline</td>
                        <td className="py-2 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">100% Covered</td>
                      </tr>
                      {COURSE_LESSONS.map(l => (
                        <tr key={l.id}>
                          <td className="py-2 px-3">Lesson 0{l.number}: {l.title}</td>
                          <td className="py-2 px-3">Detailed Lesson</td>
                          <td className="py-2 px-3">{l.estimatedTime.split('/')[0]}</td>
                          <td className="py-2 px-3 text-emerald-600 dark:text-emerald-400 font-medium">Complete</td>
                        </tr>
                      ))}
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900 dark:text-white">Final Comprehensive Assessment</td>
                        <td className="py-2 px-3">Exam & Capstone</td>
                        <td className="py-2 px-3">60m Active</td>
                        <td className="py-2 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">Complete</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CTA to start Lesson 1 */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Ready to begin the foundational lessons?
                </span>
                <button
                  onClick={() => setSelectedItem('lesson-01')}
                  className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Start Lesson 01: Reciprocation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : activeLesson ? (
            /* DETAILED LESSON VIEW */
            <div className="space-y-8">
              {/* Lesson Header */}
              <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                    <span>{activeLesson.moduleName}</span>
                    <span aria-hidden="true">·</span>
                    <span>Lesson 0{activeLesson.number}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {activeLesson.estimatedTime}
                    </span>
                    <button
                      onClick={() => onToggleCompleteLesson(activeLesson.id)}
                      className={`px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                        completedLessons.includes(activeLesson.id)
                          ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {completedLessons.includes(activeLesson.id) ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Completed</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-3.5 h-3.5" />
                          <span>Mark Complete (+50 XP)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Principle 0{activeLesson.number}: {activeLesson.title}
                </h2>

                <div className="mt-3 p-3 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs">
                  <span className="font-semibold text-amber-800 dark:text-amber-300">
                    Core Subconscious Question:
                  </span>{' '}
                  <span className="text-slate-800 dark:text-slate-200 italic font-serif text-sm">
                    "{activeLesson.coreQuestion}"
                  </span>
                  <div className="mt-1 text-slate-600 dark:text-slate-400">
                    <span className="font-semibold">Trigger:</span> {activeLesson.principleTrigger}
                  </div>
                </div>
              </div>

              {/* 1. Measurable Learning Objectives */}
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <BookmarkCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Learning Objectives</span>
                </h3>
                <ul className="grid grid-cols-1 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {activeLesson.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-400 flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Simple Introduction */}
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Introduction
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeLesson.introduction}
                </p>
              </div>

              {/* 3. Detailed Explanation with Headings */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Detailed Explanation: {activeLesson.detailedExplanation.heading}
                </h3>
                <div className="space-y-4">
                  {activeLesson.detailedExplanation.subsections.map((sub, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                        {sub.subheading}
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        {sub.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Practical Real-World Examples */}
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Real-World Scenarios</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeLesson.examples.map((ex, idx) => (
                    <div key={idx} className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                          <span className="font-semibold uppercase text-amber-700 dark:text-amber-400">
                            {ex.type === 'everyday' ? 'Everyday / Personal' : 'Workplace / Stakeholder'}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                          {ex.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mb-2 italic">
                          "{ex.scenario}"
                        </p>
                        {ex.before && (
                          <div className="text-xs text-rose-700 dark:text-rose-400 mb-2 bg-rose-50/60 dark:bg-rose-950/20 p-2 rounded">
                            <span className="font-bold">Before:</span> {ex.before}
                          </div>
                        )}
                        <div className="text-xs text-emerald-800 dark:text-emerald-300 mb-2 bg-emerald-50/60 dark:bg-emerald-950/20 p-2 rounded">
                          <span className="font-bold">With Principle:</span> {ex.after}
                        </div>
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-2 mt-2">
                        Takeaway: {ex.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Defense Strategy Box (How to Protect Yourself) */}
              <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/20">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-bold text-sm mb-2">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>Self-Defense Against Manipulation: {activeLesson.defenseStrategy.tacticName}</span>
                </div>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div>
                    <strong className="text-slate-900 dark:text-white">How Manipulators Exploit It:</strong> {activeLesson.defenseStrategy.howItWorks}
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">The Defense Rule:</strong> {activeLesson.defenseStrategy.defenseRule}
                  </div>
                  <div className="p-2.5 rounded-md bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 font-mono text-emerald-800 dark:text-emerald-300 mt-2">
                    <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block mb-1">Exact Words to Say:</span>
                    "{activeLesson.defenseStrategy.exactWordsToSay}"
                  </div>
                </div>
              </div>

              {/* 6. Step-by-Step Practice */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Step-by-Step Practice: {activeLesson.stepByStepPractice.title}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                  <strong>Why:</strong> {activeLesson.stepByStepPractice.whyToDoIt}
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {activeLesson.stepByStepPractice.steps.map((st, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="font-mono font-bold text-amber-700 dark:text-amber-400 shrink-0">Step {idx + 1}:</span>
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs">
                  <div className="text-rose-700 dark:text-rose-400">
                    <span className="font-bold">Common Mistake:</span> {activeLesson.stepByStepPractice.commonMistake}
                  </div>
                  <div className="text-emerald-700 dark:text-emerald-400 mt-1">
                    <span className="font-bold">Correction:</span> {activeLesson.stepByStepPractice.correction}
                  </div>
                </div>
              </div>

              {/* 7. Key Takeaways & Summary */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Key Takeaways
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {activeLesson.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
                  <strong>Lesson Summary:</strong> {activeLesson.summary}
                </p>
              </div>

              {/* 8. Interactive Knowledge Check */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Knowledge Check: Test Your Understanding
                  </h3>
                </div>

                <div className="space-y-5">
                  {activeLesson.knowledgeCheck.map((kc, idx) => {
                    const selected = quizAnswers[kc.id];
                    const isSubmitted = submittedQuizQuestions[kc.id];
                    const isCorrect = selected === kc.correctAnswer;

                    return (
                      <div key={kc.id} className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                        <div className="text-xs font-semibold text-slate-900 dark:text-white mb-2">
                          {idx + 1}. {kc.question}
                        </div>

                        {kc.options && (
                          <div className="space-y-1.5">
                            {kc.options.map((opt) => (
                              <button
                                key={opt}
                                onClick={() => handleSelectAnswer(kc.id, opt)}
                                className={`w-full text-left p-2 rounded text-xs transition-colors border ${
                                  selected === opt
                                    ? isCorrect
                                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-900 dark:text-emerald-200 font-medium'
                                      : 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 text-rose-900 dark:text-rose-200 font-medium'
                                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}

                        {isSubmitted && (
                          <div className={`mt-2 p-2.5 rounded text-xs leading-relaxed ${
                            isCorrect 
                              ? 'bg-emerald-100/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200' 
                              : 'bg-amber-100/70 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200'
                          }`}>
                            <div className="font-bold mb-0.5">
                              {isCorrect ? '✓ Correct!' : `Correct Answer: ${kc.correctAnswer}`}
                            </div>
                            <div>{kc.explanation}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 9. Practical Assignment Brief */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Practical Assignment: {activeLesson.practicalAssignment.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 mb-3">
                  {activeLesson.practicalAssignment.instructions}
                </p>
                <div className="text-xs font-mono text-slate-600 dark:text-slate-400 mb-2">
                  Expected Output: {activeLesson.practicalAssignment.expectedOutput}
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Evaluation Rubric Criteria:
                </div>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  {activeLesson.practicalAssignment.criteria.map((cr, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-amber-600 dark:text-amber-400">•</span>
                      <span>{cr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation Footer between Lessons */}
              <div className="pt-6 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                {activeLesson.number > 1 ? (
                  <button
                    onClick={() => setSelectedItem(`lesson-0${activeLesson.number - 1}`)}
                    className="px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    ← Previous: Lesson 0{activeLesson.number - 1}
                  </button>
                ) : (
                  <div />
                )}

                {activeLesson.number < 6 ? (
                  <button
                    onClick={() => {
                      if (!completedLessons.includes(activeLesson.id)) {
                        onToggleCompleteLesson(activeLesson.id);
                      }
                      setSelectedItem(`lesson-0${activeLesson.number + 1}`);
                    }}
                    className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-1.5"
                  >
                    <span>Next: Lesson 0{activeLesson.number + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={onTakeQuiz}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5"
                  >
                    <span>Proceed to Final Examination</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
