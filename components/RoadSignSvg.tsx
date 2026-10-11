'use client';

import React from 'react';

interface RoadSignSvgProps {
  svgType: string;
  name?: string;
  className?: string;
  size?: number;
}

export const RoadSignSvg: React.FC<RoadSignSvgProps> = ({
  svgType,
  name,
  className = '',
  size = 96
}) => {
  const s = size;

  switch (svgType) {
    // 1. STOP - Red Octagon with white STOP text
    case 'stop':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Indicator STOP'}
        >
          <polygon
            points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
            fill="#DC2626"
            stroke="#FFFFFF"
            strokeWidth="3.5"
          />
          <text
            x="50"
            y="58"
            fill="#FFFFFF"
            fontSize="22"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
            textAnchor="middle"
            letterSpacing="1"
          >
            STOP
          </text>
        </svg>
      );

    // 2. Cedează trecerea - Inverted Triangle with red border and white center
    case 'yield':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Cedează trecerea'}
        >
          <polygon
            points="5,15 95,15 50,95"
            fill="#FFFFFF"
            stroke="#DC2626"
            strokeWidth="12"
            strokeLinejoin="round"
          />
        </svg>
      );

    // 3. Drum cu prioritate - Diamond with thick white border and yellow square
    case 'priority_road':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Drum cu prioritate'}
        >
          <rect
            x="15"
            y="15"
            width="70"
            height="70"
            rx="6"
            transform="rotate(45 50 50)"
            fill="#FFFFFF"
            stroke="#18181B"
            strokeWidth="2"
          />
          <rect
            x="24"
            y="24"
            width="52"
            height="52"
            rx="3"
            transform="rotate(45 50 50)"
            fill="#FACC15"
            stroke="#CA8A04"
            strokeWidth="1.5"
          />
        </svg>
      );

    // 4. Sfârșitul drumului cu prioritate - Diamond with black diagonal stripe
    case 'end_priority':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Sfârșitul drumului cu prioritate'}
        >
          <rect
            x="15"
            y="15"
            width="70"
            height="70"
            rx="6"
            transform="rotate(45 50 50)"
            fill="#FFFFFF"
            stroke="#18181B"
            strokeWidth="2"
          />
          <rect
            x="24"
            y="24"
            width="52"
            height="52"
            rx="3"
            transform="rotate(45 50 50)"
            fill="#FACC15"
            stroke="#CA8A04"
            strokeWidth="1.5"
          />
          <line x1="8" y1="92" x2="92" y2="8" stroke="#18181B" strokeWidth="6" />
          <line x1="16" y1="92" x2="92" y2="16" stroke="#18181B" strokeWidth="4" />
        </svg>
      );

    // 5. Prioritate pentru circulația din sens invers - White circle, red border, black arrow down, red arrow up
    case 'priority_to_oncoming':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Prioritate pentru circulația din sens invers'}
        >
          <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* Black arrow down (has to yield) */}
          <path d="M62 25 L62 70 M54 40 L62 25 L70 40" stroke="#DC2626" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Red arrow up */}
          <path d="M38 75 L38 30 M30 60 L38 75 L46 60" stroke="#18181B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    // 6. Prioritate față de circulația din sens invers - Blue square with white arrow up, red arrow down
    case 'priority_over_oncoming':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Prioritate față de circulația din sens invers'}
        >
          <rect x="6" y="6" width="88" height="88" rx="8" fill="#2563EB" stroke="#FFFFFF" strokeWidth="3" />
          <path d="M36 75 L36 28 M26 44 L36 28 L46 44" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M64 25 L64 72 M56 56 L64 72 L72 56" stroke="#DC2626" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    // 7. Accesul interzis - Red circle with white horizontal bar
    case 'no_entry':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Accesul interzis'}
        >
          <circle cx="50" cy="50" r="46" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="18" y="42" width="64" height="16" rx="2" fill="#FFFFFF" />
        </svg>
      );

    // 8. Circulația interzisă în ambele sensuri - White circle with red border
    case 'closed_both_directions':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Circulația interzisă în ambele sensuri'}
        >
          <circle cx="50" cy="50" r="45" fill="#FFFFFF" stroke="#DC2626" strokeWidth="12" />
        </svg>
      );

    // 9. Depășirea autovehiculelor interzisă - White circle, red border, red car on left, black car on right
    case 'no_overtaking':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Depășirea interzisă'}
        >
          <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* Red Car (left) */}
          <g transform="translate(18, 38)">
            <rect x="2" y="10" width="26" height="14" rx="3" fill="#DC2626" />
            <path d="M6 10 L10 2 L20 2 L24 10 Z" fill="#DC2626" />
            <circle cx="7" cy="24" r="3" fill="#18181B" />
            <circle cx="23" cy="24" r="3" fill="#18181B" />
          </g>
          {/* Black Car (right) */}
          <g transform="translate(54, 38)">
            <rect x="2" y="10" width="26" height="14" rx="3" fill="#18181B" />
            <path d="M6 10 L10 2 L20 2 L24 10 Z" fill="#18181B" />
            <circle cx="7" cy="24" r="3" fill="#18181B" />
            <circle cx="23" cy="24" r="3" fill="#18181B" />
          </g>
        </svg>
      );

    // 10. Limitare de viteză 50 km/h - White circle, red border, black 50
    case 'speed_limit_50':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Limitare de viteză 50'}
        >
          <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          <text
            x="50"
            y="61"
            fill="#18181B"
            fontSize="34"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
            textAnchor="middle"
          >
            50
          </text>
        </svg>
      );

    // 11. Limitare de viteză 30 km/h - White circle, red border, black 30
    case 'speed_limit_30':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Limitare de viteză 30'}
        >
          <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          <text
            x="50"
            y="61"
            fill="#18181B"
            fontSize="34"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
            textAnchor="middle"
          >
            30
          </text>
        </svg>
      );

    // 12. Limitare de viteză 90 km/h
    case 'speed_limit_90':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Limitare de viteză 90'}
        >
          <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          <text
            x="50"
            y="61"
            fill="#18181B"
            fontSize="34"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
            textAnchor="middle"
          >
            90
          </text>
        </svg>
      );

    // 13. Oprirea interzisă - Blue circle, red border, red X
    case 'no_stopping':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Oprirea interzisă'}
        >
          <circle cx="50" cy="50" r="46" fill="#2563EB" stroke="#DC2626" strokeWidth="10" />
          <line x1="18" y1="18" x2="82" y2="82" stroke="#DC2626" strokeWidth="9" />
          <line x1="82" y1="18" x2="18" y2="82" stroke="#DC2626" strokeWidth="9" />
        </svg>
      );

    // 14. Staționarea interzisă - Blue circle, red border, single red diagonal
    case 'no_parking':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Staționarea interzisă'}
        >
          <circle cx="50" cy="50" r="46" fill="#2563EB" stroke="#DC2626" strokeWidth="10" />
          <line x1="18" y1="82" x2="82" y2="18" stroke="#DC2626" strokeWidth="10" />
        </svg>
      );

    // 15. Staționare alternantă (zile impare - I)
    case 'parking_alternate_odd':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Staționare alternantă zile impare'}
        >
          <circle cx="50" cy="50" r="46" fill="#2563EB" stroke="#DC2626" strokeWidth="10" />
          <rect x="45" y="28" width="10" height="44" fill="#FFFFFF" rx="2" />
          <line x1="18" y1="82" x2="82" y2="18" stroke="#DC2626" strokeWidth="8" />
        </svg>
      );

    // 16. Sens giratoriu - Blue circle with 3 curved white arrows
    case 'roundabout':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Intersecție cu sens giratoriu'}
        >
          <circle cx="50" cy="50" r="46" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* 3 circular arrows */}
          <g stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" fill="none">
            <path d="M50 20 A30 30 0 0 1 76 65" />
            <path d="M76 65 L66 62 M76 65 L76 53" strokeWidth="4.5" />
            <path d="M70 70 A30 30 0 0 1 24 65" />
            <path d="M24 65 L31 73 M24 65 L22 55" strokeWidth="4.5" />
            <path d="M24 55 A30 30 0 0 1 50 20" />
            <path d="M50 20 L40 23 M50 20 L51 32" strokeWidth="4.5" />
          </g>
        </svg>
      );

    // 17. Înainte - Blue circle with straight white arrow up
    case 'straight_ahead':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Înainte'}
        >
          <circle cx="50" cy="50" r="46" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M50 78 L50 24 M34 40 L50 22 L66 40" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    // 18. La dreapta - Blue circle with arrow pointing right
    case 'turn_right':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'La dreapta'}
        >
          <circle cx="50" cy="50" r="46" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M30 68 L52 68 A18 18 0 0 0 70 50 L70 32 M54 46 L70 30 L86 46" transform="rotate(90 50 50)" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    // 19. Trecere pentru pietoni - Blue square with white triangle and pedestrian silhouette
    case 'pedestrian_crossing':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Trecere pentru pietoni'}
        >
          <rect x="5" y="5" width="90" height="90" rx="8" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
          <polygon points="12,85 88,85 50,15" fill="#FFFFFF" />
          {/* Zebra stripes */}
          <line x1="28" y1="80" x2="72" y2="80" stroke="#18181B" strokeWidth="3" />
          <line x1="32" y1="74" x2="68" y2="74" stroke="#18181B" strokeWidth="3" />
          <line x1="36" y1="68" x2="64" y2="68" stroke="#18181B" strokeWidth="3" />
          {/* Walking person silhouette */}
          <circle cx="50" cy="38" r="4" fill="#18181B" />
          <path d="M46 44 L54 44 L58 58 L52 68 L44 68 L48 56 Z" fill="#18181B" />
        </svg>
      );

    // 20. Copii (Zonă școlară) - Red border triangle with running children
    case 'children':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Copii'}
        >
          <polygon points="5,88 95,88 50,8" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          {/* Child 1 */}
          <circle cx="44" cy="46" r="4" fill="#18181B" />
          <path d="M42 52 L48 52 L52 64 L46 72 L38 68 Z" fill="#18181B" />
          {/* Child 2 */}
          <circle cx="58" cy="52" r="3" fill="#18181B" />
          <path d="M56 57 L62 57 L64 68 L58 72 Z" fill="#18181B" />
        </svg>
      );

    // 21. Curbă deosebit de periculoasă la dreapta - Red border triangle with curved arrow
    case 'curve_right':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Curbă la dreapta'}
        >
          <polygon points="5,88 95,88 50,8" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          <path d="M42 78 L42 62 A18 18 0 0 1 65 44 L68 44 M56 52 L68 44 L56 36" stroke="#18181B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    // 22. Curbă deosebit de periculoasă la stânga - Red border triangle with curved arrow left
    case 'curve_left':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Curbă la stânga'}
        >
          <polygon points="5,88 95,88 50,8" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          <path d="M58 78 L58 62 A18 18 0 0 0 35 44 L32 44 M44 52 L32 44 L44 36" stroke="#18181B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    // 23. Drum îngustat - Red border triangle with narrowing road
    case 'road_narrows':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Drum îngustat'}
        >
          <polygon points="5,88 95,88 50,8" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          <path d="M30 80 L30 68 L42 50 L42 38" stroke="#18181B" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M70 80 L70 68 L58 50 L58 38" stroke="#18181B" strokeWidth="6" strokeLinecap="round" fill="none" />
        </svg>
      );

    // 24. Crucea Sfântului Andrei (cale ferată simplă fără bariere)
    case 'railway_cross':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Crucea Sfântului Andrei'}
        >
          <polygon points="12,18 50,44 88,18 96,26 60,50 96,74 88,82 50,56 12,82 4,74 40,50 4,26" fill="#FFFFFF" stroke="#DC2626" strokeWidth="4" />
        </svg>
      );

    // 25. Semafor (avertizare apropiere semafor) - Red triangle with vertical 3-light traffic signal
    case 'traffic_lights_ahead':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Semafoare'}
        >
          <polygon points="5,88 95,88 50,8" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          <rect x="42" y="38" width="16" height="42" rx="3" fill="#18181B" />
          <circle cx="50" cy="46" r="4.5" fill="#EF4444" />
          <circle cx="50" cy="59" r="4.5" fill="#FACC15" />
          <circle cx="50" cy="72" r="4.5" fill="#22C55E" />
        </svg>
      );

    // 26. Autostradă - Green rectangle with overpass symbol
    case 'motorway':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Autostradă'}
        >
          <rect x="6" y="10" width="88" height="80" rx="8" fill="#15803D" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Highway roadway and overpass bridge */}
          <path d="M26 80 L36 30 M74 80 L64 30" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="18" y1="52" x2="82" y2="52" stroke="#FFFFFF" strokeWidth="5" />
          <line x1="24" y1="46" x2="76" y2="46" stroke="#FFFFFF" strokeWidth="3" />
        </svg>
      );

    // 27. Sens unic - Blue rectangle with horizontal white arrow
    case 'one_way':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Sens unic'}
        >
          <rect x="6" y="24" width="88" height="52" rx="6" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
          <path d="M20 50 L70 50 M56 36 L74 50 L56 64" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    // 28. Parcare (P) - Blue square with white P
    case 'parking':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
          aria-label={name || 'Parcare'}
        >
          <rect x="8" y="8" width="84" height="84" rx="8" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
          <text
            x="50"
            y="68"
            fill="#FFFFFF"
            fontSize="54"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
            textAnchor="middle"
          >
            P
          </text>
        </svg>
      );

    // 29. Intersecție cu drum fără prioritate
    case 'crossroad_minor':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <polygon points="50,10 95,90 5,90" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          {/* Main priority road */}
          <rect x="46" y="38" width="8" height="42" fill="#18181B" />
          <polygon points="50,30 44,40 56,40" fill="#18181B" />
          {/* Secondary thin crossroad */}
          <rect x="34" y="54" width="32" height="4" fill="#18181B" />
        </svg>
      );

    // 30. Cale ferată cu bariere (gard)
    case 'railway_barrier':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <polygon points="50,10 95,90 5,90" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          {/* Fence symbol */}
          <rect x="28" y="52" width="44" height="5" fill="#18181B" />
          <rect x="28" y="66" width="44" height="5" fill="#18181B" />
          <rect x="33" y="44" width="4.5" height="34" fill="#18181B" rx="1" />
          <rect x="42" y="44" width="4.5" height="34" fill="#18181B" rx="1" />
          <rect x="53" y="44" width="4.5" height="34" fill="#18181B" rx="1" />
          <rect x="62" y="44" width="4.5" height="34" fill="#18181B" rx="1" />
        </svg>
      );

    // 31. Cale ferată fără bariere (locomotivă)
    case 'railway_no_barrier':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <polygon points="50,10 95,90 5,90" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          {/* Steam engine silhouette */}
          <path d="M30 74 L70 74 L70 60 L62 60 L62 48 L46 48 L46 54 L36 54 L32 64 Z" fill="#18181B" />
          <circle cx="38" cy="74" r="5" fill="#18181B" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="52" cy="74" r="5" fill="#18181B" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="64" cy="74" r="5" fill="#18181B" stroke="#FFFFFF" strokeWidth="1.5" />
          <rect x="38" y="42" width="5" height="8" fill="#18181B" />
        </svg>
      );

    // 32. Crucea Sfântului Andrei DUBLĂ
    case 'railway_cross_double':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          {/* Top Cross */}
          <polygon points="12,28 26,14 50,38 74,14 88,28 64,52 88,76 74,90 50,66 26,90 12,76 36,52" fill="#FFFFFF" stroke="#DC2626" strokeWidth="4.5" />
          {/* Second lower chevron */}
          <path d="M22 66 L50 90 L78 66" stroke="#DC2626" strokeWidth="7" fill="none" strokeLinejoin="round" />
        </svg>
      );

    // 33. Panou suplimentar cale ferată 150m (3 dungi)
    case 'railway_countdown_150':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="32" y="8" width="36" height="84" rx="4" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
          {/* 3 red diagonal slashes */}
          <line x1="34" y1="34" x2="66" y2="20" stroke="#DC2626" strokeWidth="7" />
          <line x1="34" y1="56" x2="66" y2="42" stroke="#DC2626" strokeWidth="7" />
          <line x1="34" y1="78" x2="66" y2="64" stroke="#DC2626" strokeWidth="7" />
        </svg>
      );

    // 34. Drum alunecos
    case 'slippery_road':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <polygon points="50,10 95,90 5,90" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          {/* Car skidding */}
          <rect x="42" y="44" width="16" height="10" rx="2" fill="#18181B" />
          <path d="M44 44 L47 38 L53 38 L56 44 Z" fill="#18181B" />
          {/* Wavy tracks */}
          <path d="M44 58 Q40 66 46 72 Q52 78 48 84" stroke="#18181B" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M56 58 Q52 66 58 72 Q64 78 60 84" stroke="#18181B" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );

    // 35. Denivelare pentru limitarea vitezei (Bump)
    case 'speed_bump':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <polygon points="50,10 95,90 5,90" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          <path d="M22 72 L36 72 Q50 48 64 72 L78 72" stroke="#18181B" strokeWidth="6" fill="none" strokeLinecap="round" />
        </svg>
      );

    // 36. Animale sălbatice
    case 'wild_animals':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <polygon points="50,10 95,90 5,90" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          {/* Jumping deer silhouette */}
          <path d="M35 72 L42 62 L50 64 L62 50 L68 40 L65 38 L72 34 L73 44 L66 52 L60 62 L64 72 M50 64 L44 72" stroke="#18181B" strokeWidth="3.5" fill="#18181B" strokeLinecap="round" />
        </svg>
      );

    // 37. Lucrări drumuri (Fond galben temporar)
    case 'road_works':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <polygon points="50,10 95,90 5,90" fill="#FBBF24" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          {/* Worker with shovel */}
          <circle cx="56" cy="42" r="4.5" fill="#18181B" />
          <path d="M54 48 L46 56 L42 74 M46 56 L54 62 L56 74" stroke="#18181B" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <line x1="36" y1="74" x2="64" y2="48" stroke="#18181B" strokeWidth="3" />
          <polygon points="32,74 38,72 36,78" fill="#18181B" />
          <path d="M28 78 Q36 76 42 78" stroke="#18181B" strokeWidth="2.5" fill="none" />
        </svg>
      );

    // 38. Alte pericole (!)
    case 'other_dangers':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <polygon points="50,10 95,90 5,90" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          <rect x="47" y="40" width="6" height="24" rx="2" fill="#18181B" />
          <circle cx="50" cy="74" r="3.5" fill="#18181B" />
        </svg>
      );

    // 39. Curbă dublă prima la stânga
    case 'double_curve_left':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <polygon points="50,10 95,90 5,90" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
          <path d="M50 78 L50 68 Q50 56 40 56 Q30 56 30 46 Q30 36 44 36 L48 36" stroke="#18181B" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="46,30 56,36 46,42" fill="#18181B" />
        </svg>
      );

    // 40. Interzis virajul la stânga (Interzice și întoarcerea!)
    case 'no_left_turn':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* Arrow curving left */}
          <path d="M56 70 L56 46 Q56 38 42 38 L34 38" stroke="#18181B" strokeWidth="6" fill="none" strokeLinecap="round" />
          <polygon points="36,30 26,38 36,46" fill="#18181B" />
          {/* Red diagonal bar */}
          <line x1="22" y1="22" x2="78" y2="78" stroke="#DC2626" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );

    // 41. Interzis virajul la dreapta
    case 'no_right_turn':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* Arrow curving right */}
          <path d="M44 70 L44 46 Q44 38 58 38 L66 38" stroke="#18181B" strokeWidth="6" fill="none" strokeLinecap="round" />
          <polygon points="64,30 74,38 64,46" fill="#18181B" />
          {/* Red diagonal bar */}
          <line x1="22" y1="22" x2="78" y2="78" stroke="#DC2626" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );

    // 42. Întoarcerea interzisă (U-turn interzis)
    case 'no_u_turn':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* U-turn arrow */}
          <path d="M60 68 L60 48 Q60 34 44 34 Q34 34 34 46 L34 60" stroke="#18181B" strokeWidth="5.5" fill="none" strokeLinecap="round" />
          <polygon points="28,56 34,68 40,56" fill="#18181B" />
          {/* Red slash */}
          <line x1="22" y1="22" x2="78" y2="78" stroke="#DC2626" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );

    // 43. Sfârșitul interzicerii de a depăși
    case 'end_no_overtaking':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#71717A" strokeWidth="2.5" />
          {/* Two light gray cars */}
          <rect x="24" y="44" width="16" height="12" rx="2" fill="#A1A1AA" />
          <rect x="52" y="44" width="16" height="12" rx="2" fill="#A1A1AA" />
          {/* 4 thin black slashes */}
          <line x1="26" y1="74" x2="68" y2="26" stroke="#18181B" strokeWidth="2.5" />
          <line x1="32" y1="78" x2="74" y2="30" stroke="#18181B" strokeWidth="2.5" />
          <line x1="38" y1="82" x2="80" y2="34" stroke="#18181B" strokeWidth="2.5" />
        </svg>
      );

    // 44. Sfârșitul tuturor restricțiilor
    case 'end_all_restrictions':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#71717A" strokeWidth="2" />
          {/* 5 black diagonal stripes */}
          <line x1="20" y1="70" x2="70" y2="20" stroke="#18181B" strokeWidth="3" />
          <line x1="25" y1="75" x2="75" y2="25" stroke="#18181B" strokeWidth="3" />
          <line x1="30" y1="80" x2="80" y2="30" stroke="#18181B" strokeWidth="3" />
          <line x1="35" y1="85" x2="85" y2="35" stroke="#18181B" strokeWidth="3" />
          <line x1="15" y1="65" x2="65" y2="15" stroke="#18181B" strokeWidth="3" />
        </svg>
      );

    // 45. Claxonarea interzisă
    case 'no_horn':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* Horn trumpet */}
          <path d="M30 46 L46 46 L62 38 L62 62 L46 54 L30 54 Z" fill="#18181B" />
          <circle cx="28" cy="50" r="4" fill="#18181B" />
          <line x1="22" y1="22" x2="78" y2="78" stroke="#DC2626" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );

    // 46. Accesul interzis autovehiculelor (mașină + motocicletă)
    case 'no_motor_vehicles':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* Car icon top */}
          <rect x="36" y="28" width="28" height="15" rx="3" fill="#18181B" />
          <circle cx="42" cy="44" r="3" fill="#FFFFFF" />
          <circle cx="58" cy="44" r="3" fill="#FFFFFF" />
          {/* Motorcycle icon bottom */}
          <circle cx="38" cy="66" r="6" stroke="#18181B" strokeWidth="2.5" fill="none" />
          <circle cx="62" cy="66" r="6" stroke="#18181B" strokeWidth="2.5" fill="none" />
          <line x1="38" y1="66" x2="52" y2="58" stroke="#18181B" strokeWidth="3" />
          <line x1="52" y1="58" x2="62" y2="66" stroke="#18181B" strokeWidth="3" />
          <line x1="52" y1="58" x2="48" y2="52" stroke="#18181B" strokeWidth="3" />
        </svg>
      );

    // 47. Vama (DOUANE / VAMA)
    case 'customs':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          <rect x="20" y="47" width="60" height="6" fill="#18181B" />
          <text x="50" y="40" fill="#18181B" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DOUANE</text>
          <text x="50" y="66" fill="#18181B" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">VAMA</text>
        </svg>
      );

    // 48. La stânga (Obligatoriu)
    case 'turn_left':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#2563EB" stroke="#FFFFFF" strokeWidth="3" />
          <path d="M68 50 L36 50 M48 36 L32 50 L48 64" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    // 49. Înainte sau la dreapta
    case 'straight_or_right':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#2563EB" stroke="#FFFFFF" strokeWidth="3" />
          {/* Straight stem */}
          <path d="M42 72 L42 32 M34 42 L42 28 L50 42" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Branch right */}
          <path d="M42 54 Q56 54 66 54 M58 46 L68 54 L58 62" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    // 50. Pistă pentru biciclete
    case 'cycle_track':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#2563EB" stroke="#FFFFFF" strokeWidth="3" />
          {/* Bicycle */}
          <circle cx="34" cy="58" r="10" stroke="#FFFFFF" strokeWidth="3.5" fill="none" />
          <circle cx="66" cy="58" r="10" stroke="#FFFFFF" strokeWidth="3.5" fill="none" />
          <line x1="34" y1="58" x2="48" y2="44" stroke="#FFFFFF" strokeWidth="3.5" />
          <line x1="48" y1="44" x2="62" y2="44" stroke="#FFFFFF" strokeWidth="3.5" />
          <line x1="48" y1="44" x2="52" y2="58" stroke="#FFFFFF" strokeWidth="3.5" />
          <line x1="52" y1="58" x2="66" y2="58" stroke="#FFFFFF" strokeWidth="3.5" />
          <line x1="62" y1="44" x2="64" y2="38" stroke="#FFFFFF" strokeWidth="3.5" />
        </svg>
      );

    // 51. Viteză minimă obligatorie (30 km/h)
    case 'min_speed_30':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <circle cx="50" cy="50" r="44" fill="#2563EB" stroke="#FFFFFF" strokeWidth="3" />
          <text x="50" y="63" fill="#FFFFFF" fontSize="42" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
            30
          </text>
        </svg>
      );

    // 52. Drum expres
    case 'expressway':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="8" y="14" width="84" height="72" rx="8" fill="#15803D" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Automobile front silhouette */}
          <rect x="30" y="38" width="40" height="24" rx="4" fill="#FFFFFF" />
          <circle cx="38" cy="62" r="5" fill="#18181B" />
          <circle cx="62" cy="62" r="5" fill="#18181B" />
          <rect x="36" y="42" width="28" height="10" rx="1" fill="#15803D" />
        </svg>
      );

    // 53. Spital
    case 'hospital':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="8" y="8" width="84" height="84" rx="8" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
          <rect x="22" y="22" width="56" height="56" rx="4" fill="#FFFFFF" />
          <text x="50" y="64" fill="#2563EB" fontSize="46" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
            H
          </text>
        </svg>
      );

    // 54. Drum fără ieșire (Fundătură)
    case 'dead_end':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="8" y="8" width="84" height="84" rx="8" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* White stem */}
          <rect x="44" y="36" width="12" height="42" fill="#FFFFFF" />
          {/* Red top bar */}
          <rect x="34" y="26" width="32" height="12" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );

    // 55. Stație carburanți (Benzinărie)
    case 'gas_station':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="8" y="8" width="84" height="84" rx="8" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Fuel dispenser */}
          <rect x="28" y="26" width="28" height="48" rx="3" fill="#FFFFFF" />
          <rect x="34" y="34" width="16" height="12" rx="1" fill="#2563EB" />
          {/* Nozzle hose */}
          <path d="M56 38 H64 V56 L60 52" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );

    // 56. Panou Adițional: Direcția drumului cu prioritate (Viraj Stânga)
    case 'add_priority_curve_left':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="8" y="14" width="84" height="72" rx="6" fill="#FFFFFF" stroke="#18181B" strokeWidth="3" />
          {/* Thin non-priority roads */}
          <line x1="50" y1="50" x2="80" y2="50" stroke="#71717A" strokeWidth="3" />
          <line x1="50" y1="50" x2="50" y2="24" stroke="#71717A" strokeWidth="3" />
          {/* Thick priority path turning left */}
          <path d="M50 78 L50 50 L20 50" stroke="#18181B" strokeWidth="12" strokeLinecap="square" fill="none" />
        </svg>
      );

    // 57. Panou Adițional: Direcția drumului cu prioritate (Viraj Dreapta)
    case 'add_priority_curve_right':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="8" y="14" width="84" height="72" rx="6" fill="#FFFFFF" stroke="#18181B" strokeWidth="3" />
          <line x1="50" y1="50" x2="20" y2="50" stroke="#71717A" strokeWidth="3" />
          <line x1="50" y1="50" x2="50" y2="24" stroke="#71717A" strokeWidth="3" />
          <path d="M50 78 L50 50 L80 50" stroke="#18181B" strokeWidth="12" strokeLinecap="square" fill="none" />
        </svg>
      );

    // 58. Panou Adițional: Lungimea sectorului periculos (între săgeți)
    case 'add_danger_length':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="6" y="24" width="88" height="52" rx="6" fill="#FFFFFF" stroke="#18181B" strokeWidth="3" />
          {/* Up arrow left */}
          <line x1="18" y1="62" x2="18" y2="38" stroke="#18181B" strokeWidth="3" />
          <polygon points="14,40 18,32 22,40" fill="#18181B" />
          {/* Text distance */}
          <text x="50" y="56" fill="#18181B" fontSize="20" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
            2 km
          </text>
          {/* Up arrow right */}
          <line x1="82" y1="62" x2="82" y2="38" stroke="#18181B" strokeWidth="3" />
          <polygon points="78,40 82,32 86,40" fill="#18181B" />
        </svg>
      );

    // 59. Panou Adițional: Distanța până la locul periculos (fără săgeți)
    case 'add_distance_to_danger':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="6" y="24" width="88" height="52" rx="6" fill="#FFFFFF" stroke="#18181B" strokeWidth="3" />
          <text x="50" y="57" fill="#18181B" fontSize="22" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
            300 m
          </text>
        </svg>
      );

    // 60. Panou Adițional: Ridicare autovehicule parcate neregulamentar
    case 'add_towing':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="8" y="14" width="84" height="72" rx="6" fill="#FFFFFF" stroke="#18181B" strokeWidth="3" />
          {/* Tow truck boom */}
          <line x1="24" y1="68" x2="52" y2="36" stroke="#18181B" strokeWidth="4" />
          <line x1="52" y1="36" x2="52" y2="48" stroke="#18181B" strokeWidth="2.5" />
          {/* Car tilted suspended */}
          <rect x="50" y="46" width="28" height="12" rx="2" transform="rotate(18 64 52)" fill="#18181B" />
          {/* Tow truck base */}
          <rect x="18" y="64" width="34" height="10" fill="#18181B" />
          <circle cx="26" cy="74" r="3.5" fill="#18181B" />
        </svg>
      );

    // 61. Panou Adițional: Polei / Zăpadă (fulg)
    case 'add_ice_snow':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="8" y="14" width="84" height="72" rx="6" fill="#FFFFFF" stroke="#18181B" strokeWidth="3" />
          {/* Snowflake */}
          <line x1="50" y1="28" x2="50" y2="72" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="28" y1="50" x2="72" y2="50" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="34" y1="34" x2="66" y2="66" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="34" y1="66" x2="66" y2="34" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    // 62. Panou Adițional: Începutul zonei de acțiune (săgeată sus)
    case 'add_arrow_start':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="18" y="8" width="64" height="84" rx="6" fill="#FFFFFF" stroke="#18181B" strokeWidth="3" />
          <line x1="50" y1="74" x2="50" y2="32" stroke="#18181B" strokeWidth="7" strokeLinecap="round" />
          <polygon points="40,36 50,22 60,36" fill="#18181B" />
        </svg>
      );

    // 63. Panou Adițional: Confirmarea zonei de acțiune (săgeată dublă sus-jos)
    case 'add_arrow_confirm':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="18" y="8" width="64" height="84" rx="6" fill="#FFFFFF" stroke="#18181B" strokeWidth="3" />
          <line x1="50" y1="34" x2="50" y2="66" stroke="#18181B" strokeWidth="7" />
          <polygon points="40,36 50,22 60,36" fill="#18181B" />
          <polygon points="40,64 50,78 60,64" fill="#18181B" />
        </svg>
      );

    // 64. Panou Adițional: Sfârșitul zonei de acțiune (săgeată jos)
    case 'add_arrow_end':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" className={`shrink-0 ${className}`} aria-label={name}>
          <rect x="18" y="8" width="64" height="84" rx="6" fill="#FFFFFF" stroke="#18181B" strokeWidth="3" />
          <line x1="50" y1="26" x2="50" y2="68" stroke="#18181B" strokeWidth="7" strokeLinecap="round" />
          <polygon points="40,64 50,78 60,64" fill="#18181B" />
        </svg>
      );

    // Default Fallback
    default:
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 100 100"
          className={`shrink-0 ${className}`}
        >
          <circle cx="50" cy="50" r="44" fill="#2563EB" stroke="#FFFFFF" strokeWidth="3" />
          <text x="50" y="58" fill="#FFFFFF" fontSize="26" fontWeight="bold" textAnchor="middle">
            RO
          </text>
        </svg>
      );
  }
};
