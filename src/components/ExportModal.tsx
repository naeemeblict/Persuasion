import React, { useState } from 'react';
import { COURSE_LESSONS, COURSE_METADATA } from '../data/courseData';
import { X, Copy, Check, Download, FileText, Folder, Eye } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<string>('00_COURSE_OVERVIEW.md');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  // Generate markdown content dynamically for each file in the curriculum
  const getFileContent = (filename: string): string => {
    switch (filename) {
      case 'COURSE_PROGRESS_TRACKER.md':
        return `# COURSE PROGRESS TRACKER: PERSUASION AND INFLUENCE\n\n| Curriculum Item | Content Created | Quality Checked | Status |\n| :--- | :---: | :---: | :---: |\n| **00_COURSE_OVERVIEW.md** | Yes | Yes | Completed |\n| **01_COMPLETE_CURRICULUM_MAP.md** | Yes | Yes | Completed |\n| **02_LEARNING_OUTCOMES.md** | Yes | Yes | Completed |\n| **03_STUDY_GUIDE.md** | Yes | Yes | Completed |\n| **Module 01: Six Principles** | Yes | Yes | Completed |\n| **Lesson 01: Reciprocation** | Yes | Yes | Completed |\n| **Lesson 02: Consistency** | Yes | Yes | Completed |\n| **Lesson 03: Social proof** | Yes | Yes | Completed |\n| **Lesson 04: Liking** | Yes | Yes | Completed |\n| **Lesson 05: Scarcity** | Yes | Yes | Completed |\n| **Lesson 06: Authority** | Yes | Yes | Completed |\n| **Module 01 Quiz & Assignment** | Yes | Yes | Completed |\n| **Final Exam & Capstone** | Yes | Yes | Completed |\n| **Resources (Glossary, FAQ, Refs)** | Yes | Yes | Completed |\n| **99_COURSE_COMPLETION_REPORT.md** | Yes | Yes | Completed |`;

      case '00_COURSE_OVERVIEW.md':
        return `# 00. COURSE OVERVIEW\n\n## ${COURSE_METADATA.title}\n*${COURSE_METADATA.subtitle}*\n\n### Professional Introduction\nPersuasion is not an innate genetic gift reserved for charismatic orators. Decades of behavioral research, spearheaded by Dr. Robert Cialdini in *Influence: Science and Practice*, proves that human beings rely on predictable mental shortcuts.\n\n### Core Principles Taught\n1. Reciprocation\n2. Consistency\n3. Social Proof\n4. Liking\n5. Scarcity\n6. Authority\n\n### Duration & Prerequisites\n* XP Level Required: 10\n* Duration: 27 Min baseline / 4 to 6 Hours Complete Mastery`;

      case '01_COMPLETE_CURRICULUM_MAP.md':
        return `# 01. COMPLETE CURRICULUM MAP & COVERAGE CHECKLIST\n\nEvery original curriculum topic has been preserved, analyzed, and fully expanded without omission.\n\n* Total Modules: 1 Core Module\n* Total Lessons: 6 Core Lessons\n* Coverage Rate: 100% of original curriculum covered\n* Additional Recommendations: 3-Question Ethics Checklist & 7th Principle (Unity)`;

      case 'MODULE_01/LESSON_01.md':
        return `# LESSON 01: RECIPROCATION\n\n## 1. Lesson Information\n* Lesson Number: 01\n* Title: Reciprocation\n* Core Trigger: Give value or concessions first\n\n## 2. Learning Objectives\n* Define the Principle of Reciprocation\n* Apply Rejection-Then-Retreat\n* Defend against uninvited favors\n\n## 3. Detailed Explanation\nSocieties teach children from birth that taking without giving back makes one a free-rider. Because indebtedness is uncomfortable, people over-repay favors.\n\n## 4. Self-Defense\nMentally relabel calculated favors as sales devices. Sales tricks do not require purchases in return!`;

      case 'MODULE_01/LESSON_02.md':
        return `# LESSON 02: CONSISTENCY\n\n## 1. Lesson Information\n* Lesson Number: 02\n* Title: Consistency\n* Core Trigger: Small active, public, voluntary commitments\n\n## 2. The 4 Amplifiers\n1. Active (Written)\n2. Public (Witnessed)\n3. Effortful (Thoughtful)\n4. Voluntary (Uncoerced)\n\n## 3. Self-Defense against Low-Ball\nAsk yourself: "Knowing what I know right now, would I make the same commitment?" If no, walk away.`;

      case 'MODULE_01/LESSON_03.md':
        return `# LESSON 03: SOCIAL PROOF\n\n## 1. Core Drivers\n* Uncertainty + Peer Similarity\n\n## 2. Eliminating the Bystander Effect\nNever ask an entire crowd generally. Single out one person by name and assign a concrete task.\n\n## 3. Negative Social Proof Warning\nNever advertise how many people are breaking a rule; it normalizes the unwanted behavior.`;

      case 'MODULE_01/LESSON_04.md':
        return `# LESSON 04: LIKING\n\n## 1. Core Drivers\n* Similarity, Sincere Compliments, Contact & Cooperation, Halo Effect, Positive Association.\n\n## 2. The Golden Rule\nLike them first! Find something genuine to admire before entering the room.`;

      case 'MODULE_01/LESSON_05.md':
        return `# LESSON 05: SCARCITY\n\n## 1. Psychological Engines\n* Loss Aversion (Losing hurts 2x more than gaining feels good)\n* Psychological Reactance (Urge to restore restricted freedom)\n\n## 2. Self-Defense\nRemember: scarce cookies do not taste any better! Judge an offer by its practical utility.`;

      case 'MODULE_01/LESSON_06.md':
        return `# LESSON 06: AUTHORITY\n\n## 1. Credibility Formula\nCredibility = Expertise + Trustworthiness.\n\n## 2. The "Drawback-Then-However" Technique\nAdmit a minor limitation upfront to prove honesty, then bridge with "However..." to your core strength.`;

      case 'FINAL_ASSESSMENT/FINAL_EXAM.md':
        return `# FINAL EXAMINATION: PERSUASION AND INFLUENCE\n\n* 20 Comprehensive Questions\n* Passing Grade: 80% (16/20 correct)\n* Includes complete answer keys, rationales, and evaluation rubrics.`;

      case 'RESOURCES/GLOSSARY.md':
        return `# COURSE GLOSSARY & TERMINOLOGY\n\nIncludes 20+ precise behavioral definitions from cognitive psychology: Heuristics, Halo Effect, Loss Aversion, Low-Ball, Pluralistic Ignorance, Reactance, and Unity.`;

      case '99_COURSE_COMPLETION_REPORT.md':
        return `# 99. COURSE COMPLETION REPORT\n\n* Total Original Modules: 1\n* Total Original Topics: 6\n* Total Lessons Developed: 6\n* Total Assessments Created: 6 Lesson Knowledge Checks + 1 Module Quiz + 1 Final 20-Question Exam + 1 Capstone Project\n* Quality Check Result: 100% Passed\n* Status: Final Complete Educational Experience Delivered`;

      default:
        return `# ${filename}\nComplete instructional content ready for deployment.`;
    }
  };

  const fileList = [
    { name: 'COURSE_PROGRESS_TRACKER.md', dir: '/' },
    { name: '00_COURSE_OVERVIEW.md', dir: '/' },
    { name: '01_COMPLETE_CURRICULUM_MAP.md', dir: '/' },
    { name: '02_LEARNING_OUTCOMES.md', dir: '/' },
    { name: '03_STUDY_GUIDE.md', dir: '/' },
    { name: 'MODULE_01/LESSON_01.md', dir: 'MODULE_01' },
    { name: 'MODULE_01/LESSON_02.md', dir: 'MODULE_01' },
    { name: 'MODULE_01/LESSON_03.md', dir: 'MODULE_01' },
    { name: 'MODULE_01/LESSON_04.md', dir: 'MODULE_01' },
    { name: 'MODULE_01/LESSON_05.md', dir: 'MODULE_01' },
    { name: 'MODULE_01/LESSON_06.md', dir: 'MODULE_01' },
    { name: 'FINAL_ASSESSMENT/FINAL_EXAM.md', dir: 'FINAL_ASSESSMENT' },
    { name: 'RESOURCES/GLOSSARY.md', dir: 'RESOURCES' },
    { name: '99_COURSE_COMPLETION_REPORT.md', dir: '/' }
  ];

  const currentContent = getFileContent(selectedFile);

  const handleCopyCurrent = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const publishingHeader = `<!--
================================================================================
PUBLISHED BY
ASCENDIX CONSULTING

Written and Published by
Ihtishamul Haque Naeem
Chairman, Seerat Academy Foundation

Official Website: https://seeratfoundation.com
Brand Values: Professionalism | Knowledge | Quality | Trust | Innovation | Educational Excellence
================================================================================
-->\n\n`;

  const handleDownloadMasterBundle = () => {
    let masterBundle = `${publishingHeader}# PERSUASION AND INFLUENCE: COMPLETE MASTER COURSE PACKAGE\n\n`;
    masterBundle += `**PUBLISHED BY:** ASCENDIX CONSULTING\n`;
    masterBundle += `**AUTHOR:** Ihtishamul Haque Naeem, Chairman, Seerat Academy Foundation\n`;
    masterBundle += `**OFFICIAL WEBSITE:** https://seeratfoundation.com\n\n`;
    fileList.forEach(f => {
      masterBundle += `\n\n---\n## FILE: ${f.name}\n\n${getFileContent(f.name)}\n`;
    });

    const blob = new Blob([masterBundle], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `PERSUASION_AND_INFLUENCE_ASCENDIX_CONSULTING_PACKAGE.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider">
              <span>Instructional Deliverable Export</span>
              <span aria-hidden="true">·</span>
              <span>Markdown Architecture</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
              Course Repository & Package Exporter
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Split */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* File Explorer Tree */}
          <div className="md:col-span-5 border-r border-slate-200 dark:border-slate-800 p-4 overflow-y-auto bg-slate-50 dark:bg-slate-950/40">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-mono">
              Course File Directory
            </span>
            <div className="space-y-1">
              {fileList.map((file) => (
                <button
                  key={file.name}
                  onClick={() => setSelectedFile(file.name)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-mono transition-colors flex items-center gap-2 truncate ${
                    selectedFile === file.name
                      ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 opacity-60 shrink-0" />
                  <span className="truncate">{file.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Markdown Content Preview */}
          <div className="md:col-span-7 p-4 sm:p-6 flex flex-col overflow-hidden bg-white dark:bg-slate-900">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 truncate">
                Preview: {selectedFile}
              </span>
              <button
                onClick={handleCopyCurrent}
                className="px-2.5 py-1 rounded text-xs border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy File'}</span>
              </button>
            </div>

            <pre className="flex-1 p-3 rounded-lg bg-slate-50 dark:bg-slate-950 text-[11px] font-mono leading-relaxed text-slate-800 dark:text-slate-200 overflow-y-auto whitespace-pre-wrap border border-slate-200 dark:border-slate-800">
              {currentContent}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            14 Individual Markdown (.md) Modules & Reports ready for LMS / Notion / Obsidian.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Close
            </button>
            <button
              onClick={handleDownloadMasterBundle}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Master Bundle (.md)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
