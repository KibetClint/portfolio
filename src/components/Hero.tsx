import { Download, Github, Twitter, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile.jpeg";

const socialLinks = [
  { icon: Github, href: "https://github.com/KibetClint", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/clintkibet_", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/clintonkibet",
    label: "LinkedIn",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 container max-w-4xl text-center">
        {/* Profile Photo */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 rounded-full blur-md opacity-50 animate-pulse" />
            <img
              src={profilePhoto}
              alt="Clinton Kibet"
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover ring-4 ring-primary/30 shadow-lg shadow-primary/20"
              width={512}
              height={512}
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-slide-up">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient">Clinton Kibet</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up"
          style={{ animationDelay: "0.1s" }}>
          Results-oriented Software Developer specializing in React, Node.js,
          and Python. I craft scalable, high-performance web applications with
          clean architecture and seamless user experiences.
        </p>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-4 mb-8 animate-slide-up"
          style={{ animationDelay: "0.15s" }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
              aria-label={link.label}>
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 active:scale-95">
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
