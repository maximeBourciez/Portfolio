import { Skill } from '@/data/portfolio';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { 
  Code, 
  Database, 
  GitBranch, 
  Palette, 
  Terminal,
  Globe,
  Layers,
  Server,
  Wrench
} from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Code className="w-5 h-5" />,
  backend: <Server className="w-5 h-5" />,
  tools: <Wrench className="w-5 h-5" />,
  other: <Layers className="w-5 h-5" />,
};

const skillIcons: Record<string, React.ReactNode> = {
  html5: <Globe className="w-6 h-6" />,
  css3: <Palette className="w-6 h-6" />,
  javascript: <Code className="w-6 h-6" />,
  typescript: <Code className="w-6 h-6" />,
  react: <Layers className="w-6 h-6" />,
  tailwind: <Palette className="w-6 h-6" />,
  nodejs: <Server className="w-6 h-6" />,
  python: <Terminal className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  php: <Code className="w-6 h-6" />,
  git: <GitBranch className="w-6 h-6" />,
  vscode: <Code className="w-6 h-6" />,
  figma: <Palette className="w-6 h-6" />,
  linux: <Terminal className="w-6 h-6" />,
};

export function SkillCard({ skill, index }: SkillCardProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const Icon = skillIcons[skill.icon] || <Code className="w-6 h-6" />;

  return (
    <div
      ref={ref}
      className={cn(
        'glass-card p-4 flex flex-col items-center gap-3 transition-all duration-500',
        'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1',
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
      )}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        {Icon}
      </div>

      {/* Name */}
      <span className="text-sm font-medium text-center">{skill.name}</span>

      {/* Level Indicator */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'w-2 h-2 rounded-full transition-colors',
              i < skill.level ? 'bg-primary' : 'bg-muted'
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
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
        {categoryIcons[category]}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}
