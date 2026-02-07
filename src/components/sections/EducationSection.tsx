import { education } from '@/data/portfolio';
import { TimelineItem } from '../TimelineItem';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function EducationSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 relative bg-secondary/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ma <span className="gradient-text">formation</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mon parcours académique et les compétences acquises au fil des années.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {education.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
