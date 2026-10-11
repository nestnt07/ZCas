'use client';

import React, { useState } from 'react';
import {
  Brain,
  Volume2,
  VolumeX,
  FileText,
  Shield,
  Zap,
  CheckCircle2,
  Sliders,
  Sparkles,
  HelpCircle,
  Radio,
  Headphones,
  Info,
  Clock,
  ArrowRight
} from 'lucide-react';
import { CIA_LEARNING_PROTOCOLS, CiaTechnique } from '@/data/ciaProtocols';
import { gatewayAudio, BrainwaveMode } from '@/lib/audioEngine';
import { UserProgress } from '@/types/driving';

interface CiaScienceLabProps {
  progress: UserProgress;
  isAudioActive: boolean;
  setIsAudioActive: (active: boolean) => void;
  onUpdateProgress: (updated: UserProgress) => void;
}

export const CiaScienceLab: React.FC<CiaScienceLabProps> = ({
  progress,
  isAudioActive,
  setIsAudioActive,
  onUpdateProgress
}) => {
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>('gateway-hemi-sync');
  const [audioVolume, setAudioVolume] = useState<number>(0.35);
  const [activeFrequencyMode, setActiveFrequencyMode] = useState<BrainwaveMode>('alpha_10hz');

  const activeProtocol =
    CIA_LEARNING_PROTOCOLS.find((p) => p.id === selectedProtocolId) || CIA_LEARNING_PROTOCOLS[0];

  const handleToggleAudio = (mode: BrainwaveMode = activeFrequencyMode) => {
    setActiveFrequencyMode(mode);
    if (isAudioActive && mode === activeFrequencyMode) {
      gatewayAudio.stop();
      setIsAudioActive(false);
    } else {
      gatewayAudio.start(mode, audioVolume, 216);
      setIsAudioActive(true);
      onUpdateProgress({
        ...progress,
        hemiSyncMinutesUsed: progress.hemiSyncMinutesUsed + 5
      });
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setAudioVolume(newVol);
    gatewayAudio.setVolume(newVol);
  };

  const getLoudnessLabel = (vol: number) => {
    if (vol <= 0.2) return 'Silențios (Recomandat pentru noapte)';
    if (vol <= 0.45) return 'Optim Recomandat: 65–70 dB (Clar, Sigur și Eficient)';
    if (vol <= 0.7) return 'Mediu-Tare (Pentru difuzor extern)';
    return 'Tare (Atenție la volumul căștilor)';
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-6 text-white font-sans">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-700">
            <Brain className="w-3.5 h-3.5 text-white" />
            <span>RAPORT DECLASIFICAT CIA RDP96-00788R001700210016-5</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Neuroștiință, Frecvențe Cerebrale & Tehnici CIA
          </h1>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Ghid științific complet de la A la Z: ce fac frecvențele de 10 Hz și 4 Hz, cum sincronizează
            ele emisferele cerebrale, de ce clipurile de pe Reels recomandă 4 Hz și cum să transformi
            legislația rutieră în memorie permanentă fără panică sau blocaje la examen.
          </p>
        </div>
      </div>

      {/* Direct FAQ: 10 Hz vs 4 Hz & Loudness Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: 10 Hz Activ */}
        <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Zap className="w-5 h-5 text-white" />
              <span>Ce Face Frecvența Activă de 10 Hz?</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
              ALFA (FOCUS 10)
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            10 Hz este frecvența stării „Focus 10” descrisă în raportul CIA. În creier, ea produce
            o stare rară: <strong className="text-white">corp profund relaxat, dar minte hipo-alertă</strong>.
            Când dai un examen contra cronometru (26 de întrebări), creierul tinde să se sperie,
            secretând cortizol care blochează hipocampul (senzația că „ți s-a șters mintea”). 10 Hz
            oprește panica, stabilizează pulsul și accelerează regăsirea informațiilor logice.
          </p>
          <div className="text-xs font-mono text-zinc-400 bg-zinc-950 p-3 rounded-xl border border-zinc-800">
            <span className="text-white font-bold">Când se folosește:</span> În timpul simulării
            de teste DRPCIV, la rezolvarea de chestionare și la antrenamentul deciziilor rapide.
          </div>
        </div>

        {/* Card 2: 4 Hz Teta & Reels */}
        <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Sparkles className="w-5 h-5 text-white" />
              <span>De Ce Ai Văzut pe Reels Că 4 Hz E Bună?</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
              TETA (HIPNAGOGIC)
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Clipul de pe Reels are perfectă dreptate, dar pentru celălalt pas al învățării:
            <strong className="text-white"> consolidarea subconștientă a memoriei</strong>! 4 Hz este frecvența
            Teta (starea dintre veghe și somn). La 4 Hz, cenzorul analitic al minții conștiente se
            oprește, iar creierul transferă informațiile din memoria de lucru pe termen scurt direct
            în neocortex (pe „hard disk-ul” permanent al creierului).
          </p>
          <div className="text-xs font-mono text-zinc-400 bg-zinc-950 p-3 rounded-xl border border-zinc-800">
            <span className="text-white font-bold">Când se folosește:</span> Seara înainte de somn
            sau după ce ai citit un capitol din Ghidul Începătorului, în timp ce revezi semnele în gând.
          </div>
        </div>
      </div>

      {/* Audio Engine Generator Console */}
      <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isAudioActive ? 'bg-white text-black animate-pulse' : 'bg-zinc-900 text-zinc-400'
              }`}
            >
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                Generatorul Binaural Multifrecvență CIA Gateway
              </h3>
              <p className="text-xs text-zinc-400">
                Sinteză audio Web Audio API în timp real (216 Hz undă pură + zgomot roz cald filtrat)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggleAudio(activeFrequencyMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-colors ${
                isAudioActive
                  ? 'bg-white text-black border-white'
                  : 'bg-zinc-900 text-white border-zinc-700 hover:border-zinc-500'
              }`}
            >
              {isAudioActive ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span>{isAudioActive ? 'OPREȘTE SUNETUL' : 'PORNEȘTE SUNETUL'}</span>
            </button>
          </div>
        </div>

        {/* Frequencies Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => handleToggleAudio('alpha_10hz')}
            className={`p-4 rounded-xl text-left border transition-all ${
              activeFrequencyMode === 'alpha_10hz' && isAudioActive
                ? 'bg-white text-black border-white font-bold'
                : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-extrabold">10 Hz ALFA</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800/80 font-mono">
                TEST & SIMULARE
              </span>
            </div>
            <p className="text-xs mt-1 opacity-80">
              Focus 10: Calmează anxietatea de examen, atenție susținută și reacție logică.
            </p>
          </button>

          <button
            onClick={() => handleToggleAudio('theta_4hz')}
            className={`p-4 rounded-xl text-left border transition-all ${
              activeFrequencyMode === 'theta_4hz' && isAudioActive
                ? 'bg-white text-black border-white font-bold'
                : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-extrabold">4 Hz TETA</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800/80 font-mono">
                REELS FAVORITE
              </span>
            </div>
            <p className="text-xs mt-1 opacity-80">
              Consolidare hipnagogică: Salvare permanentă a semnelor și legilor în memorie.
            </p>
          </button>

          <button
            onClick={() => handleToggleAudio('gamma_40hz')}
            className={`p-4 rounded-xl text-left border transition-all ${
              activeFrequencyMode === 'gamma_40hz' && isAudioActive
                ? 'bg-white text-black border-white font-bold'
                : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-extrabold">40 Hz GAMA</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800/80 font-mono">
                ȘAH & VITEZĂ
              </span>
            </div>
            <p className="text-xs mt-1 opacity-80">
              Calcul de Mare Maestru: Sincronizare neuronală ultrarapidă în intersecții.
            </p>
          </button>
        </div>

        {/* Volume & Loudness Guidance */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label className="text-xs font-mono text-zinc-300 flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>NIVEL VOLUM: {Math.round(audioVolume * 100)}%</span>
            </label>
            <span className="text-xs font-mono text-zinc-400">
              {getLoudnessLabel(audioVolume)}
            </span>
          </div>

          <input
            type="range"
            min="0.05"
            max="1"
            step="0.05"
            value={audioVolume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className="w-full accent-white bg-zinc-800 h-2 rounded-lg cursor-pointer"
          />

          <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
            <Headphones className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
            <span>
              Recomandare științifică: Folosește căști stereo la 35% - 45% (65–70 dB). Nu mări excesiv
              volumul; creierul sincronizează cel mai eficient când stimulul auditiv este plăcut și subtil.
            </span>
          </div>
        </div>
      </div>

      {/* Main Protocols Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Protocol Selector Navigation */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider px-2">
            Protocoale de Învățare CIA ({CIA_LEARNING_PROTOCOLS.length})
          </div>

          <div className="space-y-1.5">
            {CIA_LEARNING_PROTOCOLS.map((protocol) => {
              const isSelected = protocol.id === selectedProtocolId;
              return (
                <button
                  key={protocol.id}
                  onClick={() => setSelectedProtocolId(protocol.id)}
                  className={`w-full p-3 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-zinc-900 border-white text-white shadow-sm'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">
                    {protocol.codeName}
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5 line-clamp-1">
                    {protocol.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Protocol Dossier */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
          <div className="space-y-2 border-b border-zinc-800 pb-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase">
              <Shield className="w-3.5 h-3.5 text-white" />
              <span>{activeProtocol.codeName}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {activeProtocol.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <FileText className="w-3.5 h-3.5" />
              <span>Sursă: {activeProtocol.ciaDocumentSource}</span>
            </div>
          </div>

          {/* Reel comparison note if present */}
          {activeProtocol.reelComparisonNote && (
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-xs sm:text-sm text-zinc-200">
              <span className="font-bold text-white">Notă despre reels & internet: </span>
              {activeProtocol.reelComparisonNote}
            </div>
          )}

          {/* Neurobiology & Science Mechanism */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-white" />
              <span>Mecanismul Neurobiologic (Cum Funcționează în Creier)</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-900 p-4 rounded-xl border border-zinc-800">
              {activeProtocol.scienceMechanism}
            </p>
          </div>

          {/* Application to DRPCIV Driving Exam */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span>Aplicare Directă la Examenul Auto & Trafic Real</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed bg-zinc-900 p-4 rounded-xl border border-zinc-800">
              {activeProtocol.applicationToDriving}
            </p>
          </div>

          {/* Daily Protocol Checklist */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span>Cum Aplici Tehnica în Fiecare Zi (Pași Practici)</span>
            </h3>
            <div className="space-y-2">
              {activeProtocol.howToPracticeDaily.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-300"
                >
                  <span className="font-mono font-bold text-white shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scientific Peer-Reviewed Citations */}
          <div className="space-y-2 pt-2 border-t border-zinc-800">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
              Referințe Științifice Verificabile (PubMed / Neurobiologie)
            </h3>
            <div className="space-y-2">
              {activeProtocol.scientificCitations.map((cite, idx) => (
                <div
                  key={idx}
                  className="text-xs font-mono text-zinc-400 bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-850"
                >
                  <div className="font-bold text-zinc-300">{cite.title}</div>
                  <div className="text-[11px] text-zinc-400">
                    {cite.authors} • {cite.journal} ({cite.year}) • {cite.doiOrPmid}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
