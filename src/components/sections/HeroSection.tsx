import { ArrowDown, Download } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { SocialIcon } from '../SocialIcon';
import { useScrollToSection } from '@/hooks/useScrollAnimation';

export function HeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Bonjour, je suis
          </p>

          {/* Name */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <h2 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            {personalInfo.title}
          </h2>

          {/* Subtitle */}
          <p 
            className="text-lg text-muted-foreground/80 mb-8 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {personalInfo.subtitle}
          </p>

          {/* Short Bio */}
          <p 
            className="text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            {personalInfo.shortBio}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 glow hover:shadow-lg hover:shadow-primary/25"
            >
              Voir mes projets
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl border border-border bg-secondary/50 text-foreground font-medium hover:border-primary/50 hover:bg-secondary transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Télécharger CV
            </a>
          </div>

          {/* Social Links */}
          <div 
            className="flex items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={link.name}
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
