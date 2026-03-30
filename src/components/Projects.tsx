import { ExternalLink, Terminal, GitBranch, Circle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping platform with admin dashboard",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://brickspring.co.ke/",
    image: "https://brickspring.co.ke/images/Pallet%20scale.png",
    slug: "brickspring",
    status: "live",
  },
  {
    title: "Farm Project",
    description: "My farm project website with real-time updates",
    tags: ["React", "Javascript", "Tailwind CSS"],
    link: "https://kibetfarms.vercel.app/",
    image: "https://kibetfarms.vercel.app/images/beans.jpeg",
    slug: "kibet-farms",
    status: "live",
  },
  {
    title: "Msafiri-Tribe",
    description:
      "A travel and tours website with booking system and admin panel",
    tags: ["React", "Tailwind", "Framer Motion", "Firebase"],
    link: "https://msafiritribe.vercel.app/",
    image: "https://msafiritribe.vercel.app/images/D1.webp",
    slug: "msafiri-tribe",
    status: "live",
  },
];

const projectStats = [
  { value: "3+", label: "repos_shipped" },
  { value: "100%", label: "client_satisfaction" },
  { value: "24/7", label: "uptime_support" },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      className="relative section-padding bg-[#050a0e] overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#050a0e]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-1/4 left-[-8%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
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
              ~/projects
            </span>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </div>

        <p className="font-mono text-emerald-400/50 text-xs text-center mb-2 uppercase tracking-widest">
          // portfolio_showcase
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 font-mono">
          <span className="text-white/80">featured</span>
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
            .projects
          </span>
        </h2>
        <p className="font-mono text-white/30 text-center mb-14 max-w-2xl mx-auto text-sm">
          <span className="text-emerald-400/50">{"//"}</span> From full-stack
          applications to modern web experiences
        </p>

        {/* ── Project cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative rounded-lg border border-emerald-500/15 bg-black/40 overflow-hidden
                hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(0,200,106,0.08)]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}>
              {/* Corner bracket accent */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-emerald-500/30 z-10" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-emerald-500/30 z-10" />

              {/* Fake terminal bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-emerald-500/10 bg-white/[0.02]">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                <span className="ml-2 font-mono text-[10px] text-white/20 flex items-center gap-1.5">
                  <GitBranch className="w-2.5 h-2.5" />
                  {p.slug}
                </span>
                <span className="ml-auto flex items-center gap-1 font-mono text-[10px] text-emerald-400/50">
                  <Circle className="w-1.5 h-1.5 fill-emerald-400 text-emerald-400" />
                  {p.status}
                </span>
              </div>

              {/* Image */}
              <div className="aspect-video overflow-hidden bg-black/60 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                {/* Scanline on image */}
                <div
                  className="absolute inset-0 z-20 pointer-events-none opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-white/80 font-mono mb-1.5 group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-white/35 font-mono mb-4 leading-relaxed">
                  <span className="text-emerald-400/50">{"//"}</span>{" "}
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono rounded border border-emerald-500/15 bg-emerald-500/5 text-emerald-400/60 hover:border-emerald-500/35 hover:text-emerald-400/90 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400/60
                    hover:text-emerald-400 transition-colors group/link">
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:rotate-12 transition-transform" />
                  ./open_project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Stats ── */}
        <div className="rounded-lg border border-emerald-500/15 bg-black/30 overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-emerald-500/10 bg-white/[0.02]">
            <Terminal className="w-3 h-3 text-emerald-400/50" />
            <span className="font-mono text-[10px] text-white/20">
              project_stats.json
            </span>
          </div>
          <div className="grid grid-cols-3 divide-x divide-emerald-500/10 px-4">
            {projectStats.map((s, i) => (
              <div
                key={s.label}
                className="text-center py-6 group"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div
                  className="text-2xl md:text-3xl font-bold font-mono group-hover:scale-105 transition-transform inline-block"
                  style={{
                    background: "linear-gradient(135deg, #00ff88, #00d4ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  {s.value}
                </div>
                <div className="text-[10px] font-mono text-white/25 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
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

export default Projects;
