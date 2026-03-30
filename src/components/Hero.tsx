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
} from "lucide-react";
import profilePhoto from "@/assets/profile.jpeg";

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

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center pt-20 pb-8">
        <div className="container max-w-6xl px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left - Text */}
            <div className="order-2 md:order-1">
              <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4 animate-fade-in">
                Software Developer · Full-Stack Engineer
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-slide-up">
                <span className="text-foreground">Clinton</span>
                <br />
                <span className="text-gradient">Kibet</span>
              </h1>

              <p
                className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8 animate-slide-up"
                style={{ animationDelay: "0.1s" }}>
                Results-oriented Software Developer specializing in React,
                Node.js, and Python. I craft scalable, high-performance web
                applications with clean architecture and seamless user
                experiences.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap items-center gap-4 mb-8 animate-slide-up"
                style={{ animationDelay: "0.15s" }}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 active:scale-95 shadow-lg shadow-primary/25">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border/80 text-foreground font-semibold hover:bg-muted hover:scale-105 transition-all duration-300 active:scale-95">
                  View Projects
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
                    className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
                    aria-label={link.label}>
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Photo */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
              <div className="relative">
                {/* Glow behind photo */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-violet-500/10 to-blue-500/20 rounded-full blur-2xl opacity-60" />
                <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl shadow-primary/10">
                  <img
                    src={profilePhoto}
                    alt="Clinton Kibet — Software Developer"
                    className="w-full h-full object-cover"
                    width={512}
                    height={512}
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-border/30 bg-card/40 backdrop-blur-xl">
        <div className="container max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/30">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 py-5 md:py-6 px-4 md:px-6 animate-slide-up"
                style={{ animationDelay: `${i * 0.08 + 0.3}s` }}>
                <stat.icon className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <div className="text-xl md:text-2xl font-bold text-foreground font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <ArrowDown className="w-5 h-5 text-muted-foreground/40" />
      </div>
    </section>
  );
};

export default Hero;
