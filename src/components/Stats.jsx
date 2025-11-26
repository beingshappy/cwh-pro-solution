// src/components/Stats.jsx
import {
  ShieldCheck,
  Headphones,
  Award,
  BarChart3,
} from "lucide-react";
import React from "react";

export default function Stats() {
  const stats = [
    {
      icon: ShieldCheck,
      number: "500+",
      label: "Satisfied Clients",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Headphones,
      number: "10,000+",
      label: "Support Hours",
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: BarChart3,
      number: "24/7",
      label: "Availability",
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Stats"
      style={{
        // Hero-like blue gradient background (same as your Hero)
        background: "linear-gradient(90deg, #001230 0%, #02408A 45%, #01224C 100%)",
      }}
    >
      {/* Vignette + subtle overlays (matches Hero) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 40% at 20% 40%, rgba(255,255,255,0.03), transparent 30%), linear-gradient(180deg, rgba(0,0,0,0.08), transparent 30%)",
          mixBlendMode: "overlay",
        }}
      />

      {/* decorative soft glows (keeps the luxury vibe) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/12 blur-3xl rounded-full" />
        <div className="absolute top-8 right-0 w-72 h-72 bg-[#0ea5d9]/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-500/6 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="
                group relative text-center p-8 rounded-2xl overflow-hidden
                bg-white/4 backdrop-blur-xl border border-white/8
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)]
              "
            >
              {/* subtle hover glow using the stat's gradient */}
              <div
                className={`
                  absolute inset-0 opacity-0 group-hover:opacity-90
                  rounded-2xl pointer-events-none transition-opacity duration-500
                  bg-gradient-to-br ${s.color} blur-xl mix-blend-screen
                `}
                aria-hidden="true"
              />

              {/* Icon capsule */}
              <div
                className={`
                  relative z-10 w-24 h-24 mx-auto rounded-2xl
                  flex items-center justify-center
                  bg-gradient-to-br ${s.color}
                  shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                  overflow-hidden
                `}
              >
                <s.icon
                  className="
                    w-12 h-12 text-white drop-shadow-xl
                    transition-all duration-300
                    group-hover:scale-90
                  "
                />

                {/* shine strip */}
                <span
                  className="
                    absolute -left-16 top-0 w-10 h-40 bg-white/20 rounded-full 
                    blur-md opacity-0
                    group-hover:opacity-70 group-hover:translate-x-40
                    transition-all duration-700 ease-out
                    pointer-events-none mix-blend-screen
                  "
                />
              </div>

              {/* Number */}
              <div className="mt-6 text-4xl md:text-5xl font-jakarta font-extrabold text-white tracking-tight relative z-10">
                {s.number}
              </div>

              {/* Label */}
              <div className="text-gray-200 mt-1 font-inter text-sm relative z-10">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
