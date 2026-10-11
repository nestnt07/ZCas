'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  RotateCcw,
  Shield,
  Zap,
  Target,
  Clock,
  ArrowRight,
  Eye,
  Award,
  Filter,
  CheckSquare,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  Brain,
  Car
} from 'lucide-react';
import { UserProgress } from '@/types/driving';

interface TheoryMasteryLabProps {
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
  onStartExam: () => void;
}

export const TheoryMasteryLab: React.FC<TheoryMasteryLabProps> = ({
  progress,
  onUpdateProgress,
  onStartExam
}) => {
  const [activeTab, setActiveTab] = useState<
    'methodology' | 'hierarchy' | 'maneuvers' | 'speed_rules' | 'free_points' | 'interactive_drill' | 'schedule'
  >('methodology');

  // Interactive drill state
  const [drillStep, setDrillStep] = useState<number>(0);
  const [drillSelectedAnswers, setDrillSelectedAnswers] = useState<('A' | 'B' | 'C')[]>([]);
  const [drillShowValidation, setDrillShowValidation] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>('filter1');

  // Practice cases for logic dissection
  const logicExercises = [
    {
      id: 'ex-1',
      title: 'Exercițiu Deducție: Negație Dublă & Întoarcere',
      question: 'În care dintre situațiile următoare NU vă este interzisă întoarcerea vehiculului?',
      options: [
        { id: 'A' as const, text: 'Pe drumurile cu sens unic, cu condiția să nu stânjeniți circulația celorlalți' },
        { id: 'B' as const, text: 'În intersecțiile în care este interzis virajul la stânga' },
        { id: 'C' as const, text: 'Pe poduri, sub poduri și în tuneluri' }
      ],
      correct: [] as ('A' | 'B' | 'C')[], // None of them are allowed!
      filterAnalysis: {
        step1: 'DECODARE ÎNTREBARE: „NU vă este interzisă” înseamnă „UNDE VĂ ESTE PERMISĂ întoarcerea?”. Căutăm doar cazurile legale!',
        step2: 'ANALIZĂ OPȚIUNE A: Pe drumul cu sens unic ÎNTOARCEREA este STRICT INTERZISĂ prin lege! (Doar mersul înapoi max 50m este permis). Deci A este FALSĂ.',
        step3: 'ANALIZĂ OPȚIUNE B: Indicatorul „Interzis virajul la stânga” INTERZICE AUTOMAT ȘI ÎNTOARCEREA (manevra de întoarcere presupune viraj stânga). Deci B este FALSĂ.',
        step4: 'ANALIZĂ OPȚIUNE C: Pe poduri și în tuneluri oprirea, staționarea, depășirea și întoarcerea sunt expres interzise. Deci C este FALSĂ.',
        conclusion: 'REZULTATUL LOGIC: Niciuna dintre cele 3 variante nu este corectă! În acest caz particular, nu bifezi nicio căsuță sau dacă pe ecran există opțiunea „în niciuna”, o alegi. Atenție: la DRPCIV, dacă nicio variantă nu este permisă, întrebarea nu se validează bifând greșeli.'
      }
    },
    {
      id: 'ex-2',
      title: 'Exercițiu Deducție: Prioritate Tramvai vs Autoturism',
      question: 'În ce situație tramvaiul aflat în mers pierde prioritatea de trecere față de un autoturism?',
      options: [
        { id: 'A' as const, text: 'Când efectuează virajul la stânga, iar autoturismul circulă din sens opus pe drum de aceeași categorie' },
        { id: 'B' as const, text: 'Când pătrunde într-o intersecție dirijată prin semafoare electrice pe lumina verde' },
        { id: 'C' as const, text: 'Când întâlnește indicatorul „Cedează trecerea”, iar autoturismul circulă pe drumul cu prioritate' }
      ],
      correct: ['A', 'C'] as ('A' | 'B' | 'C')[],
      filterAnalysis: {
        step1: 'DECODARE ÎNTREBARE: Se cere când TRAMVAIUL PIERDE PRIORITATEA. Căutăm excepțiile de la regula generală a tramvaiului.',
        step2: 'ANALIZĂ OPȚIUNE A: Art. 59 alin. (2) OUG 195/2002: La virajul la stânga, tramvaiul pierde prioritatea față de vehiculele care vin din sens opus! Deci A este ADEVĂRATĂ.',
        step3: 'ANALIZĂ OPȚIUNE B: La lumina verde într-o intersecție, tramvaiul are prioritate față de autoturisme dacă ambele merg înainte. Deci B este FALSĂ.',
        step4: 'ANALIZĂ OPȚIUNE C: Dacă tramvaiul are indicatorul „Cedează trecerea”, el se supune indicatorului și acordă prioritate mașinii de pe drumul prioritar. Deci C este ADEVĂRATĂ.',
        conclusion: 'REZULTATUL LOGIC: Variantele corecte sunt A și C. Dacă bifezi doar A, primești 0 puncte și testul înregistrează greșeală!'
      }
    },
    {
      id: 'ex-3',
      title: 'Exercițiu Deducție: Detectorul de Cuvinte Otrăvite (NUMAI / DOAR)',
      question: 'În care dintre situațiile următoare sunteți obligat să opriți vehiculul la calea ferată curentă?',
      options: [
        { id: 'A' as const, text: 'Numai dacă se apropie un tren sau se aud semnalele acustice ale locomotivei' },
        { id: 'B' as const, text: 'La întâlnirea indicatorului „Oprire” (STOP) sau a Crucii Sfântului Andrei la o trecere fără bariere' },
        { id: 'C' as const, text: 'Când barierele sau semibarierele sunt coborâte sau în curs de coborâre' }
      ],
      correct: ['B', 'C'] as ('A' | 'B' | 'C')[],
      filterAnalysis: {
        step1: 'DECODARE ÎNTREBARE: Obligația legală de OPRIRE completă la calea ferată.',
        step2: 'ANALIZĂ OPȚIUNE A: Cuvântul otrăvit „NUMAI” anulează varianta! La trecerea fără bariere ești obligat să oprești ÎNTOTDEAUNA pe loc la Crucea Sf. Andrei, chiar dacă nu se vede și nu se aude niciun tren. Deci A este FALSĂ.',
        step3: 'ANALIZĂ OPȚIUNE B: Indicatorul STOP / Crucea Sf. Andrei impune oprirea roților necondiționat. Deci B este ADEVĂRATĂ.',
        step4: 'ANALIZĂ OPȚIUNE C: Barierele coborâte interzic trecerea și impun oprirea înaintea lor. Deci C este ADEVĂRATĂ.',
        conclusion: 'REZULTATUL LOGIC: Răspuns corect: B și C. Detectarea cuvântului „NUMAI” la opțiunea A te-a salvat de la capcană!'
      }
    }
  ];

  const currentEx = logicExercises[drillStep];

  const handleToggleOption = (letter: 'A' | 'B' | 'C') => {
    if (drillShowValidation) return;
    if (drillSelectedAnswers.includes(letter)) {
      setDrillSelectedAnswers(drillSelectedAnswers.filter((a) => a !== letter));
    } else {
      setDrillSelectedAnswers([...drillSelectedAnswers, letter].sort());
    }
  };

  const isCurrentExCorrect =
    drillSelectedAnswers.length === currentEx.correct.length &&
    drillSelectedAnswers.every((a) => currentEx.correct.includes(a));

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 text-white space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-white text-black font-extrabold">
                Ghid Suprem Sală A-Z
              </span>
              <span className="text-xs font-mono text-zinc-400">
                DRPCIV / DGPCI • PROMOVARE DIN PRIMA (26/26)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Metodologia Științifică pentru Examenul Teoretic
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onStartExam}
              className="px-4 py-2.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>Lansează Simulatorul Oficial (26)</span>
            </button>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 max-w-4xl leading-relaxed">
          Examenul teoretic nu se trece prin toceală oarbă sau „ghicit”. Se bazează pe o logică juridică matematică, ierarhia priorităților și eliminarea lingvistică a capcanelor. Urmând cele 3 filtre analitice de mai jos, îți transformi rata de promovare de la incertitudine la certitudine de 26/26.
        </p>

        {/* Quick Nav Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pt-2 border-t border-zinc-850">
          {[
            { id: 'methodology', label: '1. Metoda celor 3 Filtre', icon: Filter },
            { id: 'hierarchy', label: '2. Ierarhia Intersecțiilor', icon: Shield },
            { id: 'maneuvers', label: '3. Matricea Manevrelor', icon: Layers },
            { id: 'speed_rules', label: '4. Viteze & Cele 11 Reduceri', icon: Clock },
            { id: 'free_points', label: '5. Punctele Gratuite', icon: Award },
            { id: 'interactive_drill', label: '6. Antrenament Decodare Logică', icon: Brain },
            { id: 'schedule', label: '7. Planul de 7 Zile', icon: Target }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-white text-black font-bold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: METODOLOGIA CELOR 3 FILTRE */}
      {activeTab === 'methodology' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Filter 1 */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-mono font-bold text-sm">
                F1
              </div>
              <h3 className="text-base font-extrabold text-white">
                Filtrul Verbului & Negației
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Citește cerința de două ori și izolează verbul: cere unde este <strong className="text-white">PERMIS</strong> sau unde este <strong className="text-white">INTERZIS</strong>?
              </p>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 space-y-1">
                <span className="font-bold text-white block">Capcana Negației Duble:</span>
                „În care situații <span className="underline font-bold text-rose-300">NU vă este interzis</span>...?” înseamnă matematic: <span className="font-bold text-emerald-300">„Unde vă este PERMIS!”</span>. Nu bifa locurile unde e interzis!
              </div>
            </div>

            {/* Filter 2 */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-mono font-bold text-sm">
                F2
              </div>
              <h3 className="text-base font-extrabold text-white">
                Testul Autonom Adevărat/Fals
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Tratează fiecare opțiune (A, B, C) ca pe o afirmație de sine stătătoare. La DRPCIV pot fi corecte <strong className="text-white">una, două sau toate cele trei variante</strong>.
              </p>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 space-y-1">
                <span className="font-bold text-white block">Regula Totul sau Nimic:</span>
                Dacă sunt corecte A și B, iar tu selectezi doar A, calculatorul îți dă <strong className="text-rose-300">ZERO puncte</strong> și te taxează cu o greșeală! Verifică obligatoriu și B și C!
              </div>
            </div>

            {/* Filter 3 */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-mono font-bold text-sm">
                F3
              </div>
              <h3 className="text-base font-extrabold text-white">
                Detectorul Cuvintelor Otrăvite
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Legea rutieră are aproape întotdeauna excepții. Cuvintele absolute semnalează opțiuni construite anume ca să fie false.
              </p>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 space-y-1">
                <span className="font-bold text-rose-300 block">Cuvinte Suspecte (False în 90%):</span>
                „NUMAI”, „DOAR”, „ÎNTOTDEAUNA”, „ÎN ORICE SITUAȚIE”.
                <span className="font-bold text-emerald-300 block mt-1">Cuvinte de Siguranță (Corecte în 90%):</span>
                „reduceți viteza”, „cu prudență”, „acordați prioritate”.
              </div>
            </div>
          </div>

          {/* Golden Strategy: Skip Button */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white">
                <RotateCcw className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">
                  Strategia Butonului „Răspunde Mai Târziu” (Buffer-ul celor 22 de Puncte)
                </h3>
                <p className="text-xs text-zinc-400">
                  Arma secretă autorizată de calculatorul oficial al poliției
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-300">
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>De ce este un avantaj colosal:</span>
                </h4>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li>Nu primești nicio penalizare și nu pierzi puncte.</li>
                  <li>Întrebarea este mutată la capătul celor 26 de întrebări.</li>
                  <li>Când rezolvi întrebările ușoare întâi, acumulezi 18-20 de puncte sigure.</li>
                  <li>Nivelul de anxietate scade la minim: mai ai nevoie de 1-2 răspunsuri pentru ADMIS!</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Când apeși instantaneu butonul:</span>
                </h4>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li>Dacă vezi o poză complexă cu 4 mașini, tramvaie și pietoni la care eziti peste 30 de secunde.</li>
                  <li>Dacă textul are 5 rânduri și te simți copleșit de opțiuni.</li>
                  <li>Dacă nu ești 100% sigur între două opțiuni.</li>
                  <li>Când întrebarea reapare la sfârșit, adesea creierul a procesat-o subconștient și vezi soluția imediat!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: IERARHIA INTERSECȚIILOR */}
      {activeTab === 'hierarchy' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-white" />
              <span>Ierarhia Supremă a Semnalizării Rutiere (Art. 31 OUG 195/2002)</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              La sală, 30% din întrebări testează conflictul dintre două semnalizări diferite (ex: semafor verde + indicator Cedează trecerea). Regula de aur: nivelul superior ANULEAZĂ automat toate nivelele inferioare!
            </p>

            <div className="space-y-3">
              {[
                {
                  rank: 'NIVELUL 1 (SUPREM)',
                  title: 'Agentul de Poliție Rutieră',
                  desc: 'Semnalele polițistului anulează absolut tot: semafoare, indicatoare, marcaje și reguli de prioritate.',
                  sub: 'Braț ridicat vertical = OPRIRE pentru toți; Brațe întinse orizontal = Oprire pentru cei din față și spate, liber pentru cei din lateral.',
                  color: 'border-white bg-zinc-900'
                },
                {
                  rank: 'NIVELUL 2',
                  title: 'Semnalele Speciale de Avertizare Luminoasă & Sonoră',
                  desc: 'Poliție (lumini roșu + albastru + sirenă), Salvare / Pompieri (lumini albastre + sirenă). Au prioritate absolută de trecere indiferent de semnalizare.',
                  sub: 'Obligație: Conducătorii trebuie să reducă viteza, să circule cât mai aproape de bordură și să oprească dacă este cazul.',
                  color: 'border-zinc-700 bg-zinc-950'
                },
                {
                  rank: 'NIVELUL 3',
                  title: 'Semnalele Luminoase ale Semafoarelor',
                  desc: 'Semaforul funcțional BATE indicatoarele de prioritate! Dacă semaforul este VERDE, ignori indicatorul Cedează trecerea sau STOP montat pe stâlp.',
                  sub: 'Excepție vitală: Dacă semaforul este GALBEN INTERMITENT sau este STINS, redevin active indicatoarele de prioritate montate pe stâlp!',
                  color: 'border-zinc-800 bg-zinc-950'
                },
                {
                  rank: 'NIVELUL 4',
                  title: 'Indicatoarele de Prioritate & Panourile Adiționale',
                  desc: 'Drum cu prioritate, Oprire (STOP), Cedează trecerea, Prioritate pentru circulația din sens invers.',
                  sub: 'Dacă două vehicule se află pe drumuri cu același statut (ambele au Cedează sau ambele au Drum prioritar), se aplică regula priorității de dreapta!',
                  color: 'border-zinc-800 bg-zinc-950'
                },
                {
                  rank: 'NIVELUL 5',
                  title: 'Marcajele Rutiere de pe Carosabil',
                  desc: 'Linii continue, linii discontinue, săgeți de preselectare pe benzi.',
                  sub: 'Linia continuă nu poate fi încălcată indiferent de manevră.',
                  color: 'border-zinc-800 bg-zinc-950'
                },
                {
                  rank: 'NIVELUL 6 (BAZĂ)',
                  title: 'Regula Priorității de Dreapta (Art. 57 OUG 195/2002)',
                  desc: 'Se aplică în toate intersecțiile nedirijate sau când două vehicule se află pe picior de egalitate.',
                  sub: 'Acordă prioritate oricărui vehicul care vine din partea ta dreaptă. La virajul la stânga, cedezi prioritate vehiculelor din sens opus!',
                  color: 'border-zinc-800 bg-zinc-950'
                }
              ].map((lvl, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${lvl.color} space-y-1.5`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                      {lvl.rank}
                    </span>
                    <span className="text-xs font-bold text-white">#{idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{lvl.title}</h4>
                  <p className="text-xs text-zinc-300">{lvl.desc}</p>
                  <p className="text-[11px] text-zinc-400 italic pt-0.5">{lvl.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MATRICEA MANEVRELOR INTERZISE */}
      {activeTab === 'maneuvers' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <div>
              <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-white" />
                <span>Regula Dominoului la Manevre Interzise</span>
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                La sală, 25% din întrebări te întreabă dacă ai voie să oprești, staționezi, întorci, mergi înapoi sau depășești într-un anumit loc. Învață această legătură logică de aur:
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 space-y-2">
              <span className="font-bold text-white text-sm block">Lanțul Logic de Dependență:</span>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-rose-950 border border-rose-800 text-rose-200 font-bold">
                  OPRIRE INTERZISĂ
                </span>
                <span className="text-zinc-500">⟹</span>
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300">
                  STAȚIONARE INTERZISĂ
                </span>
                <span className="text-zinc-500">⟹</span>
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300">
                  ÎNTOARCERE INTERZISĂ
                </span>
                <span className="text-zinc-500">⟹</span>
                <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300">
                  MERS ÎNAPOI INTERZIS
                </span>
              </div>
              <p className="text-zinc-400 text-[11px] pt-1">
                Dacă oprirea este interzisă într-un loc (ex: pe trecerea de pietoni), în acel loc este <strong className="text-white">automat interzisă</strong> și staționarea, și întoarcerea, și mersul înapoi! Nu trebuie să memorezi 4 articole de lege diferite!
              </p>
            </div>

            {/* Distances Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-zinc-800 rounded-xl overflow-hidden">
                <thead className="bg-zinc-900 text-zinc-300 font-mono text-[11px] border-b border-zinc-800">
                  <tr>
                    <th className="p-3 font-bold text-white">Locația Specifică</th>
                    <th className="p-3">Distanța Legală Interzisă</th>
                    <th className="p-3">Ce este Interzis?</th>
                    <th className="p-3">Capcana Clasică la Examen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-850 text-zinc-300">
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-bold text-white">Trecere pentru pietoni</td>
                    <td className="p-3 font-mono text-zinc-300">Pe trecere + sub 25 m înainte și după</td>
                    <td className="p-3">Oprire, Staționare, Întoarcere, Depășire (pe trecere)</td>
                    <td className="p-3 text-zinc-400">Depășirea este interzisă pe trecere, dar este PERMISĂ înainte de trecere dacă nu sunt pietoni angajați!</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-bold text-white">Trecere la nivel cu calea ferată</td>
                    <td className="p-3 font-mono text-zinc-300">Pe cale + sub 50 m înainte și după</td>
                    <td className="p-3">Oprire, Staționare, Întoarcere, Mers înapoi, Depășire</td>
                    <td className="p-3 text-zinc-400">La 50 m de calea ferată (panoul cu o bandă roșie) toate manevrele sunt blocate!</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-bold text-white">Stație mijloc de transport public</td>
                    <td className="p-3 font-mono text-zinc-300">Sub 25 m înainte și după stație</td>
                    <td className="p-3">Oprire, Staționare, Întoarcere</td>
                    <td className="p-3 text-zinc-400">Depășirea autobuzului oprit în stație este PERMISĂ cu atenție sporită!</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-bold text-white">Intersecție</td>
                    <td className="p-3 font-mono text-zinc-300">În intersecție + sub 25 m de colț</td>
                    <td className="p-3">Oprire, Staționare, Mers înapoi</td>
                    <td className="p-3 text-zinc-400">Depășirea este permisă în intersecțiile cu prioritate (drum prioritar) sau dirijate prin semafor!</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-bold text-white">Drum cu sens unic</td>
                    <td className="p-3 font-mono text-zinc-300">Pe toată lungimea străzii</td>
                    <td className="p-3 font-bold text-rose-300">ÎNTOARCEREA ESTE INTERZISĂ!</td>
                    <td className="p-3 text-zinc-400">Mersul înapoi este PERMIS pe maximum 50 m! Oprirea este permisă pe ambele părți dacă rămâne o bandă de 3m liberă!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: VITEZE & CELE 11 REDUCERI OBLIGATORII */}
      {activeTab === 'speed_rules' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-white" />
              <span>Cele 11 Situații Obligatorii de Reducere a Vitezei (Art. 123 Regulament)</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              În aceste 11 cazuri prevăzute expres în lege, ești <strong className="text-white">obligat să reduci viteza sub 30 km/h în localitate și sub 50 km/h în afara localității</strong>. Întrebările de reducere a vitezei apar în 80% din chestionarele DRPCIV!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {[
                'La trecerea prin intersecțiile cu circulație nedirijată (prioritate de dreapta);',
                'În curbe deosebit de periculoase semnalizate sau cu vizibilitate sub 50 m;',
                'La trecerea pe lângă grupuri organizate, coloane militare sau cortegii pe carosabil;',
                'La trecerea pe lângă copii care se deplasează pe trotuar sau acostament;',
                'La trecerile pentru pietoni nesemaforizate, când sunt pietoni aflați pe trotuar în apropiere;',
                'La schimbarea direcției de mers prin virare spre stânga sau spre dreapta;',
                'Când partea carosabilă este acoperită cu polei, gheață, zăpadă bătătorită, mâzgă sau piatră cubică umedă;',
                'Pe drumuri cu denivelări semnalizate prin indicatorul de drum denivelat;',
                'În zona de acțiune a indicatorului „Copii” în intervalul orar 07:00 - 22:00;',
                'La trecerea pe lângă animale aflate pe carosabil sau acostament;',
                'La întâlnirea indicatorului „Prioritate pentru circulația din sens invers”.'
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono text-[10px] text-white shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-zinc-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Beginner Speed Rule */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 space-y-1.5">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Car className="w-4 h-4 text-white" />
                <span>Regula Începătorilor (Sub 1 an vechime / Semnul Mămăligă):</span>
              </span>
              <p className="text-zinc-400 leading-relaxed">
                Viteza maximă admisă pentru autovehiculele conduse de persoane cu mai puțin de 1 an vechime în conducere este cu <strong className="text-white">20 km/h mai mică</strong> decât viteza maximă a drumului în afara localității:
                <br />• Autostradă: 110 km/h (în loc de 130 km/h)
                <br />• Drum expres: 100 km/h (în loc de 120 km/h)
                <br />• Drum național european: 80 km/h (în loc de 100 km/h)
                <br />• În localitate viteza rămâne 50 km/h (neschimbată).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: PUNCTELE GRATUITE */}
      {activeTab === 'free_points' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-white" />
              <span>Cele 6 Puncte Gratuite Garantate (Mecanică, Prim Ajutor & Eco)</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              În fiecare chestionar de 26 de întrebări există între 4 și 6 întrebări din capitolele secundare. Aceste întrebări au răspunsuri bătute în cuie, care nu se schimbă niciodată. Dacă le memorezi, pleci din start cu un avans enorm spre cele 22 de puncte!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* First Aid Box */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2.5">
                <h4 className="font-bold text-white flex items-center gap-1.5">
                  <CheckSquare className="w-4 h-4 text-emerald-400" />
                  <span>Tiparele Fixe de Prim Ajutor Rutier:</span>
                </h4>
                <ul className="space-y-2 text-zinc-300">
                  <li className="p-2 rounded bg-zinc-950 border border-zinc-850">
                    <strong className="text-white">Resuscitare cardio-respiratorie:</strong> Raportul obligatoriu este <strong className="text-emerald-300">30 de compresii sternale la 2 ventilații</strong> (30:2) la adult.
                  </li>
                  <li className="p-2 rounded bg-zinc-950 border border-zinc-850">
                    <strong className="text-white">Victimă inconștientă care respiră:</strong> Se așază întotdeauna în <strong className="text-emerald-300">Poziția Laterală de Siguranță (PLS)</strong> pentru a preveni asfixia cu limba sau vărsături.
                  </li>
                  <li className="p-2 rounded bg-zinc-950 border border-zinc-850">
                    <strong className="text-white">Lichide și medicamente:</strong> Este <strong className="text-rose-300">STRICT INTERZISĂ</strong> administrarea de apă, calmante sau alcool pe cale orală răniților!
                  </li>
                  <li className="p-2 rounded bg-zinc-950 border border-zinc-850">
                    <strong className="text-white">Garoul:</strong> Se aplică deasupra rănii la hemoragii arteriale, însoțit de un <strong className="text-white">bilet cu ora și minutul exact</strong> al aplicării (max 1.5 - 2 ore).
                  </li>
                  <li className="p-2 rounded bg-zinc-950 border border-zinc-850">
                    <strong className="text-white">Casca motociclistului:</strong> <strong className="text-rose-300">NU se scoate</strong> de la locul accidentului, pentru a evita leziunile fatale ale măduvei cervicale!
                  </li>
                </ul>
              </div>

              {/* Mechanics & Eco Box */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2.5">
                <h4 className="font-bold text-white flex items-center gap-1.5">
                  <CheckSquare className="w-4 h-4 text-emerald-400" />
                  <span>Tiparele Fixe de Mecanică & Conducere Ecologică:</span>
                </h4>
                <ul className="space-y-2 text-zinc-300">
                  <li className="p-2 rounded bg-zinc-950 border border-zinc-850">
                    <strong className="text-white">Martorii din bord:</strong> Martor <strong className="text-rose-300">ROȘU</strong> = oprire imediată și investigare. Martor <strong className="text-amber-300">GALBEN</strong> = defecțiune ce permite deplasarea până la service.
                  </li>
                  <li className="p-2 rounded bg-zinc-950 border border-zinc-850">
                    <strong className="text-white">Fum negru la eșapament:</strong> Amestec carburant prea bogat / consum excesiv de combustibil / filtru aer înfundat.
                  </li>
                  <li className="p-2 rounded bg-zinc-950 border border-zinc-850">
                    <strong className="text-white">Fum albastru la eșapament:</strong> Motorul arde ulei (uzură mare a segmenților sau supapelor).
                  </li>
                  <li className="p-2 rounded bg-zinc-950 border border-zinc-850">
                    <strong className="text-white">Fum alb la eșapament:</strong> Pătrunderea lichidului de răcire (antigel) în cilindri (garnitură de chiulasă arsă).
                  </li>
                  <li className="p-2 rounded bg-zinc-950 border border-zinc-850">
                    <strong className="text-white">Conducere ecologică:</strong> Turație optimă de schimbare a vitezelor între 2000 și 2500 RPM, accelerare progresivă și folosirea frânei de motor (consum 0.0 L/100km).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: ANTRENAMENT DECODARE LOGICĂ */}
      {activeTab === 'interactive_drill' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-850 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                  LABORATOR INTERACTIV DE DEDUCȚIE • EXERCIȚIUL #{drillStep + 1} DIN {logicExercises.length}
                </span>
                <h3 className="text-lg font-extrabold text-white">
                  {currentEx.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setDrillStep((drillStep + 1) % logicExercises.length);
                    setDrillSelectedAnswers([]);
                    setDrillShowValidation(false);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white hover:bg-zinc-800 font-mono flex items-center gap-1.5"
                >
                  <span>Următorul Exercițiu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Question Display */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase">
                Întrebare oficială DRPCIV:
              </span>
              <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                {currentEx.question}
              </p>
            </div>

            {/* Options Selector */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono text-zinc-400 block">
                Selectează toate variantele pe care le consideri corecte (A, B, C):
              </span>
              {currentEx.options.map((opt) => {
                const isSelected = drillSelectedAnswers.includes(opt.id);
                const isCorrectOption = currentEx.correct.includes(opt.id);
                let btnStyle = 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-zinc-600';

                if (drillShowValidation) {
                  if (isCorrectOption) {
                    btnStyle = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold';
                  } else if (isSelected && !isCorrectOption) {
                    btnStyle = 'bg-rose-950 border-rose-500 text-rose-200 line-through';
                  } else {
                    btnStyle = 'bg-zinc-950 border-zinc-850 text-zinc-600 opacity-60';
                  }
                } else if (isSelected) {
                  btnStyle = 'bg-white text-black font-bold border-white';
                }

                return (
                  <button
                    key={opt.id}
                    disabled={drillShowValidation}
                    onClick={() => handleToggleOption(opt.id)}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                        isSelected && !drillShowValidation
                          ? 'bg-black text-white'
                          : 'bg-zinc-800 text-zinc-200'
                      }`}
                    >
                      {opt.id}
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Validation Action */}
            {!drillShowValidation ? (
              <button
                onClick={() => setDrillShowValidation(true)}
                className="w-full py-3.5 rounded-xl bg-white text-black font-extrabold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Validează Deducția & Afișează Disecția Logică Pas cu Pas</span>
              </button>
            ) : (
              <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    {isCurrentExCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="font-extrabold text-sm text-emerald-300">
                          DEDUCȚIE CORECTĂ! AI STĂPÂNIT LOGICA ÎNTREBĂRII.
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-400" />
                        <span className="font-extrabold text-sm text-rose-300">
                          CAPCANĂ DETECTATĂ! VEZI ANALIZA PAS CU PAS MAI JOS.
                        </span>
                      </>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setDrillShowValidation(false);
                      setDrillSelectedAnswers([]);
                    }}
                    className="text-xs font-mono text-zinc-400 hover:text-white underline"
                  >
                    Reîncearcă exercițiul
                  </button>
                </div>

                {/* Step by step logic breakdown */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                    <span className="font-bold text-white font-mono block mb-1">PASUL 1: DECODARE TEXT</span>
                    <p className="text-zinc-300">{currentEx.filterAnalysis.step1}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                    <span className="font-bold text-white font-mono block mb-1">PASUL 2: ANALIZĂ OPȚIUNE A</span>
                    <p className="text-zinc-300">{currentEx.filterAnalysis.step2}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                    <span className="font-bold text-white font-mono block mb-1">PASUL 3: ANALIZĂ OPȚIUNE B</span>
                    <p className="text-zinc-300">{currentEx.filterAnalysis.step3}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                    <span className="font-bold text-white font-mono block mb-1">PASUL 4: ANALIZĂ OPȚIUNE C</span>
                    <p className="text-zinc-300">{currentEx.filterAnalysis.step4}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-700">
                    <span className="font-bold text-emerald-300 font-mono block mb-1">CONCLUZIA JURIDICĂ DRPCIV</span>
                    <p className="text-zinc-200 font-medium">{currentEx.filterAnalysis.conclusion}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 7: PLANUL DE 7 ZILE PENTRU SALĂ DIN PRIMA */}
      {activeTab === 'schedule' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-white" />
              <span>Programul de Pregătire Accelerată în 7 Zile pentru 26/26</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Creat pe baza principiilor de retenție mnezică și a protocolului de învățare rapidă. Nu necesită mai mult de 45-60 de minute pe zi.
            </p>

            <div className="space-y-3">
              {[
                {
                  day: 'ZIUA 1: FUNDAȚIA JURIDICĂ & SEMNELE DE PRIORITATE',
                  tasks: [
                    'Parcurge secțiunea Dicționar DRPCIV pentru termenii tehnici (acostament, declivitate, bandă decelerare).',
                    'Învață semnele din categoria Prioritate și Avertizare cu metoda CIA din catalog.',
                    'Rezolvă primele 2 chestionare în simulator fără limită de timp.'
                  ]
                },
                {
                  day: 'ZIUA 2: SEMNE DE INTERZICERE & OBLIGARE + REGULA DOMINOULUI',
                  tasks: [
                    'Învață semnele de Interzicere și Obligare (atenție la Interzis virajul la stânga care interzice și întoarcerea).',
                    'Stăpânește Matricea Manevrelor (unde e interzisă oprirea, staționarea, întoarcerea, mersul înapoi).',
                    'Rezolvă 3 chestionare concentrându-te pe depistarea cuvintelor otrăvite.'
                  ]
                },
                {
                  day: 'ZIUA 3: INTERSECȚII & IERARHIA ABSOLUTĂ A PRIORITĂȚII',
                  tasks: [
                    'Parcurge simulatorul de Intersecții 2D și verifică cele 6 trepte de ierarhie (polițist, semafor, indicator, dreapta).',
                    'Învață cele 3 cazuri în care tramvaiul pierde prioritatea (viraj stânga, cedează trecerea, plecare din buclă).',
                    'Rezolvă 3 chestionare exclusive pe capitolul Prioritate.'
                  ]
                },
                {
                  day: 'ZIUA 4: VITEZE & CELE 11 REDUCERI OBLIGATORII',
                  tasks: [
                    'Memorează cele 11 situații de reducere sub 30 km/h în localitate și sub 50 km/h în afara localității.',
                    'Fixează vitezele maxime pentru începători (-20 km/h pe autostradă și drum expres).',
                    'Rezolvă 4 chestionare cu aplicarea butonului „Răspunde mai târziu” la întrebările ezitante.'
                  ]
                },
                {
                  day: 'ZIUA 5: PUNCTELE GRATUITE (MECANICĂ, PRIM AJUTOR & ECO)',
                  tasks: [
                    'Memorează tabelul fix: 30:2 compresii, PLS poziție laterală, interzis apă pe gură.',
                    'Fixează culorile fumului (negru=combustibil, albastru=ulei, alb=antigel) și martorii de bord.',
                    'Rezolvă 4 chestionare complete; scorul trebuie să depășească 23/26 constant.'
                  ]
                },
                {
                  day: 'ZIUA 6: MARATON DE SIMULARE & ELIMINAREA GAFELOR',
                  tasks: [
                    'Intră în secțiunea „Banca de Gafe” și rezolvă din nou toate întrebările greșite anterior.',
                    'Fă 5 teste oficiale consecutive pe timp de 30 de minute.',
                    'Obiectiv: 5 teste consecutive trecute cu minimum 24/26.'
                  ]
                },
                {
                  day: 'ZIUA 7: ZIUA EXAMENULUI TEORETIC LA SALĂ',
                  tasks: [
                    'Somn de cel puțin 7 ore în noaptea dinainte; zero toceală pe holul poliției!',
                    'Ascultă frecvența 10 Hz Alfa timp de 5 minute înainte de a intra la terminal.',
                    'La pupitru: nu te grăbi (ai 70 secunde per întrebare); folosește „Răspunde mai târziu” dacă ai dubii; strânge întâi cele 22 de puncte sigure!'
                  ]
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-white text-black font-extrabold text-xs flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-mono">
                      {item.day}
                    </h4>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 pl-2">
                    {item.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="leading-relaxed">{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
