import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Deepfake face detection in video",
      description: "Designed and deployed a CNN-based deepfake detection system utilizing three pre- trained models for improved accuracy.Implemented React.js for the frontend interface and Python for backend processing.Utilized the CelebV2 dataset from Kaggle to train and evaluate models, achieving over 99 % detection accuracy.Integrated real - time inference capabilities within a MERN - based web application.Tested using cypress testing at f rontend and at backend for python used pytest.",
      technologies: ["Python", "Pytorch", "OpenCV", "Flask", "Kaggle", "React"],
      github: "https://github.com/dp1345/AI_DD",
      demo: "https://deepfake-face-detection-in-video.vercel.app/",
      category: "AI/ML"
    },
    {
      title: "Genreal AI Agent",
      description: "Built a versatile AI agent with Python, Gradio, LangGraph, LangChain, and Docker. Delivers smart, conversational, and tool-powered assistance through an interactive web UI. Modular, scalable, and ready for real-world tasks—bringing advanced AI capabilities from concept to deployment with speed and style.GAIA(General AI Agent Assistance) research paper based by Meta",
      technologies: ["Python", "Gradio", "LangGraph", "LangChain", "Docker"],
      github: "https://github.com/dp1345/analytics-dashboard",
      demo: "https://analytics-demo.com",
      category: "Agentic AI"
    },
    {
      title: "Google Form Automation with Gemini API",
      description: "Automated Google Form response system using Google Apps Script and Gemini API. Upon submission, the system processes the question field and instantly returns an AI-generated answer.",
      technologies: ["Google Forms", "Google Apps Script", "Gemini API"],
      demo: "https://forms.gle/61xv8d1P4YY3NmXm9",
      category: "Automation/AI"
    },
    {
      title: "n8n AI-Powered Automation Workflow",
      description: "Automated pipeline built in n8n that captures data via a webhook, processes it with the Gemini API, stores results in Airtable, and sends instant email notifications via Gmail. Enables seamless AI-powered data handling and communication.",
      technologies: ["n8n", "Webhook", "Gemini API", "Airtable", "Gmail API"],
      demo: "https://tally.so/r/nW7j2P",
      category: "Automation/AI"
    },

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