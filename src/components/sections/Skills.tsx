import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechIcon } from "@/components/ui/tech-icon";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" }
      ]
    },
    {
      title: "AI/ML Frameworks",
      skills: [
        { name: "TensorFlow", icon: "tensorflow" },
        { name: "PyTorch", icon: "pytorch" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "SQL", icon: "sql" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", icon: "github" },
        { name: "Postman", icon: "postman" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Tools & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical arsenal spans across AI/ML, web development, and modern software engineering practices
          </p>
          <div className="w-24 h-1 gradient-neural mx-auto rounded-full mt-6" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:glow-primary transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 justify-items-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col items-center gap-2">
                      <TechIcon name={skill.icon} />
                      <span className="text-sm text-muted-foreground text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}