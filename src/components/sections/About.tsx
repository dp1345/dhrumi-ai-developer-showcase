import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aboutBg from "@/assets/about-bg.jpg";

export function About() {
  const internships = [
    {
      title: "AI Research Intern",
      company: "TechCorp Solutions",
      duration: "Jun 2023 - Aug 2023",
      description: "Developed machine learning models for natural language processing, achieving 92% accuracy in sentiment analysis.",
      technologies: ["Python", "TensorFlow", "NLP", "Data Analysis"]
    },
    {
      title: "Full Stack Development Intern", 
      company: "InnovateLabs",
      duration: "Jan 2023 - May 2023",
      description: "Built responsive web applications using MERN stack, optimized database queries, and improved load times by 40%.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"]
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 gradient-neural mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 glow-primary">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a passionate AI Engineer and Web Developer with a strong foundation in computer engineering. 
                  My journey combines the analytical power of artificial intelligence with the creative aspects of web development. 
                  I specialize in building intelligent applications that solve real-world problems, from machine learning models 
                  that predict user behavior to responsive web interfaces that provide seamless user experiences.
                </p>
                <br />
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With expertise in Python, TensorFlow, PyTorch, and modern web technologies like React and Node.js, 
                  I bridge the gap between complex AI algorithms and user-friendly applications. I'm constantly learning 
                  and exploring emerging technologies, having completed multiple certifications in AI and machine learning. 
                  My goal is to contribute to innovative projects that make technology more accessible and impactful for everyone.
                </p>
              </CardContent>
            </Card>
            
            {/* Education */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
                <p className="text-lg font-medium">Bachelor of Computer Engineering</p>
                <p className="text-muted-foreground">CGPA: 9.3/10.0</p>
                <p className="text-sm text-muted-foreground mt-1">2020 - 2024</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Internships */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-gradient-neural mb-8">
              Professional Experience
            </h3>
            
            {internships.map((internship, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:glow-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-primary">{internship.title}</h4>
                    <Badge variant="secondary" className="text-xs">{internship.duration}</Badge>
                  </div>
                  <p className="text-accent font-medium mb-3">{internship.company}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{internship.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
    </section>
  );
}