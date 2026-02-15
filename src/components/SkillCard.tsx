import { Skill } from '@/data/portfolio';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { 
  Palette, 
  Server, 
  Wrench,
  Layers,
  LucideIcon
} from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Palette,
  backend: Server,
  tools: Wrench,
  other: Layers,
};

export function SkillCard({ skill, index }: SkillCardProps) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg",
        isVisible ? "animate-fade-in-up" : "opacity-0",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="mb-4 text-primary">
        <img 
          src={`/icons/${skill.icon}.svg`} 
          alt={skill.name}
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Name */}
      <h3 className="font-semibold mb-3 text-foreground">{skill.name}</h3>

      {/* Level Indicator */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-all duration-300",
              i < skill.level
                ? "bg-primary"
                : "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
}

// Category Header Component
interface SkillCategoryProps {
  category: 'frontend' | 'backend' | 'tools' | 'other';
  title: string;
}

export function SkillCategory({ category, title }: SkillCategoryProps) {
  const CategoryIcon = categoryIcons[category];
  
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="text-primary">
        <CategoryIcon className="w-5 h-5" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
  );
}