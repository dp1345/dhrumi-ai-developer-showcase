import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "dhrumi858@example.com",
      href: "mailto:dhrumi858@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7016118861",
      href: "tel:+917016118861"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/dp1345",
      href: "https://github.com/dp1345"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dhrumi-p-574846279",
      href: "https://www.linkedin.com/in/dhrumi-p-574846279/"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your AI and web development projects to life? Let's discuss how we can work together.
          </p>
          <div className="w-24 h-1 gradient-neural mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 glow-primary">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gradient-neural mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    I'm always excited to collaborate on innovative projects, discuss new opportunities,
                    or simply connect with fellow tech enthusiasts. Feel free to reach out through any of these channels.
                  </p>

                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <a
                        key={index}
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <method.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{method.label}</p>
                          <p className="text-sm text-muted-foreground">{method.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col justify-center items-center text-center space-y-6">
                  <div className="p-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-glow">
                    <MapPin className="w-12 h-12 text-primary" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">
                      Available for Opportunities
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      Open to freelance projects, full-time positions, and exciting collaborations in AI and web development.
                    </p>
                  </div>

                  <div className="space-y-3 w-full">
                    <Button
                      size="lg"
                      className="w-full gradient-primary hover:scale-105 transition-transform glow-primary"
                      asChild
                    >
                      <a href="mailto:@example.com">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Message
                      </a>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="tel:+91 7016118861">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}