// src/components/Industries.jsx
import React from "react";
import {
  Building2,
  GraduationCap,
  Heart,
  Factory,
  ShoppingBag,
  Landmark,
} from "lucide-react";

export default function Industries() {
  const accentImage = "/mnt/data/5929066f-6b49-46fa-8951-35e905e659c7.png";

  const industries = [
    { icon: Building2, title: "Corporate Enterprises", description: "Enterprise-level IT infrastructure and premium support for large organizations." },
    { icon: GraduationCap, title: "Education", description: "Digital learning platforms, LMS integrations and campus-wide IT management." },
    { icon: Heart, title: "Healthcare", description: "HIPAA-compliant IT systems, telehealth enablement and secure medical records." },
    { icon: Factory, title: "Manufacturing", description: "Industrial automation, IoT integration, and predictive maintenance platforms." },
    { icon: ShoppingBag, title: "Retail", description: "POS systems, omnichannel e-commerce platforms and customer analytics." },
    { icon: Landmark, title: "Financial Services", description: "Secure banking solutions, compliance tooling and resilient payment systems." },
  ];

  return (
    <section
      id="industries"
      aria-label="Industries"
      className="relative overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(140deg, rgba(1,20,49,0.94) 0%, rgba(2,60,128,0.96) 40%, rgba(1,34,70,0.96) 100%)",
      }}
    >
      {/* GLOBAL THEME + SHADOW CSS */}
      <style>{`
        :root {
          --nexpro-orange: #ff7a00;
          --nexpro-orange-2: #ff9a3d;
          --border-glow-orange: rgba(255,122,40,0.40);
          --border-glow-blue: rgba(0,122,255,0.35);

          --shadow-heavy: 0 12px 32px rgba(0,0,0,0.55);
          --shadow-medium: 0 8px 20px rgba(0,0,0,0.45);
          --shadow-soft: 0 4px 12px rgba(0,0,0,0.35);
          --shadow-text: 0 3px 8px rgba(0,0,0,0.6);
        }

        /* Outer wrapper glow */
        .nex-wrapper {
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(140deg, var(--border-glow-orange), var(--border-glow-blue));
          box-shadow: 0 0 30px var(--border-glow-orange), 0 0 40px var(--border-glow-blue);
          transition: 260ms ease;
        }
        .nex-wrapper:hover {
          transform: translateY(-6px) scale(1.015);
          box-shadow: 0 0 40px rgba(255,150,70,0.55), 0 0 60px rgba(0,160,255,0.45);
        }

        /* INNER CARD */
        .nex-card {
          border-radius: calc(1rem - 2px);
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(14px) saturate(150%);
          box-shadow: inset 0 2px 6px rgba(255,255,255,0.25),
                      inset 0 -4px 10px rgba(0,0,0,0.25),
                      var(--shadow-medium);
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
        }

        /* ICON SHADOW */
        .nex-icon svg {
          stroke: var(--nexpro-orange);
          filter: drop-shadow(0 2px 6px rgba(255,120,40,0.55));
        }

        /* TITLE SHADOW */
        .nex-title {
          text-shadow: var(--shadow-text);
        }

        /* BODY TEXT SHADOW */
        .nex-desc {
          text-shadow: 0 2px 6px rgba(0,0,0,0.45);
        }

        /* EXPLORE BUTTON SHADOW */
        .nex-explore,
        .more-industries-btn {
          background: linear-gradient(90deg, var(--nexpro-orange), var(--nexpro-orange-2));
          border: 1px solid rgba(255,255,255,0.14);
          padding: 10px 20px;
          color: white;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          box-shadow: 0 10px 24px rgba(255,122,40,0.35), inset 0 -3px 10px rgba(0,0,0,0.25);
          transition: 220ms ease;
          position: relative;
          overflow: hidden;
          text-shadow: 0 3px 6px rgba(0,0,0,0.4);
        }
        .nex-explore:hover,
        .more-industries-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 16px 34px rgba(255,130,40,0.45), inset 0 -4px 12px rgba(0,0,0,0.3);
        }

        /* SHINE ANIMATION */
        .shine {
          position: absolute;
          top: -80%;
          left: -40%;
          width: 160%;
          height: 260%;
          transform: rotate(-25deg) translateX(-100%);
          background: linear-gradient(115deg, rgba(255,255,255,0.55), rgba(255,255,255,0.1) 40%, transparent 55%);
          opacity: 0.35;
          animation: shineAnim 2.3s ease-in-out infinite;
        }
        @keyframes shineAnim {
          0% { transform: rotate(-25deg) translateX(-100%); }
          40% { transform: rotate(-25deg) translateX(35%); }
          100% { transform: rotate(-25deg) translateX(130%); }
        }
      `}</style>

      {/* Background Watermark */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${accentImage})`,
          backgroundSize: "40rem",
          backgroundPosition: "right 12% top 18%",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-jakarta font-extrabold text-white nex-title">
            <span style={{ color: "var(--nexpro-orange)" }}>Industries</span> We Serve
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg nex-desc mt-3">
            Trusted by leading organizations across multiple sectors.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;

            return (
              <div key={idx} className="nex-wrapper group">
                <article className="nex-card">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center nex-icon">
                      <Icon className="w-8 h-8" strokeWidth={1.6} />
                    </div>

                    <div>
                      <h3 className="text-xl font-jakarta font-bold text-white nex-title">
                        {ind.title}
                      </h3>

                      <p className="text-gray-200 text-sm mt-2 font-inter nex-desc">
                        {ind.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-200 nex-desc">
                        Enterprise
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-200 nex-desc">
                        Secure
                      </span>
                    </div>

                    <a href="#contact" className="nex-explore">
                      Explore
                      <span className="shine" />
                    </a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* ⭐ More Industries Button */}
        <div className="flex justify-center mt-14">
          <a href="#more-industries" className="more-industries-btn">
            More Industries
            <span className="shine" />
          </a>
        </div>
      </div>
    </section>
  );
}
