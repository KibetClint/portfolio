import { useState } from "react";
import {
  Mail,
  Github,
  Twitter,
  MapPin,
  Send,
  MessageCircle,
  X,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_NUMBER = "254702034000";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Rodrick, I came across your portfolio and I'm interested in discussing a potential project. Could we schedule a time to connect?",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "clintonkibet98@gmail.com",
    href: "mailto:clintonkibet98@gmail.com",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+254 702 034000",
    href: WHATSAPP_URL,
    gradient: "from-green-500 to-emerald-500",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "KibetClint",
    href: "https://github.com/KibetClint",
    gradient: "from-purple-500 to-indigo-500",
    external: true,
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@clintkibet_",
    href: "https://twitter.com/clintkibet_",
    gradient: "from-blue-500 to-cyan-500",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    subtitle: "Available for remote work worldwide",
    gradient: "from-violet-500 to-purple-500",
  },
];

// ─── Floating WhatsApp Button ─────────────────────────────────────────────────
const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup panel */}
      <div
        className={`bg-card border border-border rounded-xl shadow-2xl w-72 overflow-hidden transition-all duration-200 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#25D366]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle size={18} className="text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-tight">
                Clinton Kibet
              </p>
              <p className="text-white/80 text-[11px]">Software Developer</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close">
            <X size={16} />
          </button>
        </div>

        {/* CTA */}
        <div className="px-4 py-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#20bc5a] text-white text-sm font-semibold rounded-lg transition-colors">
            <MessageCircle size={16} />
            Start Chat on WhatsApp
          </a>
          <p className="text-[10px] text-muted-foreground text-center mt-2">
            Typically replies within a few hours
          </p>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bc5a] hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/40 flex items-center justify-center transition-all duration-150"
        aria-label="Chat on WhatsApp">
        {open ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}

        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        )}
      </button>
    </div>
  );
};

// ─── Contact Section ──────────────────────────────────────────────────────────
const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section id="contact" className="section-padding bg-card/30">
        <div
          ref={ref}
          className={`container max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-mono text-sm text-center mb-2">
            Let's Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactCards.map((card, i) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={
                    card.href?.startsWith("http") || card.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    card.href?.startsWith("http") || card.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`glass p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 block ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shrink-0`}>
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      {card.label}
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      {card.value}
                    </div>
                    {card.subtitle && (
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {card.subtitle}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Form */}
            <div
              className={`glass p-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              style={{ transitionDelay: "300ms" }}>
              <h3 className="text-lg font-bold text-foreground mb-6">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Your Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
};

export default Contact;
