'use client';

import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  AlertTriangle,
  ChevronRight,
  ShieldAlert,
  Sparkles,
  HelpCircle,
  Check
} from 'lucide-react';
import { UserProgress, DRPCIVQuestion } from '@/types/driving';
import { OFFICIAL_DRPCIV_QUESTIONS } from '@/data/drpcivQuestions';

interface BlunderBankProps {
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
}

export const BlunderBank: React.FC<BlunderBankProps> = ({
  progress,
  onUpdateProgress
}) => {
  const [activeTestQuestionId, setActiveTestQuestionId] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<('A' | 'B' | 'C')[]>([]);
  const [testResult, setTestResult] = useState<'none' | 'success' | 'fail'>('none');

  // Find all questions corresponding to blunderHistory
  const blunderItems = progress.blunderHistory.map((blunder) => {
    const question = OFFICIAL_DRPCIV_QUESTIONS.find((q) => q.id === blunder.questionId) || {
      id: blunder.questionId,
      category: 'priority' as const,
      question: 'Întrebare oficială DRPCIV',
      options: [
        { id: 'A' as const, text: 'Opțiunea A' },
        { id: 'B' as const, text: 'Opțiunea B' },
        { id: 'C' as const, text: 'Opțiunea C' }
      ],
      correctAnswers: ['A' as const],
      explanation: 'Verifică legislația conform OUG 195/2002.',
      legalReference: 'Art. 57 OUG 195/2002',
      eloRating: 1100,
      blunderSeverity: 'critical' as const
    };
    return {
      ...blunder,
      questionData: question
    };
  });

  const unresolvedBlunders = blunderItems.filter((b) => !b.resolved);
  const activeQuestion = blunderItems.find((b) => b.questionId === activeTestQuestionId)?.questionData;

  const handleStartRetest = (qId: string) => {
    setActiveTestQuestionId(qId);
    setSelectedAnswers([]);
    setTestResult('none');
  };

  const toggleOption = (id: 'A' | 'B' | 'C') => {
    setSelectedAnswers((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id].sort()
    );
  };

  const handleVerifyRetest = () => {
    if (!activeQuestion) return;

    const isCorrect =
      selectedAnswers.length === activeQuestion.correctAnswers.length &&
      selectedAnswers.every((ans) => activeQuestion.correctAnswers.includes(ans));

    if (isCorrect) {
      setTestResult('success');
      // Mark as resolved in blunder history & grant +15 ELO
      const updatedHistory = progress.blunderHistory.map((b) =>
        b.questionId === activeQuestion.id ? { ...b, resolved: true } : b
      );
      const updatedElo = progress.eloRating + 15;
      onUpdateProgress({
        ...progress,
        blunderHistory: updatedHistory,
        eloRating: updatedElo,
        peakElo: Math.max(progress.peakElo, updatedElo)
      });
    } else {
      setTestResult('fail');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-6 text-white font-sans">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-mono mb-2 border border-zinc-800">
            <Award className="w-3.5 h-3.5 text-white" />
            <span>CIMITIRUL GAFELOR // REPETIȚIE SPAȚIATĂ LEITNER</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Banca de Gafe: Re-testarea Întrebărilor Greșite
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-2xl leading-relaxed">
            Conform raportului CIA privind retenția pe termen lung, cel mai rapid mod de a deveni
            expert este să re-testezi greșelile până când devin reflexe automate.
          </p>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800">
          <XCircle className="w-6 h-6 text-zinc-400" />
          <div>
            <div className="text-[11px] font-mono text-zinc-400">GAFE NEREZOLVATE</div>
            <div className="text-xl font-mono font-bold text-white">
              {unresolvedBlunders.length}
            </div>
          </div>
        </div>
      </div>

      {/* Active Retest Modal / Card */}
      {activeQuestion && (
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-700 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase">
              <RotateCcw className="w-3.5 h-3.5 text-white" />
              <span>RE-TESTARE GAFĂ • {activeQuestion.legalReference}</span>
            </div>
            <button
              onClick={() => setActiveTestQuestionId(null)}
              className="text-xs text-zinc-400 hover:text-white"
            >
              Închide
            </button>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            {activeQuestion.question}
          </h2>

          <div className="space-y-3">
            {activeQuestion.options.map((opt) => {
              const isSelected = selectedAnswers.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  disabled={testResult !== 'none'}
                  onClick={() => toggleOption(opt.id)}
                  className={`w-full p-4 rounded-xl text-left border flex items-start gap-4 transition-all ${
                    isSelected
                      ? 'bg-white text-black font-medium border-white'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                      isSelected
                        ? 'bg-black text-white'
                        : 'bg-zinc-800 text-zinc-300'
                    }`}
                  >
                    {opt.id}
                  </div>
                  <div className="text-sm pt-0.5">{opt.text}</div>
                </button>
              );
            })}
          </div>

          {testResult === 'none' ? (
            <button
              onClick={handleVerifyRetest}
              disabled={selectedAnswers.length === 0}
              className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                selectedAnswers.length > 0
                  ? 'bg-white text-black hover:bg-zinc-200'
                  : 'bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800'
              }`}
            >
              Verifică Dacă Ai Învățat Corect (+15 ELO)
            </button>
          ) : testResult === 'success' ? (
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>EXCELENT! Gafa a fost stăpânită și eliminată din banca de greșeli.</span>
              </div>
              <p className="text-xs text-zinc-300">{activeQuestion.explanation}</p>
              <button
                onClick={() => setActiveTestQuestionId(null)}
                className="mt-3 px-5 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200"
              >
                Gata, continuă
              </button>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <XCircle className="w-5 h-5 text-rose-400" />
                <span>Încă mai ai ezitări. Răspunsul corect este: {activeQuestion.correctAnswers.join(', ')}</span>
              </div>
              <p className="text-xs text-zinc-300">{activeQuestion.explanation}</p>
              <button
                onClick={() => {
                  setTestResult('none');
                  setSelectedAnswers([]);
                }}
                className="mt-3 px-5 py-2 rounded-lg bg-zinc-800 text-white text-xs font-bold hover:bg-zinc-700"
              >
                Reîncearcă din nou
              </button>
            </div>
          )}
        </div>
      )}

      {/* List of Blunders */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <span>Istoricul Erorilor Înregistrate</span>
          <span className="text-xs font-mono text-zinc-400">({blunderItems.length} în total)</span>
        </h3>

        {blunderItems.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-white mx-auto" />
            <h4 className="text-base font-bold text-white">Nicio gafă înregistrată!</h4>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Când vei greși întrebări la simularea examenului DRPCIV, ele vor fi salvate automat aici
              pentru repetiție spațiată.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blunderItems.map((item, idx) => {
              const q = item.questionData;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                    item.resolved
                      ? 'bg-zinc-950/60 border-zinc-850 opacity-60'
                      : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-zinc-400">{q.legalReference}</span>
                      {item.resolved ? (
                        <span className="text-white font-bold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" />
                          STĂPÂNITĂ
                        </span>
                      ) : (
                        <span className="text-zinc-400 font-bold flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" />
                          NEREZOLVATĂ
                        </span>
                      )}
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                      {q.question}
                    </h4>

                    <p className="text-[11px] text-zinc-400 line-clamp-2">
                      {q.explanation}
                    </p>
                  </div>

                  {!item.resolved && (
                    <button
                      onClick={() => handleStartRetest(q.id)}
                      className="w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Re-testează Întrebarea</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
