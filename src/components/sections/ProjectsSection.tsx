import { projects } from '@/data/portfolio';
import { ProjectCard } from '../ProjectCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
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
              Mes <span className="gradient-text">projets</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les projets sur lesquels j'ai travaillé, des applications web aux APIs.
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Projets phares
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground" />
                Autres projets
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
