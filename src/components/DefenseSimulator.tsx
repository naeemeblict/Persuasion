import React, { useState } from 'react';
import { MANIPULATION_DEFENSE_SCENARIOS } from '../data/courseData';
import { ShieldAlert, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw } from 'lucide-react';

export const DefenseSimulator: React.FC = () => {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState<number>(0);
  const [selectedResponses, setSelectedResponses] = useState<Record<string, 'vulnerable' | 'aggressive' | 'cialdini'>>({});
  const [score, setScore] = useState<number>(0);

  const scenario = MANIPULATION_DEFENSE_SCENARIOS[activeScenarioIndex];
  const currentResponse = selectedResponses[scenario.id];

  const handleSelect = (choice: 'vulnerable' | 'aggressive' | 'cialdini') => {
    if (!selectedResponses[scenario.id]) {
      if (choice === 'cialdini') {
        setScore(prev => prev + 1);
      }
    }
    setSelectedResponses(prev => ({ ...prev, [scenario.id]: choice }));
  };

  const handleNext = () => {
    if (activeScenarioIndex < MANIPULATION_DEFENSE_SCENARIOS.length - 1) {
      setActiveScenarioIndex(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setActiveScenarioIndex(0);
    setSelectedResponses({});
    setScore(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Interactive Self-Defense Laboratory</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Manipulation Defense Simulator
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
          Fulfill core curriculum outcome #3: <em>"Protect yourself from manipulation and pressured agreement."</em> Test your instincts against high-pressure sales tactics, artificial scarcity, false concessions, and counterfeit authority.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Scenario Navigator */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Scenarios ({activeScenarioIndex + 1}/{MANIPULATION_DEFENSE_SCENARIOS.length})
            </span>
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
              Defense Score: {score} / {MANIPULATION_DEFENSE_SCENARIOS.length}
            </span>
          </div>

          <div className="space-y-1.5">
            {MANIPULATION_DEFENSE_SCENARIOS.map((sc, idx) => {
              const resp = selectedResponses[sc.id];
              const isSelected = activeScenarioIndex === idx;

              return (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenarioIndex(idx)}
                  className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                    isSelected
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-400 text-emerald-950 dark:text-emerald-200 font-semibold'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="truncate mr-2">
                    <span className="font-mono text-slate-400 dark:text-slate-500 mr-1.5">0{idx + 1}.</span>
                    <span>{sc.title}</span>
                  </div>
                  {resp === 'cialdini' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  ) : resp ? (
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleReset}
              className="w-full py-2 px-3 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Scenarios</span>
            </button>
          </div>
        </div>

        {/* Right Column: Active Simulation Arena */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          <div className="pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
              <span>Trap Category:</span>
              <span className="font-bold">{scenario.principle}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Scenario 0{activeScenarioIndex + 1}: {scenario.title}
            </h3>
          </div>

          {/* Scenario Context Box */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
            "{scenario.context}"
          </div>

          {/* Decision Choices */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              What is your immediate response?
            </h4>

            {/* Option A: Vulnerable */}
            <button
              onClick={() => handleSelect('vulnerable')}
              className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all ${
                currentResponse === 'vulnerable'
                  ? 'border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="font-semibold mb-1 text-slate-900 dark:text-white">
                Option A: {scenario.badResponse.slice(0, 50)}...
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {scenario.badResponse}
              </div>
            </button>

            {/* Option B: Cialdini Defense (The Master Move) */}
            <button
              onClick={() => handleSelect('cialdini')}
              className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all ${
                currentResponse === 'cialdini'
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 ring-1 ring-emerald-500'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="font-semibold mb-1 text-slate-900 dark:text-white">
                Option B: Execute Cialdini Self-Defense Protocol
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {scenario.goodResponse}
              </div>
            </button>
          </div>

          {/* Feedback & Deconstruction */}
          {currentResponse && (
            <div className={`mt-6 p-4 rounded-xl border text-xs leading-relaxed ${
              currentResponse === 'cialdini'
                ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                : 'bg-amber-50/70 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200'
            }`}>
              <div className="font-bold text-sm mb-1 flex items-center gap-2">
                {currentResponse === 'cialdini' ? (
                  <>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Flawless Defense (+25 XP)</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Subconscious Shortcut Trap Sprung!</span>
                  </>
                )}
              </div>
              <p className="mt-1">
                <strong>Why This Counter-Move Works:</strong> {scenario.whyItWorks}
              </p>
            </div>
          )}

          {/* Stepper Footer */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Scenario {activeScenarioIndex + 1} of {MANIPULATION_DEFENSE_SCENARIOS.length}
            </span>

            {activeScenarioIndex < MANIPULATION_DEFENSE_SCENARIOS.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>Next Scenario</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                All Scenarios Completed!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
