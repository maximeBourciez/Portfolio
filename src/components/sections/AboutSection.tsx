import { personalInfo } from '@/data/portfolio';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { User, MapPin, Heart } from 'lucide-react';

export function AboutSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              À propos de <span className="gradient-text">moi</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez qui je suis et ce qui me passionne dans le développement web.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image / Avatar */}
            <div className={cn(
              'transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-xl blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-xl blur-2xl" />
              </div>
            </div>

            {/* Content */}
            <div className={cn(
              'transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}>
              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Statut</p>
                    <p className="font-medium text-sm">Étudiant</p>
                  </div>
                </div>
                <div className="glass-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Localisation</p>
                    <p className="font-medium text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Ma passion
                </h3>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  {personalInfo.bio.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
