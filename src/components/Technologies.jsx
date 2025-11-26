import {
  Server,
  Box,
  HardDrive,
  Cpu,
  Lock,
  Wifi,
  Github,
  Cloud as CloudIcon,
  Smartphone,
  AppWindow,
  Apple,
  Database,
  Flame,
  Cloud,
} from "lucide-react";

export default function Technologies() {
  // ⭐ UPPER ROW TECHNOLOGIES (scroll-left)
  const technologiesTop = [
    { icon: Smartphone, name: "Flutter" },
    { icon: AppWindow, name: "React Native" },
    { icon: Apple, name: "iOS" },
    { icon: Cpu, name: "Linux" },
    { icon: Cloud, name: "Google Cloud" },
    { icon: Github, name: "GitHub" },
    { icon: Lock, name: "Security" },
    { icon: Box, name: "Docker" },
  ];

  // ⭐ LOWER ROW TECHNOLOGIES (scroll-right)
  const technologiesBottom = [
    { icon: Server, name: "AWS" },
    { icon: CloudIcon, name: "Azure" },
    { icon: HardDrive, name: "VMware" },
    { icon: Wifi, name: "Kubernetes" },
    { icon: Database, name: "PostgreSQL" },
    { icon: Flame, name: "Firebase" },
    { icon: Cpu, name: "GoLang" },
    { icon: Github, name: "Git" },
  ];

  const doubledTop = [...technologiesTop, ...technologiesTop];
  const doubledBottom = [...technologiesBottom, ...technologiesBottom];

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(90deg, #001230 0%, #02408A 45%, #01224C 100%)",
      }}
    >
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-white mb-4">
          <span className="text-nexpro-orange">Technologies</span> we employ and utilize
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto font-inter">
          Working with industry-leading platforms and tools
        </p>
      </div>

      <style>{`
        .scroll-line {
          display: flex;
          width: max-content;
          animation: scroll-left 22s linear infinite;
        }
        .scroll-line-right {
          display: flex;
          width: max-content;
          animation: scroll-right 24s linear infinite;
        }
        .scroll-container:hover .scroll-line,
        .scroll-container:hover .scroll-line-right {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="scroll-container space-y-10">
        {/* ⭐ LINE 1 — scroll left */}
        <div className="overflow-hidden">
          <div className="scroll-line gap-6">
            {doubledTop.map((tech, index) => (
              <div
                key={`top-${index}`}
                className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-nexpro-orange transition-all duration-300 
                rounded-xl px-6 py-5 flex flex-col items-center justify-center min-w-[130px] cursor-pointer"
              >
                <tech.icon className="w-10 h-10 text-nexpro-orange mb-2" />
                <span className="text-white text-sm font-inter drop-shadow-lg">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ⭐ LINE 2 — scroll right */}
        <div className="overflow-hidden">
          <div className="scroll-line-right gap-6">
            {doubledBottom.map((tech, index) => (
              <div
                key={`bottom-${index}`}
                className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-nexpro-orange transition-all duration-300 
                rounded-xl px-6 py-5 flex flex-col items-center justify-center min-w-[130px] cursor-pointer"
              >
                <tech.icon className="w-10 h-10 text-nexpro-orange mb-2" />
                <span className="text-white text-sm font-inter drop-shadow-lg">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
