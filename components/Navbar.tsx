'use client';

import React, { useState } from 'react';
import {
  Compass,
  Zap,
  BookOpen,
  ShieldAlert,
  Brain,
  Layers,
  RotateCcw,
  Volume2,
  VolumeX,
  Flame,
  Award,
  Crown,
  ChevronDown,
  Sparkles,
  Menu,
  X,
  HelpCircle,
  Target
} from 'lucide-react';
import { UserProgress } from '@/types/driving';
import { calculateRankTitle } from '@/lib/storage';
import { gatewayAudio, BrainwaveMode } from '@/lib/audioEngine';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  progress: UserProgress;
  isAudioActive: boolean;
  setIsAudioActive: (active: boolean) => void;
  onResetProgress: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setTab,
  progress,
  isAudioActive,
  setIsAudioActive
}) => {
  const [showAudioMenu, setShowAudioMenu] = useState(false);
  const [selectedFreq, setSelectedFreq] = useState<BrainwaveMode>('alpha_10hz');
  const rank = calculateRankTitle(progress.eloRating);

  const handleToggleAudio = (mode: BrainwaveMode = selectedFreq) => {
    setSelectedFreq(mode);
    if (isAudioActive && mode === selectedFreq) {
      gatewayAudio.stop();
      setIsAudioActive(false);
    } else {
      gatewayAudio.start(mode, 0.35, 216);
      setIsAudioActive(true);
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Panou', icon: Compass },
    { id: 'theory_lab', label: 'Sală A-Z & Deducție', icon: Target },
    { id: 'academy', label: 'Ghid Începător (24)', icon: BookOpen },
    { id: 'dictionary', label: 'Dicționar DRPCIV', icon: HelpCircle },
    { id: 'exam', label: 'Examen Oficial (26)', icon: ShieldAlert },
    { id: 'signs', label: 'Semne Reale & CIA', icon: Layers },
    { id: 'priority_lab', label: 'Intersecții 2D', icon: RotateCcw },
    { id: 'arena', label: 'Tactici & Șah', icon: Zap },
    { id: 'cia_science', label: 'CIA & Neuroștiință', icon: Brain },
    { id: 'blunders', label: `Gafe (${progress.blunderHistory.filter((b) => !b.resolved).length})`, icon: Award }
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800 text-white font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Upper Brand & Quick HUD Row */}
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* Brand */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
            onClick={() => setTab('dashboard')}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white group-hover:border-white transition-colors">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-mono text-xs sm:text-sm tracking-wider font-extrabold uppercase text-white">
                  AUTOMASTER <span className="text-zinc-400">B</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                  DRPCIV RO
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-sans text-zinc-400 hidden md:block">
                Ghid de la Zero • Șah Tactic • Raport CIA
              </p>
            </div>
          </div>

          {/* HUD Right Elements: Rating, Streak, Audio Generator */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* ELO Rating Badge */}
            <div
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer"
              onClick={() => setTab('arena')}
              title={`Rang: ${rank.title}. ELO: ${progress.eloRating}`}
            >
              <Crown className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
              <div className="text-left">
                <div className="text-[8px] uppercase tracking-wider text-zinc-500 font-mono hidden sm:block">
                  ELO DRIVER
                </div>
                <div className="text-xs font-mono font-bold text-white leading-tight">
                  {progress.eloRating}
                </div>
              </div>
            </div>

            {/* Streak */}
            <div className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
              <Flame className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="font-mono text-xs font-bold text-white">
                {progress.streakDays}z
              </span>
            </div>

            {/* Audio 10Hz / 4Hz / 40Hz Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowAudioMenu(!showAudioMenu)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                  isAudioActive
                    ? 'bg-white text-black border-white'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
                title="Comută Frecvențele CIA (10Hz / 4Hz / 40Hz)"
              >
                {isAudioActive ? (
                  <Volume2 className="w-3.5 h-3.5 animate-pulse text-black" />
                ) : (
                  <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                )}
                <span className="text-[11px] font-bold">
                  {selectedFreq === 'alpha_10hz'
                    ? '10 Hz'
                    : selectedFreq === 'theta_4hz'
                    ? '4 Hz'
                    : '40 Hz'}
                </span>
                <ChevronDown className="w-3 h-3 text-zinc-400" />
              </button>

              {/* Audio Menu Dropdown */}
              {showAudioMenu && (
                <div className="absolute right-0 mt-2 w-72 p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs shadow-2xl z-50 space-y-2">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase border-b border-zinc-800 pb-1.5">
                    Generator Frecvențe CIA Gateway
                  </div>

                  <button
                    onClick={() => {
                      handleToggleAudio('alpha_10hz');
                      setShowAudioMenu(false);
                    }}
                    className={`w-full p-2.5 rounded-lg text-left border flex items-center justify-between transition-all ${
                      selectedFreq === 'alpha_10hz' && isAudioActive
                        ? 'bg-white text-black font-bold border-white'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold">10 Hz Alfa (Activ & Test)</div>
                      <div className="text-[10px] text-zinc-400">
                        Focus 10: Elimină panica la examen și calmează pulsul
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      handleToggleAudio('theta_4hz');
                      setShowAudioMenu(false);
                    }}
                    className={`w-full p-2.5 rounded-lg text-left border flex items-center justify-between transition-all ${
                      selectedFreq === 'theta_4hz' && isAudioActive
                        ? 'bg-white text-black font-bold border-white'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold">4 Hz Teta (Reels Favorite)</div>
                      <div className="text-[10px] text-zinc-400">
                        Consolidare profundă a memoriei noaptea
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      handleToggleAudio('gamma_40hz');
                      setShowAudioMenu(false);
                    }}
                    className={`w-full p-2.5 rounded-lg text-left border flex items-center justify-between transition-all ${
                      selectedFreq === 'gamma_40hz' && isAudioActive
                        ? 'bg-white text-black font-bold border-white'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold">40 Hz Gama (Viteză Tactică)</div>
                      <div className="text-[10px] text-zinc-400">
                        Calcul ultrarapid pentru intersecții și puzzle-uri
                      </div>
                    </div>
                  </button>

                  {isAudioActive && (
                    <button
                      onClick={() => {
                        gatewayAudio.stop();
                        setIsAudioActive(false);
                        setShowAudioMenu(false);
                      }}
                      className="w-full py-2 rounded-lg bg-zinc-900 text-white border border-zinc-700 text-center text-[11px] font-bold mt-1 hover:bg-zinc-800"
                    >
                      Oprește Sunetul
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar (Fully scrollable & responsive on all devices) */}
        <nav className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none border-t border-zinc-800 text-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  active
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-black' : 'text-zinc-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
