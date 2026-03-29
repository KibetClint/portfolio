import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping platform with admin dashboard",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://brickspring.co.ke/",
    image: "https://brickspring.co.ke/images/Pallet%20scale.png",
  },
  {
    title: "Farm Project",
    description: "My farm project website with real-time updates",
    tags: ["React", "Javascript", "Tailwind CSS"],
    link: "https://kibetfarms.vercel.app/",
    image: "https://kibetfarms.vercel.app/images/beans.jpeg",
  },
  {
    title: "Msafiri-Tribe",
    description: "A travel and tours website with booking system and admin panel",
    tags: ["React", "Tailwind", "Framer Motion", "Firebase"],
    link: "https://msafiritribe.vercel.app/",
    image: "https://msafiritribe.vercel.app/images/D1.webp",
  },
];

const projectStats = [
  { value: "3+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div
        ref={ref}
        className={`container max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <p className="text-primary font-mono text-sm text-center mb-2">Portfolio Showcase</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
          Explore my latest work — from full-stack applications to modern web experiences
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium group/link"
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {projectStats.map((s) => (
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

export default Projects;
