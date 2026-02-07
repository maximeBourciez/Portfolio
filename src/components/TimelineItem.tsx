import { Education } from '@/data/portfolio';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface TimelineItemProps {
  item: Education;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'relative pl-8 pb-8 transition-all duration-500',
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-primary to-primary/20" />
      )}

      {/* Timeline Dot */}
      <div
        className={cn(
          'absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300',
          item.current
            ? 'bg-primary border-primary animate-pulse-glow'
            : 'bg-background border-primary/50'
        )}
      >
        <div className={cn('w-2 h-2 rounded-full', item.current ? 'bg-primary-foreground' : 'bg-primary/50')} />
      </div>

      {/* Content Card */}
      <div className="glass-card p-6 hover:border-primary/50 transition-colors">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              {item.title}
            </h3>
            <p className="text-primary font-medium">{item.institution}</p>
          </div>
          
          {item.current && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
              En cours
            </span>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {item.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {item.startDate} - {item.endDate}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
