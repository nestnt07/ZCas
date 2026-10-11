import { ChessPuzzle, DrivingTacticsPuzzle } from '@/types/driving';

export const CHESS_TACTICAL_PUZZLES: ChessPuzzle[] = [
  {
    id: 'cp-01',
    title: 'Furculița de Cal: Scanarea Amenințărilor Multiple',
    theme: 'Knight Fork (Furculiță)',
    fen: 'r1bqk2r/pppp1ppp/2n5/4p3/1b2n3/2NP1N2/PPP1BPPP/R1BQK2R',
    playerTurn: 'white',
    targetMoveDescription: 'Găsește mutarea tactică prin care albul atacă simultan două piese vitale (Cal pe c7 sau spargerea centrului d3xe4).',
    solutionUci: 'd3xe4',
    drivingPrincipleConnection: 'La fel ca o furculiță de cal, o intersecție nedirijată cu 3 vehicule creează presiune simultană din multiple unghiuri. Șoferul trebuie să evalueze simultan amenințarea din dreapta și din stânga.',
    rating: 1100
  },
  {
    id: 'cp-02',
    title: 'Legarea Absolută: Imobilizarea Punctului Critic',
    theme: 'Absolute Pin (Legare pe Rege)',
    fen: 'r1b1k2r/ppppqppp/2n5/4P3/1bB5/2P2N2/P4PPP/R1BQK2R',
    playerTurn: 'white',
    targetMoveDescription: 'Albul exploatează piesa legată de Rege. Fă mutarea de protecție sau sacrificiu profilactic.',
    solutionUci: 'c3xb4',
    drivingPrincipleConnection: 'Un indicator STOP este o „legare absolută”: ești forțat legal să rămâi pe loc până când regele (drumul prioritar) este complet degajat.',
    rating: 1250
  },
  {
    id: 'cp-03',
    title: 'Atacul prin Descoperire: Surpriza Unghiului Mort',
    theme: 'Discovered Attack (Atac prin Descoperire)',
    fen: 'r2qk2r/ppp2ppp/2n1b3/3np3/8/1B1P1N2/PPP2PPP/RNBQK2R',
    playerTurn: 'white',
    targetMoveDescription: 'Albul deschide diagonala nebunului cu o mutare agresivă a calului în centru.',
    solutionUci: 'f3g5',
    drivingPrincipleConnection: 'Autobuzul oprit în stație maschează un pieton care traversează prin fața lui. La fel ca un atac prin descoperire, pericolul ascuns devine activ în secunda în care treci pe lângă el.',
    rating: 1400
  },
  {
    id: 'cp-04',
    title: 'Matul pe Ultima Linie: Lipsa Căii de Evadare',
    theme: 'Back-Rank Mate (Mat pe Linia a 8-a)',
    fen: '6k1/5ppp/8/8/8/8/4RPPP/6K1',
    playerTurn: 'white',
    targetMoveDescription: 'Găsește matul imparabil pe ultima linie cu Turnul.',
    solutionUci: 'e2e8',
    drivingPrincipleConnection: 'Distanța de siguranță: dacă te lipești de bara din față și nu lași spațiu de scăpare, orice frână bruscă te prinde într-un „mat de bară la bară” fără ieșire.',
    rating: 950
  },
  {
    id: 'cp-05',
    title: 'Profilaxia Karpov: Neutralizarea Pericolului Înainte de Apariție',
    theme: 'Prophylaxis (Gândire Profilactică)',
    fen: 'r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1',
    playerTurn: 'white',
    targetMoveDescription: 'Albul joacă h2-h3 pentru a împiedica definitiv nebunul sau calul negru să ajungă pe g4.',
    solutionUci: 'h2h3',
    drivingPrincipleConnection: 'Conducerea preventivă este profilaxie pură: ridici piciorul de pe accelerație înainte de o trecere de pietoni cu vizibilitate redusă, chiar dacă nu vezi încă pe nimeni.',
    rating: 1500
  }
];

