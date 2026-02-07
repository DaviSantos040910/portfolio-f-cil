import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-card/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover-lift hover:border-primary/50 transition-colors duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
        {project.thumbnail_url ? (
          <img
            src={project.thumbnail_url}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/20">
            <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button size="sm" className="gap-2 rounded-full shadow-lg hover:scale-105 transition-transform">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button size="sm" variant="secondary" className="gap-2 rounded-full shadow-lg hover:scale-105 transition-transform">
                  <Github className="w-4 h-4" />
                  Código
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Featured badge */}
        {project.is_featured && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            Destaque
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-secondary/50 border-transparent group-hover:border-primary/20 transition-colors">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
          {project.summary}
        </p>

        {/* Link */}
        <Link
          to={`/projetos/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all group-hover:text-accent"
        >
          Ver detalhes
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}
