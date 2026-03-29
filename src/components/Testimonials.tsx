import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Alex transformed our legacy monolith into a modern microservices architecture. The system now handles 10x the traffic with half the infrastructure cost.",
    name: "Sarah Chen",
    role: "CTO, TechVentures Inc.",
  },
  {
    quote: "An exceptional engineer with rare product instincts. Alex doesn't just write code — he understands the business problem and architects elegant solutions.",
    name: "Marcus Williams",
    role: "VP Engineering, DataFlow",
  },
  {
    quote: "Alex led our frontend rewrite with remarkable speed and quality. The team learned so much from his mentorship and code review practices.",
    name: "Elena Rodriguez",
    role: "Product Director, ScaleUp Labs",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          What People <span className="text-gradient">Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-xl p-6 flex flex-col">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed flex-1 italic">"{t.quote}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