export const DRIVING_TACTICS_PUZZLES: DrivingTacticsPuzzle[] = [
  {
    id: 'dt-01',
    title: 'Puzzle Tactic #1: Enigma celor 3 Mașini în Cruce',
    scenarioDescription: 'Intersecție nedirijată în formă de cruce. Autoturismul Albastru vine din Nord mergând drept. Autoturismul Galben vine din Vest mergând drept. Dumneavoastră (Autoturismul Roșu) veniți din Sud și virați la dreapta.',
    intersectionType: 'crossroad',
    vehicles: [
      { id: 'v-red', label: 'Mașina Roșie (Tu - viraj dreapta)', color: '#EF4444', direction: 'right', hasPrioritySign: false, signType: 'none' },
      { id: 'v-yellow', label: 'Mașina Galbenă (Vine din Vest - merge înainte)', color: '#EAB308', direction: 'straight', hasPrioritySign: false, signType: 'none' },
      { id: 'v-blue', label: 'Mașina Albastră (Vine din Nord - merge înainte)', color: '#3B82F6', direction: 'straight', hasPrioritySign: false, signType: 'none' }
    ],
    correctOrder: [
      'Mașina Roșie (Tu - viraj dreapta)',
      'Mașina Galbenă (Vine din Vest - merge înainte)',
      'Mașina Albastră (Vine din Nord - merge înainte)'
    ],
    explanation: 'Deoarece este intersecție nedirijată, se aplică regula priorității de dreapta. Tu (Roșu) nu ai pe nimeni în dreapta ta și virând la dreapta nu intersectezi fluxul prioritar -> treci primul! Apoi Galben are dreapta eliberată și trece al doilea. Albastru trece ultimul avându-l pe Galben în dreapta sa.',
    difficultyElo: 900,
    timeLimitSeconds: 25
  },
  {
    id: 'dt-02',
    title: 'Puzzle Tactic #2: Capcana Drumului Prioritar cu Cotitură',
    scenarioDescription: 'Intersecție dirijată cu indicatorul „Drum cu prioritate” și panoul adițional care arată că drumul prioritar cotește la stânga. Un camion se află pe drumul prioritar și merge înainte (părăsește drumul prioritar). Tu te afli pe drum prioritar și continui pe traseul curbei. O mașină verde are indicatorul „Cedează trecerea”.',
    intersectionType: 'crossroad',
    vehicles: [
      { id: 'v-you', label: 'Autoturismul Tău (Urmează curba prioritară)', color: '#EF4444', direction: 'left', hasPrioritySign: true, signType: 'priority_road' },
      { id: 'v-truck', label: 'Camionul (Părăsește drumul prioritar mergând înainte)', color: '#8B5CF6', direction: 'straight', hasPrioritySign: true, signType: 'priority_road' },
      { id: 'v-green', label: 'Autoturismul Verde (Are Cedează trecerea)', color: '#10B981', direction: 'straight', hasPrioritySign: false, signType: 'yield' }
    ],
    correctOrder: [
      'Autoturismul Tău (Urmează curba prioritară)',
      'Camionul (Părăsește drumul prioritar mergând înainte)',
      'Autoturismul Verde (Are Cedează trecerea)'
    ],
    explanation: 'Între cele două vehicule aflate pe drumul prioritar (Tu și Camionul) se aplică regula priorității de dreapta: tu te afli în dreapta camionului, deci treci primul! Camionul trece al doilea. Autoturismul verde este pe drum fără prioritate și trece ultimul.',
    difficultyElo: 1350,
    timeLimitSeconds: 20
  },
  {
    id: 'dt-03',
    title: 'Puzzle Tactic #3: Dilema Tramvaiului în Viraj',
    scenarioDescription: 'Intersecție în T. Un tramvai virează la stânga. Tu circuli din sens opus mergând drept înainte. Ambele artere au indicator de „Drum cu prioritate”.',
    intersectionType: 'tram_conflict',
    vehicles: [
      { id: 'v-tram', label: 'Tramvaiul (Virează la stânga)', color: '#F97316', direction: 'left', hasPrioritySign: true, signType: 'priority_road' },
      { id: 'v-you', label: 'Autoturismul Tău (Merge drept înainte din sens opus)', color: '#EF4444', direction: 'straight', hasPrioritySign: true, signType: 'priority_road' }
    ],
    correctOrder: [
      'Autoturismul Tău (Merge drept înainte din sens opus)',
      'Tramvaiul (Virează la stânga)'
    ],
    explanation: 'Când două vehicule se află pe drumuri cu același rang (ambele pe drum prioritar), cel care virează la stânga pierde prioritatea față de cel care vine din sens opus și merge înainte. Chiar dacă este tramvai, virajul la stânga îl obligă să îți acorde ție prioritate!',
    difficultyElo: 1650,
    timeLimitSeconds: 15
  },
  {
    id: 'dt-04',
    title: 'Puzzle Tactic #4: Intersecția Blocată (4 Vehicule)',
    scenarioDescription: '4 autovehicule sosesc simultan într-o intersecție nedirijată din toate cele 4 direcții. Fiecare are un vehicul în dreapta sa. Cum se soluționează legal blocajul?',
    intersectionType: 'crossroad',
    vehicles: [
      { id: 'v-1', label: 'Vehiculul Nord', color: '#3B82F6', direction: 'straight', hasPrioritySign: false, signType: 'none' },
      { id: 'v-2', label: 'Vehiculul Est', color: '#10B981', direction: 'straight', hasPrioritySign: false, signType: 'none' },
      { id: 'v-3', label: 'Vehiculul Sud', color: '#EF4444', direction: 'straight', hasPrioritySign: false, signType: 'none' },
      { id: 'v-4', label: 'Vehiculul Vest', color: '#F59E0B', direction: 'straight', hasPrioritySign: false, signType: 'none' }
    ],
    correctOrder: [
      'Prin înțelegere reciprocă (semnal cu farurile/gest) un șofer renunță voluntar la prioritate',
      'Următorul vehicul care are acum dreapta liberă trece',
      'Ceilalți trec succesiv conform regulii de dreapta'
    ],
    explanation: 'Când toate cele 4 puncte sunt ocupate simultan, legea nu poate stabili un prim vehicul absolut automat. Soluția codificată: prin înțelegere amiabilă și semnalizare clară, unul dintre conducători renunță voluntar la prioritate, deblocând regula de dreapta pentru ceilalți 3.',
    difficultyElo: 1800,
    timeLimitSeconds: 20
  }
];
