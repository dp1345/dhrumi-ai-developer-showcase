import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent conversational AI using natural language processing and machine learning to provide personalized responses and learning capabilities.",
      technologies: ["Python", "TensorFlow", "Flask", "NLP", "React"],
      github: "https://github.com/dp1345/ai-chatbot",
      demo: "https://ai-chatbot-demo.com",
      category: "AI/ML"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Full-stack web application with real-time data visualization, user authentication, and RESTful API integration for business intelligence.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      github: "https://github.com/dp1345/analytics-dashboard",
      demo: "https://analytics-demo.com",
      category: "Web Development"
    },
    {
      title: "Computer Vision Image Classifier",
      description: "Deep learning model for multi-class image classification with 95% accuracy, deployed using Docker and cloud services.",
      technologies: ["Python", "PyTorch", "OpenCV", "Docker", "AWS"],
      github: "https://github.com/dp1345/image-classifier",
      demo: "https://classifier-demo.com",
      category: "AI/ML"
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured online shopping platform with payment integration, inventory management, and responsive design.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "TypeScript"],
      github: "https://github.com/dp1345/ecommerce-platform",
      demo: "https://ecommerce-demo.com",
      category: "Web Development"
    },
    {
      title: "Sentiment Analysis API",
      description: "RESTful API for real-time sentiment analysis of text data using transformer models and natural language processing.",
      technologies: ["Python", "FastAPI", "Transformers", "BERT", "Docker"],
      github: "https://github.com/dp1345/sentiment-api",
      demo: "https://sentiment-api-docs.com",
      category: "AI/ML"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and mobile-responsive design.",
      technologies: ["React", "Firebase", "Tailwind CSS", "PWA"],
      github: "https://github.com/dp1345/task-manager",
      demo: "https://taskmanager-demo.com",
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI/ML and web development, demonstrating practical applications of cutting-edge technologies
          </p>
          <div className="w-24 h-1 gradient-neural mx-auto rounded-full mt-6" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:glow-accent transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs border-primary/30">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gradient-primary" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}