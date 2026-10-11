'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Gauge,
  Sliders,
  Shapes,
  ShieldAlert,
  GitFork,
  ParkingCircle,
  Award,
  Wrench,
  CloudRain,
  HeartPulse,
  Scale,
  Sparkles,
  ArrowRight,
  Compass,
  Navigation,
  RotateCcw,
  Lock,
  Check,
  FileQuestion,
  HelpCircle,
  Clock,
  Layers
} from 'lucide-react';
import { UserProgress } from '@/types/driving';
import { BEGINNER_LEARNING_PATH, BeginnerLesson } from '@/data/beginnerPath';

interface BeginnerAcademyProps {
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
  onJumpToSimulator: () => void;
  onJumpToDictionary?: () => void;
  onJumpToTheoryLab?: () => void;
}

const ICONS_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Gauge,
  Sliders,
  Shapes,
  Navigation,
  ShieldAlert,
  GitFork,
  RotateCcw,
  ArrowRight,
  ParkingCircle,
  Compass,
  CloudRain,
  Wrench,
  HeartPulse,
  Scale,
  Sparkles,
  Award,
  BookOpen,
  CheckCircle2,
  AlertTriangle: ShieldAlert,
  FileQuestion
};

export const BeginnerAcademy: React.FC<BeginnerAcademyProps> = ({
  progress,
  onUpdateProgress,
  onJumpToSimulator,
  onJumpToDictionary,
  onJumpToTheoryLab
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('mod-19-sala-exam-structure');
  const [quizSelection, setQuizSelection] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [showMobileModuleList, setShowMobileModuleList] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'sala' | 'driving'>('all');

  const activeLesson =
    BEGINNER_LEARNING_PATH.find((m) => m.id === selectedModuleId) || BEGINNER_LEARNING_PATH[0];
  const IconComponent = ICONS_MAP[activeLesson.iconName] || BookOpen;

  const isModuleUnlocked = (moduleId: string, index: number) => {
    // Modules 1 and 19 (first of each track) or already unlocked
    if (index === 0 || moduleId === 'mod-19-sala-exam-structure') return true;
    return progress.unlockedModules.includes(moduleId);
  };

  const handleSelectModule = (id: string) => {
    setSelectedModuleId(id);
    setQuizSelection(null);
    setQuizSubmitted(false);
    setShowMobileModuleList(false);
  };

  const handleCheckQuiz = () => {
    if (quizSelection === null) return;
    setQuizSubmitted(true);

    if (quizSelection === activeLesson.interactiveCheck.correctIndex) {
      const currentIdx = BEGINNER_LEARNING_PATH.findIndex((m) => m.id === activeLesson.id);
      if (currentIdx + 1 < BEGINNER_LEARNING_PATH.length) {
        const nextId = BEGINNER_LEARNING_PATH[currentIdx + 1].id;
        if (!progress.unlockedModules.includes(nextId)) {
          const updatedUnlocked = [...progress.unlockedModules, nextId];
          const updatedElo = progress.eloRating + 25;
          onUpdateProgress({
            ...progress,
            unlockedModules: updatedUnlocked,
            eloRating: updatedElo,
            peakElo: Math.max(progress.peakElo, updatedElo)
          });
        }
      }
    }
  };

  const handleNextModule = () => {
    const currentIdx = BEGINNER_LEARNING_PATH.findIndex((m) => m.id === activeLesson.id);
    if (currentIdx + 1 < BEGINNER_LEARNING_PATH.length) {
      handleSelectModule(BEGINNER_LEARNING_PATH[currentIdx + 1].id);
    }
  };

  const filteredModules = BEGINNER_LEARNING_PATH.filter((m) => {
    if (selectedFilter === 'sala') return m.moduleIndex >= 19;
    if (selectedFilter === 'driving') return m.moduleIndex <= 18;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-6 text-white font-sans">
      {/* Academy Header */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
        <div className="max-w-4xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800">
            <BookOpen className="w-3.5 h-3.5 text-white" />
            <span>CURRICULUM DE LA ZERO • 24 MODULE COMPLETE (CONDUCERE PRACTICĂ & SALA DRPCIV)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ghidul Începătorului: Pregătire Teoretică (Sala) & Conducere de la Zero
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Module complete de învățare atât pentru examenul teoretic pe calculatorul poliției
            (tactica celor 26 de întrebări, capcana variantelor multiple, butonul „Răspunde mai târziu”),
            cât și pentru manevrele fizice la volan (pedale, ambreiaj, rampă, giratoriu și comenzi).
          </p>
        </div>

        {/* Filter Track Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-850 mt-4">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedFilter === 'all'
                ? 'bg-white text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Toate cele 24 Module
          </button>
          <button
            onClick={() => {
              setSelectedFilter('sala');
              setSelectedModuleId('mod-19-sala-exam-structure');
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              selectedFilter === 'sala'
                ? 'bg-white text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Examenul Teoretic (Sala DRPCIV: Mod. 19-24)</span>
          </button>
          <button
            onClick={() => {
              setSelectedFilter('driving');
              setSelectedModuleId('mod-01-cockpit');
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              selectedFilter === 'driving'
                ? 'bg-white text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>Conducere Practică de la Zero (Mod. 1-18)</span>
          </button>

          {onJumpToTheoryLab && (
            <button
              onClick={onJumpToTheoryLab}
              className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-750 text-xs font-mono transition-colors flex items-center gap-1.5"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-white" />
              <span>Sală A-Z & Deducție</span>
            </button>
          )}

          {onJumpToDictionary && (
            <button
              onClick={onJumpToDictionary}
              className="ml-auto px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs font-mono transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Dicționar Cuvinte Neclare</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Module Selector Trigger */}
      <div className="block lg:hidden">
        <button
          onClick={() => setShowMobileModuleList(!showMobileModuleList)}
          className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
              <IconComponent className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase">
                Modulul {activeLesson.moduleIndex} din {BEGINNER_LEARNING_PATH.length}
              </div>
              <div className="text-xs font-bold text-white line-clamp-1">
                {activeLesson.title}
              </div>
            </div>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-zinc-400 transition-transform ${
              showMobileModuleList ? 'rotate-180' : ''
            }`}
          />
        </button>

        {showMobileModuleList && (
          <div className="mt-2 p-2 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1 max-h-80 overflow-y-auto">
            {filteredModules.map((lesson, idx) => {
              const unlocked = isModuleUnlocked(lesson.id, idx);
              const isSelected = lesson.id === activeLesson.id;
              const LessonIcon = ICONS_MAP[lesson.iconName] || BookOpen;

              return (
                <button
                  key={lesson.id}
                  disabled={!unlocked}
                  onClick={() => handleSelectModule(lesson.id)}
                  className={`w-full p-2.5 rounded-lg flex items-center justify-between text-left transition-colors ${
                    isSelected
                      ? 'bg-white text-black font-bold'
                      : unlocked
                      ? 'bg-zinc-900/60 text-zinc-200 hover:bg-zinc-800'
                      : 'bg-zinc-950 text-zinc-600 cursor-not-allowed opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs">
                    <LessonIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="line-clamp-1">{lesson.title}</span>
                  </div>
                  {unlocked ? (
                    <span className="text-[10px] font-mono opacity-80">{lesson.estimatedMinutes}m</span>
                  ) : (
                    <Lock className="w-3 h-3 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Main Academy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Modules List */}
        <div className="hidden lg:block lg:col-span-4 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 uppercase tracking-wider px-2">
            <span>Listă Module ({filteredModules.length})</span>
            <span>{selectedFilter === 'sala' ? 'SALA TEORETICĂ' : selectedFilter === 'driving' ? 'PRACTIC' : 'COMPLET'}</span>
          </div>

          <div className="space-y-1.5 max-h-[780px] overflow-y-auto pr-1">
            {filteredModules.map((lesson, idx) => {
              const unlocked = isModuleUnlocked(lesson.id, idx);
              const isSelected = lesson.id === activeLesson.id;
              const LessonIcon = ICONS_MAP[lesson.iconName] || BookOpen;

              return (
                <button
                  key={lesson.id}
                  disabled={!unlocked}
                  onClick={() => handleSelectModule(lesson.id)}
                  className={`w-full p-3 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-zinc-900 border-white text-white shadow-sm'
                      : unlocked
                      ? 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
                      : 'bg-zinc-950/40 border-zinc-900 text-zinc-600 cursor-not-allowed opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded flex items-center justify-center text-xs ${
                          isSelected ? 'bg-white text-black' : 'bg-zinc-900 text-zinc-400'
                        }`}
                      >
                        <LessonIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {lesson.moduleIndex >= 19 ? 'SALA' : 'PRACTIC'} 0{lesson.moduleIndex}
                      </span>
                    </div>

                    {unlocked ? (
                      <span className="text-[10px] font-mono text-zinc-400">
                        {lesson.estimatedMinutes} min
                      </span>
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-zinc-600" />
                    )}
                  </div>

                  <div className="text-xs font-bold mt-1.5 line-clamp-1">
                    {lesson.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Module Dossier */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
            {/* Module Top Meta */}
            <div className="space-y-3 border-b border-zinc-800 pb-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 uppercase">
                  MODULUL {activeLesson.moduleIndex} DIN {BEGINNER_LEARNING_PATH.length} • {activeLesson.estimatedMinutes} MINUTE
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-700">
                  +25 ELO LA FINALIZARE
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {activeLesson.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                {activeLesson.subtitle}
              </p>

              {/* Summary Box */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                <span className="font-bold text-white">Rezumat pe scurt: </span>
                {activeLesson.summary}
              </div>
            </div>

            {/* Core Concepts */}
            <div className="space-y-6">
              {activeLesson.coreConcepts.map((concept, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-mono">
                      {idx + 1}
                    </span>
                    <span>{concept.heading}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {concept.body}
                  </p>

                  <div className="space-y-2 pl-2">
                    {concept.bulletPoints.map((bp, bpIdx) => (
                      <div key={bpIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-white shrink-0 mt-1" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>

                  {concept.proTip && (
                    <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-zinc-200">
                      <span className="font-bold text-white">Sfatul Instructorului: </span>
                      {concept.proTip}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Interactive Practical Check */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                  Verificarea Cunoștințelor • Mini-Test
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  Răspunde corect pentru deblocarea modulului următor
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                <p className="text-xs sm:text-sm font-bold text-white">
                  {activeLesson.interactiveCheck.question}
                </p>

                <div className="space-y-2">
                  {activeLesson.interactiveCheck.options.map((opt, optIdx) => {
                    const isSelected = quizSelection === optIdx;
                    return (
                      <button
                        key={optIdx}
                        disabled={quizSubmitted}
                        onClick={() => setQuizSelection(optIdx)}
                        className={`w-full p-3 rounded-lg text-left text-xs sm:text-sm border transition-all ${
                          isSelected
                            ? 'bg-white text-black font-semibold border-white'
                            : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {!quizSubmitted ? (
                  <button
                    disabled={quizSelection === null}
                    onClick={handleCheckQuiz}
                    className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all ${
                      quizSelection !== null
                        ? 'bg-white text-black hover:bg-zinc-200 cursor-pointer'
                        : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    }`}
                  >
                    Verifică Răspunsul
                  </button>
                ) : (
                  <div className="space-y-3 pt-2">
                    {quizSelection === activeLesson.interactiveCheck.correctIndex ? (
                      <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 space-y-2">
                        <div className="flex items-center gap-2 text-white font-bold text-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>CORECT! +25 ELO adăugat în profil.</span>
                        </div>
                        <p className="text-xs text-zinc-300">
                          {activeLesson.interactiveCheck.explanation}
                        </p>
                        <button
                          onClick={handleNextModule}
                          className="mt-2 w-full py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 flex items-center justify-center gap-1.5"
                        >
                          <span>Treci la Modulul Următor</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 space-y-2">
                        <div className="flex items-center gap-2 text-white font-bold text-xs">
                          <XCircle className="w-4 h-4 text-rose-400" />
                          <span>Răspuns incorect. Mai încearcă o dată!</span>
                        </div>
                        <p className="text-xs text-zinc-300">
                          {activeLesson.interactiveCheck.explanation}
                        </p>
                        <button
                          onClick={() => {
                            setQuizSubmitted(false);
                            setQuizSelection(null);
                          }}
                          className="mt-2 w-full py-2 rounded-lg bg-zinc-800 text-white text-xs font-bold hover:bg-zinc-700"
                        >
                          Reîncearcă Întrebarea
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
