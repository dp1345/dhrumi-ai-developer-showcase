import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Scene3D } from "@/components/3d/Scene3D";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* 3D Scene */}
      <Scene3D />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-primary">
            RUHI
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-up">
            <span className="text-gradient-neural">AI Engineer</span> & 
            <span className="text-accent ml-2">Web Developer</span>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Crafting intelligent solutions with cutting-edge AI technologies and beautiful web experiences
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button 
            size="lg" 
            className="gradient-primary hover:scale-105 transition-transform glow-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/ruhi" target="_blank" rel="noopener noreferrer" 
             className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors glow-accent">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/ruhi" target="_blank" rel="noopener noreferrer"
             className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors glow-accent">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:ruhi@example.com"
             className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors glow-accent">
            <Mail className="w-6 h-6" />
          </a>
          <a href="tel:+1234567890"
             className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors glow-accent">
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
}