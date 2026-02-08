import { useState } from 'react';
import { projects } from '@/data/portfolio';
import { ProjectCard } from '../ProjectCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ProjectsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const projectsPerSlide = 2;

  const slides = Array.from(
    { length: Math.ceil(featuredProjects.length / projectsPerSlide) },
    (_, i) =>
      featuredProjects.slice(
        i * projectsPerSlide,
        i * projectsPerSlide + projectsPerSlide
      )
  );

  const nextSlide = () =>
    setCurrentSlide(prev => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide(prev =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div
            className={cn(
              'text-center mb-16 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mes <span className="gradient-text">projets</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les projets sur lesquels j’ai travaillé, des applications web aux APIs.
            </p>
          </div>

          {/* Featured Projects Carousel */}
          {featuredProjects.length > 0 && (
            <div className="mb-20">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Projets phares
              </h3>

              <div className="relative">
                {/* Track */}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {slides.map((slide, slideIndex) => (
                      <div
                        key={slideIndex}
                        className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-1"
                      >
                        {slide.map((project, index) => (
                          <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                {slides.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      aria-label="Projet précédent"
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextSlide}
                      aria-label="Projet suivant"
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Indicators */}
                {slides.length > 1 && (
                  <div className="flex justify-center gap-2 mt-6">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={cn(
                          'h-2 rounded-full transition-all',
                          currentSlide === index
                            ? 'w-8 bg-primary'
                            : 'w-2 bg-muted-foreground'
                        )}
                        aria-label={`Aller au slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
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
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div> sdqsdqd
    </section>
  );
}
