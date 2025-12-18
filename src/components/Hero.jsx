import React from "react";

/* ================= LOGOS ================= */
const logos = [
  "/logos/reo-interior.png",
  "/logos/reo-news.png",
  "/logos/booknclean.png",
  "/logos/bnid-builders.png",
  "/logos/dayal-sadhana.png",
  "/logos/kairali.png",
  "/logos/scans.png",
];

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative text-white overflow-hidden min-h-[76vh]"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #001230 0%, #02408A 45%, #01224C 100%)",
        }}
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_40%,rgba(255,255,255,0.035),transparent_42%)] pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* LEFT */}
          <div>
            <h1 className="font-jakarta font-extrabold leading-[1.18] mb-6">
              <span
                className="
                  block text-[34px] md:text-[42px] lg:text-[48px] text-white
                "
                style={{
                  textShadow:
                    "0 3px 8px rgba(0,0,0,0.55), 0 0 10px rgba(255,255,255,0.08)",
                }}
              >
                Driving your
              </span>

              <span
                className="
                  block text-[34px] md:text-[42px] lg:text-[48px] text-nexpro-orange
                "
                style={{
                  textShadow:
                    "0 3px 10px rgba(0,0,0,0.6), 0 0 14px rgba(255,140,0,0.18)",
                }}
              >
                success with
              </span>

              <span
                className="
                  block text-[34px] md:text-[42px] lg:text-[48px] text-nexpro-orange
                "
                style={{
                  textShadow:
                    "0 3px 10px rgba(0,0,0,0.6), 0 0 14px rgba(255,140,0,0.18)",
                }}
              >
                reliable IT support.
              </span>
            </h1>

            <p
              className="text-[14px] md:text-[15px] text-gray-200 max-w-lg mb-6"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.55)",
              }}
            >
              Take charge of your business continuity with innovative IT Solution.
            </p>

            <div className="flex gap-3">
              <a
                href="#contact"
                className="
                  rounded-full border-2 border-nexpro-orange
                  px-5 py-2.5 text-[13.5px] font-medium text-nexpro-orange
                  hover:bg-orange-500/10 transition
                "
              >
                Schedule a free consultation
              </a>

              <a
                href="#services"
                className="
                  rounded-full border-2 border-white/30
                  px-5 py-2.5 text-[13.5px] font-medium text-white
                  hover:bg-white/10 transition
                "
              >
                Our Services
              </a>
            </div>
          </div>

          {/* RIGHT – IMAGE PLACEHOLDER */}
          <div className="flex items-center justify-center">
            <div className="w-[420px] h-[340px] md:w-[460px] md:h-[380px] bg-transparent" />
          </div>
        </div>
      </div>

      {/* LOGO MARQUEE */}
      <div className="relative z-20 pb-10">
        <style>{`
          @keyframes marquee-rtl {
            0% { transform: translateX(0); }
            100% { transform: translateX(50%); }
          }

          .logo-marquee {
            overflow: hidden;
            width: 100%;
            mask-image: linear-gradient(
              to right,
              transparent,
              black 8%,
              black 92%,
              transparent
            );
          }

          .logo-track {
            display: flex;
            gap: 52px;
            width: max-content;
            animation: marquee-rtl 36s linear infinite;
          }

          .logo-item img {
            height: 34px;
            opacity: 0.85;
            filter: grayscale(100%);
          }
        `}</style>

        {/* LOGO MARQUEE */}
<div className="relative z-20 pb-10">
  <style>{`
    @keyframes marquee-ltr {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0%); }
    }

    .logo-marquee {
      overflow: hidden;
      width: 100%;
      mask-image: linear-gradient(
        to right,
        transparent,
        black 8%,
        black 92%,
        transparent
      );
    }

    .logo-container {
  max-width: 1040px;   /* 👈 aur narrow */
  margin: 0 auto;
  padding: 0 20px;     /* 👈 thoda kam inner space */
}


    .logo-track {
      display: flex;
      width: max-content;
      gap: 52px;
      animation: marquee-ltr 32s linear infinite;
      will-change: transform;
    }

    .logo-item img {
      height: 34px;
      opacity: 0.85;
      filter: grayscale(100%);
      display: block;
    }

    @media (max-width: 768px) {
      .logo-container {
        max-width: 100%;
        padding: 0 16px;
      }
      .logo-track {
        gap: 40px;
        animation-duration: 26s;
      }
      .logo-item img {
        height: 30px;
      }
    }
  `}</style>

  <div className="logo-marquee">
    <div className="logo-container">
      <div className="logo-track">
        {[...logos, ...logos].map((logo, i) => (
          <div className="logo-item" key={i}>
            <img src={logo} alt="Client logo" />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
