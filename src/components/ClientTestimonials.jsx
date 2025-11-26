// src/components/ClientTestimonials.jsx
import React, { useEffect, useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp Industries",
    text: "NexPro transformed our IT infrastructure completely. Their proactive approach and 24/7 support have been invaluable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "IT Director, Global Finance Inc",
    text: "Outstanding service and expertise. Seamless cloud migration with zero downtime. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager, HealthCare Plus",
    text: "The team is incredibly responsive and knowledgeable. They deliver beyond expectations every time.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Ops Director, LogisticsPro",
    text: "Strong team, quick responses and perfect remote support. NexPro is our long-term partner.",
    rating: 5,
  },
];

export default function ClientTestimonials({ autoplayInterval = 4000 }) {
  const total = testimonialsData.length;
  const [index, setIndex] = useState(0);

  const autoplayRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [index]);

  function startAuto() {
    if (autoplayRef.current) return;
    autoplayRef.current = setInterval(() => {
      if (!pausedRef.current) next();
    }, autoplayInterval);
  }

  function stopAuto() {
    clearInterval(autoplayRef.current);
    autoplayRef.current = null;
  }

  function next() {
    setIndex((i) => (i + 1) % total);
  }
  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }

  return (
    <section
      className="py-20 relative"
      style={{
        background:
          "linear-gradient(90deg, #001230 0%, #02408A 45%, #01224C 100%)",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-3 drop-shadow-md">
            What our clients <span className="text-nexpro-orange">say</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trusted by businesses worldwide
          </p>
        </div>

        {/* Slider */}
        <div
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          className="relative"
        >
          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(calc(-${index} * (100% + 2rem)))`,
              }}
            >
              {testimonialsData.map((t, i) => {
                const isActive = i === index;
                return (
                  <div
                    key={i}
                    className={`
                      flex-shrink-0 w-full md:w-[60%] lg:w-[33.5%]
                      rounded-3xl p-8
                      backdrop-blur-md
                      bg-white/5 
                      border border-white/10
                      shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                      transition-all duration-500
                      ${
                        isActive
                          ? "scale-[1.02] border-nexpro-orange bg-white/10"
                          : "scale-[0.95] opacity-90"
                      }
                    `}
                  >
                    <Quote className="w-12 h-12 text-nexpro-orange opacity-70 mb-4" />

                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="w-5 h-5 text-yellow-400"
                          style={{
                            filter:
                              "drop-shadow(0 4px 10px rgba(255,200,0,0.4))",
                          }}
                        />
                      ))}
                    </div>

                    <p className="text-gray-200 leading-relaxed mb-6">
                      “{t.text}”
                    </p>

                    <div className="flex items-center">
                      {/* Avatar */}
                      <div className="w-14 h-14 bg-gradient-to-br from-nexpro-orange to-orange-600 rounded-full flex items-center justify-center font-bold text-white mr-4">
                        {t.name
                          .split(" ")
                          .map((l) => l[0])
                          .join("")
                          .toUpperCase()}
                      </div>

                      <div>
                        <div className="text-white font-jakarta font-bold text-lg">
                          {t.name}
                        </div>
                        <div className="text-gray-400 text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 rounded-full transition-all ${
                  index === i
                    ? "bg-nexpro-orange w-8"
                    : "bg-white/20 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
