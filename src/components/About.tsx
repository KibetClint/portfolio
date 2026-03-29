import { Code2, Zap, Lightbulb, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const traits = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Zap, title: "Fast Learner", desc: "Quick to adapt to new technologies" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Love tackling complex challenges" },
];

const stats = [
  { value: "2+", label: "Years Exp" },
  { value: "5+", label: "Projects" },
  { value: "10+", label: "Clients" },
];

const techStack = [
  "React", "JavaScript", "TypeScript", "Node.js", "Python", "Flask", "Tailwind CSS", "MongoDB", "MySQL", "Firebase", "Git", "REST APIs", "Linux",
];

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div
        ref={ref}
        className={`container max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">About Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-14" />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left - Bio Card */}
          <div className="md:col-span-3 glass p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                CK
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Full-Stack Developer</h3>
                <p className="text-sm text-muted-foreground">Building Digital Experiences</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Results-oriented Software Developer with a strong foundation in Sociology and Full-Stack Development. Experienced in architecting scalable web applications utilizing <span className="text-primary font-semibold">React, Node.js, and Python (Flask)</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Proven ability to optimize application performance and lead cross-functional teams in delivering user-centric solutions. Passionate about cybersecurity and committed to building secure, efficient systems.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {traits.map((t, i) => (
                <div
                  key={t.title}
                  className={`bg-muted/50 rounded-lg p-4 text-center hover:bg-muted/80 transition-all duration-300 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 100 + 400}ms` }}
                >
                  <t.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-foreground">{t.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats & Education */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="glass p-4 text-center hover:border-primary/30 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-mono">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-muted/50 rounded-lg p-4 hover:bg-muted/80 transition-colors">
                  <div className="font-semibold text-foreground text-sm">Full-Stack Web Development</div>
                  <div className="text-xs text-muted-foreground mt-1">Ubunifu College · Sep 2023 - Sep 2024</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 hover:bg-muted/80 transition-colors">
                  <div className="font-semibold text-foreground text-sm">Bachelor of Arts in Sociology</div>
                  <div className="text-xs text-muted-foreground mt-1">Moi University · Jan 2014 - Dec 2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground text-center mb-6">Tech Stack</h3>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="mx-3 px-5 py-2.5 rounded-lg bg-muted/80 border border-border/50 text-sm font-medium text-foreground inline-block hover:border-primary/30 transition-colors"
                >
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
