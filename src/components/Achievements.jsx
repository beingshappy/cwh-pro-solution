// src/components/Achievements.jsx
import React from "react";
import { Trophy, Target, Zap, ThumbsUp, Globe, Users } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "ISO Certified",
      description:
        "ISO 27001 & ISO 9001 certified for quality and security management",
    },
    {
      icon: Target,
      title: "Industry Leader",
      description:
        "Recognized as a top IT service provider for 5 consecutive years",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description:
        "Average response time of under 15 minutes for critical issues",
    },
    {
      icon: ThumbsUp,
      title: "Client Satisfaction",
      description:
        "98% client satisfaction rate with long-term partnerships",
    },
    {
      icon: Users,
      title: "50+ Team Members",
      description:
        "Our strength lies in the expertise of our diverse team of 50+ specialists.",
    },
    {
      icon: Globe,
      title: "20+ Countries Reached",
      description:
        "We've made a global impact with our solutions, reaching over 20 countries.",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(140deg, rgba(1,20,49,0.94) 0%, rgba(2,60,128,0.95) 45%, rgba(1,34,70,0.95) 100%)",
      }}
    >
      <style>{`
        :root {
          --nex-orange: #ff7a00;
          --nex-orange2: #ff9a3d;
          --blue-dark: #021226;
          --blue-mid: #043a80;
          --blue-light: #0d5ed8;
        }

        .ach-wrap {
          padding: 0; /* removed 2px border padding */
          border-radius: 1.1rem;
          background: transparent; /* no border background */
          box-shadow: 0 10px 35px rgba(2,24,48,0.45); /* subtle soft shadow for depth */
          transition: 260ms ease;
        }
        .ach-wrap:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 55px rgba(2,30,60,0.55);
        }

        .ach-card {
          position: relative;
          padding: 2rem 1.5rem;
          border-radius: calc(1.1rem);
          backdrop-filter: blur(14px) saturate(150%);
          border: none; /* removed visible border */

          background:
            radial-gradient(circle at 30% 20%, rgba(255,140,40,0.12), transparent 50%),
            radial-gradient(circle at 80% 90%, rgba(0,140,255,0.18), transparent 55%),
            linear-gradient(145deg, var(--blue-dark), var(--blue-mid), var(--blue-light));

          overflow: hidden;
          box-shadow:
            inset 0 -4px 10px rgba(0,0,0,0.3),
            0 10px 25px rgba(0,0,0,0.55);
        }

        .ach-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg width='600' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='600' height='600' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
          opacity: 0.04;
        }

        .ach-icon svg {
          stroke: var(--nex-orange);
          filter: drop-shadow(0 3px 9px rgba(255,150,40,0.75));
        }

        .ach-title {
          text-shadow: 0 3px 8px rgba(0,0,0,0.6);
        }
        .ach-desc {
          text-shadow: 0 2px 6px rgba(0,0,0,0.45);
        }

        .shine {
          position: absolute;
          top: -80%;
          left: -50%;
          width: 200%;
          height: 260%;
          background: linear-gradient(
            115deg,
            rgba(255,255,255,0.45),
            rgba(255,255,255,0.1) 45%,
            transparent 60%
          );
          transform: rotate(-25deg) translateX(-100%);
          opacity: 0.3;
          animation: shineAnim 2.5s infinite ease-in-out;
        }
        @keyframes shineAnim {
          0% { transform: rotate(-25deg) translateX(-120%); opacity: 0.1; }
          45% { transform: rotate(-25deg) translateX(30%); opacity: 0.5; }
          100%{ transform: rotate(-25deg) translateX(130%); opacity: 0.15; }
        }

        @media (min-width: 768px) {
          .ach-card { padding: 2.25rem 1.75rem; }
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-white ach-title">
            Our <span style={{ color: "var(--nex-orange)" }}>Achievements</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto ach-desc mt-3">
            Recognized excellence in IT service delivery
          </p>
        </div>

        {/* GRID -> changed to 3 per row on large screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="ach-wrap group">
                <div className="ach-card">
                  <div className="ach-icon w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10" strokeWidth={1.7} />
                  </div>

                  <h3 className="text-xl font-jakarta font-bold text-white mb-2 ach-title">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm font-inter ach-desc">
                    {item.description}
                  </p>

                  <span className="shine" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
