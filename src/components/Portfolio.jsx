import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

// Premium Portfolio — same as before but adds a responsive slider when there
// are more than 3 projects. Slider is lightweight, dependency-free and
// preserves the existing card/tilt/modal behavior.

export default function Portfolio() {
  const projects = [
    {
      id: "cloud-mig",
      title: "Enterprise Cloud Migration",
      category: "Cloud Infrastructure",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600",
      summary:
        "Full-lifecycle migration from legacy datacenters to a secure, cost-optimized multi-account cloud architecture with zero planned downtime.",
      details:
        "We executed a phased migration across environments, implemented IaC, automated CI/CD pipelines, and lowered monthly infra costs by 33% while improving fault isolation and compliance.",
    },
    {
      id: "health-sec",
      title: "Healthcare IT Security",
      category: "Cybersecurity",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1600",
      summary:
        "Zero-trust rollout and continuous SOC operations for a regional healthcare provider handling PHI.",
      details:
        "Delivered network segmentation, identity rework with MFA, SIEM onboarding, and tabletop exercises — reduced incident response time by 70%.",
    },
    {
      id: "smart-office",
      title: "Smart Office Solution",
      category: "IoT Integration",
      image:
        "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1600",
      summary:
        "End-to-end IoT platform for smart building automation, real-time monitoring and predictive maintenance.",
      details:
        "Integrated sensors, edge compute, and a cloud analytics pipeline to reduce energy costs by 18% and increase occupant comfort scores.",
    },
    
    // add more cards here if you want
  ];

  const [hoverState, setHoverState] = useState({});
  const [modal, setModal] = useState({ open: false, project: null });

  // modal keyboard close
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setModal({ open: false, project: null });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // tilt / mousemove handler setup
  function handleMove(e, id, ref) {
    if (!ref?.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    // tilt calculation
    const rotateY = (px - 0.5) * 10; // -5 .. 5 deg
    const rotateX = (0.5 - py) * 8; // -4 .. 4 deg
    const imgTranslateX = (px - 0.5) * -12; // parallax image shift
    const imgTranslateY = (py - 0.5) * -10;
    setHoverState((s) => ({ ...s, [id]: { rotateX, rotateY, imgTranslateX, imgTranslateY } }));
  }

  function handleLeave(id) {
    setHoverState((s) => ({ ...s, [id]: undefined }));
  }

  // card ref storage
  const refs = useRef({});
  projects.forEach((p) => {
    if (!refs.current[p.id]) refs.current[p.id] = React.createRef();
  });

  // --- Slider specific state & refs ---
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    function updateButtons() {
      const el = sliderRef.current;
      if (!el) return;
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft + el.clientWidth + 10 < el.scrollWidth);
    }

    updateButtons();
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [projects.length]);

  function scrollByCard(direction = "right") {
    const el = sliderRef.current;
    if (!el) return;
    // scroll by the visible card width (approx)
    const card = el.querySelector(".portfolio-card");
    const step = (card?.clientWidth || 320) + 24; // gap compensation
    el.scrollBy({ left: direction === "right" ? step : -step, behavior: "smooth" });
  }

  // decide when to use grid vs slider
  const useSlider = projects.length > 3;

  return (
    <section
      id="portfolio"
      className="relative py-20"
      style={{
        background: "linear-gradient(90deg, #001230 0%, #02408A 45%, #01224C 100%)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-3">
            Featured <span className="text-nexpro-orange">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Selected case studies — design, infrastructure, security and automation.
          </p>
        </div>

        {/* Slider controls (only when using slider) */}
        {useSlider && (
          <div className="relative">
            <button
              aria-hidden={!canScrollLeft}
              onClick={() => scrollByCard("left")}
              className={`absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transform hover:scale-105 transition ${
                !canScrollLeft ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <button
              aria-hidden={!canScrollRight}
              onClick={() => scrollByCard("right")}
              className={`absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transform hover:scale-105 transition ${
                !canScrollRight ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div
              ref={sliderRef}
              className="overflow-x-auto no-scrollbar py-2 -mx-2 px-2"
              role="list"
              tabIndex={0}
              // enable keyboard arrow scrolling
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") scrollByCard("right");
                if (e.key === "ArrowLeft") scrollByCard("left");
              }}
            >
              <div className="flex gap-6 w-max">
                {projects.map((p) => {
                  const state = hoverState[p.id] || {};
                  const rotateX = state.rotateX ?? 0;
                  const rotateY = state.rotateY ?? 0;
                  const imgTX = state.imgTranslateX ?? 0;
                  const imgTY = state.imgTranslateY ?? 0;

                  return (
                    <div
                      key={p.id}
                      ref={refs.current[p.id]}
                      onMouseMove={(e) => handleMove(e, p.id, refs.current[p.id])}
                      onMouseLeave={() => handleLeave(p.id)}
                      className="portfolio-card relative rounded-2xl w-full sm:w-1/2 lg:w-1/3"
                      role="listitem"
                      aria-label={p.title}
                    >
                      {/* animated gradient border */}
                      <div
                        className="rounded-2xl p-[2px] bg-gradient-to-r from-[#0ea5d9]/30 via-[#ff7b00]/40 to-[#8b5cf6]/20 transition-all duration-500"
                        style={{ boxShadow: "0 10px 30px rgba(2,6,23,0.6)" }}
                      >
                        {/* inner glass card */}
                        <div
                          className="relative rounded-[14px] overflow-hidden bg-white/4 backdrop-blur-lg border border-white/6"
                          style={{
                            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                            transition: "transform 220ms ease-out",
                          }}
                        >
                          {/* image area with parallax */}
                          <div className="relative h-60 md:h-64 lg:h-72 overflow-hidden">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="w-full h-full object-cover transform"
                              style={{
                                transform: `translate3d(${imgTX}px, ${imgTY}px, 0) scale(1.08)`,
                                transition: "transform 300ms ease-out",
                              }}
                              loading="lazy"
                              draggable="false"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#021025]/70 to-transparent" />
                            <div className="absolute left-4 top-4 px-3 py-1 rounded-full text-sm font-medium bg-white/6 border border-white/8 text-nexpro-orange font-jakarta">
                              {p.category}
                            </div>
                          </div>

                          <div className="p-6">
                            <h3 className="text-xl md:text-2xl font-jakarta font-extrabold text-white mb-2 drop-shadow-[0_6px_18px_rgba(2,64,138,0.14)]">
                              {p.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{p.summary}</p>

                            <div className="flex items-center justify-between gap-4">
                              <button
                                onClick={() => setModal({ open: true, project: p })}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-nexpro-orange text-black font-medium shadow hover:shadow-md transition transform hover:-translate-y-1"
                              >
                                View Case Study <ExternalLink className="w-4 h-4" />
                              </button>

                              <div className="text-sm text-gray-400">Duration • 6 months</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-1 rounded-2xl blur-3xl opacity-0 transition-opacity duration-300"
                        style={{
                          background:
                            "radial-gradient(600px 200px at 10% 20%, rgba(255,123,0,0.08), transparent 12%), radial-gradient(400px 200px at 90% 80%, rgba(14,165,217,0.05), transparent 12%)",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Grid fallback when not using slider */}
        {!useSlider && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p) => {
              const state = hoverState[p.id] || {};
              const rotateX = state.rotateX ?? 0;
              const rotateY = state.rotateY ?? 0;
              const imgTX = state.imgTranslateX ?? 0;
              const imgTY = state.imgTranslateY ?? 0;

              return (
                <div
                  key={p.id}
                  ref={refs.current[p.id]}
                  onMouseMove={(e) => handleMove(e, p.id, refs.current[p.id])}
                  onMouseLeave={() => handleLeave(p.id)}
                  className="relative rounded-2xl"
                >
                  {/* animated gradient border */}
                  <div className="rounded-2xl p-[2px] bg-gradient-to-r from-[#0ea5d9]/30 via-[#ff7b00]/40 to-[#8b5cf6]/20 transition-all duration-500" style={{ boxShadow: "0 10px 30px rgba(2,6,23,0.6)" }}>
                    {/* inner glass card */}
                    <div className="relative rounded-[14px] overflow-hidden bg-white/4 backdrop-blur-lg border border-white/6" style={{ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, transition: "transform 220ms ease-out" }}>
                      <div className="relative h-60 md:h-64 lg:h-72 overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover transform" style={{ transform: `translate3d(${imgTX}px, ${imgTY}px, 0) scale(1.08)`, transition: "transform 300ms ease-out" }} loading="lazy" draggable="false" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#021025]/70 to-transparent" />
                        <div className="absolute left-4 top-4 px-3 py-1 rounded-full text-sm font-medium bg-white/6 border border-white/8 text-nexpro-orange font-jakarta">{p.category}</div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl md:text-2xl font-jakarta font-extrabold text-white mb-2 drop-shadow-[0_6px_18px_rgba(2,64,138,0.14)]">{p.title}</h3>
                        <p className="text-gray-300 mb-4">{p.summary}</p>

                        <div className="flex items-center justify-between gap-4">
                          <button onClick={() => setModal({ open: true, project: p })} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-nexpro-orange text-black font-medium shadow hover:shadow-md transition transform hover:-translate-y-1">View Case Study <ExternalLink className="w-4 h-4" /></button>

                          <div className="text-sm text-gray-400">Duration • 6 months</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div aria-hidden className="pointer-events-none absolute -inset-1 rounded-2xl blur-3xl opacity-0 transition-opacity duration-300" style={{ background: "radial-gradient(600px 200px at 10% 20%, rgba(255,123,0,0.08), transparent 12%), radial-gradient(400px 200px at 90% 80%, rgba(14,165,217,0.05), transparent 12%)" }} />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal */}
      {modal.open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={() => setModal({ open: false, project: null })} />

          <div className="relative z-10 max-w-4xl w-full rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row bg-white/6 border border-white/8 backdrop-blur-xl">
              <div className="md:w-1/2">
                <img src={modal.project.image} alt={modal.project.title} className="w-full h-80 md:h-full object-cover" />
              </div>

              <div className="md:w-1/2 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-jakarta font-extrabold text-white mb-2">{modal.project.title}</h3>
                    <div className="text-nexpro-orange text-sm font-medium mb-4">{modal.project.category}</div>
                  </div>

                  <button onClick={() => setModal({ open: false, project: null })} aria-label="Close case study" className="ml-auto inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/6 hover:bg-white/10 transition"><X className="w-5 h-5 text-white" /></button>
                </div>

                <p className="text-gray-300 mb-6">{modal.project.details}</p>

                <div className="mt-6 flex gap-3 flex-wrap">
                  <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nexpro-orange text-black font-jakarta font-semibold">Talk to our team</a>
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 text-white">Download brief</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
