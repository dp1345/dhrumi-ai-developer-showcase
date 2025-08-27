
import { cn } from "@/lib/utils";
import pythonLogo from "@/assets/python.png";
import cssLogo from "@/assets/css.png";
import expressLogo from "@/assets/expressjs.png";
import htmlLogo from "@/assets/html.png";
import jsLogo from "@/assets/javascript.png";
import nodeLogo from "@/assets/nodejs.png";
import pytorchLogo from "@/assets/pytorch.png";
import tensorflowLogo from "@/assets/tensorflow.png";
import postmanLogo from "@/assets/postman.png";
import githubLogo from "@/assets/github.png";
import tsLogo from "@/assets/typescript.png";

interface TechIconProps {
  name: string;
  className?: string;
}


const techIcons: Record<string, string> = {
  'html': htmlLogo,
  'css': cssLogo,
  'javascript': jsLogo,
  'python': pythonLogo,
  'nodejs': nodeLogo,
  'express': expressLogo,
  'mongodb': '🍃',
  'sql': '🗄️',
  'github': githubLogo,
  'postman': postmanLogo,
  'tensorflow': tensorflowLogo,
  'pytorch': pytorchLogo,
  'react': '⚛️',
  'typescript': tsLogo
};

export function TechIcon({ name, className }: TechIconProps) {
  const key = name.toLowerCase();
  const icon = techIcons[key] || '⚙️';

  return (
    <div className={cn(
      "flex items-center justify-center w-12 h-12 rounded-lg bg-card border border-border text-2xl hover:scale-110 transition-transform duration-300 glow-primary",
      className
    )}>
      {["python", "css", "express", "html", "javascript", "nodejs", "pytorch", "tensorflow", "typescript", "postman", "github"].includes(key) ? (
        <img src={icon} alt={name} className="w-8 h-8" />
      ) : (
        icon
      )}
    </div>
  );
}