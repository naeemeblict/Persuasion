import React, { useState } from 'react';
import { ETHICS_TEST_QUESTIONS } from '../data/courseData';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Download, 
  RotateCcw, 
  ShieldCheck, 
  ArrowRight,
  Send,
  HelpCircle
} from 'lucide-react';

export const BlueprintStudio: React.FC = () => {
  // Step 1: Stakeholder
  const [stakeholderType, setStakeholderType] = useState<string>('executive');
  const [stakeholderName, setStakeholderName] = useState<string>('Jordan');
  const [proposalTopic, setProposalTopic] = useState<string>('Quarterly Process Automation');

  // Step 2: Selected Principles (min 2, max 4)
  const [selectedPrinciples, setSelectedPrinciples] = useState<string[]>([
    'liking',
    'reciprocation',
    'scarcity',
    'authority'
  ]);

  // Step 3: Ethics Checklist
  const [ethicsChecked, setEthicsChecked] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true
  });

  // Step 4: Loss Framing Input
  const [gainStatement, setGainStatement] = useState<string>(
    'Adopting this automated pipeline will save our team 6 hours every week.'
  );

  // Step 5: Drawback Input
  const [minorDrawback, setMinorDrawback] = useState<string>(
    'It requires 4 hours of team setup time next Tuesday.'
  );
  const [majorStrength, setMajorStrength] = useState<string>(
    'It permanently cuts weekly reporting errors by 85% and recoups those 4 hours in the first sprint.'
  );

  const [copied, setCopied] = useState<boolean>(false);

  // Toggle principle selection
  const handleTogglePrinciple = (pKey: string) => {
    if (selectedPrinciples.includes(pKey)) {
      if (selectedPrinciples.length > 2) {
        setSelectedPrinciples(selectedPrinciples.filter(k => k !== pKey));
      }
    } else {
      if (selectedPrinciples.length < 5) {
        setSelectedPrinciples([...selectedPrinciples, pKey]);
      }
    }
  };

  // Convert Gain statement to Loss-Aversion statement
  const generatedLossFrame = `By continuing with our manual workflow, our team is currently losing 6 valuable hours every single week that could be spent shipping customer features.`;

  // Assemble full pitch
  const generatePitchText = (): string => {
    let pitch = `Subject: Proposal: Aligning on ${proposalTopic}\n\n`;
    pitch += `Hi ${stakeholderName || 'there'},\n\n`;

    if (selectedPrinciples.includes('liking')) {
      pitch += `I read your summary on last week's release—the way your team stabilized the customer onboarding flow was exceptional work, and I really appreciated your focus on user trust [Liking - Sincere Compliment & Shared Values].\n\n`;
    }

    if (selectedPrinciples.includes('reciprocation')) {
      pitch += `Following up on the workflow benchmarking template I put together for your team last Thursday [Reciprocation - Value Deposit Given First],\n`;
    }

    if (selectedPrinciples.includes('consistency')) {
      pitch += `you mentioned during our Monday sync that eliminating repetitive manual data reconciliation is one of your top Q3 priorities [Consistency - Referencing Prior Public Commitment].\n\n`;
    }

    if (selectedPrinciples.includes('authority')) {
      pitch += `To be completely transparent, our proposed implementation has one limitation: ${minorDrawback.toLowerCase()} However, ${majorStrength} [Authority - Trustworthiness Through Early Drawback + 'However'].\n\n`;
    }

    if (selectedPrinciples.includes('social_proof')) {
      pitch += `Two peer teams of our exact headcount—including the Platform Infrastructure group—adopted this exact schedule last month and cut overtime by 22% without missing a single delivery milestone [Social Proof - Peer Similarity].\n\n`;
    }

    if (selectedPrinciples.includes('scarcity')) {
      pitch += `${generatedLossFrame} Furthermore, our locked-in early partner onboarding slots close this Friday at 4 PM [Scarcity - Loss Frame & Authentic Constraint].\n\n`;
    }

    pitch += `Could you review the attached 1-page deployment checklist, and if it looks aligned, let me know by Thursday afternoon so we can reserve your team's launch window [Consistency - Voluntary Next Step]?\n\n`;
    pitch += `Best regards,\n[Your Name]`;

    return pitch;
  };

  const fullPitch = generatePitchText();

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([fullPitch], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Persuasion_Proposal_${proposalTopic.replace(/\s+/g, '_')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Persuasion Studio</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Stakeholder Proposal Blueprint Studio
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
          Craft an ethical, multi-principle pitch tailored to your specific stakeholder. Select behavioral triggers, generate loss-aversion framing, apply upfront candor, and verify compliance against the 3-Question Ethics Checklist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Parameter Configuration Deck */}
        <div className="lg:col-span-6 space-y-6">
          {/* Step 1: Target Stakeholder */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
              Step 1: Stakeholder & Proposal Context
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">
                  Stakeholder Name
                </label>
                <input
                  type="text"
                  value={stakeholderName}
                  onChange={(e) => setStakeholderName(e.target.value)}
                  placeholder="e.g. Sarah"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">
                  Stakeholder Role
                </label>
                <select
                  value={stakeholderType}
                  onChange={(e) => setStakeholderType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                >
                  <option value="executive">Department Director / VP</option>
                  <option value="peer">Cross-Functional Team Peer</option>
                  <option value="client">Client / Outside Customer</option>
                  <option value="finance">Finance / Procurement Lead</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">
                  Core Proposal Topic
                </label>
                <input
                  type="text"
                  value={proposalTopic}
                  onChange={(e) => setProposalTopic(e.target.value)}
                  placeholder="e.g. Cloud Security Upgrade"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Choose Principles */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Step 2: Choose 2 to 4 Principles to Combine
              </h3>
              <span className="text-xs font-mono text-amber-700 dark:text-amber-400">
                {selectedPrinciples.length} Selected
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { key: 'reciprocation', name: '1. Reciprocation', sub: 'Value deposit first' },
                { key: 'consistency', name: '2. Consistency', sub: 'Reference prior stance' },
                { key: 'social_proof', name: '3. Social Proof', sub: 'Peer-matched evidence' },
                { key: 'liking', name: '4. Liking', sub: 'Sincere praise & shared goal' },
                { key: 'scarcity', name: '5. Scarcity', sub: 'Loss frame & deadline' },
                { key: 'authority', name: '6. Authority', sub: "Candor ('However')" }
              ].map((p) => {
                const isSelected = selectedPrinciples.includes(p.key);
                return (
                  <button
                    key={p.key}
                    onClick={() => handleTogglePrinciple(p.key)}
                    className={`p-2.5 rounded-lg text-left border transition-all ${
                      isSelected
                        ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-400 text-amber-950 dark:text-amber-200'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-[11px] opacity-80">{p.sub}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: 3-Question Ethics Checklist */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Step 3: 3-Question Ethics Verification
              </h3>
            </div>
            <div className="space-y-2.5 text-xs">
              {ETHICS_TEST_QUESTIONS.map((item) => (
                <label key={item.id} className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ethicsChecked[item.id] || false}
                    onChange={(e) => setEthicsChecked({ ...ethicsChecked, [item.id]: e.target.checked })}
                    className="mt-0.5 rounded text-amber-600 focus:ring-amber-500"
                  />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block">
                      {item.question}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                      {item.detail}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Step 4 & 5: Framing Controls */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Step 4 & 5: Psychological Framing Calibration
            </h3>

            {/* Loss Aversion */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Loss-Aversion Framing (Scarcity Engine)
              </label>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
                <span className="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 block mb-1">
                  Generated Preventable Loss Frame:
                </span>
                <p className="text-slate-800 dark:text-slate-200 italic">
                  "{generatedLossFrame}"
                </p>
              </div>
            </div>

            {/* Drawback-Then-However */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                The "Drawback-Then-However" Honesty Trigger (Authority)
              </label>
              <input
                type="text"
                value={minorDrawback}
                onChange={(e) => setMinorDrawback(e.target.value)}
                placeholder="Minor drawback (e.g. 4 hours setup time)"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
              />
              <input
                type="text"
                value={majorStrength}
                onChange={(e) => setMajorStrength(e.target.value)}
                placeholder="Major strength (e.g. cuts error rate by 85%)"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Live Generated Proposal Preview */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs lg:sticky lg:top-24">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold font-mono">
                Live Blueprint Output
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                Multi-Principle Proposal
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy pitch to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>

              <button
                onClick={handleDownload}
                className="p-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors"
                title="Download as Markdown"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Ethics Indicator */}
          {Object.values(ethicsChecked).every(Boolean) ? (
            <div className="mb-4 px-3 py-1.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified 100% Truthful, Mutually Beneficial & Respectful</span>
            </div>
          ) : (
            <div className="mb-4 px-3 py-1.5 rounded-md bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Please review and check all 3 ethics questions before sending.</span>
            </div>
          )}

          {/* Proposal Preview Box */}
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 font-sans text-xs leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-wrap max-h-[500px] overflow-y-auto">
            {fullPitch}
          </div>

          {/* Legend of bracketed triggers */}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Pedagogical Note:</span> The bracketed labels (e.g. <code>[Liking]</code>) in the text above reveal the psychological triggers at work. Remove the brackets before emailing your stakeholder!
          </div>
        </div>
      </div>
    </div>
  );
};
