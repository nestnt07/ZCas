import { UserProgress, QuestionCategory } from '@/types/driving';

const STORAGE_KEY = 'automaster_driver_progress_v1';

export const INITIAL_PROGRESS: UserProgress = {
  eloRating: 850,
  peakElo: 850,
  streakDays: 1,
  lastStudyDate: new Date().toISOString().split('T')[0],
  totalExamsTaken: 0,
  examsPassed: 0,
  questionsAnswered: 0,
  questionsCorrect: 0,
  blunderHistory: [],
  categoryStats: {
    priority: { total: 0, correct: 0 },
    road_signs: { total: 0, correct: 0 },
    circulation_rules: { total: 0, correct: 0 },
    overtaking_parking: { total: 0, correct: 0 },
    mechanics: { total: 0, correct: 0 },
    first_aid: { total: 0, correct: 0 },
    ecological_driving: { total: 0, correct: 0 },
    offenses_penalties: { total: 0, correct: 0 }
  },
  unlockedModules: ['mod-01-cockpit'],
  bookmarkedSignIds: ['sign-stop', 'sign-yield'],
  solvedChessPuzzles: [],
  solvedDrivingTactics: [],
  hemiSyncMinutesUsed: 0
};

export function loadUserProgress(): UserProgress {
  if (typeof window === 'undefined') return INITIAL_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS;
    const parsed = JSON.parse(raw);
    return { ...INITIAL_PROGRESS, ...parsed };
  } catch (e) {
    return INITIAL_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

export function calculateRankTitle(elo: number): {
  title: string;
  rankBadge: string;
  nextThreshold: number;
  prevThreshold: number;
} {
  if (elo < 1000) {
    return {
      title: 'Pion Începător (Pawn Driver)',
      rankBadge: 'Pawn',
      nextThreshold: 1000,
      prevThreshold: 800
    };
  } else if (elo < 1300) {
    return {
      title: 'Cal Manevrier (Knight Driver)',
      rankBadge: 'Knight',
      nextThreshold: 1300,
      prevThreshold: 1000
    };
  } else if (elo < 1600) {
    return {
      title: 'Nebun Navigator (Bishop Tactician)',
      rankBadge: 'Bishop',
      nextThreshold: 1600,
      prevThreshold: 1300
    };
  } else if (elo < 1900) {
    return {
      title: 'Turn Strateg (Rook Controller)',
      rankBadge: 'Rook',
      nextThreshold: 1900,
      prevThreshold: 1600
    };
  } else if (elo < 2200) {
    return {
      title: 'Regina Șoselelor (Queen Master)',
      rankBadge: 'Queen',
      nextThreshold: 2200,
      prevThreshold: 1900
    };
  } else {
    return {
      title: 'Mare Maestru Rutier (Grandmaster Driver)',
      rankBadge: 'Crown',
      nextThreshold: 2500,
      prevThreshold: 2200
    };
  }
}
