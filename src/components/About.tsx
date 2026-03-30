import { Code2, Zap, Lightbulb, GraduationCap, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const traits = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable, scalable code",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    desc: "Quick to adapt to new technologies",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "Love tackling complex challenges",
  },
];

const software = [
  "VS Code",
  "Git",
  "Docker",
  "Postman",
  "Figma",
  "Linux",
  "Firebase",
  "Vercel",
];

const languages = ["English", "Swahili"];

const focusAreas = [
  "Full-Stack Development",
  "Cybersecurity",
  "Cloud Architecture",
];

const techStack = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "Flask",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Git",
  "REST APIs",
  "Linux",
];

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div
        ref={ref}
        className={`container max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Left - Bio */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Results-oriented Software Developer with a strong foundation in
              Sociology and Full-Stack Development. Experienced in architecting
              scalable web applications utilizing{" "}
              <span className="text-primary font-semibold">
                React, Node.js, and Python (Flask)
              </span>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Proven ability to optimize application performance and lead
              cross-functional teams in delivering user-centric solutions.
              Passionate about cybersecurity and committed to building secure,
              efficient systems.
            </p>

            {/* Trait cards */}
            <div className="grid grid-cols-3 gap-3">
              {traits.map((t, i) => (
                <div
                  key={t.title}
                  className={`glass p-4 text-center hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 100 + 400}ms` }}>
                  <t.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-foreground">
                    {t.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Tags & Education */}
          <div className="md:col-span-2 space-y-5">
            {/* Software */}
            <div className="glass p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                Software
              </h4>
              <div className="flex flex-wrap gap-2">
                {software.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted/80 border border-border/50 text-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted/80 border border-border/50 text-foreground">
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div className="glass p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="glass p-5">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-primary" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Education
                </h4>
              </div>
              <div className="space-y-3">
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="font-semibold text-foreground text-sm">
                    Full-Stack Web Development
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Ubunifu College · 2023 – 2024
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="font-semibold text-foreground text-sm">
                    Bachelor of Arts in Sociology
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Moi University · 2014 – 2019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground text-center mb-5">
            Tech Stack
          </h3>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="mx-2 px-5 py-2.5 rounded-lg bg-muted/60 border border-border/50 text-sm font-medium text-foreground inline-block hover:border-primary/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
