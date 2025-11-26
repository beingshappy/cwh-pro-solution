// src/components/Process.jsx
import React from "react";
import { Search, Lightbulb, Code, Rocket } from "lucide-react";

/**
 * Process.jsx — updated:
 * - fixes badge overlap (badge floats cleanly above card)
 * - cards kept same size (min-height + flex)
 * - title & description shadows added
 * - "Learn more" got a new premium gradient-outline -> filled hover style with chevron animation
 */

export default function Process() {
  const steps = [
    {
      Icon: Search,
      title: "Discovery",
      description:
        "We analyze your current infrastructure and identify areas for ",
      number: "01",
      accent: "#3b82f6",
    },
    {
      Icon: Lightbulb,
      title: "Strategy",
      description: "Custom IT roadmap tailored to your business goals and budget",
      number: "02",
      accent: "#fb923c",
    },
    {
      Icon: Code,
      title: "Implementation",
      description: "Expert deployment with minimal disruption to your operations",
      number: "03",
      accent: "#8b5cf6",
    },
    {
      Icon: Rocket,
      title: "Support",
      description: "Ongoing maintenance and 24/7 support to ensure peak performance",
      number: "04",
      accent: "#10b981",
    },
  ];

  return (
    <section
      id="process"
      aria-label="Our approach"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #001230 0%, #02408A 45%, #01224C 100%)",
      }}
    >
      {/* vignette + glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 40% at 20% 40%, rgba(255,255,255,0.03), transparent 30%), linear-gradient(180deg, rgba(0,0,0,0.08), transparent 30%)",
          mixBlendMode: "overlay",
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -left-28 w-80 h-80 bg-blue-700/10 blur-3xl rounded-full" />
        <div className="absolute top-6 right-0 w-80 h-80 bg-[#0ea5d9]/8 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-4">
            <span className="text-nexpro-orange">Approach</span> to work
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-inter">
            Our proven methodology ensures successful IT transformation — designed for resilience and scale.
          </p>
        </div>

        <style>{`
          /* Ensure equal card sizes, consistent layout */
          .proc-grid { display: grid; grid-template-columns: repeat(1, minmax(0,1fr)); gap: 2rem; }
          @media (min-width: 768px) { .proc-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
          @media (min-width: 1024px) { .proc-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } }

          .proc-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 360px; /* keeps all cards same height */
            padding: 2rem;
            border-radius: 1rem;
            background: rgba(255,255,255,0.04);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.06);
            transition: transform 360ms cubic-bezier(.2,.9,.2,1), box-shadow 360ms ease, border-color 260ms ease;
            position: relative;
            overflow: visible; /* allow badge to float */
          }
          .proc-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 80px rgba(2,6,23,0.6);
            border-color: rgba(255,160,64,0.12);
          }

          /* Number badge: float above card, no border overlap */
          .proc-badge {
            position: absolute;
            top: -18px;
            right: -18px;
            z-index: 40;
            width: 56px;
            height: 56px;
            border-radius: 9999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 800;
            font-family: 'Jakarta', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
            box-shadow: 0 10px 30px rgba(0,0,0,0.45);
            border: 1px solid rgba(255,255,255,0.06);
          }

          /* Icon capsule */
          .proc-icon {
            width: 88px;
            height: 88px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.25rem;
            box-shadow: 0 14px 40px rgba(0,0,0,0.45);
            border: 1px solid rgba(255,255,255,0.04);
            transition: transform 300ms ease, filter 300ms ease;
          }

          /* Icon shrink (shut) effect on hover */
          .proc-card:hover .proc-icon { transform: scale(0.95); filter: saturate(1.05); }

          /* Text shadows for titles & descriptions (subtle & premium) */
          .proc-title {
            text-shadow: 0 8px 24px rgba(0,0,0,0.45);
            color: #ffffff;
          }
          .proc-desc {
            text-shadow: 0 6px 18px rgba(2,64,138,0.08);
            color: rgba(226,234,255,0.9);
          }

          /* New Learn More style: gradient-outline pill -> filled on hover */
          .proc-cta {
            --accent-from: rgba(255,140,0,0.95);
            --accent-to: rgba(255,90,0,0.95);
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            padding: 0.55rem 1rem;
            border-radius: 9999px;
            font-weight: 700;
            color: #ffb374;
            background: transparent;
            border: 1px solid rgba(255,160,64,0.18);
            transition: all 260ms ease;
            position: relative;
            overflow: hidden;
          }
          .proc-cta::before {
            content: "";
            position: absolute;
            inset: 0;
            padding: 1px;
            border-radius: inherit;
            background: linear-gradient(90deg, var(--accent-from), var(--accent-to));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            opacity: 0.9;
          }

          .proc-cta .chev {
            display: inline-block;
            transform: translateX(0);
            transition: transform 260ms ease;
          }
          .proc-cta:hover {
            color: #081028;
            background: linear-gradient(90deg, var(--accent-from), var(--accent-to));
            box-shadow: 0 12px 40px rgba(255,140,0,0.12);
            border-color: transparent;
          }
          .proc-cta:hover .chev { transform: translateX(6px); color: rgba(2,6,23,0.95); }

          /* Make sure badge doesn't cut on small screens */
          @media (max-width: 640px) {
            .proc-badge { top: -14px; right: -12px; width: 48px; height: 48px; }
            .proc-card { min-height: 0; }
          }
        `}</style>

        <div className="proc-grid relative">
          {steps.map((step, i) => {
            const { Icon, title, description, number, accent } = step;
            return (
              <div key={i} className="relative">
                <article
                  className="proc-card"
                  aria-labelledby={`proc-${i}`}
                >
                  {/* Number badge: placed above card, z-index ensures no border overlay */}
                  <div
                    className="proc-badge"
                    style={{
                      background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
                      boxShadow: `0 12px 32px ${hexToRgba(accent, 0.18)}`,
                    }}
                    aria-hidden="true"
                  >
                    <span style={{ fontSize: 14 }}>{number}</span>
                  </div>

                  <div>
                    {/* Icon capsule */}
                    <div
                      className="proc-icon"
                      style={{
                        background: `linear-gradient(180deg, ${accent}ee, ${accent}bb)`,
                        border: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 id={`proc-${i}`} className="proc-title text-xl md:text-2xl font-jakarta font-extrabold mb-3">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="proc-desc font-inter leading-relaxed mb-6">
                      {description}
                    </p>
                  </div>

                  {/* Footer CTA aligned bottom - keeps cards consistent height */}
                  <div className="mt-4">
                    <a href="#contact" className="proc-cta" aria-label={`Learn more about ${title}`}>
                      <span>Learn more</span>
                      <svg className="chev w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>

                {/* connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-1/2 right-[-1.5rem] hidden lg:block"
                    aria-hidden="true"
                    style={{
                      width: "3rem",
                      height: "2px",
                      transform: "translateY(-50%)",
                      background: "linear-gradient(90deg, rgba(255,122,0,0.9), rgba(255,122,0,0))",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* helper to convert hex color to rgba string */
function hexToRgba(hex, alpha = 0.18) {
  if (!hex) return `rgba(2,64,138,${alpha})`;
  const h = hex.replace("#", "");
  const bigint = h.length === 3 ? parseInt(h.split("").map(c => c + c).join(""), 16) : parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}
