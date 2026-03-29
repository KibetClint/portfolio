import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end application development from concept to deployment, with modern tech stacks and best practices.",
  },
  {
    title: "System Architecture & Design",
    description: "Designing scalable, maintainable architectures for greenfield projects or legacy system modernization.",
  },
  {
    title: "Technical Consulting",
    description: "Code audits, performance optimization, technology selection guidance, and architecture reviews.",
  },
  {
    title: "API Design & Integration",
    description: "RESTful and GraphQL API design, third-party integrations, and API-first development strategy.",
  },
  {
    title: "DevOps & Cloud Migration",
    description: "CI/CD pipeline setup, containerization, cloud migration planning, and infrastructure as code.",
  },
  {
    title: "Technical Mentorship",
    description: "1-on-1 mentoring, team training workshops, and engineering culture development.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card/30">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Services</span>
        </h2>
        <p className="text-muted-foreground mb-14 max-w-2xl">How I can help you and your team build better software.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group cursor-pointer">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                {s.title}
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
              </h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
