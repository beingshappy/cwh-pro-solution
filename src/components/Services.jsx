// src/components/Services.jsx
import React from "react";

export default function Services() {
  const imageUrls = [
    "https://www.nexprosolution.com/build/images/c1.svg",
    "https://www.nexprosolution.com/build/images/c2.svg",
    "https://www.nexprosolution.com/build/images/c2.svg",
    "https://www.nexprosolution.com/build/images/c2.svg",
    "https://www.nexprosolution.com/build/images/c2.svg",
    "https://www.nexprosolution.com/build/images/c2.svg",
  ];

  const fallback = "/mnt/data/5929066f-6b49-46fa-8951-35e905e659c7.png";

  const services = [
    {
      title: "Cybersecurity Solutions",
      description:
        "Protect your business with advanced threat detection, firewall management, and comprehensive security audits.",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions with migration services, optimization, and 24/7 monitoring for maximum uptime.",
    },
    {
      title: "Data Management",
      description:
        "Secure backup solutions, disaster recovery planning, and efficient database administration services.",
    },
    {
      title: "Mobile Device Management",
      description:
        "Complete mobile security, device tracking, and seamless integration with your existing IT infrastructure.",
    },
    {
      title: "Network Solutions",
      description:
        "Design, implementation, and maintenance of robust network infrastructure for optimal performance.",
    },
    {
      title: "24/7 Technical Support",
      description:
        "Round-the-clock helpdesk support with rapid response times and expert troubleshooting.",
    },
  ];

  return (
    <section
      id="services"
      aria-label="Services"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #001230 0%, #02408A 45%, #01224C 100%)",
      }}
    >
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 40% at 20% 40%, rgba(255,255,255,0.03), transparent 30%), linear-gradient(180deg, rgba(0,0,0,0.08), transparent 30%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
            Because <span className="text-nexpro-orange">we provide</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-inter text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Comprehensive IT solutions designed to empower your business.
          </p>
        </div>

        <style>{`
          .svc-card {
            transition: 300ms ease;
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(18px);
            border: 1px solid rgba(255,255,255,0.12);
            box-shadow: inset 0 0 20px rgba(255,255,255,0.03),
                        0 10px 25px rgba(0,0,0,0.35);
          }
          .svc-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,122,255,0.45);
            border-color: rgba(0,170,255,0.5);
          }

          .svc-image {
            transition: transform 300ms ease;
          }
          .svc-card:hover .svc-image {
            transform: scale(0.92);
          }

          /* Premium Learn More Button */
          .svc-btn {
            padding: 10px 18px;
            border-radius: 50px;
            border: 2px solid #ff7a00;
            transition: 300ms ease;
            box-shadow: 0 0 10px rgba(255,140,0,0.3);
          }
          .svc-btn:hover {
            background: #ff7a00;
            color: white !important;
            box-shadow: 0 0 18px rgba(255,150,0,0.6);
            border-color: #ff9a2b;
          }

          .svc-title {
            text-shadow: 0 3px 6px rgba(0,0,0,0.7);
          }

          .svc-desc {
            text-shadow: 0 2px 4px rgba(0,0,0,0.6);
          }
        `}</style>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, index) => {
            const imgSrc =
              imageUrls[index] && imageUrls[index].trim() !== ""
                ? imageUrls[index]
                : fallback;

            return (
              <article
                key={index}
                className="svc-card relative group rounded-2xl p-10"
              >
                {/* IMAGE */}
                <div className="w-full flex items-center justify-center mb-8">
                  <img
                    src={imgSrc}
                    alt={s.title}
                    className="svc-image w-32 h-32 object-contain bg-transparent"
                    draggable="false"
                  />
                </div>

                {/* TITLE */}
                <h3 className="svc-title text-2xl font-jakarta font-extrabold text-white mb-3">
                  {s.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="svc-desc text-gray-300 font-inter leading-relaxed mb-8">
                  {s.description}
                </p>

                {/* BUTTON */}
                <a
                  href="#contact"
                  className="svc-btn inline-flex items-center text-nexpro-orange font-semibold"
                >
                  Learn More
                  <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
