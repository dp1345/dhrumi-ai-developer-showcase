import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Python",
      issuer: "GUVI Geek Networks, IIT Madras Research Park",
      date: "Nov 30, 2023",
      type: "Programming"
    },
    {
      title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning and Deep Learning",
      issuer: "Coursera",
      date: "Nov 26, 2023",
      type: "AI/ML"
    },
    {
      title: "Emotion AI: Facial Key-points Detection",
      issuer: "Coursera", 
      date: "Nov 30, 2023",
      type: "AI/ML"
    },
    {
      title: "Artificial Intelligence Primer Certification",
      issuer: "Infosys Springboard",
      date: "Feb, 2023",
      type: "AI/ML"
    },
    {
      title: "Python Foundation Certification",
      issuer: "Infosys Springboard",
      date: "Dec, 2023",
      type: "Programming"
    },
    {
      title: "Fundamentals of LLMs",
      issuer: "Hugging Face",
      date: "Aug, 2025",
      type: "LLM"
    },
    {
      title: "Fundamentals of MCP",
      issuer: "Hugging Face",
      date: "Aug, 2025",
      type: "MCP"
    },
    {
      title: "Hugging Face Agentic AI Course",
      issuer: "Hugging Face",
      date: "Sep, 2025",
      type: "Agentic AI"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "AI/ML":
        return "bg-neural/20 text-neural border-neural/30";
      case "Programming":
        return "bg-accent/20 text-accent border-accent/30";
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <section id="certifications" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in AI, machine learning, and software engineering
          </p>
          <div className="w-24 h-1 gradient-neural mx-auto rounded-full mt-6" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:glow-accent transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  <Badge variant="outline" className={getTypeColor(cert.type)}>
                    {cert.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight text-primary group-hover:text-accent transition-colors">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground font-medium">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}