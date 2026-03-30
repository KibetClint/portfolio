import {
  Code2,
  Zap,
  Lightbulb,
  GraduationCap,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const traits = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable, scalable code",
    color: "emerald",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    desc: "Quick to adapt to new technologies",
    color: "cyan",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "Love tackling complex challenges",
    color: "emerald",
  },
];

const software = [
  "VS Code",
  "Git",
  "Docker",
  "Postman",
  "Figma",
  "Linux",
  "Firebase",
  "Vercel",
];

const languages = ["English", "Swahili"];

const focusAreas = [
  "Full-Stack Development",
  "Cybersecurity",
  "Cloud Architecture",
];

const techStack = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "Flask",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Git",
  "REST APIs",
  "Linux",
];

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="relative section-padding bg-[#050a0e] overflow-hidden">
      {/* ── Background effects ── */}
      <div className="absolute inset-0 bg-[#050a0e]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-1/3 right-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      {/* Scanlines */}
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
              ~/about
            </span>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 font-mono">
          <span className="text-white/80">about</span>
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
            .me
          </span>
          <span className="text-emerald-400 animate-pulse">_</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* ── Left — Bio ── */}
          <div className="md:col-span-3 space-y-6">
            {/* Terminal bio block */}
            <div className="rounded-lg border border-emerald-500/15 bg-black/40 backdrop-blur overflow-hidden">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-emerald-500/10 bg-white/[0.02]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <span className="ml-2 font-mono text-xs text-white/20">
                  bio.md
                </span>
              </div>
              <div className="p-5 space-y-4 font-mono text-sm">
                <p className="text-white/50 leading-relaxed">
                  <span className="text-emerald-400/70">{">"}</span>{" "}
                  Results-oriented Software Developer with a strong foundation
                  in Sociology and Full-Stack Development. Experienced in
                  architecting scalable web applications utilizing{" "}
                  <span className="text-cyan-400">React</span>,{" "}
                  <span className="text-cyan-400">Node.js</span>, and{" "}
                  <span className="text-cyan-400">Python (Flask)</span>.
                </p>
                <p className="text-white/40 leading-relaxed">
                  <span className="text-emerald-400/70">{">"}</span> Proven
                  ability to optimize application performance and lead
                  cross-functional teams. Passionate about{" "}
                  <span className="text-emerald-400/80">cybersecurity</span> and
                  committed to building secure, efficient systems.
                </p>
              </div>
            </div>

            {/* Trait cards */}
            <div className="grid grid-cols-3 gap-3">
              {traits.map((t, i) => (
                <div
                  key={t.title}
                  className={`relative rounded-lg border border-emerald-500/15 bg-black/30 p-4 text-center
                    hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-500 hover:-translate-y-1 group
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 100 + 400}ms` }}>
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-emerald-500/20 rounded-tr-lg" />
                  <t.icon className="w-5 h-5 text-emerald-400/70 group-hover:text-emerald-400 mx-auto mb-2 transition-colors" />
                  <h4 className="text-xs font-semibold text-white/70 font-mono group-hover:text-white/90 transition-colors">
                    {t.title}
                  </h4>
                  <p className="text-[10px] text-white/30 mt-1 font-mono">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Tags & Education ── */}
          <div className="md:col-span-2 space-y-4">
            {/* Software */}
            <div className="rounded-lg border border-emerald-500/15 bg-black/30 p-4">
              <div className="flex items-center gap-2 mb-3">
                <ChevronRight className="w-3 h-3 text-emerald-400/60" />
                <h4 className="text-[10px] font-mono font-semibold uppercase tracking-widest text-emerald-400/60">
                  software
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {software.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-[11px] font-mono rounded border border-white/8 bg-white/[0.03] text-white/50 hover:border-emerald-500/30 hover:text-emerald-400/80 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="rounded-lg border border-emerald-500/15 bg-black/30 p-4">
              <div className="flex items-center gap-2 mb-3">
                <ChevronRight className="w-3 h-3 text-emerald-400/60" />
                <h4 className="text-[10px] font-mono font-semibold uppercase tracking-widest text-emerald-400/60">
                  languages
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="px-2.5 py-1 text-[11px] font-mono rounded border border-white/8 bg-white/[0.03] text-white/50 hover:border-emerald-500/30 hover:text-emerald-400/80 transition-colors">
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div className="rounded-lg border border-emerald-500/15 bg-black/30 p-4">
              <div className="flex items-center gap-2 mb-3">
                <ChevronRight className="w-3 h-3 text-cyan-400/60" />
                <h4 className="text-[10px] font-mono font-semibold uppercase tracking-widest text-cyan-400/60">
                  focus_areas
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 text-[11px] font-mono rounded border border-cyan-500/20 bg-cyan-500/5 text-cyan-400/70 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="rounded-lg border border-emerald-500/15 bg-black/30 p-4">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400/60" />
                <h4 className="text-[10px] font-mono font-semibold uppercase tracking-widest text-emerald-400/60">
                  education
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  {
                    degree: "Full-Stack Web Development",
                    school: "Ubunifu College",
                    year: "2023 – 2024",
                  },
                  {
                    degree: "Bachelor of Arts in Sociology",
                    school: "Moi University",
                    year: "2014 – 2019",
                  },
                ].map((edu) => (
                  <div
                    key={edu.degree}
                    className="rounded border border-white/5 bg-white/[0.02] p-3 hover:border-emerald-500/20 transition-colors group">
                    <div className="font-mono font-semibold text-white/70 text-xs group-hover:text-white/90 transition-colors">
                      {edu.degree}
                    </div>
                    <div className="font-mono text-[10px] text-white/30 mt-1">
                      <span className="text-emerald-400/50">{edu.school}</span>
                      {" · "}
                      {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Tech Stack Marquee ── */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-emerald-500/20" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400/40">
              tech_stack[]
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-emerald-500/20" />
          </div>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050a0e] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050a0e] to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="mx-2 px-4 py-2 rounded border border-emerald-500/15 bg-black/40 text-xs font-mono text-white/40 inline-block hover:border-emerald-500/40 hover:text-emerald-400/80 transition-colors">
                  {tech}
                </span>
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

export default About;
