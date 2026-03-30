import { Github, Twitter, Linkedin, Mail, Terminal } from "lucide-react";

const Footer = () => (
  <footer className="relative bg-[#050a0e] border-t border-emerald-500/10 overflow-hidden">
    {/* Top accent line */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

    {/* Scanlines */}
    <div
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,100,0.008) 2px, rgba(0,255,100,0.008) 4px)",
      }}
    />

    {/* Subtle glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-emerald-500/5 blur-[60px] pointer-events-none" />

    <div className="container max-w-6xl relative z-10 py-10 px-4 flex flex-col items-center gap-6">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group">
        <Terminal className="w-4 h-4 text-emerald-400/50 group-hover:text-emerald-400 transition-colors" />
        <span className="font-mono font-bold tracking-tight">
          <span className="text-white/60 group-hover:text-white/80 transition-colors">
            ck
          </span>
          <span
            style={{
              background: "linear-gradient(135deg, #00ff88, #00d4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            .dev
          </span>
        </span>
      </a>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />

      {/* Copyright */}
      <div className="flex flex-col sm:flex-row items-center gap-2 font-mono text-xs text-white/20">
        <span className="text-emerald-400/40">{">"}</span>
        <span>© 2025 Clinton Kibet. All rights reserved.</span>
        <span className="hidden sm:inline text-emerald-400/20">·</span>
      </div>
    </div>
  </footer>
);

export default Footer;
