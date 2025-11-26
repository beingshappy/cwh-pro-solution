// src/components/Hero.jsx
import React from "react";

/**
 * Updated Hero.jsx
 * - Overflow hidden to remove horizontal scrollbar
 * - Icons placed above label, larger, stable on hover (no 'inner push')
 * - Each pill has its own accent color on hover
 * - Smooth, slow marquee (duplicated sequence for seamless loop)
 *
 * Notes:
 * - To change speed: adjust `animation-duration` on .marquee-track (higher = slower)
 * - To change individual hover color: change the `color` field in categoriesWithIcons
 */

/* Categories with small inline icons + accent color */
const categoriesWithIcons = [
  { label: "Hospital", icon: HospitalIcon, color: "#e11d48" },      // red
  { label: "Insurance", icon: ShieldIcon, color: "#0ea5a4" },      // teal
  { label: "Loan", icon: LoanIcon, color: "#f97316" },             // orange
  { label: "RealState", icon: HomeIcon, color: "#6366f1" },        // indigo
  { label: "Education", icon: EducationIcon, color: "#06b6d4" },   // cyan
  { label: "ManPower", icon: UsersIcon, color: "#f43f5e" },        // pink-red
  { label: "FMCG", icon: ShoppingBagIcon, color: "#f59e0b" },      // amber
  { label: "Automobile", icon: CarIcon, color: "#10b981" },        // green
  { label: "Photography", icon: CameraIcon, color: "#8b5cf6" },    // purple
  { label: "Machinary", icon: GearIcon, color: "#475569" },       // slate
  { label: "Political", icon: MegaphoneIcon, color: "#ef4444" },   // red-600
  { label: "NGO", icon: HandsIcon, color: "#06b6a4" },            // teal-ish
  { label: "News", icon: NewspaperIcon, color: "#0ea5d9" },       // sky
  { label: "Cleaning", icon: BroomIcon, color: "#7c3aed" },       // violet
  { label: "Construction", icon: HelmetIcon, color: "#f97316" },  // orange
  { label: "Manufacturing", icon: FactoryIcon, color: "#334155" },// slate-700
  { label: "Wellness", icon: HeartIcon, color: "#ef9a9a" },       // light red/pink
  { label: "Matrimony", icon: RingIcon, color: "#ffb703" },       // warm yellow
  { label: "Astrology", icon: StarIcon, color: "#60a5fa" },       // sky-400
  { label: "Entertainment", icon: ClapperIcon, color: "#fb7185" },// rose
];

