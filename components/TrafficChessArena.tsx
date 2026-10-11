'use client';

import React, { useState, useEffect } from 'react';
import {
  Zap,
  Crown,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  ChevronRight,
  ShieldAlert,
  Flame,
  Award,
  ArrowRight,
  HelpCircle,
  Users
} from 'lucide-react';
import { UserProgress, ChessPuzzle, DrivingTacticsPuzzle } from '@/types/driving';
import { CHESS_TACTICAL_PUZZLES, DRIVING_TACTICS_PUZZLES } from '@/data/chessTactics';
import { calculateRankTitle } from '@/lib/storage';

interface TrafficChessArenaProps {
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
}

export const TrafficChessArena: React.FC<TrafficChessArenaProps> = ({
  progress,
  onUpdateProgress
}) => {
  const [activeTab, setActiveTab] = useState<'chess_warmup' | 'driving_puzzles' | 'leaderboard'>('driving_puzzles');

  // Chess puzzle state
  const [chessIndex, setChessIndex] = useState(0);
  const currentChess = CHESS_TACTICAL_PUZZLES[chessIndex];
  const [chessAnswerInput, setChessAnswerInput] = useState('');
  const [chessSolved, setChessSolved] = useState(false);
  const [chessFailed, setChessFailed] = useState(false);

  // Driving puzzle rush state
  const [tacticsIndex, setTacticsIndex] = useState(0);
  const currentTactics = DRIVING_TACTICS_PUZZLES[tacticsIndex];
  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(20);
  const [isTacticsActive, setIsTacticsActive] = useState(false);
  const [tacticsResult, setTacticsResult] = useState<'none' | 'correct' | 'wrong' | 'timeout'>('none');

  const handleTacticsTimeout = React.useCallback(() => {
    setIsTacticsActive(false);
    setTacticsResult('timeout');
    const updatedElo = Math.max(700, progress.eloRating - 10);
    onUpdateProgress({
      ...progress,
      eloRating: updatedElo
    });
  }, [progress, onUpdateProgress]);

  // Driving tactics timer
  useEffect(() => {
    if (!isTacticsActive || tacticsResult !== 'none') return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTacticsTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTacticsActive, tacticsResult, handleTacticsTimeout]);

  const startTacticsPuzzle = (index = tacticsIndex) => {
    setTacticsIndex(index);
    setSelectedOrder([]);
    setSecondsLeft(DRIVING_TACTICS_PUZZLES[index].timeLimitSeconds);
    setTacticsResult('none');
    setIsTacticsActive(true);
  };

  const handleSelectVehicle = (label: string) => {
    if (tacticsResult !== 'none') return;
    if (selectedOrder.includes(label)) {
      setSelectedOrder(selectedOrder.filter((v) => v !== label));
    } else {
      setSelectedOrder([...selectedOrder, label]);
    }
  };

  const handleVerifyOrder = () => {
    if (!currentTactics) return;
    setIsTacticsActive(false);

    // Check if user order matches correct order
    const isCorrect =
      selectedOrder.length === currentTactics.correctOrder.length &&
      selectedOrder.every((val, idx) => val === currentTactics.correctOrder[idx]);

    if (isCorrect) {
      setTacticsResult('correct');
      // Gain ELO
      const updatedElo = progress.eloRating + 20;
      onUpdateProgress({
        ...progress,
        eloRating: updatedElo,
        peakElo: Math.max(progress.peakElo, updatedElo),
        solvedDrivingTactics: [...progress.solvedDrivingTactics, currentTactics.id]
      });
    } else {
      setTacticsResult('wrong');
      // Lose slight ELO
      const updatedElo = Math.max(700, progress.eloRating - 10);
      onUpdateProgress({
        ...progress,
        eloRating: updatedElo
      });
    }
  };

  const handleSolveChess = () => {
    if (chessAnswerInput.trim().toLowerCase() === currentChess.solutionUci.toLowerCase()) {
      setChessSolved(true);
      setChessFailed(false);
      const updatedElo = progress.eloRating + 25;
      onUpdateProgress({
        ...progress,
        eloRating: updatedElo,
        peakElo: Math.max(progress.peakElo, updatedElo),
        solvedChessPuzzles: [...progress.solvedChessPuzzles, currentChess.id]
      });
    } else {
      setChessFailed(true);
    }
  };

  const nextTactics = () => {
    const nextIdx = (tacticsIndex + 1) % DRIVING_TACTICS_PUZZLES.length;
    startTacticsPuzzle(nextIdx);
  };

  const nextChess = () => {
    setChessIndex((prev) => (prev + 1) % CHESS_TACTICAL_PUZZLES.length);
    setChessAnswerInput('');
    setChessSolved(false);
    setChessFailed(false);
  };

  // Mock Leaderboard
  const LEADERBOARD_CANDIDATES = [
    { rank: 1, name: 'Andrei Popescu (Cluj-Napoca)', elo: 2410, title: 'Grandmaster Driver', streak: 42 },
    { rank: 2, name: 'Elena Ionescu (București S1)', elo: 2280, title: 'Grandmaster Driver', streak: 28 },
    { rank: 3, name: 'Tudor Dumitru (Timișoara)', elo: 2150, title: 'Queen Master', streak: 19 },
    { rank: 4, name: 'Roxana Radu (Iași)', elo: 1980, title: 'Queen Master', streak: 14 },
    { rank: 5, name: 'Mihai Vasilescu (Brașov)', elo: 1820, title: 'Rook Controller', streak: 12 },
    { rank: 6, name: 'Tu (Profilul Tău)', elo: progress.eloRating, title: calculateRankTitle(progress.eloRating).title, streak: progress.streakDays, isUser: true },
    { rank: 7, name: 'Cristian Stan (Constanța)', elo: 1150, title: 'Knight Driver', streak: 4 },
    { rank: 8, name: 'Ioana Gheorghe (Craiova)', elo: 920, title: 'Pawn Driver', streak: 2 }
  ].sort((a, b) => b.elo - a.elo).map((item, idx) => ({ ...item, rank: idx + 1 }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6 text-white font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-mono mb-2 border border-zinc-800">
            <Zap className="w-3.5 h-3.5 text-white" />
            <span>GAMIFICARE TACTICĂ • CODUL RUTIER CA O PARTIDĂ DE ȘAH</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Arena Tactică: Puzzle Rush & Punctaj ELO
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Antrenează viteza de procesare a intersecțiilor sub presiune de timp, elimină ezitările
            și urcă în clasamentul candidaților DRPCIV din România.
          </p>
        </div>

        {/* ELO Display */}
        <div className="flex items-center gap-4 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800">
          <Crown className="w-7 h-7 text-white" />
          <div>
            <div className="text-[11px] font-mono text-zinc-400">RANGUL TĂU ACTUAL</div>
            <div className="text-xl font-mono font-bold text-white">
              {progress.eloRating} ELO
            </div>
            <div className="text-[11px] text-zinc-400">
              {calculateRankTitle(progress.eloRating).title}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('driving_puzzles')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs whitespace-nowrap transition-all ${
            activeTab === 'driving_puzzles'
              ? 'bg-white text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Traffic Puzzle Rush (Intersecții)</span>
        </button>

        <button
          onClick={() => setActiveTab('chess_warmup')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs whitespace-nowrap transition-all ${
            activeTab === 'chess_warmup'
              ? 'bg-white text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <Crown className="w-3.5 h-3.5" />
          <span>Antrenament Șah + Reguli Rutiere</span>
        </button>

        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs whitespace-nowrap transition-all ${
            activeTab === 'leaderboard'
              ? 'bg-white text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Clasament România (Leaderboard)</span>
        </button>
      </div>

      {/* Mode 1: Driving Tactics Puzzle Rush */}
      {activeTab === 'driving_puzzles' && currentTactics && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Puzzle Solver Card */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
            {/* Header / Timer */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  PUZZLE TACTIC #{tacticsIndex + 1} • DIFICULTATE {currentTactics.difficultyElo} ELO
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{currentTactics.title}</h3>
              </div>

              {isTacticsActive && (
                <div className="flex items-center gap-2 font-mono text-sm px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white animate-pulse">
                  <Clock className="w-4 h-4 text-white" />
                  <span>{secondsLeft}s rămase</span>
                </div>
              )}
            </div>

            {/* Scenario Description */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 leading-relaxed">
              <p className="font-semibold text-white mb-1">Situația din Intersecție:</p>
              <p>{currentTactics.scenarioDescription}</p>
            </div>

            {/* Interactive Ordering Canvas */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>VEHICULE PREZENTE (CLICK PENTRU A STABILI ORDINEA DE TRECERE):</span>
                <span>
                  Selectate: {selectedOrder.length} / {currentTactics.vehicles.length}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentTactics.vehicles.map((v) => {
                  const isSelected = selectedOrder.includes(v.label);
                  const orderNumber = selectedOrder.indexOf(v.label) + 1;
                  return (
                    <button
                      key={v.id}
                      onClick={() => handleSelectVehicle(v.label)}
                      disabled={tacticsResult !== 'none'}
                      className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-zinc-900 border-white text-white shadow-sm'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3.5 h-3.5 rounded-full shrink-0"
                          style={{ backgroundColor: v.color }}
                        />
                        <div>
                          <div className="text-sm font-bold text-white">{v.label}</div>
                          <div className="text-[11px] text-zinc-400">
                            Direcție: {v.direction === 'straight' ? 'Înainte' : v.direction === 'left' ? 'La Stânga' : 'La Dreapta'}
                            {v.hasPrioritySign && ' • Are indicator prioritar'}
                          </div>
                        </div>
                      </div>

                      {isSelected ? (
                        <div className="w-7 h-7 rounded-full bg-white text-black font-mono font-black text-xs flex items-center justify-center shrink-0">
                          #{orderNumber}
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-zinc-900 text-zinc-400 font-mono text-xs flex items-center justify-center shrink-0 border border-zinc-800">
                          +
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chosen Sequence Display */}
            {selectedOrder.length > 0 && (
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
                <span className="text-zinc-400 block mb-1 font-mono">ORDINEA TA CALCULATĂ:</span>
                <div className="flex flex-wrap items-center gap-2">
                  {selectedOrder.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-2.5 py-1 rounded bg-black text-white font-mono font-medium border border-zinc-800">
                        {idx + 1}. {item}
                      </span>
                      {idx < selectedOrder.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-zinc-500" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setSelectedOrder([])}
                disabled={tacticsResult !== 'none'}
                className="px-3.5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 text-xs border border-zinc-800 transition-colors"
              >
                Resetează Ordinea
              </button>

              <div className="flex items-center gap-3">
                {tacticsResult === 'none' ? (
                  <button
                    onClick={handleVerifyOrder}
                    disabled={selectedOrder.length !== currentTactics.vehicles.length}
                    className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
                      selectedOrder.length === currentTactics.vehicles.length
                        ? 'bg-white hover:bg-zinc-200 text-black'
                        : 'bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800'
                    }`}
                  >
                    <span>Validează Ordinea (+20 ELO)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={nextTactics}
                    className="px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-all flex items-center gap-2"
                  >
                    <span>Următorul Puzzle</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Verdict Output */}
            {tacticsResult !== 'none' && (
              <div
                className={`p-4 rounded-xl border text-sm space-y-2 ${
                  tacticsResult === 'correct'
                    ? 'bg-zinc-900 border-white text-white'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-300'
                }`}
              >
                <div className="flex items-center gap-2 font-mono font-bold text-xs">
                  {tacticsResult === 'correct' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>SOLUȚIE CORECTĂ! (+20 ELO TACTIC)</span>
                    </>
                  ) : tacticsResult === 'timeout' ? (
                    <>
                      <Clock className="w-4 h-4 text-zinc-400" />
                      <span>TIMPUL A EXPIRAT! (-10 ELO)</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-zinc-400" />
                      <span>ORDINE INCORECTĂ! (-10 ELO)</span>
                    </>
                  )}
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-white">Regula de Drept:</strong> {currentTactics.explanation}
                </p>

                <div className="text-xs font-mono text-zinc-400 pt-1">
                  Ordinea oficială:{' '}
                  <span className="text-white font-bold">
                    {currentTactics.correctOrder.join(' -> ')}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Side Info / Rules */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <Crown className="w-4 h-4 text-white" />
                <span>Cum se Calculează Ordinea în Șah vs Trafic</span>
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                În șah, analizezi mutările forțate: Șahuri, Capturi, Amenințări.
                În trafic la intersecție, analizezi ierarhia forțată:
              </p>
              <div className="space-y-2 text-xs font-mono text-zinc-300">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  1. <span className="text-white font-bold">Polițist / Semafor:</span> Comandă absolută.
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  2. <span className="text-white font-bold">Drumul cu Prioritate:</span> Trec primii. Între ei se dă prioritate de dreapta.
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  3. <span className="text-white font-bold">Virajul la Stânga:</span> Pierde mereu prioritatea în fața celui care vine drept.
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  4. <span className="text-white font-bold">Regula de Dreapta:</span> Arbitrul suprem când rangurile sunt egale.
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 space-y-2">
              <div className="font-mono text-white font-bold">STATISTICI TACTICE PERSONALE:</div>
              <div className="flex justify-between">
                <span>Puzzle-uri rezolvate:</span>
                <span className="font-mono text-white font-bold">
                  {progress.solvedDrivingTactics.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Rată de succes la intersecții:</span>
                <span className="font-mono text-white font-bold">
                  {progress.solvedDrivingTactics.length > 0 ? '88%' : 'În antrenament'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Chess Warm-up */}
      {activeTab === 'chess_warmup' && currentChess && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  PUZZLE DE ȘAH #{chessIndex + 1} • TEMĂ: {currentChess.theme}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{currentChess.title}</h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 text-white border border-zinc-800">
                Dificultate: {currentChess.rating} ELO
              </span>
            </div>

            {/* Tactical Target Task */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-300">
              <p className="font-bold text-white mb-1">Misiunea Tactică:</p>
              <p>{currentChess.targetMoveDescription}</p>
            </div>

            {/* Move Input & Interactive Check */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-zinc-400 block">
                INTRODU MUTAREA ÎN NOTAȚIE ALGEBRICĂ (EX: {currentChess.solutionUci}):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chessAnswerInput}
                  onChange={(e) => setChessAnswerInput(e.target.value)}
                  placeholder={`Ex: ${currentChess.solutionUci}`}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-mono text-white focus:outline-none focus:border-white flex-1"
                />
                <button
                  onClick={handleSolveChess}
                  className="px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-colors"
                >
                  Execută Mutarea
                </button>
              </div>
            </div>

            {/* Result */}
            {chessSolved && (
              <div className="p-4 rounded-xl bg-zinc-900 border border-white text-white text-sm space-y-2">
                <div className="flex items-center gap-2 font-mono font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>MUTARE CORECTĂ! AI CÂȘTIGAT +25 DRIVER ELO</span>
                </div>
                <p className="text-xs text-zinc-300">
                  <strong className="text-white">Conexiunea cu Conducerea Auto:</strong>{' '}
                  {currentChess.drivingPrincipleConnection}
                </p>
                <button
                  onClick={nextChess}
                  className="mt-2 px-4 py-2 rounded-lg bg-white text-black font-bold text-xs transition-colors hover:bg-zinc-200"
                >
                  Următorul Puzzle de Șah
                </button>
              </div>
            )}

            {chessFailed && (
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs flex items-center justify-between">
                <span>Mutare incorectă. Încearcă din nou sau verifică poziția!</span>
                <button
                  onClick={() => setChessAnswerInput(currentChess.solutionUci)}
                  className="text-white underline font-mono text-[11px]"
                >
                  Arată soluția ({currentChess.solutionUci})
                </button>
              </div>
            )}
          </div>

          {/* Neuro-priming insight */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-white" />
              <span>De ce Șahul este Secretul Tău la DRPCIV?</span>
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Studiul de referință al lui Chase & Simon (1973) a arătat că jucătorii de șah își
              antrenează memoria vizual-spațială prin „chunking” — recunosc tipare întregi în loc să
              analizeze fiecare element pe rând.
            </p>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Când ajungi la o intersecție în examenul auto, creierul tău obișnuit cu șahul
              va calcula ordinea de trecere în mai puțin de 2 secunde fără frică.
            </p>
          </div>
        </div>
      )}

      {/* Mode 3: Leaderboard */}
      {activeTab === 'leaderboard' && (
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div>
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-white" />
                <span>Clasamentul Național al Candidaților Categoria B</span>
              </h3>
              <p className="text-xs text-zinc-400">
                Punctajul ELO reflectă acuratețea la simulările oficiale și viteza de rezolvare a intersecțiilor
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-400">Sezonul Oficial DRPCIV 2026</span>
          </div>

          <div className="space-y-2">
            {LEADERBOARD_CANDIDATES.map((cand) => (
              <div
                key={cand.rank}
                className={`p-3.5 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                  cand.isUser
                    ? 'bg-zinc-900 border-white text-white font-bold'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-md font-mono font-bold flex items-center justify-center text-xs ${
                      cand.rank === 1
                        ? 'bg-white text-black'
                        : cand.rank === 2
                        ? 'bg-zinc-400 text-black'
                        : cand.rank === 3
                        ? 'bg-zinc-700 text-white'
                        : 'bg-zinc-900 text-zinc-400'
                    }`}
                  >
                    #{cand.rank}
                  </span>
                  <div>
                    <span className="text-white font-medium">{cand.name}</span>
                    <span className="text-zinc-500 block text-[11px]">{cand.title}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 font-mono">
                  <div className="text-right">
                    <span className="text-white font-bold text-sm">{cand.elo} ELO</span>
                    <span className="text-zinc-500 block text-[10px]">{cand.streak}z streak</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
