import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'serviceflow',
    title: 'ServiceFlow',
    strategic_title: 'Plataforma de Gestão com Agendamento e Painel Administrativo',
    problem:
      'Pequenos negócios de serviço enfrentam os mesmos problemas todos os dias: controlar clientes manualmente, perder agendamentos por falta de organização, não ter histórico de atendimentos e depender de planilhas ou cadernos para gerenciar o dia a dia. Isso custa tempo, dinheiro e clientes.',
    target_audience:
      'Clínicas, salões de beleza, academias, consultórios, profissionais autônomos e pequenas empresas de serviço que precisam organizar clientes, agendamentos e operações internas em um único sistema — sem complicação.',
    key_features: [
      'Cadastro e autenticação segura de usuários',
      'Painel administrativo com visão geral do negócio',
      'Agendamento de serviços com calendário visual',
      'Controle de clientes com histórico completo',
      'Organização de informações internas por setor',
      'Diferentes níveis de acesso para cada colaborador',
      'Estrutura pronta para expansão e novos módulos',
      'Interface profissional e fácil de usar',
    ],
    adaptability:
      'Pode ser facilmente adaptado para diferentes nichos, mantendo a mesma base estrutural. O sistema pode ser customizado para diferentes segmentos — de salões a academias, de consultórios a escritórios. Pode receber módulos adicionais conforme o negócio cresce, integrar pagamentos online futuramente e evoluir para um modelo SaaS com planos de assinatura recorrentes.',
    summary:
      'Sistema de gestão completo para pequenos negócios de serviço. Organize clientes, agendamentos e operações internas em uma plataforma única, com painel administrativo e controle de acesso por colaborador.',
    description: `## O Que Esta Plataforma Faz

O **ServiceFlow** é uma plataforma de gestão desenvolvida para resolver os problemas operacionais que pequenos negócios enfrentam todos os dias. Em vez de depender de planilhas, agendas de papel ou sistemas genéricos, o dono do negócio passa a ter tudo em um único lugar — clientes, agendamentos, equipe e dados financeiros.

O sistema foi construído pensando em quem precisa de resultado rápido: interface clara, navegação intuitiva e funcionalidades que fazem sentido para o dia a dia de quem trabalha com atendimento.

---

## Como Funciona na Prática

### 📊 Painel Administrativo
O gestor tem uma visão completa do negócio ao abrir o sistema: quantas consultas estão agendadas, qual a receita do mês, quais compromissos estão próximos. Tudo em uma tela, sem precisar navegar por múltiplas páginas.

### 📅 Agendamento Inteligente
Calendário com visão diária e semanal. Crie, edite ou cancele agendamentos de forma rápida. Cada colaborador pode ver apenas sua agenda, enquanto o gestor tem visão completa.

### 👥 Gestão de Clientes
Todos os clientes cadastrados com informações de contato, histórico de atendimentos e observações. Busca rápida por nome, e-mail ou telefone. Nunca mais perca dados de um cliente.

### 🔐 Controle de Acesso
Cada pessoa que usa o sistema vê apenas o que precisa. O administrador tem acesso total, enquanto outros colaboradores veem apenas suas funcionalidades — garantindo segurança e organização.

### 💰 Visão Financeira
Acompanhe receitas, despesas e saldo geral. Gere links de pagamento online para cobrar clientes de forma prática e profissional.

---

## Para Quem É Esse Sistema

| Segmento | Como Usar |
|---|---|
| **Clínicas e Consultórios** | Agendar consultas, gerenciar pacientes, controlar financeiro |
| **Salões de Beleza** | Organizar horários, cadastrar clientes, acompanhar serviços |
| **Academias** | Controlar alunos, agendar aulas, gestão de planos |
| **Profissionais Autônomos** | Agenda pessoal, controle de clientes, cobranças |
| **Pequenas Empresas de Serviço** | Gestão interna completa com múltiplos colaboradores |

---

## Potencial de Evolução

Esta plataforma não é um sistema "congelado". A arquitetura foi pensada para crescer junto com o negócio:

- **Novos módulos** podem ser adicionados sob demanda
- **Integrações** com WhatsApp, e-mail marketing e gateways de pagamento
- **Modelo SaaS** — pode evoluir para oferecer planos de assinatura mensal
- **Multi-empresa** — suporta múltiplos negócios isolados na mesma plataforma
- **Automação** — possibilidade de integrar chatbots e IA para atendimento

---

## Diferencial Técnico

- **Backend estruturado** — dados organizados e protegidos em banco de dados robusto
- **Arquitetura escalável** — cresce junto com a quantidade de usuários e funcionalidades
- **Autenticação segura** — login protegido com diferentes níveis de acesso
- **Pronto para deploy em cloud** — publicação rápida e estável em servidores modernos
- **Interface responsiva** — funciona perfeitamente em computador, tablet e celular`,
    tags: [
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Stripe',
      'Tailwind CSS',
      'Vite',
      'SaaS',
    ],
    thumbnail_url: '/projects/serviceflow/landing.png',
    gallery_urls: [
      '/projects/serviceflow/dashboard.png',
      '/projects/serviceflow/pacientes.png',
      '/projects/serviceflow/financeiro.png',
    ],
    video_url: null,
    live_url: 'https://serviceflow.up.railway.app/',
    github_url: 'https://github.com/DaviSantos040910/clinicflow-health-hub',
    case_study_url: null,
    is_featured: true,
    is_published: true,
    created_at: '2025-02-28T00:00:00.000Z',
    updated_at: '2025-02-28T00:00:00.000Z',
  },
];

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.is_published);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.is_published && p.is_featured);
}

export function getProjectBySlug(slug: string): Project | null {
  return projects.find((p) => p.slug === slug) ?? null;
}
