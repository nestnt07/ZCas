'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  FileText,
  Tag,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronDown,
  Info
} from 'lucide-react';
import { DRIVING_VOCABULARY } from '@/data/drivingVocabulary';
import { VocabCategory, VocabTerm } from '@/types/driving';

const CATEGORY_NAMES: Record<string, string> = {
  all: 'Toate Cuvintele',
  drum: 'Drum & Infrastructură',
  mecanica: 'Mecanică Auto & Bord',
  juridic: 'Juridic, Infracțiuni & Amenzi',
  manevre: 'Manevre & Depășire',
  prim_ajutor: 'Prim Ajutor',
  prioritate: 'Prioritate & Intersecții'
};

export const VocabDictionary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredTerms = DRIVING_VOCABULARY.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;

    const matchesQuery =
      item.term.toLowerCase().includes(q) ||
      item.simpleMeaning.toLowerCase().includes(q) ||
      item.realLifeExample.toLowerCase().includes(q) ||
      item.examQuestionTrap.toLowerCase().includes(q) ||
      item.synonymsOrSimplerTerms.some((s) => s.toLowerCase().includes(q));

    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-6 text-white font-sans">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800">
            <BookOpen className="w-3.5 h-3.5 text-white" />
            <span>DICȚIONAR RUTIER DRPCIV // VOCABULAR EXPLICAT PE ÎNȚELESUL TĂU</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ghidul Cuvintelor Tehnice și Juridice din Chestionare
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Pe site-ul oficial DRPCIV / DGPCI și în Codul Rutier apar mulți termeni birocratici sau tehnici
            care îi derutează pe începători (cum ar fi „acostament”, „declivitate”, „peliculă de apă”, „catadioptri”
            sau „calarea motorului”). Aici găsești fiecare cuvânt explicat foarte simplu, cu exemple din viața
            reală și capcana exactă din întrebări unde este folosit.
          </p>
        </div>
      </div>

      {/* Search Bar & Categories */}
      <div className="space-y-3">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Caută orice cuvânt neclar (ex: acostament, declivitate, MTMA, calare, garou)..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white font-sans"
          />
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {Object.entries(CATEGORY_NAMES).map(([key, label]) => {
            const isSelected = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
        <span>GĂSITE: {filteredTerms.length} TERMENI EXPLICATIVI</span>
        <span>CATEGORIA B ROMÂNIA</span>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((term) => {
          const isExpanded = expandedId === term.id;
          return (
            <div
              key={term.id}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Term title & category */}
                <div className="flex items-start justify-between gap-2 border-b border-zinc-850 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                      {CATEGORY_NAMES[term.category] || term.category}
                    </span>
                    <h3 className="text-lg font-extrabold text-white mt-1.5">
                      {term.term}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-end max-w-[150px]">
                    {term.synonymsOrSimplerTerms.slice(0, 2).map((syn, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-850"
                      >
                        {syn}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 1. Explicație pe înțelesul tău */}
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <div className="text-[11px] font-mono text-white font-bold flex items-center gap-1.5 uppercase">
                    <Lightbulb className="w-3.5 h-3.5 text-white" />
                    <span>Pe Înțelesul Tău:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                    {term.simpleMeaning}
                  </p>
                </div>

                {/* 2. Exemplu din viața reală */}
                <div className="space-y-1 text-xs">
                  <div className="font-bold text-zinc-300 flex items-center gap-1.5 font-mono text-[11px] uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Exemplu Practic în Trafic:</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed pl-5">
                    {term.realLifeExample}
                  </p>
                </div>

                {/* 3. Capcana din chestionare DRPCIV */}
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1 text-xs">
                  <div className="font-bold text-white flex items-center gap-1.5 font-mono text-[11px] uppercase">
                    <AlertTriangle className="w-3.5 h-3.5 text-white" />
                    <span>Capcana din Întrebările Oficiale:</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    {term.examQuestionTrap}
                  </p>
                </div>
              </div>

              {/* Legal definition (toggleable) */}
              <div className="pt-2 border-t border-zinc-850">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : term.id)}
                  className="w-full flex items-center justify-between text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3 h-3" />
                    <span>Definiția Legală din OUG 195/2002</span>
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <p className="text-xs text-zinc-400 font-serif italic pt-2 pl-2 border-l border-zinc-700 mt-2">
                    „{term.detailedLegalDefinition}”
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
