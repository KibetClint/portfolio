import { GraduationCap, Award, BadgeCheck } from "lucide-react";

const education = [
  { degree: "M.S. Computer Science", school: "Stanford University", year: "2016" },
  { degree: "B.S. Software Engineering", school: "University of Michigan", year: "2014" },
];

const certifications = [
  "AWS Solutions Architect – Professional",
  "Google Cloud Professional Cloud Architect",
  "Certified Kubernetes Administrator (CKA)",
  "HashiCorp Terraform Associate",
];

const memberships = [
  "ACM – Association for Computing Machinery",
  "IEEE Computer Society",
  "Open Source Initiative Contributor",
];

const Credentials = () => {
  return (
    <section id="credentials" className="section-padding">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          <span className="text-gradient">Credentials</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.degree} className="glass rounded-lg p-4">
                  <div className="font-semibold text-foreground">{e.degree}</div>
                  <div className="text-sm text-muted-foreground">{e.school} · {e.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div key={c} className="glass rounded-lg p-4 text-sm text-foreground">{c}</div>
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Professional Memberships</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {memberships.map((m) => (
                <span key={m} className="px-4 py-2 rounded-lg glass text-sm text-foreground">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
