import { useState } from "react";
import { Mail, Github, MapPin, Send, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "clintonkibet98@gmail.com",
    href: "mailto:clintonkibet98@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 707 632591",
    href: "tel:+254707632591",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
  },
  {
    icon: Github,
    label: "GitHub",
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
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div
        ref={ref}
        className={`container max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Available for freelance projects, full-time roles, and engineering collaborations worldwide.
        </p>

        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left - Contact info */}
          <div className="md:col-span-2 space-y-4">
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={item.label}
                  {...(item.href
                    ? {
                        href: item.href,
                        target: item.href.startsWith("http") ? "_blank" : undefined,
                        rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                      }
                    : {})}
                  className={`glass p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 block ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-semibold text-foreground">{item.value}</div>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Right - Form */}
          <div
            className={`md:col-span-3 glass p-6 md:p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm appearance-none"
                >
                  <option value="">Select Project Type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all text-sm"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
