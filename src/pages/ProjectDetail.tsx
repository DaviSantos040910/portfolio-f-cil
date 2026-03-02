import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  Play,
  Zap,
  Users,
  Lightbulb,
  RefreshCw,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/layout/Layout';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { useProject } from '@/hooks/useProjects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: project, error } = useProject(slug || '');

  if (error || !project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Projeto não encontrado</h1>
            <p className="text-muted-foreground mb-8">
              O projeto que você está procurando não existe ou foi removido.
            </p>
            <Button asChild>
              <Link to="/projetos">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar aos projetos
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const getVideoEmbedUrl = (url: string) => {
    const youtubeMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/
    );
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }
    return null;
  };

  const videoEmbedUrl = project.video_url
    ? getVideoEmbedUrl(project.video_url)
    : null;

  return (
    <Layout>
      <article className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar aos projetos
              </Link>
            </motion.div>

            {/* ===== HEADER ===== */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Strategic Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight">
                {project.strategic_title}
              </h1>

              {/* Original name */}
              <p className="text-primary font-semibold text-lg mb-4">
                {project.title}
              </p>

              {/* Summary */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.summary}
              </p>
            </motion.header>

            {/* ===== ACTION BUTTONS ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {project.live_url && (
                <Button asChild className="gap-2 rounded-full font-semibold">
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
              {project.github_url && (
                <Button
                  asChild
                  variant="outline"
                  className="gap-2 rounded-full"
                >
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    Código no GitHub
                  </a>
                </Button>
              )}
              {project.case_study_url && (
                <Button
                  asChild
                  variant="outline"
                  className="gap-2 rounded-full"
                >
                  <a
                    href={project.case_study_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4" />
                    Case Study
                  </a>
                </Button>
              )}
            </motion.div>

            {/* ===== THUMBNAIL ===== */}
            {project.thumbnail_url && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <img
                  src={project.thumbnail_url}
                  alt={project.title}
                  className="w-full rounded-2xl border border-border"
                />
              </motion.div>
            )}

            {/* ===== BUSINESS INFO CARDS ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              {/* Problem */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-rose-500/10">
                    <Lightbulb className="w-5 h-5 text-rose-400" />
                  </div>
                  <h3 className="font-bold text-lg">Problema que Resolve</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Target Audience */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-lg">Para Quem É Ideal</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.target_audience}
                </p>
              </div>
            </motion.div>

            {/* ===== KEY FEATURES ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">
                    Principais Funcionalidades
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.key_features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ===== ADAPTABILITY ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mb-12"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <RefreshCw className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">
                    Como Pode Ser Adaptado para Outros Negócios
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.adaptability}
                </p>
              </div>
            </motion.div>

            {/* ===== VIDEO ===== */}
            {project.video_url && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Play className="w-5 h-5 text-primary" />
                  Demo em Vídeo
                </h2>
                {videoEmbedUrl ? (
                  <div className="aspect-video rounded-2xl overflow-hidden border border-border">
                    <iframe
                      src={videoEmbedUrl}
                      title={`${project.title} - Demo`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <video
                    src={project.video_url}
                    controls
                    className="w-full rounded-2xl border border-border"
                  >
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                )}
              </motion.div>
            )}

            {/* ===== TECHNICAL DESCRIPTION ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mb-12"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-6 tracking-tight">
                  Detalhes Técnicos
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-sm py-1.5 px-3"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <MarkdownRenderer content={project.description} />
              </div>
            </motion.div>

            {/* ===== GALLERY ===== */}
            {project.gallery_urls.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6 tracking-tight">
                  Galeria
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery_urls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`${project.title} - Imagem ${index + 1}`}
                      className="w-full rounded-xl border border-border hover:scale-[1.02] transition-transform cursor-pointer"
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ===== CTA ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-16"
            >
              <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 text-center">
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  Gostou deste projeto?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Posso criar algo semelhante ou totalmente personalizado para o
                  seu negócio. Vamos conversar?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="gap-2 rounded-full font-semibold glow"
                  >
                    <a
                      href={`https://wa.me/5589981013110?text=${encodeURIComponent("Olá, vim pelo portfólio e gostei do projeto " + project.title + ". Gostaria de uma proposta!")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar Proposta
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </article >
    </Layout >
  );
}
