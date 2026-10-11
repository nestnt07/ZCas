'use client';

import React, { useState } from 'react';
import {
  RotateCcw,
  Play,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  Layers,
  HelpCircle,
  Car
} from 'lucide-react';

type ScenarioType = 'right_hand_cross' | 'priority_bend' | 'roundabout' | 'tram_conflict';

export const PrioritySimulator: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioType>('right_hand_cross');
  const [currentStep, setCurrentStep] = useState<number>(0);

  const SCENARIOS = {
    right_hand_cross: {
      title: 'Intersecție Nedirijată în Cruce (Regula de Dreapta)',
      description: 'Niciun indicator, niciun semafor. 3 vehicule sosesc simultan. Aplicarea pură a regulii de dreapta conform Art. 57 OUG 195/2002.',
      vehicles: [
        { id: 'V1', name: 'Autoturismul Roșu (Sud)', action: 'Merge drept înainte', color: '#EF4444', stepPassed: 3 },
        { id: 'V2', name: 'Autoturismul Galben (Est)', action: 'Merge drept înainte', color: '#EAB308', stepPassed: 1 },
        { id: 'V3', name: 'Autoturismul Albastru (Nord)', action: 'Merge drept înainte', color: '#3B82F6', stepPassed: 2 }
      ],
      steps: [
        {
          stepNumber: 1,
          heading: 'Pasul 1: Identificarea vehiculului cu dreapta complet liberă',
          explanation: 'Autoturismul Galben (care vine din Est) se uită în dreapta sa (Nord) și nu are pe nimeni! Dreapta sa este liberă.',
          actionTaken: 'Autoturismul Galben trece primul.'
        },
        {
          stepNumber: 2,
          heading: 'Pasul 2: Deblocarea următorului vehicul',
          explanation: 'După ce Galben a trecut, Autoturismul Albastru (Nord) avea în dreapta doar pe Galben. Acum dreapta sa a devenit liberă!',
          actionTaken: 'Autoturismul Albastru trece al doilea.'
        },
        {
          stepNumber: 3,
          heading: 'Pasul 3: Trecerea ultimului vehicul',
          explanation: 'Autoturismul Roșu (Sud) avea în dreapta pe Albastru. După plecarea lui Albastru, drumul este complet eliberat.',
          actionTaken: 'Autoturismul Roșu trece al treilea (ultimul).'
        }
      ]
    },
    priority_bend: {
      title: 'Drum cu Prioritate cu Cotitură la Stânga',
      description: 'Panoul adițional arată că drumul cu prioritate virează spre Vest. Un vehicul pe drumul prioritar părăsește curba mergând înainte.',
      vehicles: [
        { id: 'V1', name: 'Autoturismul Tău (Sud)', action: 'Urmează curba prioritară la stânga', color: '#EF4444', stepPassed: 1 },
        { id: 'V2', name: 'Camionul Mov (Est)', action: 'Merge drept (părăsește prioritatea)', color: '#8B5CF6', stepPassed: 2 },
        { id: 'V3', name: 'Autoturismul Verde (Nord)', action: 'Are indicatorul Cedează trecerea', color: '#10B981', stepPassed: 3 }
      ],
      steps: [
        {
          stepNumber: 1,
          heading: 'Pasul 1: Arbitrajul între cele două vehicule cu prioritate',
          explanation: 'Atât Tu (Sud) cât și Camionul (Est) vă aflați pe drumul cu prioritate. Între vehicule de rang egal se aplică regula priorității de dreapta! Tu te afli în dreapta camionului.',
          actionTaken: 'Autoturismul Tău trece primul!'
        },
        {
          stepNumber: 2,
          heading: 'Pasul 2: Trecerea celuilalt vehicul de pe drumul prioritar',
          explanation: 'Camionul părăsește drumul prioritar mergând drept înainte, dar are prioritate absolută față de vehiculele de pe drumurile secundare.',
          actionTaken: 'Camionul trece al doilea.'
        },
        {
          stepNumber: 3,
          heading: 'Pasul 3: Trecerea de pe drumul fără prioritate',
          explanation: 'Autoturismul Verde are indicatorul triunghiular Cedează trecerea. Trece doar după ce ambele vehicule prioritare au eliberat intersecția.',
          actionTaken: 'Autoturismul Verde trece ultimul.'
        }
      ]
    },
    roundabout: {
      title: 'Sens Giratoriu: Intrarea și Schimbarea Benzilor',
      description: 'Vehiculele din interior au prioritate deplină față de cele care vor să intre. Pe cerc, banda 1 are protecție.',
      vehicles: [
        { id: 'V1', name: 'Mașina din Interiorul Giratoriului', action: 'Circulă deja pe inel', color: '#10B981', stepPassed: 1 },
        { id: 'V2', name: 'Mașina Ta (La intrare)', action: 'Așteaptă la semnul Cedează trecerea', color: '#EF4444', stepPassed: 2 }
      ],
      steps: [
        {
          stepNumber: 1,
          heading: 'Pasul 1: Prioritatea absolută a inelului',
          explanation: 'Conform Art. 57 alin. (2), în sensul giratoriu regula de dreapta este inversată: vehiculul aflat în sens are prioritate față de cel care intră.',
          actionTaken: 'Mașina aflată în sens își continuă drumul.'
        },
        {
          stepNumber: 2,
          heading: 'Pasul 2: Pătrunderea în sens după degajare',
          explanation: 'După trecerea vehiculului, poți pătrunde în sensul giratoriu fără a obstrucționa alți participanți.',
          actionTaken: 'Pătrunzi în siguranță pe banda dorită.'
        }
      ]
    },
    tram_conflict: {
      title: 'Dilema Tramvaiului la Virajul spre Stânga',
      description: 'Tramvaiul virează la stânga tăind sensul opus. Tu circuli drept înainte pe drum cu prioritate.',
      vehicles: [
        { id: 'V1', name: 'Autoturismul Tău (Merge înainte)', action: 'Circulă drept înainte pe drum prioritar', color: '#EF4444', stepPassed: 1 },
        { id: 'V2', name: 'Tramvaiul (Virează la stânga)', action: 'Virează la stânga traversând sensul tău', color: '#F97316', stepPassed: 2 }
      ],
      steps: [
        {
          stepNumber: 1,
          heading: 'Pasul 1: Pierderea priorității tramvaiului la viraj',
          explanation: 'Art. 59 din Regulament stipulează clar: Vehiculul (inclusiv tramvaiul) care virează la stânga pierde prioritatea față de vehiculul care vine din sens opus și merge înainte!',
          actionTaken: 'Autoturismul Tău trece primul fără să frâneze!'
        },
        {
          stepNumber: 2,
          heading: 'Pasul 2: Finalizarea virajului tramvaiului',
          explanation: 'Tramvaiul așteaptă în centrul intersecției și finalizează virajul la stânga abia după trecerea ta.',
          actionTaken: 'Tramvaiul trece al doilea.'
        }
      ]
    }
  };

  const scenario = SCENARIOS[activeScenario];

  const handleNextStep = () => {
    if (currentStep < scenario.steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0);
    }
  };

  const handleSelectScenario = (key: ScenarioType) => {
    setActiveScenario(key);
    setCurrentStep(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6 text-white font-sans">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-700">
            <RotateCcw className="w-3.5 h-3.5 text-white" />
            <span>LABORATORUL VIZUAL DE INTERSECȚII • SIMULATOR DE PRIORITATE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Calculul Pas cu Pas al Priorității de Trecere
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Intersecțiile reprezintă peste 40% din întrebările de la examenul DRPCIV. Aici poți vedea
            motorul logic de deducție juridică pas cu pas pentru orice scenariu.
          </p>
        </div>

        {/* Scenario Switcher */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800 mt-4">
          {(Object.keys(SCENARIOS) as ScenarioType[]).map((key) => {
            const sc = SCENARIOS[key];
            const isSelected = activeScenario === key;
            return (
              <button
                key={key}
                onClick={() => handleSelectScenario(key)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-white text-black font-bold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {sc.title.split('(')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Visual Canvas */}
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div>
              <h3 className="text-lg font-bold text-white">{scenario.title}</h3>
              <p className="text-xs text-zinc-400">{scenario.description}</p>
            </div>
            <div className="text-xs font-mono px-3 py-1 rounded bg-zinc-900 text-white border border-zinc-800">
              Pasul {currentStep} din {scenario.steps.length}
            </div>
          </div>

          {/* 2D Intersection SVG Visualizer */}
          <div className="relative w-full aspect-[16/10] bg-black rounded-2xl border border-zinc-800 flex items-center justify-center overflow-hidden p-4">
            {/* Road Graphics */}
            <svg
              className="w-full h-full"
              viewBox="0 0 600 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ground */}
              <rect width="600" height="400" fill="#09090b" />

              {/* Asphalt Crossroad */}
              {activeScenario === 'roundabout' ? (
                // Roundabout road
                <>
                  <circle cx="300" cy="200" r="140" fill="#18181b" />
                  <circle cx="300" cy="200" r="70" fill="#09090b" stroke="#27272a" strokeWidth="4" />
                  <circle cx="300" cy="200" r="105" stroke="#71717a" strokeWidth="2" strokeDasharray="6 6" />
                  {/* Entering roads */}
                  <rect x="250" y="0" width="100" height="70" fill="#18181b" />
                  <rect x="250" y="330" width="100" height="70" fill="#18181b" />
                  <rect x="0" y="150" width="170" height="100" fill="#18181b" />
                  <rect x="430" y="150" width="170" height="100" fill="#18181b" />
                </>
              ) : (
                // 4-way crossroad
                <>
                  <rect x="240" y="0" width="120" height="400" fill="#18181b" />
                  <rect x="0" y="140" width="600" height="120" fill="#18181b" />
                  {/* Dashed center lines */}
                  <line x1="300" y1="0" x2="300" y2="140" stroke="#f4f4f5" strokeWidth="2" strokeDasharray="8 8" />
                  <line x1="300" y1="260" x2="300" y2="400" stroke="#f4f4f5" strokeWidth="2" strokeDasharray="8 8" />
                  <line x1="0" y1="200" x2="240" y2="200" stroke="#f4f4f5" strokeWidth="2" strokeDasharray="8 8" />
                  <line x1="360" y1="200" x2="600" y2="200" stroke="#f4f4f5" strokeWidth="2" strokeDasharray="8 8" />
                  {/* Center junction */}
                  <rect x="240" y="140" width="120" height="120" fill="#18181b" />
                </>
              )}

              {/* Priority Sign Icons on Canvas */}
              {activeScenario === 'priority_bend' && (
                <g transform="translate(245, 270)">
                  <polygon points="15,0 30,15 15,30 0,15" fill="#ffffff" stroke="#000000" strokeWidth="2" />
                </g>
              )}

              {/* Car Markers */}
              {scenario.vehicles.map((v, idx) => {
                const isPassed = currentStep >= v.stepPassed;
                const isCurrentlyActive = currentStep === v.stepPassed;

                let cx = 300;
                let cy = 200;

                if (idx === 0) {
                  // South car
                  cx = isPassed ? 300 : 270;
                  cy = isPassed ? 100 : 340;
                } else if (idx === 1) {
                  // East or secondary car
                  cx = isPassed ? 150 : 500;
                  cy = isPassed ? 200 : 170;
                } else if (idx === 2) {
                  // North car
                  cx = isPassed ? 300 : 330;
                  cy = isPassed ? 320 : 60;
                }

                return (
                  <g key={v.id} className="transition-all duration-700">
                    <rect
                      x={cx - 18}
                      y={cy - 12}
                      width="36"
                      height="24"
                      rx="4"
                      fill={v.color}
                      stroke={isCurrentlyActive ? '#FFFFFF' : '#000000'}
                      strokeWidth={isCurrentlyActive ? '3' : '1'}
                    />
                    <text
                      x={cx}
                      y={cy + 4}
                      fill="#FFFFFF"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {v.id}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Floating Live Badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-700 text-xs font-mono">
              <span className="text-zinc-400">STATUS: </span>
              <span className="text-white font-bold">
                {currentStep === 0
                  ? 'Vehiculele au sosit la intersecție'
                  : currentStep === scenario.steps.length
                  ? 'Intersecție degajată complet'
                  : `Pasul ${currentStep} în execuție`}
              </span>
            </div>
          </div>

          {/* Stepper Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              onClick={() => setCurrentStep(0)}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 text-xs border border-zinc-800 transition-colors"
            >
              Resetează Pozițiile
            </button>

            <button
              onClick={handleNextStep}
              className="px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-colors flex items-center gap-2"
            >
              <span>
                {currentStep < scenario.steps.length
                  ? `Execută Pasul ${currentStep + 1}`
                  : 'Reia Simularea'}
              </span>
              <Play className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </div>

        {/* Legal Explanation Panel */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-bold">
            <Shield className="w-4 h-4 text-white" />
            <span>JURISPRUDENȚA CODULUI RUTIER</span>
          </div>

          <h4 className="font-bold text-white text-base">Etapele Legale de Deducție:</h4>

          <div className="space-y-3">
            {scenario.steps.map((st, idx) => {
              const isActive = currentStep === st.stepNumber;
              const isPast = currentStep > st.stepNumber;

              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border text-xs transition-all ${
                    isActive
                      ? 'bg-zinc-900 border-white text-white'
                      : isPast
                      ? 'bg-zinc-950 border-zinc-800 text-zinc-400'
                      : 'bg-zinc-950/40 border-zinc-900 text-zinc-600'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono font-bold text-[11px] mb-1">
                    <span
                      className={`w-5 h-5 rounded flex items-center justify-center ${
                        isActive
                          ? 'bg-white text-black'
                          : isPast
                          ? 'bg-zinc-800 text-white'
                          : 'bg-zinc-900 text-zinc-600'
                      }`}
                    >
                      {st.stepNumber}
                    </span>
                    <span>{st.heading}</span>
                  </div>

                  <p className="text-zinc-300 leading-relaxed">{st.explanation}</p>

                  <div className="mt-2 font-mono text-white font-bold text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{st.actionTaken}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400">
            <strong className="text-white">Rețineți:</strong> La examenul DRPCIV, nu te grăbi
            să alegi cine trece primul. Identifică întotdeauna cine are dreapta liberă sau cine are
            indicatorul cu rangul cel mai înalt!
          </div>
        </div>
      </div>
    </div>
  );
};
