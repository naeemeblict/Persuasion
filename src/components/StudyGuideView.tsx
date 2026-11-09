import React, { useState } from 'react';
import { 
  ETHICS_TEST_QUESTIONS, 
  COURSE_GLOSSARY, 
  COURSE_FAQ, 
  AUTHORITATIVE_REFERENCES 
} from '../data/courseData';
import { 
  Compass, 
  ShieldCheck, 
  BookOpen, 
  HelpCircle, 
  Award, 
  CheckCircle, 
  FileText,
  Search,
  ExternalLink
} from 'lucide-react';

export const StudyGuideView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'publisher' | 'ethics' | 'glossary' | 'faq' | 'capstone' | 'references'>('publisher');
  const [glossarySearch, setGlossarySearch] = useState<string>('');

  const filteredGlossary = COURSE_GLOSSARY.filter(item => 
    item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.def.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
          <Compass className="w-3.5 h-3.5" />
          <span>Learner Companion · Official Publishing Information</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
          Course Study Guide & Resources
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Published by <strong className="font-semibold text-slate-900 dark:text-white">ASCENDIX CONSULTING</strong> · Written and Published by <strong className="font-semibold text-slate-900 dark:text-white">Ihtishamul Haque Naeem</strong> (Chairman, Seerat Academy Foundation).
        </p>
      </div>

      {/* Sub-navigation tabs */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 overflow-x-auto">
        {[
          { key: 'publisher', label: 'Publisher & Author Profile', icon: Award },
          { key: 'ethics', label: 'Ethics & Best Practices', icon: ShieldCheck },
          { key: 'glossary', label: 'Psychology Glossary', icon: BookOpen },
          { key: 'faq', label: 'Frequently Asked Questions', icon: HelpCircle },
          { key: 'capstone', label: 'Capstone Project Brief', icon: FileText },
          { key: 'references', label: 'Authoritative Citations', icon: Compass }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveSubTab(tab.key as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Sub-Tab 0: Official Publisher & Author Profile */}
      {activeSubTab === 'publisher' && (
        <div className="space-y-8">
          {/* Official Publishing Identity Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
              <div>
                <span className="text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider font-semibold block">
                  Official Publishing & Editorial Identity
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1 font-display">
                  ASCENDIX CONSULTING
                </h3>
              </div>

              <a
                href="https://seeratfoundation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>Visit seeratfoundation.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mandatory Publishing Credit Block */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-mono leading-relaxed mb-6">
              <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-2">
                Mandatory Publishing Credit
              </span>
              <div className="font-bold text-slate-900 dark:text-white">
                PUBLISHED BY
              </div>
              <div className="font-extrabold text-amber-700 dark:text-amber-400 text-base mb-2 font-display">
                ASCENDIX CONSULTING
              </div>
              <div className="text-slate-700 dark:text-slate-300">
                Written and Published by
              </div>
              <div className="font-bold text-slate-900 dark:text-white text-base">
                Ihtishamul Haque Naeem
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Chairman, Seerat Academy Foundation
              </div>
              <div className="mt-2 text-amber-700 dark:text-amber-400 underline font-semibold">
                https://seeratfoundation.com
              </div>
            </div>

            {/* Brand Positioning & Values */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Brand Values
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Professionalism | Knowledge | Quality | Trust | Innovation | Educational Excellence
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Publishing Scope & Editorial Standards
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <strong className="block text-slate-900 dark:text-white mb-1">Educational Development</strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      Comprehensive courses, textbooks, and interactive executive learning curricula.
                    </span>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <strong className="block text-slate-900 dark:text-white mb-1">Academic Integrity</strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      Verifiable citations, authentic research references, and clear distinction between theory and hypothetical scenarios.
                    </span>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <strong className="block text-slate-900 dark:text-white mb-1">Practical Skill Excellence</strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      Transforming behavioral science and technology into actionable workplace tools.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 1: Ethics & Best Practices */}
      {activeSubTab === 'ethics' && (
        <div className="space-y-8">
          {/* The 3-Question Ethics Test */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                The Golden Rule: The 3-Question Ethics Test
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Dr. Robert Cialdini emphasizes that persuasion techniques are double-edged swords. Used ethically, they help people make wise choices that create mutual benefit. Used manipulatively, they exploit human vulnerabilities and destroy long-term trust. Run this 3-question test before applying any principle:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ETHICS_TEST_QUESTIONS.map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center font-mono mb-2">
                    0{item.id}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {item.question}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Memory Aid Table */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
              Quick Reference: The Six Principles Memory Matrix
            </h3>

            <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Principle</th>
                    <th className="py-2.5 px-3">Core Question</th>
                    <th className="py-2.5 px-3">Primary Ethical Trigger</th>
                    <th className="py-2.5 px-3">Self-Defense Key</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold">01</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Reciprocation</td>
                    <td className="py-2.5 px-3">Who do I owe a favor to?</td>
                    <td className="py-2.5 px-3">Give value or concessions first</td>
                    <td className="py-2.5 px-3">Relabel sales tricks as devices, not gifts</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold">02</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Consistency</td>
                    <td className="py-2.5 px-3">What have I already said or done?</td>
                    <td className="py-2.5 px-3">Active, public, voluntary commitments</td>
                    <td className="py-2.5 px-3">Ask: "Knowing this now, would I still agree?"</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold">03</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Social Proof</td>
                    <td className="py-2.5 px-3">What are peers like me doing?</td>
                    <td className="py-2.5 px-3">Peer similarity & majority momentum</td>
                    <td className="py-2.5 px-3">Verify crowd data isn't artificially faked</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold">04</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Liking</td>
                    <td className="py-2.5 px-3">Do I know and like this person?</td>
                    <td className="py-2.5 px-3">Similarity, compliments & cooperation</td>
                    <td className="py-2.5 px-3">Separate the charming person from the deal</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold">05</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Scarcity</td>
                    <td className="py-2.5 px-3">What am I at risk of losing?</td>
                    <td className="py-2.5 px-3">Loss framing & genuine deadlines</td>
                    <td className="py-2.5 px-3">Remember: scarce items don't function better</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono font-bold">06</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">Authority</td>
                    <td className="py-2.5 px-3">What does a credible expert say?</td>
                    <td className="py-2.5 px-3">3rd-party intro & drawback-then-however</td>
                    <td className="py-2.5 px-3">Ask: "Are they truly an expert on THIS topic?"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 2: Psychology Glossary */}
      {activeSubTab === 'glossary' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Course Glossary & Essential Terminology
            </h3>
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                placeholder="Filter terminology..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredGlossary.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
              >
                <div className="font-bold text-xs text-slate-900 dark:text-white mb-1">
                  {item.term}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.def}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-Tab 3: FAQ */}
      {activeSubTab === 'faq' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {COURSE_FAQ.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5">
                  Q: {faq.q}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  A: {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-Tab 4: Capstone Project Brief */}
      {activeSubTab === 'capstone' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
              <span>Culminating Milestone</span>
              <span aria-hidden="true">·</span>
              <span>Rubric-Graded</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Capstone Project: Stakeholder Persuasion & Defense Portfolio
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Deliver an end-to-end 360-degree persuasion campaign integrating all six principles, along with a personal manipulation defense playbook.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
                Part A: 6-Principle Proposal Campaign (500–700 words)
              </h4>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>• <strong>Stage 1 (Pre-Pitch):</strong> Reciprocation (value deposit) + Liking (similarity, praise, cooperation).</li>
                <li>• <strong>Stage 2 (The Pitch):</strong> Authority (credentials + honesty) + Social Proof (peer similarity).</li>
                <li>• <strong>Stage 3 (Closing):</strong> Scarcity (loss frame + constraint) + Consistency (voluntary action).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
                Part B: Personal Defense Playbook (300–400 words)
              </h4>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>• 3 real-world manipulation scenarios you experienced (sales, work, negotiations).</li>
                <li>• Analysis of the subconscious shortcut that felt difficult to resist.</li>
                <li>• Exact verbal script and counter-move you will execute in the future.</li>
              </ul>
            </div>
          </div>

          {/* Rubric Table */}
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
              Evaluation Rubric Matrix
            </h4>
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                  <tr>
                    <th className="py-2 px-3">Criteria</th>
                    <th className="py-2 px-3">Distinction Standard (90–100%)</th>
                    <th className="py-2 px-3">Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">6 Principles Coverage</td>
                    <td className="py-2 px-3">Accurately weaves all 6 principles seamlessly across the 3 campaign stages.</td>
                    <td className="py-2 px-3 font-mono font-bold">35%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">Scientific Understanding</td>
                    <td className="py-2 px-3">Explicitly explains why each shortcut works (loss aversion, reactance, self-image).</td>
                    <td className="py-2 px-3 font-mono font-bold">20%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">Self-Defense Rigor</td>
                    <td className="py-2 px-3">Provides calm, realistic, actionable counter-phrases for 3 distinct manipulation traps.</td>
                    <td className="py-2 px-3 font-mono font-bold">25%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">Ethical Integrity</td>
                    <td className="py-2 px-3">100% compliant with 3-question ethics test: zero fake scarcity or false claims.</td>
                    <td className="py-2 px-3 font-mono font-bold">10%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">Clarity & Simple English</td>
                    <td className="py-2 px-3">Clear, natural, professional English free of academic fluff or buzzwords.</td>
                    <td className="py-2 px-3 font-mono font-bold">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 5: Authoritative Citations */}
      {activeSubTab === 'references' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Verified Academic & Professional Citations
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            In compliance with instructional design standards, all research findings, citations, and experiments are grounded in verified scientific literature.
          </p>

          <div className="space-y-4">
            {AUTHORITATIVE_REFERENCES.map((ref, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {ref.author} ({ref.year})
                  </span>
                  <span className="italic text-slate-700 dark:text-slate-300">
                    {ref.title}
                  </span>
                </div>
                <div className="text-slate-500 dark:text-slate-400 font-mono text-[11px] mb-2">
                  Published by: {ref.publisher}
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ref.citation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
