'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Dashboard } from '@/components/Dashboard';
import { ExamSimulator } from '@/components/ExamSimulator';
import { TrafficChessArena } from '@/components/TrafficChessArena';
import { BeginnerAcademy } from '@/components/BeginnerAcademy';
import { PrioritySimulator } from '@/components/PrioritySimulator';
import { RoadSignsExplorer } from '@/components/RoadSignsExplorer';
import { CiaScienceLab } from '@/components/CiaScienceLab';
import { BlunderBank } from '@/components/BlunderBank';
import { VocabDictionary } from '@/components/VocabDictionary';
import { TheoryMasteryLab } from '@/components/TheoryMasteryLab';
import { UserProgress } from '@/types/driving';
import { loadUserProgress, saveUserProgress, INITIAL_PROGRESS } from '@/lib/storage';

const emptySubscribe = () => () => {};

export default function Home() {
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window !== 'undefined') {
      return loadUserProgress();
    }
    return INITIAL_PROGRESS;
  });
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const handleUpdateProgress = (updated: UserProgress) => {
    setProgress(updated);
    saveUserProgress(updated);
  };

  const handleResetProgress = () => {
    if (confirm('Doriți să resetați întregul progres și istoricul ELO?')) {
      setProgress(INITIAL_PROGRESS);
      saveUserProgress(INITIAL_PROGRESS);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-zinc-400 font-mono text-sm">
        Încărcare AutoMaster B...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black">
      <Navbar
        currentTab={currentTab}
        setTab={setCurrentTab}
        progress={progress}
        isAudioActive={isAudioActive}
        setIsAudioActive={setIsAudioActive}
        onResetProgress={handleResetProgress}
      />

      <main className="flex-1 pb-16">
        {currentTab === 'dashboard' && (
          <Dashboard
            progress={progress}
            setTab={setCurrentTab}
            onStartExam={() => setCurrentTab('exam')}
            onStartTactics={() => setCurrentTab('arena')}
          />
        )}

        {currentTab === 'exam' && (
          <ExamSimulator
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            onExitToDashboard={() => setCurrentTab('dashboard')}
          />
        )}

        {currentTab === 'arena' && (
          <TrafficChessArena
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {currentTab === 'theory_lab' && (
          <TheoryMasteryLab
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            onStartExam={() => setCurrentTab('exam')}
          />
        )}

        {currentTab === 'academy' && (
          <BeginnerAcademy
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            onJumpToSimulator={() => setCurrentTab('exam')}
            onJumpToDictionary={() => setCurrentTab('dictionary')}
            onJumpToTheoryLab={() => setCurrentTab('theory_lab')}
          />
        )}

        {currentTab === 'dictionary' && <VocabDictionary />}

        {currentTab === 'priority_lab' && <PrioritySimulator />}

        {currentTab === 'signs' && (
          <RoadSignsExplorer
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {currentTab === 'cia_science' && (
          <CiaScienceLab
            progress={progress}
            isAudioActive={isAudioActive}
            setIsAudioActive={setIsAudioActive}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {currentTab === 'blunders' && (
          <BlunderBank
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
          />
        )}
      </main>

      {/* Footer with Tactical Disclaimer & Links */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-6 text-xs text-zinc-400 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">AUTOMASTER B</span>
            <span>•</span>
            <span>DRPCIV CATEGORIA B ROMÂNIA</span>
            <span>•</span>
            <span>OUG 195/2002</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <button
              onClick={() => setCurrentTab('cia_science')}
              className="hover:text-white transition-colors"
            >
              Frecvențe CIA (10 Hz & 4 Hz)
            </button>
            <button
              onClick={() => setCurrentTab('arena')}
              className="hover:text-white transition-colors"
            >
              Formula ELO Șah
            </button>
            <button
              onClick={handleResetProgress}
              className="hover:text-red-400 transition-colors"
            >
              Resetare Date
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
