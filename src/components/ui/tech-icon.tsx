import { cn } from "@/lib/utils";

interface TechIconProps {
  name: string;
  className?: string;
}

const techIcons: Record<string, string> = {
  'html': '🌐',
  'css': '🎨',
  'javascript': '⚡',
  'python': '🐍',
  'nodejs': '💚',
  'express': '🚀',
  'mongodb': '🍃',
  'sql': '🗄️',
  'github': '🐙',
  'postman': '📮',
  'tensorflow': '🧠',
  'pytorch': '🔥',
  'react': '⚛️',
  'typescript': '📘'
};

export function TechIcon({ name, className }: TechIconProps) {
  const icon = techIcons[name.toLowerCase()] || '⚙️';
  
  return (
    <div className={cn(
      "flex items-center justify-center w-12 h-12 rounded-lg bg-card border border-border text-2xl hover:scale-110 transition-transform duration-300 glow-primary",
      className
    )}>
      {icon}
    </div>
  );
}