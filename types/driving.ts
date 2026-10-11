export type QuestionCategory =
  | 'priority'
  | 'road_signs'
  | 'circulation_rules'
  | 'overtaking_parking'
  | 'mechanics'
  | 'first_aid'
  | 'ecological_driving'
  | 'offenses_penalties';

export interface QuestionOption {
  id: 'A' | 'B' | 'C';
  text: string;
}

export interface DRPCIVQuestion {
  id: string;
  category: QuestionCategory;
  question: string;
  options: QuestionOption[];
  correctAnswers: ('A' | 'B' | 'C')[];
  explanation: string;
  legalReference: string; // e.g. Art. 57 OUG 195/2002
  eloRating: number; // 800 - 2200
  blunderSeverity: 'critical' | 'major' | 'minor'; // Critical = fatal crash or instant police exam disqualification
  imageType?: 'intersection' | 'road_sign' | 'mechanics' | 'police_signal' | 'roundabout';
  imageData?: any;
  ciaMemoryAnchor?: {
    peg: string; // Method of loci peg
    cognitiveRule: string; // CIA Patterning shortcut
    neuroFact: string; // Brain retention anchor
  };
}

export type SignCategory =
  | 'warning' // Avertizare
  | 'priority' // Prioritate
  | 'prohibition' // Interzicere sau restrictie
  | 'mandatory' // Obligare
  | 'information' // Informare
  | 'additional'; // Panouri aditionale

export interface RoadSign {
  id: string;
  name: string;
  code: string;
  category: SignCategory;
  description: string;
  legalRule: string;
  chessAnalogy: string;
  iconName: string;
  colorScheme: 'red_white' | 'blue_white' | 'yellow_black' | 'red_yellow';
  commonExamTrap: string;
  svgType: string;
  ciaMemoryAnchor?: {
    shapeMeaning: string;
    mnemonicPeg: string;
    quickReflexRule: string;
  };
}

export type VocabCategory =
  | 'drum'
  | 'mecanica'
  | 'juridic'
  | 'manevre'
  | 'prim_ajutor'
  | 'prioritate';

export interface VocabTerm {
  id: string;
  term: string;
  simpleMeaning: string;
  detailedLegalDefinition: string;
  category: VocabCategory;
  realLifeExample: string;
  examQuestionTrap: string;
  synonymsOrSimplerTerms: string[];
}

export interface ChessPuzzle {
  id: string;
  title: string;
  theme: string;
  fen: string; // simplified position or board state
  playerTurn: 'white' | 'black';
  targetMoveDescription: string;
  solutionUci: string; // e.g. "e2e4" or "Qxf7#"
  drivingPrincipleConnection: string;
  rating: number;
}

export interface DrivingTacticsPuzzle {
  id: string;
  title: string;
  scenarioDescription: string;
  intersectionType: 'crossroad' | 't_junction' | 'roundabout' | 'tram_conflict';
  vehicles: {
    id: string;
    label: string; // e.g. "Autoturismul Roșu (Tu)", "Tramvaiul 1", "Camionul Albastru"
    color: string;
    direction: 'straight' | 'left' | 'right';
    hasPrioritySign: boolean;
    signType?: 'priority_road' | 'yield' | 'stop' | 'none';
  }[];
  correctOrder: string[]; // e.g. ["Tramvaiul", "Camionul", "Autoturismul Roșu"]
  explanation: string;
  difficultyElo: number;
  timeLimitSeconds: number;
}

export interface UserProgress {
  eloRating: number;
  peakElo: number;
  streakDays: number;
  lastStudyDate: string;
  totalExamsTaken: number;
  examsPassed: number;
  questionsAnswered: number;
  questionsCorrect: number;
  blunderHistory: {
    questionId: string;
    chosenAnswers: string[];
    timestamp: number;
    resolved: boolean;
  }[];
  categoryStats: Record<
    QuestionCategory,
    { total: number; correct: number }
  >;
  unlockedModules: string[];
  bookmarkedSignIds: string[];
  solvedChessPuzzles: string[];
  solvedDrivingTactics: string[];
  hemiSyncMinutesUsed: number;
}