export default function Hero() {
  return (
    <section
      className="relative text-white overflow-visible pt-48 md:pt-56"
      aria-label="Hero"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #001230 0%, #02408A 45%, #01224C 100%)",
        }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_20%_40%,rgba(255,255,255,0.03),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.08),transparent_30%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-6 items-center">
          {/* LEFT: Text */}
          <div className="min-w-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-jakarta font-extrabold leading-tight mb-4">
              <span className="block text-white/95">Driving your</span>
              <span className="block text-nexpro-orange">success with</span>
              <span className="block text-nexpro-orange">reliable IT support.</span>
            </h1>

            <p className="text-gray-200 text-base md:text-lg max-w-2xl mb-6">
              Take charge of your business continuity with innovative IT Solution.
              From infrastructure management to cloud services, we help you scale
              securely.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 border-2 border-nexpro-orange text-nexpro-orange hover:bg-orange-500/10"
              >
                Schedule a free consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 border-2 border-white/25 text-white hover:bg-white/10"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* RIGHT: Model */}
          <div className="relative flex items-center justify-center pr-4 md:pr-8">
            <div className="absolute -right-8 -top-6 w-40 h-40 bg-nexpro-orange opacity-10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#0ea5d9] opacity-8 blur-3xl rounded-full pointer-events-none" />

            <div className="w-[420px] max-w-full flex items-center justify-center z-20">
              <model-viewer
                id="hero-model"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "58vh",
                  minHeight: "260px",
                  display: "block",
                  background: "transparent",
                }}
                src="/models/low_poly_man_working_at_a_table_with_a_laptop.glb"
                poster="/mnt/data/da33e421-359b-4271-b5dd-ebcc48ced254.png"
                alt="3D developer model"
                auto-rotate
                camera-controls
                disable-zoom
                interaction-prompt="none"
                camera-orbit="0deg 60deg 4m"
                field-of-view="34deg"
                exposure="1.08"
                shadow-intensity="1"
                interpolation-decay="80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Iconified Marquee (fixed: no horizontal scroll) ===== */}
      <div className="relative z-20 py-8">
        <style>{`
          :root { --pill-border: rgba(255,255,255,0.06); --pill-glow: 0 12px 34px rgba(2,64,138,0.10); }

          /* Respect reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none !important; transform: translate3d(0,0,0) !important; }
          }

          /* GPU-friendly smooth animation (slow) */
          @keyframes marquee-x {
            0% { transform: translate3d(0,0,0); }
            100% { transform: translate3d(-50%,0,0); }
          }

          /* IMPORTANT: overflow hidden prevents horizontal scroll */
          .marquee-wrap {
            width: 100%;
            overflow: hidden; /* -> removes horizontal scrollbar */
            -webkit-mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
            mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
            padding-bottom: 6px; /* extra room so lifted pills don't cause vertical overflow */
          }

          /* The track is 200% width conceptually because we put the sequence twice */
          .marquee-track {
            display: flex;
            gap: 1.5rem;
            align-items: center;
            width: max-content;
            animation: marquee-x 44s linear infinite;
            will-change: transform;
            transform: translate3d(0,0,0);
          }

          /* slower on larger screens for buttery feel */
          @media (min-width: 1280px) { .marquee-track { animation-duration: 56s; } }
          @media (min-width: 1920px) { .marquee-track { animation-duration: 68s; } }
          @media (max-width: 768px) { .marquee-track { animation-duration: 36s; gap: 1rem; } }

          /* each pill is a vertical stack (icon above text) */
          .marquee-item {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.45rem;
            padding: 0.95rem 1.25rem;
            min-height: 92px;           /* ensure lift won't overlap layout */
            border-radius: 14px;
            background: rgba(255,255,255,0.03);
            border: 1px solid var(--pill-border);
            box-shadow: var(--pill-glow);
            font-weight: 800;
            font-size: 0.95rem;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.98);
            white-space: nowrap;
            transition: transform 300ms cubic-bezier(.2,.9,.2,1), box-shadow 240ms ease, background 240ms ease;
            cursor: pointer;
            flex: 0 0 auto;
            overflow: visible;
            backface-visibility: hidden;
          }

          /* Larger stable icons on top: fixed size so scaling won't push layout */
          .marquee-item svg {
            width: 42px;
            height: 42px;
            flex: 0 0 42px;
            display: block;
            transition: transform 240ms cubic-bezier(.2,.9,.2,1);
            transform-origin: center center;
            transform: translateZ(0);
          }

          .marquee-item span { font-size: 0.82rem; line-height: 1; text-align: center; }

          /* On hover/focus -> lift pill, but icon scales independently (no layout shift) */
          .marquee-item:hover,
.marquee-item:focus {
  transform: scale(0.92);     /* smaller */
  box-shadow: 0 10px 24px rgba(0,0,0,0.25);
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
}

.marquee-item:hover svg,
.marquee-item:focus svg {
  transform: scale(0.85);     /* icon shrink */
}


          /* Prevent icon 'pushing' inner content: icon scaling uses transform only (doesn't affect layout) */

          /* Pause animation while user interacts */
          .marquee-wrap:hover .marquee-track,
          .marquee-wrap:focus-within .marquee-track {
            animation-play-state: paused;
          }

          /* Responsive tweaks */
          @media (max-width: 768px) {
            .marquee-item { padding: 0.6rem 0.9rem; min-height: 72px; }
            .marquee-item svg { width: 30px; height: 30px; flex: 0 0 30px; }
            .marquee-item span { font-size: 0.74rem; }
          }

          /* --- color vars for each pill (set via inline style attribute --accent) --- */
          .marquee-item[data-accent] {
            /* fallback subtle */
            background: rgba(255,255,255,0.03);
          }
          .marquee-item[data-accent]:hover {
            /* on hover we use the accent color to form a soft gradient */
            background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          }
          /* We'll set a tinted glow using box-shadow via CSS variable --accent */
          .marquee-item[data-accent]:hover {
            box-shadow: 0 22px 46px var(--accent-glow, rgba(2,64,138,0.18));
            border-color: rgba(255,255,255,0.09);
          }
        `}</style>

        <div className="marquee-wrap" aria-hidden="false">
          {/* Create a long track by rendering the sequence twice (seamless loop) */}
          <div className="marquee-track" role="list" aria-label="business sectors marquee">
            {categoriesWithIcons.map((cat, i) => {
              const Icon = cat.icon;
              const accent = cat.color;
              /* set CSS variable for glow using inline style and data-accent attr */
              return (
                <button
                  key={`a-${i}`}
                  className="marquee-item"
                  role="listitem"
                  tabIndex={0}
                  aria-label={cat.label}
                  data-accent={accent}
                  style={{
                    // subtle per-item accent var for use on hover (box-shadow tint)
                    ["--accent-glow"]: `${hexToRgba(accent, 0.18)}`,
                  }}
                >
                  <Icon />
                  <span>{cat.label}</span>
                </button>
              );
            })}

            {/* duplicate; aria-hidden so screen readers don't repeat unnecessarily */}
            {categoriesWithIcons.map((cat, i) => {
              const Icon = cat.icon;
              const accent = cat.color;
              return (
                <div
                  key={`b-${i}`}
                  className="marquee-item"
                  role="presentation"
                  aria-hidden="true"
                  data-accent={accent}
                  style={{ ["--accent-glow"]: `${hexToRgba(accent, 0.18)}` }}
                >
                  <Icon />
                  <span>{cat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------
   helper: convert hex to rgba string
   (inline small util so we can set box-shadow tint)
   --------------------------- */
function hexToRgba(hex, alpha = 1) {
  // simple hex -> rgba conversion, supports #rgb, #rrggbb
  if (!hex) return `rgba(2,64,138,${alpha})`;
  const h = hex.replace("#", "");
  const bigint =
    h.length === 3
      ? parseInt(h.split("").map((c) => c + c).join(""), 16)
      : parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ---------------------------
   Inline SVG Icon components (unchanged shapes)
   --------------------------- */

function HospitalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 11h8M6 3h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 4h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 3v5c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V6l7-3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function LoanIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 10a4 4 0 11-8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 10.5L12 4l9 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 22V12h14v10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8v11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 20c1-4 6-6 10-6s9 2 10 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShoppingBagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 7V5a3 3 0 013-3h6a3 3 0 013 3v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 7h18l-1 13H4L3 7z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12l1-4h16l1 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 16v2M19 16v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 12v-2h10v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="12" cy="13.5" r="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 7l1.5-2h5L16 7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M19.4 15a1 1 0 00.2 1.2l.9.9-1.4 1.4-.9-.9a1 1 0 00-1.2-.2 7 7 0 01-2.4 1.4l-.3 1.2h-2l-.3-1.2a7 7 0 01-2.4-1.4 1 1 0 00-1.2.2l-.9.9L4.5 17l.9-.9a1 1 0 00.2-1.2 7 7 0 01-1.4-2.4L3 11.7v-2l1.2-.3A7 7 0 016.6 6.6 1 1 0 006.4 5.4L5.5 4 7 2.5l.9.9A1 1 0 009 3.6 7 7 0 0111.4 5a7 7 0 012.4-1.4L14 3h2l.3 1.2A7 7 0 0118.7 5.4a1 1 0 00.2 1.2l.9.9L20.5 7l-.9.9a1 1 0 00-.2 1.2 7 7 0 011.4 2.4L21 12.3v2l-1.2.3a7 7 0 01-1.4 2.4z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 11v2a2 2 0 002 2h2l6 3V6L7 9H5a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 10l4-2v8l-4-2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HandsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 12s4-3 10-3 10 3 10 3-3 6-10 6S2 12 2 12z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function NewspaperIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.1" />
      <path d="M7 8h8M7 12h8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M21 7v10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function BroomIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 21l9-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4l6 6-3 3-6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HelmetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3a9 9 0 00-9 9v1h18v-1a9 9 0 00-9-9z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 13h18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 21h18V9l-5 3-4-3-4 3-5-3v12z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s-7-4.35-9-7.18C-1 9.82 6.5 4.5 12 9c5.5-4.5 13 0.82 9 4.82C19 16.65 12 21 12 21z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.1" />
      <path d="M9 9l3-4 3 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l2.6 5.6L20 10l-4 3.6L17.2 20 12 16.8 6.8 20 8 13.6 4 10l5.4-2.4L12 2z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClapperIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 16h20v4H2z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M2 8l8-5 6 5 6-5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
