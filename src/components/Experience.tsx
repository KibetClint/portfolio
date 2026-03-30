import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Terminal,
  GitCommit,
  GitBranch,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

const workExperience = [
  {
    period: "Jan 2025 – Present",
    title: "Front-End Developer",
    company: "Dream Right Africa",
    bullets: [
      "Architecting scalable full-stack web applications using React, Node.js, and Tailwind CSS",
      "Enhanced user engagement by 30% through performance optimizations",
      "Leading front-end architecture decisions and code reviews",
    ],
    isCurrent: true,
    branch: "main",
  },
  {
    period: "Jan 2024 – Jan 2025",
    title: "Front-End Developer",
    company: "Brickspring Enterprises Ltd",
    bullets: [
      "Developed and maintained company web tools and e-commerce platform",
      "Achieved 40% reduction in load times through code refactoring",
      "Established Git workflows reducing post-release bugs by 30%",
    ],
    isCurrent: false,
    branch: "feat/ecommerce",
  },
  {
    period: "Jan 2024 – Jan 2025",
    title: "IT Support & Training",
    company: "Kenya Prisons",
    bullets: [
      "Provided technical support for 20+ users and configured workstations",
      "Delivered digital literacy workshops increasing competency by 50%",
      "Maintained security compliance across all systems",
    ],
    isCurrent: false,
    branch: "feat/it-support",
  },
];

const education = [
  {
    period: "2023 – 2024",
    title: "Full-Stack Web Development",
    institution: "Ubunifu College",
    hash: "a3f9c12",
  },
  {
    period: "2014 – 2019",
    title: "Bachelor of Arts in Sociology",
    institution: "Moi University",
    hash: "d7e2b84",
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      className="relative section-padding bg-[#050a0e] overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#050a0e]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-1/2 right-[-8%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,100,0.008) 2px, rgba(0,255,100,0.008) 4px)",
        }}
      />

      <div
        ref={ref}
        className={`container max-w-6xl relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
        {/* ── Section header ── */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-emerald-400/60 text-sm">
              ~/experience
            </span>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 font-mono">
          <span className="text-white/80">experience</span>
          <span
            style={{
              background:
                "linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #00ff88 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 3s linear infinite",
            }}>
            .log
          </span>
          <span className="text-emerald-400 animate-pulse">_</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* ── Work Experience — git log style ── */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <GitBranch className="w-3.5 h-3.5 text-emerald-400/60" />
              <h3 className="text-[10px] font-mono font-semibold uppercase tracking-widest text-emerald-400/60">
                work_experience
              </h3>
            </div>

            {/* git log wrapper */}
            <div className="rounded-lg border border-emerald-500/15 bg-black/40 overflow-hidden">
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-emerald-500/10 bg-white/[0.02]">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                <span className="ml-2 font-mono text-[10px] text-white/20">
                  git log --oneline
                </span>
              </div>

              <div className="p-5 space-y-0">
                {workExperience.map((exp, i) => (
                  <div
                    key={i}
                    className={`relative transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 150 + 200}ms` }}>
                    {/* Git graph line */}
                    <div className="flex gap-4">
                      {/* Left — git graph column */}
                      <div className="flex flex-col items-center">
                        {/* Commit dot */}
                        <div
                          className={`relative z-10 mt-1 flex-shrink-0 w-3 h-3 rounded-full border-2 ${
                            exp.isCurrent
                              ? "bg-emerald-400 border-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                              : "bg-transparent border-emerald-500/40"
                          }`}
                        />
                        {/* Vertical line */}
                        {i < workExperience.length - 1 && (
                          <div className="w-[1px] flex-1 min-h-[16px] bg-emerald-500/20 mt-1" />
                        )}
                      </div>

                      {/* Right — commit content */}
                      <div
                        className={`pb-8 flex-1 ${i === workExperience.length - 1 ? "pb-2" : ""}`}>
                        {/* Commit meta */}
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <GitCommit className="w-3 h-3 text-emerald-400/40 shrink-0" />
                          <span className="font-mono text-[10px] text-white/25">
                            {exp.period}
                          </span>
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-emerald-500/15 text-emerald-400/40">
                            {exp.branch}
                          </span>
                          {exp.isCurrent && (
                            <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400/80">
                              ● HEAD
                            </span>
                          )}
                        </div>

                        <h4 className="text-base font-bold text-white/80 font-mono mb-0.5 hover:text-white transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-xs font-mono text-emerald-400/60 mb-3">
                          {exp.company}
                        </p>

                        <ul className="space-y-1.5">
                          {exp.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="text-xs text-white/35 font-mono flex gap-2 leading-relaxed">
                              <ChevronRight className="w-3 h-3 text-emerald-400/40 mt-0.5 shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Education ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400/60" />
              <h3 className="text-[10px] font-mono font-semibold uppercase tracking-widest text-cyan-400/60">
                education
              </h3>
            </div>

            <div className="rounded-lg border border-emerald-500/15 bg-black/40 overflow-hidden">
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-emerald-500/10 bg-white/[0.02]">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                <span className="ml-2 font-mono text-[10px] text-white/20">
                  education.json
                </span>
              </div>

              <div className="p-5 space-y-0">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 150 + 500}ms` }}>
                    {/* Graph column */}
                    <div className="flex flex-col items-center">
                      <div className="relative z-10 mt-1 flex-shrink-0 w-3 h-3 rounded-full border-2 bg-transparent border-cyan-500/40" />
                      {i < education.length - 1 && (
                        <div className="w-[1px] flex-1 min-h-[16px] bg-cyan-500/15 mt-1" />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`pb-6 flex-1 group ${i === education.length - 1 ? "pb-2" : ""}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] text-white/25">
                          {edu.period}
                        </span>
                        <span className="font-mono text-[10px] text-cyan-400/30">
                          {edu.hash}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white/70 font-mono mb-0.5 group-hover:text-white/90 transition-colors">
                        {edu.title}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400/50">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stat cards */}
            <div className="mt-4 space-y-3">
              {[
                { label: "total_commits", value: "500+" },
                { label: "pull_requests", value: "80+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-emerald-500/15 bg-black/30 px-4 py-3 flex items-center justify-between group hover:border-emerald-500/30 transition-colors">
                  <span className="font-mono text-[10px] text-white/25 group-hover:text-white/40 transition-colors">
                    {s.label}
                  </span>
                  <span
                    className="font-mono font-bold text-sm"
                    style={{
                      background: "linear-gradient(135deg, #00ff88, #00d4ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
