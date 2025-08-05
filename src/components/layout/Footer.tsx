import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient-primary">dhrumi</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI Engineer & Web Developer passionate about creating intelligent solutions
              and beautiful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:dhrumi858@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                dhrumi858@example.com
              </a>
              <a
                href="tel:+91 7016118861"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 7016118861
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/dp1345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhrumi-p-574846279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Dhrumi. Made with <Heart className="w-4 h-4 text-red-500" /> using React & AI
          </p>
        </div>
      </div>
    </footer>
  );
}