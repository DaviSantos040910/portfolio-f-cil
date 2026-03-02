import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Settings,
  Shield,
  Bot,
  Cloud,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/layout/Layout';

const services = [
  {
    icon: Settings,
    title: 'Sistemas de Gestão',
    description:
      'Plataformas sob medida para gerenciar operações, clientes e processos do seu negócio.',
  },
  {
    icon: Shield,
    title: 'Painéis Administrativos',
    description:
      'Dashboards com login, controle de acesso por nível e dados em tempo real.',
  },
  {
    icon: Bot,
    title: 'Automação com IA',
    description:
      'Chatbots, respostas automáticas e integração com modelos de inteligência artificial.',
  },
  {
    icon: Cloud,
    title: 'Integrações Cloud & APIs',
    description:
      'Conecte seu sistema com Stripe, WhatsApp, e-mail, analytics e serviços externos.',
  },
  {
    icon: CreditCard,
    title: 'Plataformas SaaS',
    description:
      'Produtos digitais com planos de assinatura, checkout e multi-tenancy.',
  },
];

const stack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vite'],
  backend: ['Node.js', 'Supabase', 'PostgreSQL', 'Deno (Edge Functions)'],
  'integrações': ['Stripe', 'MailerSend', 'WhatsApp API', 'OpenAI'],
  deploy: ['Railway', 'Vercel', 'Docker', 'GitHub Actions'],
};

const values = [
  'Código limpo, tipado e bem documentado',
  'Comunicação clara e frequente via WhatsApp',
  'Entregas parciais semanais — acompanhe tudo',
  'Suporte pós-projeto incluído',
  'Foco no resultado de negócio, não só tecnologia',
  'Proposta detalhada antes de começar',
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center border border-border">
                  <div className="text-center">
                    <div className="text-6xl font-extrabold gradient-text mb-2">
                      DS
                    </div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-card border border-border shadow-lg">
                  <p className="text-sm font-bold">+10 anos</p>
                  <p className="text-xs text-muted-foreground">
                    resolvendo problemas
                  </p>
                </div>
              </motion.div>

              {/* Content */}
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 text-xs uppercase tracking-widest font-semibold border border-primary/20 px-4 py-1.5"
                >
                  Sobre Mim
                </Badge>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                  Resolvo problemas reais de negócios com tecnologia
                </h1>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Olá, sou o <strong className="text-foreground">Davi Santos</strong>. Sou formado como{' '}
                  <strong className="text-foreground">Técnico em Informática</strong> e em{' '}
                  <strong className="text-foreground">
                    Tecnologia em Análise e Desenvolvimento de Sistemas
                  </strong>
                  . Comecei minha jornada na programação há mais de 10 anos, e
                  desde então venho criando soluções digitais que geram resultado.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Entrego sistemas completos — do planejamento ao deploy — com
                  foco em resolver o problema do cliente, não apenas escrever
                  código. Cada projeto que construo é pensado para o negócio
                  funcionar melhor.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="gap-2 rounded-full font-semibold">
                    <Link to="/contato">
                      Vamos conversar
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="gap-2 rounded-full border-primary/20"
                  >
                    <Link to="/projetos">Ver Projetos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge
              variant="secondary"
              className="mb-4 text-xs uppercase tracking-widest font-semibold border border-primary/20 px-4 py-1.5"
            >
              Especialidades
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              O Que Eu Construo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sistemas completos, prontos para produção — do backend ao
              frontend, do design ao deploy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card/70 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 hover-lift"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge
              variant="secondary"
              className="mb-4 text-xs uppercase tracking-widest font-semibold border border-primary/20 px-4 py-1.5"
            >
              Tecnologias
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Com O Que Eu Trabalho
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As ferramentas que uso para construir soluções rápidas, seguras e
              escaláveis.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {Object.entries(stack).map(([category, techs], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card/70 border border-border"
              >
                <h3 className="text-base font-bold mb-4 capitalize tracking-tight">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-sm py-2 px-4"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 text-xs uppercase tracking-widest font-semibold border border-primary/20 px-4 py-1.5"
                >
                  Compromisso
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  Como Trabalho
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Valorizo transparência e comunicação direta. Meu objetivo não é
                  apenas entregar código — é resolver seu problema e construir
                  uma parceria de confiança.
                </p>
              </div>

              <div className="space-y-3">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card/70 border border-border hover:border-primary/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-10 md:p-14 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Me conta sobre seu projeto — em até 24h te envio uma proposta
              personalizada, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2 glow rounded-full font-semibold"
              >
                <a
                  href="https://wa.me/5589981013110?text=Olá,%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
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
                className="gap-2 rounded-full border-primary/20 font-semibold"
              >
                <Link to="/contato">
                  Enviar Mensagem
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
