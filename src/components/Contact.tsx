import { useState } from "react";
import {
  Mail,
  Github,
  MapPin,
  Send,
  Phone,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "email",
    value: "clintonkibet98@gmail.com",
    href: "mailto:clintonkibet98@gmail.com",
  },
  {
    icon: Phone,
    label: "phone",
    value: "+254 707 632591",
    href: "tel:+254707632591",
  },
  {
    icon: MapPin,
    label: "location",
    value: "Nairobi, Kenya",
  },
  {
    icon: Github,
    label: "github",
    value: "github.com/KibetClint",
    href: "https://github.com/KibetClint",
  },
];

const projectTypes = [
  "Web Application",
  "Mobile App",
  "E-Commerce",
  "API Development",
  "Consultation",
  "Other",
];

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClass = `w-full px-4 py-3 rounded border border-emerald-500/15 bg-black/40
    text-white/70 font-mono text-sm placeholder:text-white/20
    focus:outline-none focus:border-emerald-500/40 focus:bg-black/60
    focus:shadow-[0_0_16px_rgba(0,200,106,0.08)]
    transition-all duration-300`;

  return (
    <section
      id="contact"
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
              ~/contact
            </span>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 font-mono">
          <span className="text-white/80">get_in</span>
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
            .touch()
          </span>
          <span className="text-emerald-400 animate-pulse">_</span>
        </h2>
        <p className="font-mono text-white/30 text-center mb-14 max-w-xl mx-auto text-sm">
          <span className="text-emerald-400/50">{"//"}</span> Available for
          freelance projects, full-time roles, and collaborations worldwide.
        </p>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* ── Left — Contact info ── */}
          <div className="md:col-span-2 space-y-3">
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={item.label}
                  {...(item.href
                    ? {
                        href: item.href,
                        target: item.href.startsWith("http")
                          ? "_blank"
                          : undefined,
                        rel: item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined,
                      }
                    : {})}
                  className={`group relative flex items-center gap-4 p-4 rounded-lg border border-emerald-500/15
                    bg-black/30 hover:border-emerald-500/35 hover:bg-emerald-500/5
                    transition-all duration-500 hover:-translate-y-0.5 cursor-default
                    ${item.href ? "cursor-pointer" : ""}
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}>
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-500/20 rounded-tl-lg" />

                  <div
                    className="w-9 h-9 rounded border border-emerald-500/20 bg-emerald-500/5
                    flex items-center justify-center shrink-0
                    group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-colors">
                    <item.icon className="w-4 h-4 text-emerald-400/60 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </div>
                    <div className="font-mono text-sm text-white/60 group-hover:text-white/80 transition-colors">
                      {item.value}
                    </div>
                  </div>
                  {item.href && (
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400/0 group-hover:text-emerald-400/50 ml-auto transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                  )}
                </Wrapper>
              );
            })}

            {/* Availability badge */}
            <div className="mt-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-xs text-emerald-400/70">
                available_for_hire <span className="text-white/25">= true</span>
              </span>
            </div>
          </div>

          {/* ── Right — Form ── */}
          <div
            className={`md:col-span-3 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}>
            {/* Terminal wrapper */}
            <div className="rounded-lg border border-emerald-500/15 bg-black/40 overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-emerald-500/10 bg-white/[0.02]">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                <span className="ml-2 font-mono text-[10px] text-white/20">
                  new_message.send()
                </span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] text-emerald-400/50 uppercase tracking-widest mb-2 block">
                      <span className="text-white/20">const</span> name{" "}
                      <span className="text-white/20">=</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={inputClass}
                      placeholder='"Your name"'
                      required
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-emerald-400/50 uppercase tracking-widest mb-2 block">
                      <span className="text-white/20">const</span> email{" "}
                      <span className="text-white/20">=</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={inputClass}
                      placeholder='"you@example.com"'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-emerald-400/50 uppercase tracking-widest mb-2 block">
                    <span className="text-white/20">const</span> project_type{" "}
                    <span className="text-white/20">=</span>
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className={`${inputClass} appearance-none`}>
                    <option value="" className="bg-[#0a1a0f]">
                      // select project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#0a1a0f]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-emerald-400/50 uppercase tracking-widest mb-2 block">
                    <span className="text-white/20">const</span> message{" "}
                    <span className="text-white/20">=</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder='"Tell me about your project..."'
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5
                    rounded font-mono font-semibold text-sm transition-all duration-300
                    hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #00c96a, #00a8d4)",
                    color: "#050a0e",
                    boxShadow: "0 0 24px rgba(0,200,106,0.25)",
                  }}>
                  <Send className="w-4 h-4" />
                  message.send()
                </button>
              </form>
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

export default Contact;
