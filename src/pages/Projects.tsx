import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  Zap,
  ChevronRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { useProjects } from '@/hooks/useProjects';

export default function Projects() {
  const { data: projects } = useProjects();

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="mb-4 text-xs uppercase tracking-widest font-semibold border border-primary/20 px-4 py-1.5"
            >
              Portfólio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Soluções que Resolvi
            </h1>
            <p className="text-lg text-muted-foreground">
              Cada projeto abaixo representa um problema real de negócio
              transformado em sistema funcional — com design profissional,
              backend robusto e pronto para escalar.
            </p>
          </motion.div>

          {/* Projects */}
          {projects && projects.length > 0 ? (
            <div className="space-y-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-2xl bg-card/70 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Thumbnail */}
                    <div className="lg:col-span-2 relative aspect-video lg:aspect-auto overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5">
                      {project.thumbnail_url ? (
                        <img
                          src={project.thumbnail_url}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center min-h-[200px]">
                          <div className="text-6xl font-bold text-primary/20">
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card/80" />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                      {project.is_featured && (
                        <Badge className="w-fit mb-3 bg-primary/10 text-primary border-primary/20 font-semibold text-xs">
                          Destaque
                        </Badge>
                      )}
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">
                        {project.strategic_title}
                      </h2>
                      <p className="text-primary font-medium text-sm mb-3">
                        {project.title}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.problem}
                      </p>

                      {/* Key features preview */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.key_features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full"
                          >
                            <Zap className="w-3 h-3 mr-1 text-primary" />
                            {feature.length > 40
                              ? feature.substring(0, 40) + '...'
                              : feature}
                          </span>
                        ))}
                        {project.key_features.length > 3 && (
                          <span className="inline-flex items-center text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                            +{project.key_features.length - 3} mais
                          </span>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.slice(0, 5).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-[10px] font-normal py-0.5"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 5 && (
                          <Badge
                            variant="outline"
                            className="text-[10px] font-normal py-0.5"
                          >
                            +{project.tags.length - 5}
                          </Badge>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3">
                        <Button
                          asChild
                          className="gap-2 rounded-full font-semibold"
                        >
                          <Link to={`/projetos/${project.slug}`}>
                            Ver Detalhes
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </Button>
                        {project.live_url && (
                          <Button
                            asChild
                            variant="outline"
                            className="gap-2 rounded-full border-primary/20"
                          >
                            <a
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Ver Demonstração
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                Nenhum projeto publicado ainda.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
