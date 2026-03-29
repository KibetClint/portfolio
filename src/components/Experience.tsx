import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    number: "01",
    title: "Front-End Developer",
    company: "Dream Right Africa",
    period: "Jan 2025 - Present",
    description: "Architecting scalable full-stack web applications using React, Node.js, and Tailwind CSS. Enhanced user engagement by 30% through performance optimizations.",
    status: "Currently Working",
    isCurrent: true,
  },
  {
    number: "02",
    title: "Front-End Developer",
    company: "Brickspring Enterprises Ltd",
    period: "Jan 2024 - Jan 2025",
    description: "Developed and maintained company web tools, achieving 40% reduction in load times through code refactoring. Established Git workflows reducing post-release bugs by 30%.",
    status: "Completed",
    isCurrent: false,
  },
  {
    number: "03",
    title: "IT Support & Training",
    company: "Kenya Prisons",
    period: "Jan 2024 - Jan 2025",
    description: "Provided technical support for 20+ users, configured workstations for security compliance, and delivered digital literacy workshops increasing competency by 50%.",
    status: "Completed",
    isCurrent: false,
  },
];

const expStats = [
  { value: "3+", label: "Positions Held" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Success Rate" },
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding">
      <div
        ref={ref}
        className={`container max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <p className="text-primary font-mono text-sm text-center mb-2">Professional Journey</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
          My professional journey and key achievements
        </p>

        <div className="max-w-3xl mx-auto space-y-6 mb-14">
          {experiences.map((exp, i) => (
            <div
              key={exp.number}
              className={`glass p-6 md:p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="flex items-start gap-5">
                <span className="text-3xl font-bold text-primary/30 font-mono shrink-0">{exp.number}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-muted-foreground mt-3">{exp.description}</p>
                  <span className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full ${
                    exp.isCurrent
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {exp.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {expStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary font-mono">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
