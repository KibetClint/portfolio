import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050a0e]/90 backdrop-blur-xl border-b border-emerald-500/10 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}>
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="container max-w-6xl flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="w-4 h-4 text-emerald-400/70 group-hover:text-emerald-400 transition-colors" />
          <span className="font-mono font-bold tracking-tight">
            <span className="text-white/80 group-hover:text-white transition-colors">
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
          <span className="w-1.5 h-4 bg-emerald-400 animate-pulse rounded-sm opacity-80" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-mono text-sm transition-all duration-300 rounded group ${
                  isActive
                    ? "text-emerald-400"
                    : "text-white/40 hover:text-emerald-400"
                }`}>
                {link.label}
                {/* Active / hover underline */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-[1px] transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-500/60"
                      : "bg-emerald-500/0 group-hover:bg-emerald-500/40"
                  }`}
                />
                {/* Active dot */}
                {isActive && (
                  <span className="absolute top-1.5 right-2 w-1 h-1 rounded-full bg-emerald-400" />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            className="ml-4 px-5 py-2 rounded font-mono font-semibold text-sm
              border border-emerald-500/30 text-emerald-400/80
              hover:border-emerald-500/60 hover:bg-emerald-500/5 hover:text-emerald-400
              transition-all duration-300 hover:scale-105 active:scale-95
              hover:shadow-[0_0_16px_rgba(0,200,106,0.15)]">
            hire_me()
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 rounded border border-emerald-500/20 bg-emerald-500/5
            hover:border-emerald-500/40 hover:bg-emerald-500/10
            flex items-center justify-center text-white/50 hover:text-emerald-400
            transition-all duration-200">
          {mobileOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-b border-emerald-500/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#050a0e]/98 backdrop-blur-xl`}>
        {/* Terminal bar */}
        <div className="flex items-center gap-2 px-5 py-2 border-b border-emerald-500/10 bg-white/[0.02]">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
          <span className="ml-2 font-mono text-[10px] text-white/20">
            nav.menu()
          </span>
        </div>

        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 py-3 px-3 rounded font-mono text-sm
                  border transition-all duration-200 ${
                    isActive
                      ? "text-emerald-400 bg-emerald-500/5 border-emerald-500/20"
                      : "text-white/40 hover:text-emerald-400 hover:bg-emerald-500/5 border-transparent hover:border-emerald-500/15"
                  }`}>
                {link.label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center mt-2 py-2.5 rounded
              font-mono font-semibold text-sm transition-all
              hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #00c96a, #00a8d4)",
              color: "#050a0e",
              boxShadow: "0 0 20px rgba(0,200,106,0.2)",
            }}>
            hire_me()
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
