import { BookOpen, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Optimizing Real-Time Collaboration with CRDTs at Scale",
    venue: "ACM SIGMOD 2024",
    type: "Conference Paper",
    link: "#",
  },
  {
    title: "A Practical Guide to Event-Driven Microservices in Go",
    venue: "IEEE Software, Vol. 41, No. 3",
    type: "Journal Article",
    link: "#",
  },
  {
    title: "Reducing Cold Start Latency in Serverless Architectures",
    venue: "AWS re:Invent 2023",
    type: "Conference Talk",
    link: "#",
  },
  {
    title: "Building Accessible Design Systems at Enterprise Scale",
    venue: "Smashing Magazine",
    type: "Technical Article",
    link: "#",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="section-padding bg-card/30">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Publications & <span className="text-gradient">Research</span>
        </h2>
        <p className="text-muted-foreground mb-14 max-w-2xl">Selected papers, talks, and technical articles.</p>

        <div className="space-y-4">
          {publications.map((p) => (
            <a key={p.title} href={p.link} className="glass rounded-xl p-6 flex items-start justify-between gap-4 hover:border-primary/30 transition-colors group block">
              <div className="flex gap-4">
                <BookOpen className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.venue}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 text-xs font-mono rounded bg-muted text-muted-foreground">{p.type}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
