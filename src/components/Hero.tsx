import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowDown,
  Briefcase,
  FolderOpen,
  Users,
  Award,
  Terminal,
} from "lucide-react";
import profilePhoto from "@/assets/profile.jpeg";
import { useEffect, useRef } from "react";

const socialLinks = [
  { icon: Mail, href: "mailto:clintonkibet98@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/KibetClint", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/clintkibet_", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/clintonkibet",
    label: "LinkedIn",
  },
];

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Experience" },
  { icon: FolderOpen, value: "5+", label: "Projects Delivered" },
  { icon: Users, value: "10+", label: "Happy Clients" },
  { icon: Award, value: "Full-Stack", label: "Certified" },
];

// Floating code snippets in the background
const codeSnippets = [
  "const app = express()",
  "git commit -m 'feat'",
  "npm run build",
  "SELECT * FROM users",
  "docker-compose up",
  "useState(null)",
  "async/await",
  "O(log n)",
  "{ ...spread }",
  "=> {}",
  "import React",
  "yarn dev",
  "git push origin",
  "useEffect([])",
  "res.json(data)",
  "prisma.user.findMany()",
  "tailwind.config.js",
  "type Props = {}",
];

const MatrixCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars =
      "01アイウエオカキクケコサシスセソタチツテト∑∆∇∫≈≠∞→←↑↓{}[]<>/\\|;:=+*#$%@!?";
    const fontSize = 13;
    const cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        // Vary color: most are dim green, occasional bright
        const bright = Math.random() > 0.93;
        ctx.fillStyle = bright
          ? "#00ff88"
          : `rgba(0,${Math.floor(Math.random() * 60 + 120)},${Math.floor(Math.random() * 40 + 60)},${Math.random() * 0.4 + 0.15})`;
        ctx.font = `${fontSize}px "Courier New", monospace`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.18 }}
    />
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#050a0e]">
      {/* ── Deep dark base ── */}
      <div className="absolute inset-0 bg-[#050a0e]" />

      {/* ── Matrix rain canvas ── */}
      <MatrixCanvas />

      {/* ── Radial glow spots ── */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-emerald-500/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-cyan-500/6 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-emerald-900/20 blur-[100px] pointer-events-none" />

      {/* ── Scanline overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,100,0.012) 2px, rgba(0,255,100,0.012) 4px)",
        }}
      />

      {/* ── Floating code snippets ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {codeSnippets.map((snippet, i) => (
          <span
            key={i}
            className="absolute font-mono text-emerald-500/20 text-xs whitespace-nowrap"
            style={{
              top: `${(i * 37 + 5) % 92}%`,
              left: `${(i * 53 + 10) % 88}%`,
              transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (i % 5) * 2}deg)`,
              fontSize: `${10 + (i % 3)}px`,
              animationDelay: `${i * 0.4}s`,
            }}>
            {snippet}
          </span>
        ))}
      </div>

      {/* ── Terminal top bar accent ── */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center pt-20 pb-8">
        <div className="container max-w-6xl px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left — Text */}
            <div className="order-2 md:order-1">
              {/* Terminal badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-emerald-500/25 bg-emerald-500/5 mb-5 animate-fade-in">
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase">
                  Software Developer · Full-Stack Engineer
                </span>
                <span className="w-1.5 h-3.5 bg-emerald-400 animate-pulse rounded-sm ml-1" />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-slide-up leading-none">
                <span className="text-white/90">Clinton</span>
                <br />
                <span
                  className="relative inline-block"
                  style={{
                    background:
                      "linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #00ff88 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "gradientShift 3s linear infinite",
                  }}>
                  Kibet
                </span>
              </h1>

              <p
                className="text-base text-white/40 leading-relaxed max-w-lg mb-8 animate-slide-up font-mono"
                style={{ animationDelay: "0.1s" }}>
                <span className="text-emerald-400/70">//</span> Results-oriented
                developer specializing in{" "}
                <span className="text-cyan-400/80">React</span>,{" "}
                <span className="text-cyan-400/80">Node.js</span>, and{" "}
                <span className="text-cyan-400/80">Python</span>. Crafting
                scalable, high-performance web apps with clean architecture.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap items-center gap-4 mb-8 animate-slide-up"
                style={{ animationDelay: "0.15s" }}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded font-mono font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #00c96a, #00a8d4)",
                    color: "#050a0e",
                    boxShadow: "0 0 24px rgba(0,200,106,0.3)",
                  }}>
                  <Mail className="w-4 h-4" />
                  get_in_touch()
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-emerald-500/30 text-emerald-400/80 font-mono font-semibold text-sm hover:border-emerald-500/60 hover:bg-emerald-500/5 hover:scale-105 transition-all duration-300 active:scale-95">
                  ./view_projects
                </a>
              </div>

              {/* Social Links */}
              <div
                className="flex items-center gap-3 animate-slide-up"
                style={{ animationDelay: "0.2s" }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-white/30 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:scale-110 transition-all duration-300"
                    aria-label={link.label}>
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Photo */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
              <div className="relative">
                {/* Glow halo */}
                <div
                  className="absolute -inset-6 rounded-full blur-3xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,200,106,0.2) 0%, rgba(0,168,212,0.1) 60%, transparent 100%)",
                  }}
                />
                {/* Outer hex-ish ring with dashes */}
                <div className="absolute -inset-3 rounded-full border border-dashed border-emerald-500/20 animate-[spin_25s_linear_infinite]" />
                {/* Inner solid ring */}
                <div className="absolute -inset-1 rounded-full border border-emerald-500/30" />
                {/* Photo */}
                <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden">
                  {/* Green tint overlay on photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-cyan-900/20 z-10 mix-blend-color" />
                  <img
                    src={profilePhoto}
                    alt="Clinton Kibet — Software Developer"
                    className="w-full h-full object-cover grayscale-[20%]"
                    width={512}
                    height={512}
                  />
                </div>
                {/* Corner accent dots */}
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div
                  className="absolute bottom-4 left-2 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative z-10 border-t border-emerald-500/10 bg-black/40 backdrop-blur-xl">
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="container max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-emerald-500/10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 py-5 md:py-6 px-4 md:px-6 group animate-slide-up"
                style={{ animationDelay: `${i * 0.08 + 0.3}s` }}>
                <stat.icon className="w-5 h-5 text-emerald-500/60 group-hover:text-emerald-400 transition-colors shrink-0" />
                <div>
                  <div className="text-xl md:text-2xl font-bold text-white/80 font-mono group-hover:text-emerald-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/30 font-mono">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <ArrowDown className="w-5 h-5 text-emerald-500/30" />
      </div>

      {/* gradient shift keyframe injected inline */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
