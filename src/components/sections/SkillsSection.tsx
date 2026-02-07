import { skills } from '@/data/portfolio';
import { SkillCard, SkillCategory } from '../SkillCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function SkillsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  const frontendSkills = skills.filter(s => s.category === 'frontend');
  const backendSkills = skills.filter(s => s.category === 'backend');
  const toolsSkills = skills.filter(s => s.category === 'tools');

  const categories = [
    { key: 'frontend' as const, title: 'Frontend', skills: frontendSkills },
    { key: 'backend' as const, title: 'Backend', skills: backendSkills },
    { key: 'tools' as const, title: 'Outils & Autres', skills: toolsSkills },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 relative bg-secondary/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mes <span className="gradient-text">compétences</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les technologies et outils que je maîtrise pour créer des applications web modernes.
            </p>
          </div>

          {/* Skills Grid by Category */}
          <div className="space-y-12">
            {categories.map((category) => (
              category.skills.length > 0 && (
                <div key={category.key}>
                  <SkillCategory category={category.key} title={category.title} />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {category.skills.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
