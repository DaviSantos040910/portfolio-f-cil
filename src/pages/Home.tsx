import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Bot,
  Cloud,
  CreditCard,
  Settings,
  Users,
  CalendarCheck,
  Lightbulb,
  MessageSquare,
  Rocket,
  FileSearch,
  FileCode,
  Headphones,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { useFeaturedProjects } from '@/hooks/useProjects';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const { data: projects } = useFeaturedProjects();

  const deliverables = [
    {
      icon: Settings,
      title: 'Sistemas de Gestão Personalizados',
      description:
        'Gerencie clientes, estoque, agendamentos e financeiro em uma plataforma feita sob medida para seu negócio.',
      gradient: 'from-violet-500/20 to-purple-500/20',
      borderColor: 'hover:border-violet-500/50',
      iconColor: 'text-violet-400',
    },
    {
      icon: Shield,
      title: 'Plataformas com Login e Painel Admin',
      description:
        'Controle de acesso por nível de usuário, dashboards com métricas em tempo real e gestão centralizada.',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'hover:border-cyan-500/50',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Bot,
      title: 'Automação com IA',
      description:
        'Chatbots inteligentes, atendimento automatizado e integração com modelos de linguagem para otimizar processos.',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'hover:border-emerald-500/50',
      iconColor: 'text-emerald-400',
    },
    {
      icon: Cloud,
      title: 'Integrações com APIs e Cloud',
      description:
        'Conecte seu sistema com ferramentas de pagamento, e-mail, WhatsApp, analytics e qualquer serviço externo.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'hover:border-amber-500/50',
      iconColor: 'text-amber-400',
    },
    {
      icon: CreditCard,
      title: 'Modelos SaaS com Assinatura',
      description:
        'Transforme sua ideia em produto com planos de assinatura, checkout integrado e gestão de clientes recorrentes.',
      gradient: 'from-rose-500/20 to-pink-500/20',
      borderColor: 'hover:border-rose-500/50',
      iconColor: 'text-rose-400',
    },
  ];

  const businessHelp = [
    {
      icon: Settings,
      question: 'Precisa de um sistema interno?',
      description: 'Dashboards, gestão de dados e relatórios sob medida.',
    },
    {
      icon: MessageSquare,
      question: 'Quer automatizar atendimento?',
      description: 'Chatbots, respostas automáticas e fluxos inteligentes.',
    },
    {
      icon: CalendarCheck,
      question: 'Quer organizar clientes e agendamentos?',
      description: 'Agenda online, notificações e histórico completo.',
    },
    {
      icon: Rocket,
      question: 'Quer transformar sua ideia em SaaS?',
      description: 'Planos, checkout, multi-tenancy e escala automática.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      icon: Lightbulb,
      title: 'Entendimento do Problema',
      description:
        'Conversa detalhada para entender seu negócio, dores e objetivos. Sem jargão técnico.',
    },
    {
      step: '02',
      icon: FileSearch,
      title: 'Proposta Personalizada',
      description:
        'Documento claro com escopo, prazo, valor e tecnologias. Você aprova antes de começar.',
    },
    {
      step: '03',
      icon: FileCode,
      title: 'Desenvolvimento',
      description:
        'Sprints semanais com entregas parciais e updates frequentes. Você acompanha tudo.',
    },
    {
      step: '04',
      icon: Headphones,
      title: 'Entrega e Suporte',
      description:
        'Deploy, treinamento e suporte pós-entrega. Seu sistema funcionando sem preocupação.',
    },
  ];

  return (
    <Layout>
      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden min-h-[90vh] flex items-center justify-center">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-float opacity-50" />
          <div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-float opacity-50"
            style={{ animationDelay: '2s' }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] opacity-30" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-secondary/50 backdrop-blur-md border border-primary/20 text-primary text-sm font-medium shadow-lg shadow-primary/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponível para novos projetos
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Desenvolvo sistemas web e <br className="hidden md:block" />aplicativos mobile para{' '}
              <span className="gradient-text">impulsionar seu negócio</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Soluções multiplataforma personalizadas: painéis administrativos, aplicativos escaláveis (iOS & Android) e integração com serviços cloud.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="h-13 px-8 text-base gap-2 glow rounded-full font-semibold"
              >
                <Link to="/projetos">
                  Ver Projetos
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 px-8 text-base gap-2 rounded-full border-primary/20 hover:bg-primary/10 font-semibold"
              >
                <a
                  href="https://wa.me/5589981013110?text=Olá,%20vim%20pelo%20seu%20portfólio%20e%20tenho%20interesse%20em%20um%20projeto!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5" />
                  Fale Comigo
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 2. O QUE EU ENTREGO ===== */}
      <section className="py-20 md:py-28 bg-secondary/20 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="mb-4 text-xs uppercase tracking-widest font-semibold border border-primary/20 px-4 py-1.5"
            >
              Soluções
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              O Que Eu Entrego
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Sistemas web completos e aplicativos mobile prontos para produção — focados em resolver problemas reais do seu negócio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group relative p-6 rounded-2xl bg-card/70 backdrop-blur-sm border border-border ${item.borderColor} transition-all duration-300 hover-lift`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="p-3 rounded-xl bg-secondary/50 w-fit mb-5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. PROJETOS ===== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="mb-4 text-xs uppercase tracking-widest font-semibold border border-primary/20 px-4 py-1.5"
            >
              Portfólio
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Projetos em Destaque
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Soluções reais que desenvolvi — veja como cada projeto resolve um
              problema de negócio específico.
            </p>
          </motion.div>

          {projects && projects.length > 0 ? (
            <div className="space-y-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
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
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20 font-semibold text-xs">
                          Destaque
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">
                        {project.strategic_title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.problem}
                      </p>

                      {/* Key features preview */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.key_features.slice(0, 4).map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full"
                          >
                            <Zap className="w-3 h-3 mr-1 text-primary" />
                            {feature.length > 35
                              ? feature.substring(0, 35) + '...'
                              : feature}
                          </span>
                        ))}
                        {project.key_features.length > 4 && (
                          <span className="inline-flex items-center text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                            +{project.key_features.length - 4} mais
                          </span>
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
            <p className="text-center text-muted-foreground">
              Nenhum projeto em destaque no momento.
            </p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 rounded-full border-primary/20"
            >
              <Link to="/projetos">
                Ver todos os projetos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== 4. COMO POSSO AJUDAR SEU NEGÓCIO ===== */}
      <section className="py-20 md:py-28 bg-secondary/20 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="mb-4 text-xs uppercase tracking-widest font-semibold border border-primary/20 px-4 py-1.5"
            >
              Serviços
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Como Posso Ajudar Seu Negócio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Me conte seu desafio — eu cuido da tecnologia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {businessHelp.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-2xl bg-card/70 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 hover-lift cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 tracking-tight">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. PROCESSO DE TRABALHO ===== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="mb-4 text-xs uppercase tracking-widest font-semibold border border-primary/20 px-4 py-1.5"
            >
              Processo
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Meu Processo de Trabalho
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Transparência e comunicação do início ao fim — sem surpresas.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(100%+1px)] w-full h-px">
                      <div className="w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
                    </div>
                  )}

                  <div className="p-6 rounded-2xl bg-card/70 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 hover-lift h-full">
                    <div className="text-4xl font-extrabold gradient-text mb-4 opacity-60">
                      {item.step}
                    </div>
                    <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-bold mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. CTA FINAL ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-10 md:p-16 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-6 opacity-80" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
                Vamos transformar sua ideia em{' '}
                <span className="gradient-text">um sistema real?</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto">
                Me conta o que você precisa — em até 24h te envio uma proposta
                personalizada, sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-13 px-8 text-base gap-2 glow rounded-full font-semibold"
                >
                  <a
                    href="https://wa.me/5589981013110?text=Olá,%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20uma%20proposta!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-13 px-8 text-base gap-2 rounded-full border-primary/20 hover:bg-primary/10 font-semibold"
                >
                  <Link to="/contato">
                    Enviar Mensagem
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
