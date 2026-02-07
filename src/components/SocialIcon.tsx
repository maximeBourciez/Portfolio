import { Github, Linkedin, Mail, Twitter, Instagram, Globe, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Globe,
};

export function SocialIcon({ name, className }: SocialIconProps) {
  const Icon = iconMap[name] || Globe;
  return <Icon className={cn('w-5 h-5', className)} />;
}
