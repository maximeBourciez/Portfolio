import { ExternalLink, Github, X } from 'lucide-react';
import { Project } from '@/data/portfolio';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    if (!fullscreenImage) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreenImage(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [fullscreenImage]);

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFullscreenImage(project.image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <div
        ref={ref}
        className={cn(
          'group glass-card overflow-hidden transition-all duration-500 h-full',
          'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Project Image */}
        <div 
          className="relative aspect-video overflow-hidden bg-muted cursor-zoom-in"
          onClick={handleImageClick}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Hover Actions */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
                Voir le site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.projectType && (
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                {project.projectType}
              </span>
            )}
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-6">
            {project.longDescription || project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>


      {/* Modal Fullscreen */}
      {fullscreenImage && createPortal(
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
          style={{ zIndex: 9999 }}
          onClick={closeFullscreen}
        >
          {/* Bouton fermer */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Image */}
          <img
            src={fullscreenImage}
            alt="Image projet en plein écran"
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Indication */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white/60 text-sm">
            Cliquez n'importe où ou appuyez sur Échap pour fermer
          </div>
        </div>,
        document.body
      )}
    </>
  );
}