import { Code2, Cloud, Database, Shield, Search, Users } from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Building performant, accessible UIs with modern frameworks.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Performance"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Designing scalable infrastructure on major cloud platforms.",
    tags: ["AWS", "GCP", "Terraform", "Serverless", "CDN"],
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "RESTful and GraphQL APIs, microservices, event-driven systems.",
    tags: ["Node.js", "Go", "GraphQL", "gRPC", "Kafka"],
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    description: "CI/CD pipelines, container orchestration, and security best practices.",
    tags: ["Docker", "K8s", "GitHub Actions", "OWASP", "SOC2"],
  },
  {
    icon: Search,
    title: "Data & ML",
    description: "Data pipelines, analytics dashboards, and ML model integration.",
    tags: ["Python", "PostgreSQL", "Redis", "Elasticsearch", "TensorFlow"],
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description: "Team mentorship, code review culture, and agile methodologies.",
    tags: ["Agile", "Code Review", "Mentoring", "Architecture", "RFC"],
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="section-padding bg-card/30">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Core <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-muted-foreground mb-14 max-w-2xl">Specialised across the full stack with deep domain knowledge in distributed systems and developer experience.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item) => (
            <div key={item.title} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group">
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-muted text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
