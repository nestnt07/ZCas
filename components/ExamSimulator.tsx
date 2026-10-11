'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  AlertTriangle,
  Award,
  ChevronRight,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Flame,
  Brain,
  Shield
} from 'lucide-react';
import { DRPCIVQuestion, UserProgress } from '@/types/driving';
import { OFFICIAL_DRPCIV_QUESTIONS } from '@/data/drpcivQuestions';

interface ExamSimulatorProps {
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
  onExitToDashboard: () => void;
}

function generateExamQuestions(): DRPCIVQuestion[] {
  const shuffled = [...OFFICIAL_DRPCIV_QUESTIONS].sort(() => 0.5 - Math.random());
  let pool = shuffled.slice(0, 26);
  while (pool.length < 26) {
    pool = [...pool, ...shuffled].slice(0, 26);
  }
  return pool;
}

export const ExamSimulator: React.FC<ExamSimulatorProps> = ({
  progress,
  onUpdateProgress,
  onExitToDashboard
}) => {
  // 26 questions randomized from question bank
  const [questions, setQuestions] = useState<DRPCIVQuestion[]>(generateExamQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<('A' | 'B' | 'C')[]>([]);
  const [secondsRemaining, setSecondsRemaining] = useState(1800); // 30 minutes
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [status, setStatus] = useState<'in_progress' | 'passed' | 'failed'>('in_progress');
  const [practiceMode, setPracticeMode] = useState<boolean>(true); // default true for learning with instant feedback
  const [showingInstantExplanation, setShowingInstantExplanation] = useState<boolean>(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean>(false);
  const [history, setHistory] = useState<{
    question: DRPCIVQuestion;
    chosen: ('A' | 'B' | 'C')[];
    isCorrect: boolean;
    chessReviewTag: 'brilliant' | 'best' | 'inaccuracy' | 'mistake' | 'blunder';
  }[]>([]);

  const handleExamFinished = React.useCallback((
    result: 'passed' | 'failed',
    completedHistory = history
  ) => {
    setStatus(result);

    const eloDelta = result === 'passed' ? 35 : -15;
    const newElo = Math.max(600, Math.min(2600, progress.eloRating + eloDelta));

    const newBlunders = completedHistory
      .filter((h) => !h.isCorrect)
      .map((h) => ({
        questionId: h.question.id,
        chosenAnswers: h.chosen,
        timestamp: Date.now(),
        resolved: false
      }));

    const updatedCategoryStats = { ...progress.categoryStats };
    completedHistory.forEach((h) => {
      const cat = h.question.category;
      if (updatedCategoryStats[cat]) {
        updatedCategoryStats[cat].total += 1;
        if (h.isCorrect) {
          updatedCategoryStats[cat].correct += 1;
        }
      }
    });

    const updatedProgress: UserProgress = {
      ...progress,
      eloRating: newElo,
      peakElo: Math.max(progress.peakElo, newElo),
      totalExamsTaken: progress.totalExamsTaken + 1,
      examsPassed: result === 'passed' ? progress.examsPassed + 1 : progress.examsPassed,
      questionsAnswered: progress.questionsAnswered + completedHistory.length,
      questionsCorrect:
        progress.questionsCorrect + completedHistory.filter((h) => h.isCorrect).length,
      blunderHistory: [...progress.blunderHistory, ...newBlunders],
      categoryStats: updatedCategoryStats,
      streakDays: progress.streakDays
    };

    onUpdateProgress(updatedProgress);
  }, [history, progress, onUpdateProgress]);

  const finishExamByTimeout = React.useCallback(() => {
    if (correctCount >= 22) {
      handleExamFinished('passed');
    } else {
      handleExamFinished('failed');
    }
  }, [correctCount, handleExamFinished]);

  // Start fresh exam
  const startNewExam = () => {
    setQuestions(generateExamQuestions());
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setSecondsRemaining(1800);
    setCorrectCount(0);
    setWrongCount(0);
    setStatus('in_progress');
    setHistory([]);
  };

  // Timer countdown
  useEffect(() => {
    if (status !== 'in_progress') return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExamByTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [status, finishExamByTimeout]);

  const currentQ = questions[currentIndex];

  const toggleOption = (optId: 'A' | 'B' | 'C') => {
    setSelectedAnswers((prev) =>
      prev.includes(optId) ? prev.filter((x) => x !== optId) : [...prev, optId].sort()
    );
  };

  const handleSkipLater = () => {
    // Put current question to the back of the queue (official DRPCIV feature!)
    if (questions.length <= 1) return;
    const current = questions[currentIndex];
    const newQueue = [...questions.slice(0, currentIndex), ...questions.slice(currentIndex + 1), current];
    setQuestions(newQueue);
    setSelectedAnswers([]);
  };

  const handleSubmitAnswer = () => {
    if (!currentQ) return;

    // Compare selectedAnswers with currentQ.correctAnswers
    const isCorrect =
      selectedAnswers.length === currentQ.correctAnswers.length &&
      selectedAnswers.every((ans) => currentQ.correctAnswers.includes(ans));

    // Determine chess-style review classification
    let tag: 'brilliant' | 'best' | 'inaccuracy' | 'mistake' | 'blunder';
    if (isCorrect) {
      if (currentQ.correctAnswers.length > 1 && currentQ.eloRating >= 1300) {
        tag = 'brilliant';
      } else {
        tag = 'best';
      }
    } else {
      if (currentQ.blunderSeverity === 'critical') {
        tag = 'blunder';
      } else if (
        selectedAnswers.length > 0 &&
        selectedAnswers.every((ans) => currentQ.correctAnswers.includes(ans))
      ) {
        // user selected 1 correct answer out of 2 or 3
        tag = 'inaccuracy';
      } else {
        tag = 'mistake';
      }
    }

    const newHistory = [
      ...history,
      {
        question: currentQ,
        chosen: selectedAnswers,
        isCorrect,
        chessReviewTag: tag
      }
    ];
    setHistory(newHistory);

    const nextCorrect = isCorrect ? correctCount + 1 : correctCount;
    const nextWrong = !isCorrect ? wrongCount + 1 : wrongCount;

    setCorrectCount(nextCorrect);
    setWrongCount(nextWrong);

    // If practice mode is ON, show instant feedback and explanation first
    if (practiceMode) {
      setLastAnswerCorrect(isCorrect);
      setShowingInstantExplanation(true);
      return;
    }

    setSelectedAnswers([]);

    // Check Romanian DRPCIV instant disqualification condition: 5 mistakes = RESPINS!
    if (nextWrong >= 5) {
      handleExamFinished('failed', newHistory);
      return;
    }

    // Check if reached 22 correct answers AND all questions answered or passed
    if (nextCorrect >= 22 && currentIndex + 1 >= questions.length) {
      handleExamFinished('passed', newHistory);
      return;
    }

    if (currentIndex + 1 >= questions.length) {
      if (nextCorrect >= 22) {
        handleExamFinished('passed', newHistory);
      } else {
        handleExamFinished('failed', newHistory);
      }
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const handleAdvanceNext = () => {
    setShowingInstantExplanation(false);
    setSelectedAnswers([]);

    // Check Romanian DRPCIV instant disqualification condition: 5 mistakes = RESPINS!
    if (wrongCount >= 5) {
      handleExamFinished('failed', history);
      return;
    }

    // Check if reached 22 correct answers AND all questions answered or passed
    if (correctCount >= 22 && currentIndex + 1 >= questions.length) {
      handleExamFinished('passed', history);
      return;
    }

    if (currentIndex + 1 >= questions.length) {
      if (correctCount >= 22) {
        handleExamFinished('passed', history);
      } else {
        handleExamFinished('failed', history);
      }
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainder = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // Render Result Screen if finished
  if (status !== 'in_progress') {
    const isPassed = status === 'passed';
    const brilliantMoves = history.filter((h) => h.chessReviewTag === 'brilliant').length;
    const bestMoves = history.filter((h) => h.chessReviewTag === 'best').length;
    const blunders = history.filter((h) => h.chessReviewTag === 'blunder').length;
    const mistakes = history.filter((h) => h.chessReviewTag === 'mistake').length;
    const inaccuracies = history.filter((h) => h.chessReviewTag === 'inaccuracy').length;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 text-white font-sans">
        {/* Main Verdict Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border text-center relative overflow-hidden ${
            isPassed
              ? 'bg-zinc-950 border-white text-white'
              : 'bg-zinc-950 border-zinc-700 text-white'
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 bg-zinc-900 border border-zinc-700">
            {isPassed ? (
              <CheckCircle2 className="w-10 h-10 text-white" />
            ) : (
              <XCircle className="w-10 h-10 text-zinc-400" />
            )}
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-mono tracking-wider">
            {isPassed ? 'ADMIS • FELICITĂRI!' : 'RESPINS • MAI MULT DE 4 GREȘELI'}
          </h2>

          <p className="text-sm mt-2 max-w-lg mx-auto text-zinc-300">
            {isPassed
              ? `Ai obținut ${correctCount} puncte corecte din 26. Păstrează aceeași disciplină la proba teoretică cu poliția.`
              : `Ai acumulat ${wrongCount} răspunsuri greșite (limita admisă este de maximum 4 greșeli). Examenul s-a oprit automat conform regulamentului oficial.`}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 font-mono text-sm">
            <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-zinc-500 block text-xs">RĂSPUNSURI CORECTE</span>
              <span className="text-xl font-bold text-white">{correctCount} / 26</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-zinc-500 block text-xs">GREȘELI COMISE</span>
              <span className="text-xl font-bold text-zinc-300">{wrongCount} / 4 max</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-zinc-500 block text-xs">TIMP CONSUMAT</span>
              <span className="text-xl font-bold text-white">
                {formatTimer(1800 - secondsRemaining)}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <button
              onClick={startNewExam}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Simulează un Nou Examen</span>
            </button>
            <button
              onClick={onExitToDashboard}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 text-sm font-medium transition-colors"
            >
              <span>Înapoi la Comandă</span>
            </button>
          </div>
        </div>

        {/* Chess.com-Style Game Review HUD */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              <h3 className="font-bold text-base sm:text-lg text-white">
                Analiză Tactică a Partidei (Game Review Engine)
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Triage Decizional
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="text-xs text-white font-mono font-bold">BRILLIANT</div>
              <div className="text-xl font-mono font-bold text-white">{brilliantMoves}</div>
              <div className="text-[10px] text-zinc-400">Multi-select rezolvat</div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="text-xs text-white font-mono font-bold">BEST MOVE</div>
              <div className="text-xl font-mono font-bold text-white">{bestMoves}</div>
              <div className="text-[10px] text-zinc-400">Răspunsuri 100% corecte</div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="text-xs text-zinc-300 font-mono font-bold">INACCURACY</div>
              <div className="text-xl font-mono font-bold text-zinc-300">{inaccuracies}</div>
              <div className="text-[10px] text-zinc-400">Răspuns parțial bifat</div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="text-xs text-zinc-400 font-mono font-bold">MISTAKE</div>
              <div className="text-xl font-mono font-bold text-zinc-400">{mistakes}</div>
              <div className="text-[10px] text-zinc-400">Alegere greșită standard</div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 col-span-2 sm:col-span-1">
              <div className="text-xs text-zinc-400 font-mono font-bold">BLUNDER</div>
              <div className="text-xl font-mono font-bold text-zinc-400">{blunders}</div>
              <div className="text-[10px] text-zinc-400">Risc major de accident</div>
            </div>
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="space-y-4">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <span>Revizuirea Răspunsurilor din Examen</span>
            <span className="text-xs font-mono text-zinc-400">({history.length} întrebări parcurse)</span>
          </h4>

          <div className="space-y-3">
            {history.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border text-sm space-y-2 ${
                  item.isCorrect
                    ? 'bg-zinc-950 border-zinc-700'
                    : 'bg-zinc-950 border-zinc-800'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">
                      #{idx + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded uppercase font-bold text-[10px] bg-zinc-900 text-white border border-zinc-700">
                      {item.chessReviewTag}
                    </span>
                    <span className="text-zinc-400">{item.question.legalReference}</span>
                  </div>

                  {item.isCorrect ? (
                    <span className="flex items-center gap-1 text-white font-mono text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      CORECT (+1)
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-zinc-400 font-mono text-xs font-bold">
                      <XCircle className="w-4 h-4 text-zinc-500" />
                      GREȘIT
                    </span>
                  )}
                </div>

                <p className="font-medium text-white">{item.question.question}</p>

                <div className="grid grid-cols-1 gap-1 text-xs pt-1">
                  <div className="text-zinc-400">
                    Răspunsul tău:{' '}
                    <span className={`font-mono font-bold ${item.isCorrect ? 'text-white' : 'text-zinc-400'}`}>
                      {item.chosen.length > 0 ? item.chosen.join(', ') : 'Niciunul selectat'}
                    </span>{' '}
                    | Răspuns corect:{' '}
                    <span className="font-mono font-bold text-white">
                      {item.question.correctAnswers.join(', ')}
                    </span>
                  </div>
                </div>

                {/* Explanation */}
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 mt-2 space-y-1">
                  <p>
                    <strong className="text-white">Explicație Legală:</strong>{' '}
                    {item.question.explanation}
                  </p>
                  {item.question.ciaMemoryAnchor && (
                    <p className="text-zinc-400 font-mono text-[11px] pt-1">
                      <strong>Ancoră CIA:</strong> {item.question.ciaMemoryAnchor.cognitiveRule}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Active in-progress question view
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 text-white font-sans">
      {/* Official DRPCIV Status Header Bar */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-wrap items-center justify-between gap-4">
        {/* Question Counter & Mode Switcher */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center font-mono font-bold text-white border border-zinc-700">
            {currentIndex + 1}
          </div>
          <div>
            <div className="text-xs text-zinc-400 font-mono">ÎNTREBAREA CURENTĂ</div>
            <div className="text-sm font-bold text-white">
              {currentIndex + 1} din {questions.length}
            </div>
          </div>
        </div>

        {/* Mode Selector Toggle */}
        <div className="flex items-center bg-zinc-900 p-1 rounded-xl border border-zinc-800 text-xs font-mono">
          <button
            onClick={() => setPracticeMode(true)}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              practiceMode
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Antrenament (Feedback Imediat)
          </button>
          <button
            onClick={() => {
              setPracticeMode(false);
              setShowingInstantExplanation(false);
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              !practiceMode
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Mod Oficial DRPCIV (Examen Real)
          </button>
        </div>

        {/* Live Score Tally */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>CORECTE: {correctCount} (min. 22)</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
            <XCircle className="w-4 h-4 text-zinc-500" />
            <span>GREȘITE: {wrongCount} / 4 max</span>
          </div>
        </div>

        {/* 30-min Timer */}
        <div className="flex items-center gap-2 font-mono text-sm px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white">
          <Clock className="w-4 h-4 text-white" />
          <span>{formatTimer(secondsRemaining)}</span>
        </div>
      </div>

      {/* Main Question Card */}
      {currentQ && (
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
          {/* Category & Badge */}
          <div className="flex items-center justify-between text-xs">
            <span className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-700 font-mono uppercase">
              {currentQ.category.replace('_', ' ')}
            </span>
            <div className="flex items-center gap-2 text-zinc-400 font-mono">
              <span>{currentQ.legalReference}</span>
              <span className="text-white">| ELO {currentQ.eloRating}</span>
            </div>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            {currentQ.question}
          </h2>

          <div className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-white" />
            <span>
              Atenție: Pot fi corecte una, două sau toate cele trei variante de răspuns!
            </span>
          </div>

          {/* Answer Options A, B, C */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((opt) => {
              const isSelected = selectedAnswers.includes(opt.id);
              const isActuallyCorrect = currentQ.correctAnswers.includes(opt.id);

              let optionStyle = 'bg-zinc-900/80 border-zinc-800 text-zinc-200 hover:border-zinc-600 hover:bg-zinc-900';
              let badgeStyle = 'bg-zinc-800 text-zinc-300 border border-zinc-700';

              if (showingInstantExplanation) {
                if (isActuallyCorrect) {
                  optionStyle = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold';
                  badgeStyle = 'bg-emerald-700 text-white';
                } else if (isSelected && !isActuallyCorrect) {
                  optionStyle = 'bg-rose-950 border-rose-500 text-rose-200 line-through';
                  badgeStyle = 'bg-rose-700 text-white';
                } else {
                  optionStyle = 'bg-zinc-950 border-zinc-850 text-zinc-600 opacity-50';
                  badgeStyle = 'bg-zinc-900 text-zinc-600';
                }
              } else if (isSelected) {
                optionStyle = 'bg-white text-black font-medium border-white shadow-sm';
                badgeStyle = 'bg-black text-white';
              }

              return (
                <button
                  key={opt.id}
                  disabled={showingInstantExplanation}
                  onClick={() => toggleOption(opt.id)}
                  className={`w-full p-4 rounded-xl text-left border flex items-start gap-4 transition-all ${optionStyle}`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 transition-colors ${badgeStyle}`}
                  >
                    {opt.id}
                  </div>
                  <div className="text-sm pt-1 leading-snug flex-1">{opt.text}</div>
                  {showingInstantExplanation && isActuallyCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                  )}
                  {showingInstantExplanation && isSelected && !isActuallyCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-1" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Explanation Box (Practice Mode) */}
          {showingInstantExplanation && (
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-700 space-y-3.5">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                <div className="flex items-center gap-2">
                  {lastAnswerCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="font-extrabold text-sm text-emerald-300">
                        RĂSPUNS CORECT (+1 PUNCT)
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-400" />
                      <span className="font-extrabold text-sm text-rose-300">
                        RĂSPUNS GREȘIT (+1 GREȘEALĂ)
                      </span>
                    </>
                  )}
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  Variante corecte:{' '}
                  <span className="text-white font-bold">
                    {currentQ.correctAnswers.join(', ')}
                  </span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-zinc-200 leading-relaxed space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5 font-mono text-xs">
                  <Shield className="w-4 h-4 text-white" />
                  <span>DECODARE & REFERINȚĂ LEGALĂ ({currentQ.legalReference}):</span>
                </div>
                <p>{currentQ.explanation}</p>
              </div>

              {currentQ.ciaMemoryAnchor && (
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 space-y-1">
                  <span className="font-bold text-white font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span>Regulă Mnemonică CIA:</span>
                  </span>
                  <p className="text-zinc-400">{currentQ.ciaMemoryAnchor.cognitiveRule}</p>
                </div>
              )}
            </div>
          )}

          {/* DRPCIV Action Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-zinc-800">
            {showingInstantExplanation ? (
              <button
                onClick={handleAdvanceNext}
                className="w-full py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Următoarea Întrebare ({currentIndex + 2 <= questions.length ? `${currentIndex + 2} / ${questions.length}` : 'Finalizează Testul'})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {/* Skip / Answer Later */}
                  <button
                    onClick={handleSkipLater}
                    className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-medium border border-zinc-800 transition-colors"
                    title="Trimite întrebarea la coada de așteptare"
                  >
                    Răspunde mai târziu
                  </button>

                  {/* Reset selection on this question */}
                  <button
                    onClick={() => setSelectedAnswers([])}
                    className="px-3.5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 text-xs border border-zinc-800 transition-colors"
                    title="Deselectează opțiunile alese"
                  >
                    Șterge
                  </button>
                </div>

                {/* Confirm & Send Answer */}
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswers.length === 0}
                  className={`w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    selectedAnswers.length > 0
                      ? 'bg-white hover:bg-zinc-200 text-black shadow-md'
                      : 'bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800'
                  }`}
                >
                  <span>{practiceMode ? 'Verifică Răspunsul & Decodarea' : 'Trimite Răspunsul'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
