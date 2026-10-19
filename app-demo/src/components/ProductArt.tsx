import type { ProductShape } from '../data/products';

// Simple flat illustrations so the demo has no external image dependencies.
const WOOD = '#f4f1ea';
const EDGE = '#cfc8b8';
const DARK = '#3b3330';
const BIRCH = '#d9b77e';

export function ProductArt({ shape, size = 96 }: { shape: ProductShape; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-hidden="true">
      <ellipse cx="50" cy="93" rx="34" ry="3" fill="#00000014" />
      {shape === 'bookcase' && (
        <g stroke={EDGE} strokeWidth="1.5">
          <rect x="28" y="6" width="44" height="86" fill={WOOD} />
          {[24, 42, 60, 76].map((y) => (
            <rect key={y} x="31" y={y} width="38" height="2.5" fill={EDGE} stroke="none" />
          ))}
          <rect x="34" y="12" width="5" height="12" fill="#5b8fbf" stroke="none" />
          <rect x="40" y="14" width="4" height="10" fill="#e3a33b" stroke="none" />
          <rect x="45" y="11" width="6" height="13" fill="#b75c4a" stroke="none" />
          <rect x="52" y="31" width="9" height="11" fill="#7aa36b" stroke="none" />
          <rect x="35" y="50" width="12" height="10" fill="#d9cfbf" stroke="none" />
        </g>
      )}
      {shape === 'chest' && (
        <g stroke={EDGE} strokeWidth="1.5">
          <rect x="18" y="20" width="64" height="72" fill={WOOD} />
          {[0, 1, 2].map((row) =>
            [0, 1].map((col) => (
              <g key={`${row}-${col}`}>
                <rect x={21 + col * 30.5} y={23 + row * 22.5} width="27.5" height="20" fill="#fbfaf6" />
                <rect x={30 + col * 30.5} y={31 + row * 22.5} width="9" height="1.8" fill={EDGE} stroke="none" />
              </g>
            )),
          )}
        </g>
      )}
      {shape === 'shelf' && (
        <g stroke={EDGE} strokeWidth="1.5">
          <rect x="22" y="8" width="56" height="84" fill={WOOD} />
          {[0, 1, 2, 3].map((row) =>
            [0, 1].map((col) => (
              <rect key={`${row}-${col}`} x={25 + col * 26} y={11 + row * 20} width="24" height="18" fill="#ebe6dc" />
            )),
          )}
          <rect x="28" y="16" width="18" height="12" fill="#7aa36b" stroke="none" />
          <rect x="54" y="56" width="18" height="12" fill="#5b8fbf" stroke="none" />
        </g>
      )}
      {shape === 'wardrobe' && (
        <g stroke={EDGE} strokeWidth="1.5">
          <rect x="22" y="6" width="56" height="86" fill={WOOD} />
          <line x1="50" y1="6" x2="50" y2="92" />
          <rect x="45" y="44" width="2" height="10" fill={EDGE} stroke="none" />
          <rect x="53" y="44" width="2" height="10" fill={EDGE} stroke="none" />
        </g>
      )}
      {shape === 'table' && (
        <g>
          <rect x="20" y="44" width="60" height="8" fill={DARK} />
          <rect x="22" y="52" width="7" height="40" fill={DARK} />
          <rect x="71" y="52" width="7" height="40" fill={DARK} />
          <rect x="34" y="40" width="16" height="4" fill="#7aa36b" />
        </g>
      )}
      {shape === 'armchair' && (
        <g>
          <path d="M30 12 C 42 10, 52 30, 54 60 L 62 60 C 60 30, 52 8, 34 6 Z" fill="#e8dcc4" />
          <path d="M28 14 C 36 26, 40 46, 40 64 L 74 64 C 76 70, 72 74, 66 74 L 34 74 C 30 54, 26 34, 22 18 Z" fill="#e8dcc4" />
          <path d="M22 18 C 30 40, 34 60, 34 76 C 30 84, 24 88, 20 92" stroke={BIRCH} strokeWidth="4" fill="none" />
          <path d="M34 76 L 80 76 C 82 82, 80 88, 74 92" stroke={BIRCH} strokeWidth="4" fill="none" />
          <path d="M44 66 L 74 66" stroke={BIRCH} strokeWidth="3" />
        </g>
      )}
    </svg>
  );
}
