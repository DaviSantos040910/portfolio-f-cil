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
  {
    id: '2',
    slug: 'landing-page-comercial',
    title: 'Landing Page Comercial',
    strategic_title: 'Modelo de Landing Page de Alta Conversão para Prestadores de Serviço e Negócios Locais',
    problem:
      'Prestadores de serviço e negócios locais perdem clientes todos os dias por não terem presença digital profissional. Sem uma landing page estratégica, dependem apenas de indicações boca-a-boca e redes sociais genéricas — perdendo alcance, credibilidade e oportunidades de conversão direta.',
    target_audience:
      'Prestadores de serviço, profissionais autônomos, pequenos negócios locais e empresas que precisam de uma presença digital focada em conversão — transformando visitantes em leads e orçamentos reais através de um site otimizado.',
    key_features: [
      'Arquitetura de landing page orientada à conversão com CTAs estratégicos',
      'Integração com WhatsApp para geração de leads instantânea',
      'Seções modulares adaptáveis a qualquer segmento de serviço',
      'Design premium em dark mode com identidade visual profissional',
      'Galeria visual de trabalhos/projetos com categorização',
      'Formulário de contato integrado com mapa de localização',
      'SEO otimizado para buscas locais e regionais',
      'Layout 100% responsivo — mobile, tablet e desktop',
    ],
    adaptability:
      'Este modelo foi projetado para ser reutilizável. A mesma estrutura de conversão — hero com CTA, seção de serviços, portfólio visual, prova social e contato direto — pode ser adaptada para qualquer prestador de serviço local: encanadores, pintores, fotógrafos, personal trainers, advogados, consultórios, salões de beleza. A arquitetura modular permite customização rápida sem reconstruir do zero.',
    summary:
      'Landing page comercial de alta conversão desenvolvida para negócios locais. Estrutura estratégica com CTA direto, integração WhatsApp, galeria de trabalhos e SEO local — um modelo replicável para qualquer prestador de serviço.',
    description: `## Visão Geral do Projeto

Esta é uma **landing page comercial de alta conversão**, desenvolvida para atender prestadores de serviço e negócios locais que precisam de presença digital profissional para atrair e converter clientes.

O projeto foi construído com foco em **estratégia de conversão** — cada seção da página tem um propósito claro dentro do funil: atrair atenção, apresentar valor, gerar confiança e converter em contato direto.

> **Caso real:** Desenvolvido para um prestador de serviços na região de São Raimundo Nonato-PI, o site já é utilizado como ferramenta ativa de captação de clientes locais.

---

## Estratégia de Conversão

### 🎯 Hero Section com CTA Direto
A primeira tela do site já entrega a proposta de valor e oferece dois caminhos claros ao visitante: **solicitar orçamento** ou **ver trabalhos realizados**. Sem distrações, sem menus complexos — foco total em ação.

### 📊 Prova Social Imediata
Métricas de impacto (anos de experiência, projetos realizados, satisfação do cliente) são exibidas logo abaixo da hero, reforçando autoridade e confiança antes mesmo do visitante rolar a página.

### 🔧 Seções de Serviços Modulares
Os serviços são organizados em categorias visuais com cards descritivos. Essa estrutura é **100% adaptável** — basta trocar os textos e ícones para atender qualquer nicho. A organização por categoria facilita a compreensão e aumenta o tempo de permanência na página.

### 📸 Galeria de Trabalhos com Tags
Um portfólio visual com fotos reais de projetos concluídos, usando tags de categoria para navegação rápida. Mostra resultados concretos e gera confiança no visitante.

### 👤 Seção "Sobre" — Conexão Pessoal
Biografia profissional com foto, valores e área de atuação. Para negócios locais, a conexão pessoal é um dos fatores mais decisivos na conversão.

### 💬 Contato Multicanal + WhatsApp Flutuante
Formulário de contato integrado com localização no mapa. O botão flutuante do WhatsApp acompanha toda a navegação, garantindo que o visitante possa iniciar uma conversa em qualquer momento — principal canal de conversão para negócios locais.

---

## Arquitetura Técnica

| Aspecto | Implementação |
|---|---|
| **Framework** | React + Next.js para performance e SEO |
| **Estilização** | Tailwind CSS com design system customizado |
| **Responsividade** | Mobile-first, adaptado para todos os dispositivos |
| **Performance** | Otimização de imagens, lazy loading, carregamento rápido |
| **SEO** | Meta tags, estrutura semântica, schema markup para negócios locais |
| **Conversão** | CTAs estratégicos, WhatsApp API, formulário integrado |

---

## Adaptabilidade — Um Modelo, Múltiplos Negócios

A grande vantagem deste projeto é a **replicabilidade**. A mesma estrutura de conversão serve para:

| Segmento | Adaptação |
|---|---|
| **Serviços Técnicos** | Eletricistas, encanadores, técnicos de informática |
| **Saúde & Beleza** | Salões, barbearias, nutricionistas, dentistas |
| **Educação** | Professores particulares, escolas de idiomas, cursos |
| **Profissionais Liberais** | Advogados, contadores, fotógrafos, arquitetos |
| **Comércio Local** | Restaurantes, lojas, pet shops, oficinas |

Cada novo cliente precisa apenas de ajuste de conteúdo — a estrutura, design e lógica de conversão já estão prontos.

---

## Resultados de UX e Conversão

- **Tempo de carregamento** < 2s em conexões móveis
- **WhatsApp como canal principal** — sem fricção para o cliente
- **CTA visível** em 100% da navegação (botão flutuante)
- **Hierarquia visual clara** — informação mais importante primeiro
- **Design premium** que transmite profissionalismo e confiança

---

*Ideal para profissionais e empresas que desejam aumentar sua presença digital e transformar visitantes em clientes.*`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Landing Page',
      'UX/Conversão',
    ],
    thumbnail_url: '/projects/portfolio-eletrico/landing.png',
    gallery_urls: [
      '/projects/portfolio-eletrico/servicos.png',
      '/projects/portfolio-eletrico/portfolio.png',
      '/projects/portfolio-eletrico/contato.png',
    ],
    video_url: null,
    live_url: 'https://portifolioeletrico.vercel.app',
    github_url: null,
    case_study_url: null,
    is_featured: true,
    is_published: true,
    created_at: '2025-03-02T00:00:00.000Z',
    updated_at: '2025-03-02T00:00:00.000Z',
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
