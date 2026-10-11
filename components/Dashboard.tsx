'use client';

import React from 'react';
import {
  ShieldAlert,
  Zap,
  BookOpen,
  Award,
  Crown,
  Brain,
  Activity,
  ChevronRight,
  Gauge,
  Flame,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Target,
  Sparkles,
  RotateCcw,
  HelpCircle
} from 'lucide-react';
import { UserProgress, QuestionCategory } from '@/types/driving';
import { calculateRankTitle } from '@/lib/storage';

interface DashboardProps {
  progress: UserProgress;
  setTab: (tab: string) => void;
  onStartExam: () => void;
  onStartTactics: () => void;
}

const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  priority: 'Prioritate & Intersecții',
  road_signs: 'Semne & Indicatoare',
  circulation_rules: 'Viteze & Reguli de Circulație',
  overtaking_parking: 'Depășire, Oprire & Staționare',
  mechanics: 'Mecanică Auto & Martori Bord',
  first_aid: 'Prim Ajutor Rutier',
  ecological_driving: 'Conducere Preventivă & Eco',
  offenses_penalties: 'Infracțiuni & Puncte Penalizare'
};

export const Dashboard: React.FC<DashboardProps> = ({
  progress,
  setTab,
  onStartExam,
  onStartTactics
}) => {
  const rank = calculateRankTitle(progress.eloRating);

  const overallAccuracy =
    progress.questionsAnswered > 0
      ? Math.round((progress.questionsCorrect / progress.questionsAnswered) * 100)
      : 0;

  const passProbability = Math.min(
    99,
    Math.max(
      15,
      Math.round(
        (progress.eloRating / 2200) * 60 +
          (overallAccuracy > 0 ? (overallAccuracy / 100) * 35 : 10) +
          (progress.examsPassed > 0 ? 5 : 0)
      )
    )
  );

  const unresolvedBlunders = progress.blunderHistory.filter((b) => !b.resolved).length;

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto px-3 sm:px-6 py-6 text-white font-sans">
      {/* Top Banner / Hero HUD */}
      <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-white text-xs font-mono">
              <Crown className="w-3.5 h-3.5" />
              <span>CATEGORIA B ROMÂNIA • GHID COMPLET DE LA ZERO</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Învață Legislația Rutieră & Treci Examenul din Prima Încercare
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Platformă structurată de la zero: 24 de module complete (pregătire practică & sala teoretică DRPCIV),
              dicționarul cuvintelor tehnice neclare explicat pe înțelesul tău, semne rutiere reale cu antrenament CIA
              și simularea oficială a examenului cu 26 de întrebări.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartExam}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-bold text-sm transition-all hover:bg-zinc-200 shadow-sm w-full sm:w-auto"
              >
                <ShieldAlert className="w-4 h-4 text-black" />
                <span>Simulare Examen Oficial (26)</span>
              </button>

              <button
                onClick={() => setTab('theory_lab')}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-bold text-sm transition-all w-full sm:w-auto"
              >
                <Target className="w-4 h-4 text-white" />
                <span>Sală A-Z & Deducție Chestionare</span>
              </button>

              <button
                onClick={() => setTab('signs')}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-medium text-sm transition-all w-full sm:w-auto"
              >
                <RotateCcw className="w-4 h-4 text-white" />
                <span>Toate Semnele Rutiere (SVG Reale)</span>
              </button>

              <button
                onClick={() => setTab('academy')}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-medium text-sm transition-all w-full sm:w-auto"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Ghid Începător (24 Module)</span>
              </button>

              <button
                onClick={() => setTab('dictionary')}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-medium text-sm transition-all w-full sm:w-auto"
              >
                <HelpCircle className="w-4 h-4 text-white" />
                <span>Dicționar DRPCIV</span>
              </button>
            </div>
          </div>

          {/* Probability & Rank Card */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 min-w-[250px]">
            <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
              <div className="text-[11px] uppercase font-mono tracking-wider text-zinc-400 mb-1 flex items-center justify-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-white" />
                <span>Probabilitate de Reușită</span>
              </div>
              <div className="text-3xl sm:text-4xl font-mono font-black text-white">
                {passProbability}%
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                {passProbability >= 85
                  ? 'Nivel Optim: Pregătit de Examen'
                  : passProbability >= 60
                  ? 'Nivel Mediu: Consolidare Prioritate'
                  : 'Nivel Începător: Urmează Ghidul A-Z'}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-2">
                <span>RANG TACTIC:</span>
                <span className="text-white font-bold">{rank.title}</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-white h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(
                      100,
                      Math.max(
                        5,
                        ((progress.eloRating - rank.prevThreshold) /
                          (rank.nextThreshold - rank.prevThreshold)) *
                          100
                      )
                    )}%`
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-1.5">
                <span>{rank.prevThreshold} ELO</span>
                <span className="text-white font-bold">{progress.eloRating} ELO</span>
                <span>{rank.nextThreshold} ELO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Key Diagnostic Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
            <span className="font-mono">SIMULĂRI DRPCIV</span>
            <ShieldAlert className="w-4 h-4 text-zinc-300" />
          </div>
          <div className="text-2xl font-mono font-bold text-white">
            {progress.totalExamsTaken}
          </div>
          <div className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />
            <span>{progress.examsPassed} promovați (min. 22/26)</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
            <span className="font-mono">ACURATEȚE GLOBALĂ</span>
            <Activity className="w-4 h-4 text-zinc-300" />
          </div>
          <div className="text-2xl font-mono font-bold text-white">
            {overallAccuracy}%
          </div>
          <div className="text-xs text-zinc-400 mt-1">
            {progress.questionsCorrect} corecte din {progress.questionsAnswered}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
            <span className="font-mono">SERIE ZILNICĂ</span>
            <Flame className="w-4 h-4 text-white" />
          </div>
          <div className="text-2xl font-mono font-bold text-white">
            {progress.streakDays} Zile
          </div>
          <div className="text-xs text-zinc-400 mt-1">
            Retenție activă neîntreruptă
          </div>
        </div>

        <div
          className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 cursor-pointer hover:border-zinc-600 transition-colors"
          onClick={() => setTab('blunders')}
        >
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
            <span className="font-mono">BANCA DE GAFE</span>
            <XCircle className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-2xl font-mono font-bold text-white">
            {unresolvedBlunders}
          </div>
          <div className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
            <span>Întrebări de re-testat</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Column: Category Performance Breakdown & Beginner Modules Fast-Track */}
        <div className="lg:col-span-2 space-y-6">
          {/* Category Diagnostic Breakdown */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-white" />
                  <span>Acuratețe pe Capitolele Codului Rutier</span>
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Progresul pe fiecare temă din cele 26 de întrebări oficiale ale examenului
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {(Object.keys(CATEGORY_LABELS) as QuestionCategory[]).map((cat) => {
                const stats = progress.categoryStats[cat] || { total: 0, correct: 0 };
                const pct =
                  stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                return (
                  <div key={cat} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-200 font-medium">
                        {CATEGORY_LABELS[cat]}
                      </span>
                      <span className="font-mono text-zinc-400">
                        {stats.total > 0 ? `${pct}% (${stats.correct}/${stats.total})` : 'Netestat încă'}
                      </span>
                    </div>
                    <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-800">
                      <div
                        className="h-full rounded-full transition-all duration-300 bg-white"
                        style={{ width: `${stats.total > 0 ? pct : 5}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Complete Beginner & Sala Modules Fast Track */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-white" />
                  <span>Curriculum: 24 Module (Conducere de la Zero & Sală)</span>
                </h3>
                <p className="text-xs text-zinc-400">
                  De la prima pedală de ambreiaj până la capcanele din chestionarele oficiale:
                </p>
              </div>
              <button
                onClick={() => setTab('academy')}
                className="text-xs text-white hover:underline font-bold flex items-center gap-1"
              >
                <span>Toate cele 24 module</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                onClick={() => setTab('academy')}
                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Modulul 19: Sala DRPCIV
                    </h4>
                    <p className="text-xs text-zinc-400">Touchscreen, 26 întrebări și baremul de 22</p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setTab('academy')}
                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Modulul 20: Variante Multiple
                    </h4>
                    <p className="text-xs text-zinc-400">Cum rezolvi întrebările cu 1, 2 sau 3 răspunsuri corecte</p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setTab('dictionary')}
                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white shrink-0">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Dicționar Rutier DRPCIV
                    </h4>
                    <p className="text-xs text-zinc-400">Acostament, declivitate, MTMA și cuvinte grele explicate simplu</p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setTab('signs')}
                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Semne Reale & Drill CIA
                    </h4>
                    <p className="text-xs text-zinc-400">Grafică vectorială autentică și test rapid de 5 secunde</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: CIA Gateway & Science Explanation Box */}
        <div className="space-y-6">
          {/* The Science of 10Hz vs 4Hz */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-bold">
              <Brain className="w-4 h-4 text-white" />
              <span>RAPORT CIA GATEWAY RDP96-00788R001700210016-5</span>
            </div>
            <h3 className="text-base font-bold text-white">
              Ce Face 10 Hz și De Ce 4 Hz Este Recomandată?
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              <strong className="text-white">10 Hz (Unda Alfa):</strong> Sincronizează ambele emisfere cerebrale (Hemi-Sync).
              Elimină panica și frica de examen la calculatorul poliției, permițând accesul instantaneu la reguli fără blocaje mentale.
            </p>
            <p className="text-xs text-zinc-300 leading-relaxed">
              <strong className="text-white">4 Hz (Unda Teta):</strong> Starea hipnagogică (de adormire). Dacă ai văzut pe reels că 4 Hz e bună, este pentru că ea consolidează memoria în somn, transferând regulile direct în subconștient.
            </p>

            <button
              onClick={() => setTab('cia_science')}
              className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-xs transition-colors hover:bg-zinc-200 flex items-center justify-center gap-2"
            >
              <span>Deschide Laboratorul CIA & Schimbă Frecvența</span>
              <ChevronRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>

          {/* Chess Tactical Routine */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-bold">
              <Zap className="w-4 h-4 text-white" />
              <span>ANTRENAMENT TACTIC RUTIER</span>
            </div>
            <h3 className="text-base font-bold text-white">
              De Ce Șahul Te Învață să Conduci
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Marii maeștri de șah nu analizează fiecare pătrățel la întâmplare; ei recunosc pachete
              întregi de amenințări dintr-o privire (Chunking). În trafic, o intersecție se rezolvă
              exact ca o poziție de șah: identifici piesa regă (prioritatea) și elimini amenințările.
            </p>
            <button
              onClick={onStartTactics}
              className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Zap className="w-3.5 h-3.5 text-white" />
              <span>Joacă Puzzle Rush Rutier (+20 ELO)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
