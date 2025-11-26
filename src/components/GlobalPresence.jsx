// src/components/GlobalPresence.jsx
import React, { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

/**
 * Premium GlobalPresence component
 * - Map background (image) with dark overlay
 * - Animated numeric counters
 * - Absolutely-positioned pins with pulse + tooltip
 * - Accessible and responsive
 *
 * Replace mapSrc if you want a different world map image.
 */

export default function GlobalPresence() {
  // final counts (strings kept for display)
  const regions = [
    { id: "na", label: "North America", count: 150, left: "18%", top: "36%" },
    { id: "eu", label: "Europe", count: 200, left: "44%", top: "27%" },
    { id: "apac", label: "Asia Pacific", count: 100, left: "70%", top: "40%" },
    { id: "me", label: "Middle East", count: 50, left: "58%", top: "44%" },
  ];

  // counter state
  const [counts, setCounts] = useState(regions.map(() => 0));
  const animRef = useRef(null);

  // simple counter animation (ease-out)
  useEffect(() => {
    const duration = 1200; // ms
    const start = performance.now();

    function step(ts) {
      const t = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic-like
      setCounts(
        regions.map((r, i) => Math.round(r.count * eased))
      );
      if (t < 1) animRef.current = requestAnimationFrame(step);
    }

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // background map (you can replace with an internal asset)
  const mapSrc =
    "https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1600";

  return (
    <section className="relative overflow-hidden py-20" aria-label="Global presence">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #001230 0%, #02408A 45%, #01224C 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-4">
            Our <span className="text-nexpro-orange">Global Presence</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-inter">
            Supporting clients across 25+ countries worldwide
          </p>
        </div>

        <div className="relative rounded-3xl border border-white/8 overflow-hidden shadow-lg">
          {/* map background with subtle overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={mapSrc}
              alt=""
              className="w-full h-full object-cover opacity-30 filter blur-sm"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20" />
          </div>

          {/* glass panel */}
          <div className="relative z-10 p-8 md:p-12 bg-white/4 backdrop-blur-xl border-t border-transparent">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* LEFT: counters (stacked) */}
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-6">
                  {regions.map((r, i) => (
                    <div key={r.id} className="text-center md:text-left">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-nexpro-orange to-orange-600 text-white text-lg font-bold shadow-[0_14px_40px_rgba(0,0,0,0.45)] mx-auto md:mx-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="mt-4 text-2xl md:text-3xl font-jakarta font-extrabold text-white drop-shadow-[0_6px_18px_rgba(2,64,138,0.18)]">
                        {counts[i]}+
                      </div>
                      <div className="text-gray-300 mt-1 font-inter">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CENTER: map area with pins */}
              <div className="order-1 md:order-2">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                  {/* translucent map for visual in center */}
                  <img
                    src={mapSrc}
                    alt="World map"
                    className="w-full h-full object-cover filter brightness-75"
                  />

                  {/* pins */}
                  {regions.map((r, i) => (
                    <button
                      key={r.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                      style={{ left: r.left, top: r.top }}
                      aria-label={`${r.label}: ${regions[i].count} clients`}
                      title={`${r.label}: ${regions[i].count}+`}
                    >
                      {/* pulsing halo */}
                      <span
                        className="absolute inline-block rounded-full"
                        aria-hidden="true"
                        style={{
                          width: 38,
                          height: 38,
                          transform: "translate(-50%, -50%)",
                          left: "50%",
                          top: "50%",
                        }}
                      >
                        <span className="absolute inset-0 rounded-full bg-nexpro-orange/30 animate-ping" />
                      </span>

                      {/* pin circle */}
                      <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/95 shadow-lg">
                        <MapPin className="w-5 h-5 text-nexpro-orange" />
                      </span>

                      {/* tooltip on hover/focus */}
                      <span className="pointer-events-none absolute left-1/2 top-[110%] -translate-x-1/2 mt-2 whitespace-nowrap rounded-md bg-black/75 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                        {r.label} — {r.count}+
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT: descriptive text */}
              <div className="order-3">
                <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
                  <p className="text-gray-300 text-lg font-inter mb-6">
                    With offices in major cities and remote support capabilities, we're always close to you.
                    Our local teams provide tailored expertise across infrastructure, security, cloud, and application services.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-nexpro-orange text-black font-jakarta font-semibold shadow-[0_12px_40px_rgba(255,140,0,0.12)] hover:translate-y-[-2px] transition-transform"
                    >
                      Contact local office
                    </a>

                    <a
                      href="#locations"
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 text-white font-inter hover:bg-white/5 transition"
                    >
                      View all locations
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* small footer note */}
            <div className="mt-8 text-center text-sm text-gray-400">
              We support clients in over <span className="text-white font-semibold">25 countries</span> and counting.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
