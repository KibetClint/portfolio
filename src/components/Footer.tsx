import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/KibetClint", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/clintkibet_", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/clintonkibet",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:clintonkibet98@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border">
    <div className="container max-w-6xl flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
            aria-label={link.label}>
            <link.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
        <span>© 2025 Clinton Kibet. All rights reserved.</span>
        <span className="hidden sm:inline">•</span>
      </div>
    </div>
  </footer>
);

export default Footer;
