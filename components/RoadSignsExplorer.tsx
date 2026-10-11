'use client';

import React, { useState, useEffect } from 'react';
import {
  Layers,
  Search,
  Bookmark,
  BookmarkCheck,
  RotateCw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  Zap,
  Brain,
  Shield,
  Eye,
  ArrowRight,
  Clock,
  Sparkles,
  Award
} from 'lucide-react';
import { RoadSign, SignCategory, UserProgress } from '@/types/driving';
import { ROAD_SIGNS_DATABASE } from '@/data/roadSigns';
import { RoadSignSvg } from '@/components/RoadSignSvg';

interface RoadSignsExplorerProps {
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
}

export const RoadSignsExplorer: React.FC<RoadSignsExplorerProps> = ({
  progress,
  onUpdateProgress
}) => {
  const [viewMode, setViewMode] = useState<'flashcards' | 'cia_drill' | 'catalog'>('flashcards');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Flashcards state
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // CIA Saccade Rapid Drill state
  const [drillIndex, setDrillIndex] = useState(0);
  const [drillScore, setDrillScore] = useState(0);
  const [drillStreak, setDrillStreak] = useState(0);
  const [drillTimeLeft, setDrillTimeLeft] = useState(5);
  const [drillAnswered, setDrillAnswered] = useState<boolean>(false);
  const [drillSelectedOption, setDrillSelectedOption] = useState<string | null>(null);

  const filteredSigns = ROAD_SIGNS_DATABASE.filter((sign) => {
    const matchesCat = activeCategory === 'all' || sign.category === activeCategory;
    const matchesSearch =
      sign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sign.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sign.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const currentFlashcard = filteredSigns[cardIndex] || filteredSigns[0] || ROAD_SIGNS_DATABASE[0];
  const currentDrillSign = ROAD_SIGNS_DATABASE[drillIndex] || ROAD_SIGNS_DATABASE[0];

  // Derive drill options deterministically or update in user-triggered transitions
  const [drillOptions, setDrillOptions] = useState<RoadSign[]>(() => {
    const target = ROAD_SIGNS_DATABASE[0];
    const others = ROAD_SIGNS_DATABASE.filter((s) => s.id !== target.id).slice(0, 3);
    return [target, ...others].sort(() => 0.5 - Math.random());
  });

  const handleDrillAnswer = React.useCallback(
    (selectedSignId: string | null) => {
      if (drillAnswered) return;
      setDrillAnswered(true);
      setDrillSelectedOption(selectedSignId);

      const isCorrect = selectedSignId === currentDrillSign.id;
      if (isCorrect) {
        setDrillScore((prev) => prev + 1);
        setDrillStreak((prev) => prev + 1);
        const updatedElo = progress.eloRating + 15;
        onUpdateProgress({
          ...progress,
          eloRating: updatedElo,
          peakElo: Math.max(progress.peakElo, updatedElo)
        });
      } else {
        setDrillStreak(0);
      }
    },
    [drillAnswered, currentDrillSign.id, progress, onUpdateProgress]
  );

  // Drill countdown timer
  useEffect(() => {
    if (viewMode !== 'cia_drill' || drillAnswered) return;

    const timer = setInterval(() => {
      setDrillTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleDrillAnswer(null); // Timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [viewMode, drillAnswered, handleDrillAnswer]);

  const handleNextDrill = () => {
    const nextIdx = (drillIndex + 1) % ROAD_SIGNS_DATABASE.length;
    setDrillIndex(nextIdx);
    const target = ROAD_SIGNS_DATABASE[nextIdx];
    const others = ROAD_SIGNS_DATABASE.filter((s) => s.id !== target.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setDrillOptions([target, ...others].sort(() => 0.5 - Math.random()));
    setDrillTimeLeft(5);
    setDrillAnswered(false);
    setDrillSelectedOption(null);
  };

  const handleSwitchToDrill = () => {
    setViewMode('cia_drill');
    setDrillTimeLeft(5);
    setDrillAnswered(false);
    setDrillSelectedOption(null);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % (filteredSigns.length || 1));
  };

  const handleToggleBookmark = (signId: string) => {
    const exists = progress.bookmarkedSignIds.includes(signId);
    const updatedBookmarks = exists
      ? progress.bookmarkedSignIds.filter((id) => id !== signId)
      : [...progress.bookmarkedSignIds, signId];

    onUpdateProgress({
      ...progress,
      bookmarkedSignIds: updatedBookmarks
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-6 text-white font-sans">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-mono mb-2 border border-zinc-800">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>INDICATOARELE RUTIERE OFICIALE DIN ROMÂNIA • VECTORIAL REAL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Semne de Circulație Reale & Metoda de Învățare CIA
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-2xl leading-relaxed">
            Fără pictograme generice sau emoji: fiecare semn este reprodus fidel conform standardului
            rutier național. Învață-le folosind codificarea neuro-vizuală CIA a formelor și culorilor
            sau testează-ți reflexele în testul de recunoaștere rapidă.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-1.5 bg-zinc-900 p-1.5 rounded-xl border border-zinc-800 self-start lg:self-auto">
          <button
            onClick={() => setViewMode('flashcards')}
            className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'flashcards'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Flashcard-uri Leitner
          </button>
          <button
            onClick={handleSwitchToDrill}
            className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              viewMode === 'cia_drill'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Test Rapid CIA</span>
          </button>
          <button
            onClick={() => setViewMode('catalog')}
            className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'catalog'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Catalog Complet ({ROAD_SIGNS_DATABASE.length})
          </button>
        </div>
      </div>

      {/* CIA Neuro-Matrix Shape & Color Decoder Bar */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase">
          <Brain className="w-3.5 h-3.5 text-white" />
          <span>Matricea CIA a Formelor și Culorilor (Decodare în 0.2 Secunde):</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-[11px] font-mono">
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <span className="text-red-400 font-bold block">TRIUNGHI ROȘU</span>
            <span className="text-zinc-400">Avertizare / Pericol iminent</span>
          </div>
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <span className="text-red-400 font-bold block">CERC ROȘU</span>
            <span className="text-zinc-400">Interzicere / Restricție totală</span>
          </div>
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <span className="text-blue-400 font-bold block">CERC ALBASTRU</span>
            <span className="text-zinc-400">Obligare / Ordin de misiune</span>
          </div>
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <span className="text-blue-400 font-bold block">PĂTRAT ALBASTRU</span>
            <span className="text-zinc-400">Informare & Asistență</span>
          </div>
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <span className="text-yellow-400 font-bold block">ROMB GALBEN</span>
            <span className="text-zinc-400">Drum cu prioritate supremă</span>
          </div>
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
            <span className="text-red-500 font-bold block">OCTOGON ROȘU</span>
            <span className="text-zinc-400">STOP absolut (roata oprită)</span>
          </div>
        </div>
      </div>

      {/* MODE 1: CIA SACCADE RAPID NEURO-DRILL */}
      {viewMode === 'cia_drill' && (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Drill HUD */}
          <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-white" />
              <span>TEST REFLEX CIA • SEMNUL #{drillIndex + 1} DIN {ROAD_SIGNS_DATABASE.length}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>SCOR: {drillScore}</span>
              <span className="text-white font-bold">SERIE: {drillStreak}</span>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-white font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>{drillTimeLeft}s</span>
              </div>
            </div>
          </div>

          {/* Drill Flashcard Display */}
          <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center space-y-6 text-center shadow-xl">
            <div className="py-2">
              <RoadSignSvg svgType={currentDrillSign.svgType} name={currentDrillSign.name} size={140} />
            </div>

            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Identifică semnul în mai puțin de 5 secunde:
            </div>

            {/* 4 Multi-choice buttons */}
            <div className="w-full space-y-2.5">
              {drillOptions.map((opt) => {
                const isSelected = drillSelectedOption === opt.id;
                const isCorrect = opt.id === currentDrillSign.id;
                let btnStyle = 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-600';

                if (drillAnswered) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-950 border-rose-500 text-rose-200';
                  } else {
                    btnStyle = 'bg-zinc-950 border-zinc-850 text-zinc-600 opacity-50';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    disabled={drillAnswered}
                    onClick={() => handleDrillAnswer(opt.id)}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt.name}</span>
                    {drillAnswered && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                    {drillAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback & CIA Anchor */}
            {drillAnswered && (
              <div className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-left animate-in fade-in">
                <div className="flex items-center gap-2 text-xs font-bold font-mono">
                  {drillSelectedOption === currentDrillSign.id ? (
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      REFLEX CORECT! (+15 ELO)
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4" />
                      GREȘIT! Răspunsul corect: {currentDrillSign.name}
                    </span>
                  )}
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {currentDrillSign.legalRule}
                </p>

                {currentDrillSign.ciaMemoryAnchor && (
                  <div className="text-[11px] font-mono text-zinc-400 pt-1 border-t border-zinc-800">
                    <strong className="text-white">Ancoră CIA: </strong>
                    {currentDrillSign.ciaMemoryAnchor.mnemonicPeg}
                  </div>
                )}

                <button
                  onClick={handleNextDrill}
                  className="mt-2 w-full py-2.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Următorul Semn</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODE 2: FLASHCARDS LEITNER */}
      {viewMode === 'flashcards' && currentFlashcard && (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>CARDUL {cardIndex + 1} DIN {filteredSigns.length}</span>
            <button
              onClick={() => handleToggleBookmark(currentFlashcard.id)}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
            >
              {progress.bookmarkedSignIds.includes(currentFlashcard.id) ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-white" />
                  <span>Salvat la Favorite</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Salvează în Colecție</span>
                </>
              )}
            </button>
          </div>

          {/* Flashcard Box */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[420px] rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl relative overflow-hidden"
          >
            {!isFlipped ? (
              <div className="flex flex-col items-center justify-center text-center my-auto space-y-6">
                <div className="py-2">
                  <RoadSignSvg svgType={currentFlashcard.svgType} name={currentFlashcard.name} size={150} />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                    COD OFICIAL: {currentFlashcard.code} • {currentFlashcard.category.toUpperCase()}
                  </span>
                  <h2 className="text-2xl font-extrabold text-white">
                    {currentFlashcard.name}
                  </h2>
                </div>
                <div className="text-xs text-zinc-500 flex items-center gap-1 font-mono pt-4">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Apasă oriunde pentru a întoarce cardul</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 my-auto">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-xs font-mono text-zinc-400 uppercase">
                    REGULA LEGALĂ • {currentFlashcard.code}
                  </span>
                  <span className="text-xs font-mono text-white">
                    {currentFlashcard.name}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm">
                  <h3 className="font-bold text-white">Descriere & Semnificație:</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    {currentFlashcard.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm space-y-1">
                  <h4 className="font-bold text-white flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-white" />
                    <span>Regula Legală din Codul Rutier:</span>
                  </h4>
                  <p className="text-zinc-300">{currentFlashcard.legalRule}</p>
                </div>

                {currentFlashcard.ciaMemoryAnchor && (
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm space-y-1">
                    <h4 className="font-bold text-white flex items-center gap-1.5 font-mono">
                      <Brain className="w-3.5 h-3.5 text-white" />
                      <span>Metoda de Memorare CIA:</span>
                    </h4>
                    <p className="text-zinc-300 font-mono text-xs">
                      {currentFlashcard.ciaMemoryAnchor.mnemonicPeg}
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      <strong>Reflex de Acțiune:</strong> {currentFlashcard.ciaMemoryAnchor.quickReflexRule}
                    </p>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm space-y-1">
                  <h4 className="font-bold text-white flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-white" />
                    <span>Capcană Frecventă la Examenul DRPCIV:</span>
                  </h4>
                  <p className="text-zinc-300">{currentFlashcard.commonExamTrap}</p>
                </div>

                <div className="text-[11px] text-zinc-500 font-mono text-center pt-2">
                  Apasă din nou pentru a reveni la semn
                </div>
              </div>
            )}
          </div>

          {/* Flashcard Action Buttons */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setIsFlipped(false);
                setCardIndex((prev) => (prev > 0 ? prev - 1 : filteredSigns.length - 1));
              }}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-xs font-medium transition-colors"
            >
              Anteriorul
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 text-xs font-bold transition-colors"
            >
              Întoarce Cardul
            </button>

            <button
              onClick={handleNextCard}
              className="px-6 py-2.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors flex items-center gap-1"
            >
              <span>Următorul</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* MODE 3: FULL CATALOG VIEW */}
      {viewMode === 'catalog' && (
        <div className="space-y-4">
          {/* Search & Categories Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Caută semn sau cod (ex: STOP, A01, cedează, viteză)..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white font-sans"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1">
              {[
                { id: 'all', label: `Toate (${ROAD_SIGNS_DATABASE.length})` },
                { id: 'priority', label: 'Prioritate' },
                { id: 'warning', label: 'Avertizare' },
                { id: 'prohibition', label: 'Interzicere' },
                { id: 'mandatory', label: 'Obligare' },
                { id: 'information', label: 'Informare' },
                { id: 'additional', label: 'Panouri Adiționale' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setCardIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-white text-black font-bold'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of All Real Road Signs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSigns.map((sign) => {
              const isBookmarked = progress.bookmarkedSignIds.includes(sign.id);
              return (
                <div
                  key={sign.id}
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <RoadSignSvg svgType={sign.svgType} name={sign.name} size={64} />
                      <div>
                        <div className="text-[10px] font-mono text-zinc-400 uppercase">
                          {sign.code} • {sign.category}
                        </div>
                        <h3 className="font-bold text-white text-sm mt-0.5">{sign.name}</h3>
                      </div>
                    </div>

                    <button
                      onClick={() => handleToggleBookmark(sign.id)}
                      className="text-zinc-500 hover:text-white transition-colors"
                      title="Salvează semnul"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 text-white" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {sign.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-zinc-850 text-xs">
                    {sign.ciaMemoryAnchor && (
                      <div className="text-[11px] font-mono text-zinc-400">
                        <span className="text-white font-semibold">Ancoră CIA: </span>
                        {sign.ciaMemoryAnchor.mnemonicPeg}
                      </div>
                    )}
                    <div className="text-[11px] text-zinc-300 bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                      <span className="text-white font-semibold">Capcană Examen: </span>
                      {sign.commonExamTrap}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
