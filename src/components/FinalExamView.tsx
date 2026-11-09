import React, { useState } from 'react';
import { COMPREHENSIVE_FINAL_EXAM, QuizQuestion } from '../data/courseData';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';

interface FinalExamViewProps {
  onExamPassed: (score: number) => void;
  onOpenCurriculum: () => void;
}

export const FinalExamView: React.FC<FinalExamViewProps> = ({
  onExamPassed,
  onOpenCurriculum
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('Executive Learner');

  const question: QuizQuestion = COMPREHENSIVE_FINAL_EXAM[currentQuestionIndex];
  const selectedAnswer = answers[question.id];

  const handleSelectOption = (index: number) => {
    if (isFinished) return;
    setAnswers(prev => ({ ...prev, [question.id]: index }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < COMPREHENSIVE_FINAL_EXAM.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFinish = () => {
    setIsFinished(true);
    const correctCount = COMPREHENSIVE_FINAL_EXAM.filter(
      q => answers[q.id] === q.correctIndex
    ).length;
    if (correctCount >= 16) {
      onExamPassed(correctCount);
    }
  };

  const handleRetake = () => {
    setAnswers({});
    setIsFinished(false);
    setCurrentQuestionIndex(0);
  };

  const answeredCount = Object.keys(answers).length;
  const correctCount = COMPREHENSIVE_FINAL_EXAM.filter(
    q => answers[q.id] === q.correctIndex
  ).length;
  const scorePercent = Math.round((correctCount / COMPREHENSIVE_FINAL_EXAM.length) * 100);
  const isPassed = correctCount >= 16;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {!isFinished ? (
        /* ACTIVE EXAM RUNNER */
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          {/* Header & Progress */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                <span>Course Assessment</span>
                <span aria-hidden="true">·</span>
                <span>Passing Grade: 80% (16/20)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                Final Comprehensive Examination
              </h2>
            </div>

            <div className="text-right">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">
                Answered: {answeredCount} / {COMPREHENSIVE_FINAL_EXAM.length}
              </span>
              <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                Question {currentQuestionIndex + 1} of {COMPREHENSIVE_FINAL_EXAM.length}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-6">
            <div 
              className="bg-amber-600 h-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / COMPREHENSIVE_FINAL_EXAM.length) * 100}%` }}
            />
          </div>

          {/* Question Box */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Topic: {question.principle}
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentQuestionIndex + 1}. {question.question}
            </h3>

            {/* Options */}
            <div className="space-y-2.5 pt-2">
              {question.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-950 dark:text-amber-200 font-medium ring-1 ring-amber-500'
                        : 'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full border text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected 
                        ? 'border-amber-600 bg-amber-600 text-white font-bold'
                        : 'border-slate-300 dark:border-slate-600 text-slate-500'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stepper Buttons */}
          <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                currentQuestionIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            {currentQuestionIndex < COMPREHENSIVE_FINAL_EXAM.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Next Question</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Submit & View Results</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* RESULTS & CERTIFICATE / REVIEW VIEW */
        <div className="space-y-8">
          {/* Result Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border text-center ${
            isPassed 
              ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800' 
              : 'bg-amber-50/60 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800'
          }`}>
            <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-3 shadow-sm bg-white dark:bg-slate-900">
              {isPassed ? (
                <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Award className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              )}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {isPassed ? 'Examination Passed: Certified Practitioner!' : 'Score: Needs Additional Review'}
            </h2>

            <div className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              {scorePercent}%
              <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-2">
                ({correctCount} of {COMPREHENSIVE_FINAL_EXAM.length} correct)
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
              {isPassed 
                ? 'Congratulations! You have demonstrated comprehensive mastery of the six principles of persuasion, behavioral psychology heuristics, and ethical self-defense.'
                : 'The curriculum standard requires 80% (16/20) to certify. Review the question explanations below and retake the exam when ready.'}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleRetake}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Examination</span>
              </button>
              <button
                onClick={onOpenCurriculum}
                className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-amber-600 text-white hover:bg-slate-800 text-xs font-semibold flex items-center gap-1.5"
              >
                <span>Back to Lessons</span>
              </button>
            </div>
          </div>

          {/* Certificate of Completion Preview (If Passed) */}
          {isPassed && (
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400/80 dark:border-amber-500/60 shadow-lg text-center relative overflow-hidden">
              <div className="absolute top-3 right-3 text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest opacity-90">
                ASCENDIX CONSULTING
              </div>

              <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 mx-auto flex items-center justify-center mb-2 font-display text-lg font-bold border border-amber-300 dark:border-amber-700">
                AC
              </div>

              <span className="text-xs uppercase font-mono tracking-widest text-slate-500 dark:text-slate-400">
                Executive Certificate of Mastery
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1 font-display">
                Persuasion & Ethical Influence
              </h3>

              <div className="text-[11px] font-mono text-amber-700 dark:text-amber-400 font-semibold mt-0.5">
                PUBLISHED BY ASCENDIX CONSULTING
              </div>

              <div className="my-4 max-w-sm mx-auto">
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter Your Full Name"
                  className="w-full text-center px-3 py-1.5 border-b border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white font-bold text-lg focus:outline-hidden"
                />
                <span className="text-[10px] text-slate-400 block mt-1">
                  (Type your name to personalize your credential)
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
                Has satisfactorily demonstrated international-level competency in the six core principles of behavioral influence: Reciprocation, Consistency, Social Proof, Liking, Scarcity, and Authority, with proven capability in manipulation defense.
              </p>

              {/* Official Publishing & Authority Signature */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-xs">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block font-bold">
                    Official Publishing Signature
                  </span>
                  <div className="font-bold text-slate-900 dark:text-white mt-0.5">
                    ASCENDIX CONSULTING
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Written & Published by <span className="font-semibold">Ihtishamul Haque Naeem</span>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                    Chairman, Seerat Academy Foundation
                  </div>
                  <a
                    href="https://seeratfoundation.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 dark:text-amber-400 underline text-[11px] block mt-1"
                  >
                    https://seeratfoundation.com
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block font-bold">
                    Credential Verification
                  </span>
                  <div className="space-y-1 font-mono text-[11px] text-slate-600 dark:text-slate-300">
                    <div>Exam Score: <span className="font-bold text-slate-900 dark:text-white">{scorePercent}% (Passed)</span></div>
                    <div>Curriculum Standard: <span className="font-bold">XP Level 10</span></div>
                    <div>Issue Date: {new Date().toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Detailed Question Review */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
              Comprehensive Question Review & Explanations
            </h3>

            <div className="space-y-4">
              {COMPREHENSIVE_FINAL_EXAM.map((q, idx) => {
                const userAns = answers[q.id];
                const isCorrect = userAns === q.correctIndex;

                return (
                  <div key={q.id} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {idx + 1}. {q.question}
                      </span>
                      {isCorrect ? (
                        <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold shrink-0">
                          Correct
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 font-semibold shrink-0">
                          Incorrect
                        </span>
                      )}
                    </div>

                    <div className="text-slate-600 dark:text-slate-400 mb-1">
                      <strong>Your Answer:</strong> {userAns !== undefined ? q.options[userAns] : 'Not answered'}
                    </div>

                    {!isCorrect && (
                      <div className="text-emerald-800 dark:text-emerald-300 font-semibold mb-1">
                        <strong>Correct Answer:</strong> {q.options[q.correctIndex]}
                      </div>
                    )}

                    <div className="text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-1.5 mt-1.5 italic">
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
