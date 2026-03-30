import { useScrollReveal } from "@/hooks/useScrollReveal";

const workExperience = [
  {
    period: "Jan 2025 – Present",
    title: "Front-End Developer",
    company: "Dream Right Africa",
    bullets: [
      "Architecting scalable full-stack web applications using React, Node.js, and Tailwind CSS",
      "Enhanced user engagement by 30% through performance optimizations",
      "Leading front-end architecture decisions and code reviews",
    ],
    isCurrent: true,
  },
  {
    period: "Jan 2024 – Jan 2025",
    title: "Front-End Developer",
    company: "Brickspring Enterprises Ltd",
    bullets: [
      "Developed and maintained company web tools and e-commerce platform",
      "Achieved 40% reduction in load times through code refactoring",
      "Established Git workflows reducing post-release bugs by 30%",
    ],
    isCurrent: false,
  },
  {
    period: "Jan 2024 – Jan 2025",
    title: "IT Support & Training",
    company: "Kenya Prisons",
    bullets: [
      "Provided technical support for 20+ users and configured workstations",
      "Delivered digital literacy workshops increasing competency by 50%",
      "Maintained security compliance across all systems",
    ],
    isCurrent: false,
  },
];

const education = [
  {
    period: "2023 – 2024",
    title: "Full-Stack Web Development",
    institution: "Ubunifu College",
  },
  {
    period: "2014 – 2019",
    title: "Bachelor of Arts in Sociology",
    institution: "Moi University",
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding">
      <div
        ref={ref}
        className={`container max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Experience & <span className="text-gradient">Education</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Work Experience */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">Work Experience</h3>
            <div className="space-y-1">
              {workExperience.map((exp, i) => (
                <div
                  key={i}
                  className={`relative pl-6 pb-8 border-l-2 ${
                    exp.isCurrent ? "border-l-primary" : "border-l-border/50"
                  } last:pb-0 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 150 + 200}ms`, transition: "all 0.6s ease" }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 ${
                      exp.isCurrent
                        ? "bg-primary border-primary shadow-md shadow-primary/30"
                        : "bg-background border-border"
                    }`}
                  />

                  <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                  <h4 className="text-lg font-bold text-foreground mt-1">{exp.title}</h4>
                  <p className="text-sm text-primary font-medium">{exp.company}</p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {exp.isCurrent && (
                    <span className="inline-block mt-3 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                      Currently Working
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">Education</h3>
            <div className="space-y-1">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={`pl-6 pb-8 border-l-2 border-l-border/50 relative last:pb-0 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 150 + 500}ms`, transition: "all 0.6s ease" }}
                >
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 bg-background border-border" />
                  <span className="text-xs font-mono text-muted-foreground">{edu.period}</span>
                  <h4 className="text-base font-bold text-foreground mt-1">{edu.title}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
