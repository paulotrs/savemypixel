// SaveMyPixel — i18n (EN / PT-BR)
// Detects locale by IP on first visit, then persists in localStorage.
// Manual override via the flag switcher in the nav.

(function () {
  const LS_KEY = 'smp_locale';

  // ─── Translations ──────────────────────────────────────────────────────────
  const T = {
    en: {
      // <title>
      pageTitle: 'SaveMyPixel — compliance infrastructure for paid social',
      // Meta description
      pageDesc: 'Server-side data infrastructure for regulated consumer brands running paid social.',

      // Nav
      navHow: 'How it works',
      navPricing: 'Pricing',
      navFaq: 'FAQ',
      navCta: 'Book a call',

      // Hero
      heroEyebrow: 'For peptides, GLP-1, health & fitness, and supplement brands',
      heroH1: 'Clean data.<br>Clean domain.<br>Live ads.',
      heroLead: 'SaveMyPixel sits between your store and Meta. Your main site stays exactly as it is. Meta sees a compliant destination and clean event data. Your pixel keeps firing. Your optimization keeps learning.',
      heroCta: 'Book a free consultation →',
      heroSeeHow: 'or see how it works',
      trustLabel: 'Used by brands running Meta ads in restricted categories',

      // Problem
      problemEyebrow: 'The problem',
      problemH2: 'Meta is flagging health and wellness brands like yours.',
      problemLead: "Ad rejections, disabled accounts, and flagged domains aren't random. They're stages of an enforcement process. Most brands don't see it happening until it's already advanced.",

      ev1Title: 'Disabled ad accounts',
      ev1Caption: 'Repeat rejections spiral into <strong>account-level enforcement</strong>. There is no appeal.',
      ev2Title: 'Flagged domains',
      ev2Caption: 'Meta classifies your domain, then <strong>blocks your events</strong>. You keep paying; nothing learns.',
      ev3Title: 'Rejected creative',
      ev3Caption: 'Creatives get <strong>rejected before delivery</strong>. Rejections stack, and they compound.',
      ev4Title: 'Signal collapse',
      ev4Caption: '<strong>Optimization resets.</strong> CPAs double within a week.',

      ladderEyebrow: 'Technical detail',
      ladderSumText: 'See the 4-stage enforcement ladder Meta runs on restricted domains',
      step0Level: 'Level 00', step0Name: 'Domain categorized', step0Desc: "Meta's crawler scans your destination URL and tags your domain as restricted. You receive no notification.",
      step1Level: 'Level 01', step1Name: 'Event metadata blocked', step1Desc: "Your pixel still fires, but Meta strips product names, values, and categories from incoming events before ingestion.",
      step2Level: 'Level 02', step2Name: 'Purchase events blocked', step2Desc: "The conversion signal Meta's algorithm optimizes on stops flowing. Delivery quality degrades across all campaigns.",
      step3Level: 'Level 03', step3Name: 'All events blocked', step3Desc: "Pixel data is dropped entirely. Your ad account has no signal to optimize on, and creative-level learning resets.",
      ladderFootSmall: "Not sure which level you're on?",
      ladderFootLink: 'Book a free compliance review',

      // Solution
      solutionEyebrow: 'The solution',
      solutionH2: 'Stay live with compliant Meta ads.',
      solutionLead: 'Four pieces of infrastructure that sit between your store and Meta. Customers land on your site and check out normally. Meta only ever sees a clean domain and compliant events.',

      sol1Title: 'Ad compliance pre-check',
      sol1Caption: 'We scan creatives for policy risk <strong>before</strong> they go live. Fix issues upfront, not after the rejection.',
      sol2Title: 'Domain masking',
      sol2Caption: 'Customers shop your real store. Meta only sees the <strong>compliant domain</strong>. Events stay clean and optimization stabilizes.',
      sol3Title: 'Website risk assessment',
      sol3Caption: 'We scan the <strong>images, copy, and markup</strong> on your landing page the way Meta\'s crawler does. Know your risk score before Meta assigns it.',
      sol4Title: 'Keyword cleansing',
      sol4Caption: 'Restricted terms are <strong>stripped from event payloads</strong> before they reach Meta. Your store keeps its copy. Meta sees a clean event.',

      solFlowEyebrow: 'Technical detail',
      solFlowSumText: 'See the full traffic and event flow — with vs. without SaveMyPixel',
      baWithout: 'Standard setup',
      baWithoutKicker: 'without savemypixel',
      baWith: 'With SaveMyPixel',
      baWithKicker: 'compliant routing',

      // How it works
      hiwEyebrow: 'How it works',
      hiwH2: 'Four components. One system.',
      hiw1Title: 'Compliant landing page',
      hiw1Desc: "Your ads point to a Meta-approved landing page on a clean domain. We help you set it up or you bring your own.",
      hiw2Title: 'Session stitching',
      hiw2Desc: "When a visitor clicks through to checkout, we pass session identity to your main store. Attribution stays intact. Nothing changes for the customer.",
      hiw3Title: 'Event cleansing',
      hiw3Desc: "Pixel and server events from both domains flow through our proxy. Restricted keywords are stripped from payloads. PII is hashed. The event source URL is rewritten to the compliant domain.",
      hiw4Title: 'Conversions API delivery',
      hiw4Desc: "Clean events are forwarded to Meta via CAPI using your pixel access token. Optimization resumes with compliant signal.",

      // Features
      featuresEyebrow: "What's included",
      featuresH2: 'Everything that keeps your account healthy.',
      feat1Name: 'Domain masking', feat1Desc: "Meta only sees your compliant landing page. Your main store stays yours.",
      feat2Name: 'Keyword cleansing', feat2Desc: "Restricted terms are stripped from event payloads, product feeds, and URLs before events reach Meta.",
      feat3Name: 'Pre-launch scanning', feat3Desc: "Ad creatives and landing pages are scanned against Meta's enforcement patterns before go-live.",
      feat4Name: 'Server-side events', feat4Desc: "Conversions API delivery from the compliant domain. Better match quality than browser pixel alone.",
      feat5Name: 'Session stitching', feat5Desc: "Identity persists across the compliant domain and your main store. Attribution and conversion tracking stay accurate.",
      feat6Name: 'Managed onboarding', feat6Desc: "Setup handled by our team. Domain selection, pixel configuration, Shopify app install, event testing. You don't touch code.",

      // Who it's for
      fitEyebrow: 'Qualifying',
      fitH2: 'Built specifically for restricted categories.',
      qualFitLabel: 'Fit',
      qualFitTitle: "You're running Meta ads and hitting restrictions",
      qualFit1: 'You sell peptides, GLP-1 products, or related therapeutics',
      qualFit2: 'You sell supplements, nootropics, or functional nutrition products',
      qualFit3: 'You sell health & fitness products Meta restricts (weight, sleep, hormones, recovery, performance)',
      qualFit4: 'Your ads get rejected, your accounts get disabled, or your domains get flagged',
      qualFit5: 'You run Meta ads as a primary acquisition channel',
      qualFit6: 'You\'re on Shopify or any custom commerce platform',
      qualNoLabel: 'Not a fit',
      qualNoTitle: "You need something we don't do",
      qualNo1: "You're not in a restricted category. You don't need us.",
      qualNo2: "You need ad management or creative production. We don't do that.",
      qualNo3: "You're looking for a way to circumvent Meta's policies. We don't do that either.",

      // Results
      resultsEyebrow: 'Outcomes',
      resultsH2: 'What the infrastructure does.',
      stat1Label: 'Performance lift', stat1Note: 'From server-side event delivery vs. browser pixel alone.',
      stat2Label: 'Event delivery rate', stat2Note: 'To Meta CAPI, measured in production.',
      stat3Label: 'Typical recovery time', stat3Note: 'For previously flagged domains to regain full event flow.',
      statsDisclaimer: "Results depend on account history, category, and prior enforcement. SaveMyPixel reduces risk and restores signal. It does not guarantee ad approval.",

      // Testimonials
      testimonialsEyebrow: 'From customers',
      testimonialsH2: 'How brands use SaveMyPixel.',
      quote1: 'We reduced ad rejections from 12 a week to zero. Pixel signal came back in under two weeks.',
      quote2: 'Our main store didn\'t change. Our Meta performance did. That was the point.',
      quote3: 'Setup was handled end-to-end. We didn\'t touch our Shopify theme once.',
      quotesFootLink: 'Read case studies',

      // Pricing
      pricingEyebrow: 'Pricing',
      pricingH2: 'One price. No surprises.',
      pricingLead: 'Flat monthly pricing based on your revenue. No usage fees. No percentage of revenue.',
      tierStarterName: 'Starter', tierStarterBracket: 'Up to $50K monthly revenue', tierStarterDesc: 'For brands just getting started on Meta.',
      tierStarterF1: '1 compliant domain', tierStarterF2: '10 ad scans per month', tierStarterF3: 'Domain masking', tierStarterF4: 'Keyword cleansing', tierStarterF5: 'CAPI delivery', tierStarterF6: 'Shopify or custom install', tierStarterF7: 'Email support',
      tierStarterCta: 'Start with Starter →',
      tierGrowthFlag: 'Most popular', tierGrowthName: 'Growth', tierGrowthBracket: 'Up to $500K monthly revenue', tierGrowthDesc: 'For brands scaling on Meta. Where most customers live.',
      tierGrowthInherit: 'Everything in Starter, plus:',
      tierGrowthF1: 'Up to 3 compliant domains', tierGrowthF2: '50 ad scans per month', tierGrowthF3: 'Managed onboarding', tierGrowthF4: 'Priority support (24hr)', tierGrowthF5: 'Quarterly compliance review',
      tierGrowthCta: 'Go with Growth →',
      tierScaleName: 'Scale', tierScaleBracket: 'Unlimited revenue', tierScaleDesc: 'For high-volume brands and multi-brand operators.',
      tierScaleInherit: 'Everything in Growth, plus:',
      tierScaleF1: 'Unlimited domains', tierScaleF2: 'Unlimited scans', tierScaleF3: 'Dedicated engineer', tierScaleF4: 'Dedicated Slack channel', tierScaleF5: '4-hour SLA',
      tierScaleCta: 'Talk to us →',
      reassure1: 'No usage fees. Ever.', reassure2: 'Switch plans anytime.', reassure3: 'Cancel anytime. No contracts.',

      // FAQ
      faqEyebrow: 'FAQ',
      faqH2: 'Questions we get often.',
      faqLead: 'If yours isn\'t here, email us at <a class="inline-link" href="mailto:hello@savemypixel.com">hello@savemypixel.com</a>. We usually reply same-day.',
      faq1Q: "How is this different from just using Meta's Conversions API directly?",
      faq1A: "CAPI alone doesn't solve domain categorization. If Meta has flagged your domain, sending events from it through CAPI still gets them blocked. We solve it by routing events from a separate compliant domain, and by cleansing payloads before they reach Meta. CAPI is the delivery mechanism. What we do is the compliance layer around it.",
      faq2Q: "Do I have to rebuild my site?",
      faq2A: "No. Your main store stays exactly as it is. We add one compliant landing page on a new domain. Ads point to the landing page, customers click through to your main store for checkout. Your Shopify theme, your product pages, your funnels — all untouched.",
      faq3Q: "How long until I see results?",
      faq3A: "For brands with a healthy ad account, event flow is restored within 48 hours of go-live. For flagged domains, Meta's optimization algorithm typically needs 7–14 days of clean signal to fully re-learn. Ad approval patterns tend to improve within the first week.",
      faq4Q: "What platforms do you support?",
      faq4A: "Shopify via our native app (fastest install, usually under an hour). Any other platform (WooCommerce, BigCommerce, custom builds) via our script tag and managed setup. If you're on Wix or Squarespace, talk to us first — we'll tell you honestly if it'll work.",
      faq5Q: "My domain is already flagged. Can you still help?",
      faq5A: "Yes. Most of our customers come to us after enforcement has already started. We don't un-flag your existing domain — that rarely works. What we do is route all future ad traffic through a new clean domain, which is what restores your pixel signal and optimization.",
      faq6Q: "Do I need a new Meta pixel?",
      faq6A: "Usually not. We route clean events through your existing pixel via its access token. You keep your historical data, learning, and audience signal. In rare cases where a pixel is deeply compromised, we'll recommend a new one and help you migrate.",
      faq7Q: "Do you manage ads or make creative?",
      faq7A: "No. We're data and compliance infrastructure. Your team or agency handles buying and creative. We work alongside most major agencies and can refer you to ones who specialize in restricted categories if you need one.",
      faq8Q: "How are you different from Popsixle?",
      faq8A: "Popsixle pioneered this space and built a great product. Our differences are in pricing and simplicity: we charge a flat monthly rate instead of base-plus-usage, and we handle unlimited revenue at the Scale tier. For most brands above $100K/mo in tracked revenue, we cost meaningfully less. For brands below $25K/mo, Popsixle is cheaper. Both tools work.",
      faq9Q: "What about PII and privacy?",
      faq9A: "All user data is hashed with SHA-256 before it reaches Meta. We never store raw PII longer than 24 hours. Events are sent via Conversions API using your pixel access token, not a user login. We support GDPR and CCPA deletion requests. SOC 2 certification is in progress.",
      faq10Q: "How does the revenue bracket work?",
      faq10A: "We look at the gross revenue from Purchase events we process for you each month. If you stay inside your bracket, your bill doesn't change. If you consistently exceed it (two months in a row), we'll reach out and recommend upgrading. Nobody gets a surprise bill or a throttled pixel.",
      faq11Q: "Is there a free trial?",
      faq11A: "We don't run a time-limited free trial. Instead, every prospect gets a free 20-minute compliance review with our team before signing up — we audit your domain, pixel, and Meta account health, and tell you honestly whether we can help. If you do sign up, we offer a 14-day money-back guarantee on your first month.",
      faq12Q: "Is this a policy workaround?",
      faq12A: "No. We remove restricted terms from event payloads and route events from a compliant domain. That's policy alignment and privacy-aware data delivery, both explicitly supported by Meta's own Conversions API specification. We don't spoof conversions, fake identities, or send disallowed data.",

      // Final CTA
      ctaEyebrow: 'Get started',
      ctaH2: "Let's look at your setup together.",
      ctaSub: "Book a free 20-minute compliance review. A member of our team will audit your domain, landing page, pixel setup, and current Meta account health. You'll walk away with a clear picture of where you stand and exactly what needs to change, whether you work with us or not.",
      ctaBtn: 'Book a free compliance review →',
      ctaMicro: '20 minutes. No sales pressure. You\'ll get real answers either way.',
      ctaR1: 'Real audit by our compliance team, not a sales rep',
      ctaR2: 'Specific findings you can act on, with or without us',
      ctaR3: 'Pick a time that works for you',
      ctaSecondary: 'Not ready for a call? <a href="mailto:hello@savemypixel.com" class="cta-secondary-link">Email hello@savemypixel.com</a> and tell us what\'s going on.',

      // Footer
      footerDesc: 'Compliance infrastructure for paid social. Server-side routing, event delivery, and audit tooling for regulated consumer brands.',
      footerProduct: 'Product', footerHiw: 'How it works', footerFeatures: 'Features', footerPricing: 'Pricing', footerDocs: 'Docs',
      footerCompany: 'Company', footerAbout: 'About', footerSecurity: 'Security', footerContact: 'Contact',
      footerLegal: 'Legal', footerTerms: 'Terms', footerPrivacy: 'Privacy', footerDpa: 'DPA',
      footerStatus: 'Status', footerChangelog: 'Changelog',
      footerCopyright: '© 2026 savemypixel inc.',
      footerDisclaimer: 'not affiliated with meta platforms, inc.',

      // Booking modal
      bookEyebrow: 'Free compliance review',
      bookTitle: 'Book your 20-minute call.',
      bookSub: 'A real audit of your domain, landing page, and pixel setup. No sales pressure — clear answers either way.',
      bookLabelName: 'Name', bookPlaceholderName: 'Your full name',
      bookLabelPhone: 'Phone', bookPlaceholderPhone: '+1 (555) 555-1234',
      bookLabelEmail: 'Email', bookPlaceholderEmail: 'you@brand.com',
      bookLabelRevenue: 'Monthly revenue',
      bookRevenueHint: 'USD',
      bookRev1: '$0 – $50K', bookRev2: '$50K – $100K', bookRev3: '$100K – $300K', bookRev4: '$300K+',
      bookLabelIndustry: 'Industry',
      bookIndustryPlaceholder: 'Select your category',
      bookInd1: 'Peptides', bookInd2: 'GLP-1 / weight loss', bookInd3: 'Supplements & nootropics',
      bookInd4: 'Hormones & testosterone', bookInd5: 'Sleep & recovery', bookInd6: 'Performance & fitness',
      bookInd7: 'Functional nutrition', bookInd8: 'Other regulated health & wellness',
      bookSubmit: 'Book my compliance review →',
      bookFineprint: '20-min call · No commitment · Your details aren\'t shared',
      bookSuccessTitle: "Got it. We'll be in touch.",
      bookSuccessSub: "Our compliance team will email you within one business day with a few time options for your review call.",
      bookSuccessClose: 'Close',

      // Validation errors
      errName: 'Please enter your name.',
      errPhone: 'Enter a valid phone number.',
      errEmail: 'Enter a valid email address.',
      errRevenue: 'Pick a revenue range.',
      errIndustry: 'Select your industry.',
      errGeneric: 'Something went wrong. Please try again.',
    },

    pt: {
      pageTitle: 'SaveMyPixel — infraestrutura de conformidade para tráfego pago',
      pageDesc: 'Infraestrutura de dados server-side para marcas regulamentadas que rodam anúncios no Meta.',

      navHow: 'Como funciona',
      navPricing: 'Preços',
      navFaq: 'FAQ',
      navCta: 'Agendar chamada',

      heroEyebrow: 'Para marcas de peptídeos, GLP-1, saúde & fitness e suplementos',
      heroH1: 'Dados limpos.<br>Domínio limpo.<br>Anúncios no ar.',
      heroLead: 'O SaveMyPixel fica entre sua loja e o Meta. Seu site principal continua exatamente como está. O Meta vê um destino em conformidade e dados de eventos limpos. Seu pixel continua disparando. Sua otimização continua aprendendo.',
      heroCta: 'Agendar consultoria gratuita →',
      heroSeeHow: 'ou veja como funciona',
      trustLabel: 'Usado por marcas que rodam anúncios no Meta em categorias restritas',

      problemEyebrow: 'O problema',
      problemH2: 'O Meta está bloqueando marcas de saúde e bem-estar como a sua.',
      problemLead: 'Rejeições de anúncios, contas desativadas e domínios sinalizados não são aleatórios. São etapas de um processo de aplicação de políticas. A maioria das marcas não percebe o que está acontecendo até já estar em estágio avançado.',

      ev1Title: 'Contas de anúncios desativadas',
      ev1Caption: 'Rejeições repetidas levam a <strong>aplicação de políticas em nível de conta</strong>. Não há recurso.',
      ev2Title: 'Domínios sinalizados',
      ev2Caption: 'O Meta classifica seu domínio e <strong>bloqueia seus eventos</strong>. Você continua pagando; nada aprende.',
      ev3Title: 'Criativos rejeitados',
      ev3Caption: 'Os criativos são <strong>rejeitados antes da veiculação</strong>. As rejeições se acumulam e se agravam.',
      ev4Title: 'Colapso de sinal',
      ev4Caption: '<strong>A otimização reinicia.</strong> O CPA dobra em menos de uma semana.',

      ladderEyebrow: 'Detalhe técnico',
      ladderSumText: 'Veja os 4 estágios de aplicação de políticas que o Meta executa em domínios restritos',
      step0Level: 'Nível 00', step0Name: 'Domínio categorizado', step0Desc: 'O crawler do Meta escaneia sua URL de destino e marca seu domínio como restrito. Você não recebe nenhuma notificação.',
      step1Level: 'Nível 01', step1Name: 'Metadados de eventos bloqueados', step1Desc: 'Seu pixel ainda dispara, mas o Meta remove nomes de produtos, valores e categorias dos eventos recebidos antes da ingestão.',
      step2Level: 'Nível 02', step2Name: 'Eventos de compra bloqueados', step2Desc: 'O sinal de conversão que o algoritmo do Meta otimiza para de fluir. A qualidade de entrega degrada em todas as campanhas.',
      step3Level: 'Nível 03', step3Name: 'Todos os eventos bloqueados', step3Desc: 'Os dados do pixel são descartados completamente. Sua conta de anúncios não tem sinal para otimizar e o aprendizado de criativos reinicia.',
      ladderFootSmall: 'Não sabe em qual nível você está?',
      ladderFootLink: 'Agendar revisão gratuita',

      solutionEyebrow: 'A solução',
      solutionH2: 'Continue no ar com anúncios em conformidade.',
      solutionLead: 'Quatro peças de infraestrutura entre sua loja e o Meta. Clientes chegam no seu site e finalizam a compra normalmente. O Meta só vê um domínio limpo e eventos em conformidade.',

      sol1Title: 'Verificação prévia de conformidade',
      sol1Caption: 'Verificamos criativos quanto ao risco de política <strong>antes</strong> de irem ao ar. Corrija problemas na origem, não após a rejeição.',
      sol2Title: 'Mascaramento de domínio',
      sol2Caption: 'Clientes compram na sua loja real. O Meta só vê o <strong>domínio em conformidade</strong>. Os eventos ficam limpos e a otimização se estabiliza.',
      sol3Title: 'Avaliação de risco do site',
      sol3Caption: 'Escaneamos as <strong>imagens, textos e markup</strong> da sua página de destino da mesma forma que o crawler do Meta. Saiba sua pontuação de risco antes que o Meta a atribua.',
      sol4Title: 'Limpeza de palavras-chave',
      sol4Caption: 'Termos restritos são <strong>removidos dos payloads de eventos</strong> antes de chegarem ao Meta. Sua loja mantém o texto. O Meta vê um evento limpo.',

      solFlowEyebrow: 'Detalhe técnico',
      solFlowSumText: 'Veja o fluxo completo de tráfego e eventos — com e sem o SaveMyPixel',
      baWithout: 'Configuração padrão',
      baWithoutKicker: 'sem o savemypixel',
      baWith: 'Com o SaveMyPixel',
      baWithKicker: 'roteamento em conformidade',

      hiwEyebrow: 'Como funciona',
      hiwH2: 'Quatro componentes. Um sistema.',
      hiw1Title: 'Página de destino em conformidade',
      hiw1Desc: 'Seus anúncios apontam para uma página de destino aprovada pelo Meta em um domínio limpo. Nós ajudamos a configurar ou você traz a sua própria.',
      hiw2Title: 'Vinculação de sessão',
      hiw2Desc: 'Quando um visitante clica para ir ao checkout, passamos a identidade de sessão para sua loja principal. A atribuição permanece intacta. Nada muda para o cliente.',
      hiw3Title: 'Limpeza de eventos',
      hiw3Desc: 'Eventos de pixel e server-side de ambos os domínios passam pelo nosso proxy. Palavras-chave restritas são removidas dos payloads. PII é hasheado. A URL de origem do evento é reescrita para o domínio em conformidade.',
      hiw4Title: 'Entrega via Conversions API',
      hiw4Desc: 'Eventos limpos são encaminhados ao Meta via CAPI usando seu token de acesso ao pixel. A otimização retoma com sinal em conformidade.',

      featuresEyebrow: 'O que está incluído',
      featuresH2: 'Tudo que mantém sua conta saudável.',
      feat1Name: 'Mascaramento de domínio', feat1Desc: 'O Meta só vê sua página de destino em conformidade. Sua loja principal continua sendo sua.',
      feat2Name: 'Limpeza de palavras-chave', feat2Desc: 'Termos restritos são removidos de payloads de eventos, feeds de produtos e URLs antes de chegarem ao Meta.',
      feat3Name: 'Verificação pré-lançamento', feat3Desc: 'Criativos e páginas de destino são escaneados conforme os padrões de aplicação de políticas do Meta antes do lançamento.',
      feat4Name: 'Eventos server-side', feat4Desc: 'Entrega via Conversions API a partir do domínio em conformidade. Melhor qualidade de correspondência que o pixel browser sozinho.',
      feat5Name: 'Vinculação de sessão', feat5Desc: 'A identidade persiste entre o domínio em conformidade e sua loja principal. Atribuição e rastreamento de conversões permanecem precisos.',
      feat6Name: 'Onboarding gerenciado', feat6Desc: 'Setup realizado pela nossa equipe. Seleção de domínio, configuração de pixel, instalação do app Shopify, teste de eventos. Você não toca no código.',

      fitEyebrow: 'Qualificação',
      fitH2: 'Construído especificamente para categorias restritas.',
      qualFitLabel: 'Compatível',
      qualFitTitle: 'Você roda anúncios no Meta e está enfrentando restrições',
      qualFit1: 'Você vende peptídeos, produtos GLP-1 ou terapêuticos relacionados',
      qualFit2: 'Você vende suplementos, nootrópicos ou produtos de nutrição funcional',
      qualFit3: 'Você vende produtos de saúde & fitness que o Meta restringe (peso, sono, hormônios, recuperação, performance)',
      qualFit4: 'Seus anúncios são rejeitados, suas contas são desativadas ou seus domínios são sinalizados',
      qualFit5: 'Você usa anúncios no Meta como principal canal de aquisição',
      qualFit6: 'Você usa Shopify ou qualquer outra plataforma de e-commerce',
      qualNoLabel: 'Não compatível',
      qualNoTitle: 'Você precisa de algo que não fazemos',
      qualNo1: 'Você não está em uma categoria restrita. Você não precisa de nós.',
      qualNo2: 'Você precisa de gestão de anúncios ou produção de criativo. Não fazemos isso.',
      qualNo3: 'Você está procurando uma forma de contornar as políticas do Meta. Também não fazemos isso.',

      resultsEyebrow: 'Resultados',
      resultsH2: 'O que a infraestrutura faz.',
      stat1Label: 'Aumento de performance', stat1Note: 'Com entrega server-side vs. pixel browser sozinho.',
      stat2Label: 'Taxa de entrega de eventos', stat2Note: 'Para o Meta CAPI, medido em produção.',
      stat3Label: 'Tempo típico de recuperação', stat3Note: 'Para domínios previamente sinalizados recuperarem o fluxo completo de eventos.',
      statsDisclaimer: 'Os resultados dependem do histórico da conta, categoria e aplicações anteriores de políticas. O SaveMyPixel reduz riscos e restaura o sinal. Não garante aprovação de anúncios.',

      testimonialsEyebrow: 'Clientes',
      testimonialsH2: 'Como marcas usam o SaveMyPixel.',
      quote1: 'Reduzimos as rejeições de anúncios de 12 por semana para zero. O sinal do pixel voltou em menos de duas semanas.',
      quote2: 'Nossa loja principal não mudou. Nossa performance no Meta mudou. Esse era o objetivo.',
      quote3: 'O setup foi gerenciado do início ao fim. Não tocamos no nosso tema do Shopify nenhuma vez.',
      quotesFootLink: 'Ler estudos de caso',

      pricingEyebrow: 'Preços',
      pricingH2: 'Um preço. Sem surpresas.',
      pricingLead: 'Preço mensal fixo baseado no seu faturamento. Sem taxas de uso. Sem percentual do faturamento.',
      tierStarterName: 'Starter', tierStarterBracket: 'Até R$250K de faturamento mensal', tierStarterDesc: 'Para marcas que estão começando no Meta.',
      tierStarterF1: '1 domínio em conformidade', tierStarterF2: '10 verificações de anúncios por mês', tierStarterF3: 'Mascaramento de domínio', tierStarterF4: 'Limpeza de palavras-chave', tierStarterF5: 'Entrega via CAPI', tierStarterF6: 'Instalação no Shopify ou customizada', tierStarterF7: 'Suporte por e-mail',
      tierStarterCta: 'Começar com o Starter →',
      tierGrowthFlag: 'Mais popular', tierGrowthName: 'Growth', tierGrowthBracket: 'Até R$2,5M de faturamento mensal', tierGrowthDesc: 'Para marcas escalando no Meta. Onde a maioria dos nossos clientes está.',
      tierGrowthInherit: 'Tudo do Starter, mais:',
      tierGrowthF1: 'Até 3 domínios em conformidade', tierGrowthF2: '50 verificações de anúncios por mês', tierGrowthF3: 'Onboarding gerenciado', tierGrowthF4: 'Suporte prioritário (24h)', tierGrowthF5: 'Revisão trimestral de conformidade',
      tierGrowthCta: 'Ir com o Growth →',
      tierScaleName: 'Scale', tierScaleBracket: 'Faturamento ilimitado', tierScaleDesc: 'Para marcas de alto volume e operadores multi-marca.',
      tierScaleInherit: 'Tudo do Growth, mais:',
      tierScaleF1: 'Domínios ilimitados', tierScaleF2: 'Verificações ilimitadas', tierScaleF3: 'Engenheiro dedicado', tierScaleF4: 'Canal dedicado no Slack', tierScaleF5: 'SLA de 4 horas',
      tierScaleCta: 'Fale conosco →',
      reassure1: 'Sem taxas de uso. Jamais.', reassure2: 'Troque de plano a qualquer momento.', reassure3: 'Cancele a qualquer momento. Sem contratos.',

      faqEyebrow: 'FAQ',
      faqH2: 'Perguntas que recebemos com frequência.',
      faqLead: 'Se a sua não está aqui, nos envie um e-mail para <a class="inline-link" href="mailto:hello@savemypixel.com">hello@savemypixel.com</a>. Geralmente respondemos no mesmo dia.',
      faq1Q: 'Qual a diferença de usar diretamente a Conversions API do Meta?',
      faq1A: 'O CAPI sozinho não resolve a categorização de domínio. Se o Meta sinalizou seu domínio, enviar eventos dele via CAPI ainda os bloqueia. Resolvemos isso roteando eventos de um domínio em conformidade separado e limpando os payloads antes de chegarem ao Meta. O CAPI é o mecanismo de entrega. O que fazemos é a camada de conformidade ao redor dele.',
      faq2Q: 'Preciso reconstruir meu site?',
      faq2A: 'Não. Sua loja principal fica exatamente como está. Adicionamos uma página de destino em conformidade em um novo domínio. Os anúncios apontam para a página de destino, os clientes clicam para sua loja principal no checkout. Seu tema do Shopify, suas páginas de produto, seus funis — tudo intocado.',
      faq3Q: 'Quanto tempo até ver resultados?',
      faq3A: 'Para marcas com uma conta de anúncios saudável, o fluxo de eventos é restaurado em até 48 horas após o lançamento. Para domínios sinalizados, o algoritmo de otimização do Meta normalmente precisa de 7 a 14 dias de sinal limpo para reaprender completamente. Os padrões de aprovação de anúncios tendem a melhorar na primeira semana.',
      faq4Q: 'Quais plataformas vocês suportam?',
      faq4A: 'Shopify via nosso app nativo (instalação mais rápida, geralmente em menos de uma hora). Qualquer outra plataforma (WooCommerce, BigCommerce, builds customizados) via script tag e setup gerenciado. Se você usa Wix ou Squarespace, fale conosco primeiro — diremos honestamente se vai funcionar.',
      faq5Q: 'Meu domínio já está sinalizado. Vocês ainda podem ajudar?',
      faq5A: 'Sim. A maioria dos nossos clientes chega até nós depois que a aplicação de políticas já começou. Não removemos a sinalização do seu domínio existente — isso raramente funciona. O que fazemos é rotear todo o tráfego futuro de anúncios por um novo domínio limpo, que é o que restaura o sinal do seu pixel e a otimização.',
      faq6Q: 'Preciso de um novo pixel do Meta?',
      faq6A: 'Geralmente não. Roteamos eventos limpos pelo seu pixel existente via token de acesso. Você mantém seus dados históricos, aprendizado e sinal de audiência. Em casos raros onde um pixel está muito comprometido, recomendaremos um novo e ajudaremos na migração.',
      faq7Q: 'Vocês gerenciam anúncios ou fazem criativo?',
      faq7A: 'Não. Somos infraestrutura de dados e conformidade. Sua equipe ou agência cuida das compras e do criativo. Trabalhamos ao lado da maioria das grandes agências e podemos indicar as que se especializam em categorias restritas, se precisar.',
      faq8Q: 'Como vocês são diferentes do Popsixle?',
      faq8A: 'O Popsixle foi pioneiro nesse espaço e criou um ótimo produto. Nossas diferenças estão no preço e na simplicidade: cobramos uma taxa mensal fixa em vez de base mais uso, e tratamos faturamento ilimitado no plano Scale. Para a maioria das marcas acima de R$500K/mês em receita rastreada, custamos significativamente menos. Para marcas abaixo de R$130K/mês, o Popsixle é mais barato. Ambas as ferramentas funcionam.',
      faq9Q: 'E quanto a PII e privacidade?',
      faq9A: 'Todos os dados de usuário são hasheados com SHA-256 antes de chegar ao Meta. Nunca armazenamos PII bruto por mais de 24 horas. Os eventos são enviados via Conversions API usando seu token de acesso ao pixel, não um login de usuário. Suportamos solicitações de exclusão LGPD, GDPR e CCPA. A certificação SOC 2 está em andamento.',
      faq10Q: 'Como funciona a faixa de faturamento?',
      faq10A: 'Verificamos a receita bruta dos eventos de Compra que processamos para você a cada mês. Se você ficar dentro da sua faixa, sua cobrança não muda. Se você consistentemente exceder (dois meses seguidos), entraremos em contato e recomendaremos um upgrade. Ninguém recebe uma cobrança surpresa ou um pixel throttled.',
      faq11Q: 'Há um teste gratuito?',
      faq11A: 'Não fazemos teste gratuito com tempo limitado. Em vez disso, cada cliente em potencial recebe uma revisão gratuita de conformidade de 20 minutos com nossa equipe antes de assinar — auditamos seu domínio, pixel e saúde da conta no Meta, e dizemos honestamente se podemos ajudar. Se você assinar, oferecemos garantia de 14 dias com devolução do dinheiro no primeiro mês.',
      faq12Q: 'Isso é uma forma de burlar as políticas?',
      faq12A: 'Não. Removemos termos restritos dos payloads de eventos e roteamos eventos de um domínio em conformidade. Isso é alinhamento de políticas e entrega de dados com consciência de privacidade, ambos explicitamente suportados pela própria especificação da Conversions API do Meta. Não falsificamos conversões, identidades ou enviamos dados proibidos.',

      ctaEyebrow: 'Começar',
      ctaH2: 'Vamos analisar sua configuração juntos.',
      ctaSub: 'Agende uma revisão gratuita de conformidade de 20 minutos. Um membro da nossa equipe auditará seu domínio, página de destino, configuração de pixel e saúde atual da conta no Meta. Você sairá com uma visão clara de onde está e exatamente o que precisa mudar — seja trabalhando conosco ou não.',
      ctaBtn: 'Agendar revisão gratuita →',
      ctaMicro: '20 minutos. Sem pressão de vendas. Você terá respostas reais de qualquer jeito.',
      ctaR1: 'Auditoria real pela nossa equipe de conformidade, não um vendedor',
      ctaR2: 'Descobertas específicas que você pode agir, com ou sem nós',
      ctaR3: 'Escolha um horário que funcione para você',
      ctaSecondary: 'Não está pronto para uma chamada? <a href="mailto:hello@savemypixel.com" class="cta-secondary-link">Envie um e-mail para hello@savemypixel.com</a> e conte o que está acontecendo.',

      footerDesc: 'Infraestrutura de conformidade para tráfego pago. Roteamento server-side, entrega de eventos e ferramentas de auditoria para marcas de consumo regulamentadas.',
      footerProduct: 'Produto', footerHiw: 'Como funciona', footerFeatures: 'Funcionalidades', footerPricing: 'Preços', footerDocs: 'Docs',
      footerCompany: 'Empresa', footerAbout: 'Sobre', footerSecurity: 'Segurança', footerContact: 'Contato',
      footerLegal: 'Jurídico', footerTerms: 'Termos', footerPrivacy: 'Privacidade', footerDpa: 'DPA',
      footerStatus: 'Status', footerChangelog: 'Changelog',
      footerCopyright: '© 2026 savemypixel inc.',
      footerDisclaimer: 'não afiliado à meta platforms, inc.',

      bookEyebrow: 'Revisão gratuita de conformidade',
      bookTitle: 'Agende sua chamada de 20 minutos.',
      bookSub: 'Uma auditoria real do seu domínio, página de destino e configuração de pixel. Sem pressão de vendas — respostas claras de qualquer jeito.',
      bookLabelName: 'Nome', bookPlaceholderName: 'Seu nome completo',
      bookLabelPhone: 'Telefone', bookPlaceholderPhone: '+55 (11) 91234-5678',
      bookLabelEmail: 'E-mail', bookPlaceholderEmail: 'voce@marca.com',
      bookLabelRevenue: 'Faturamento mensal',
      bookRevenueHint: 'BRL',
      bookRev1: 'R$0 – R$250K', bookRev2: 'R$250K – R$500K', bookRev3: 'R$500K – R$1,5M', bookRev4: 'R$1,5M+',
      bookLabelIndustry: 'Segmento',
      bookIndustryPlaceholder: 'Selecione sua categoria',
      bookInd1: 'Peptídeos', bookInd2: 'GLP-1 / emagrecimento', bookInd3: 'Suplementos & nootrópicos',
      bookInd4: 'Hormônios & testosterona', bookInd5: 'Sono & recuperação', bookInd6: 'Performance & fitness',
      bookInd7: 'Nutrição funcional', bookInd8: 'Outros: saúde & bem-estar regulamentados',
      bookSubmit: 'Agendar minha revisão →',
      bookFineprint: 'Chamada de 20 min · Sem compromisso · Seus dados não são compartilhados',
      bookSuccessTitle: 'Recebido. Entraremos em contato.',
      bookSuccessSub: 'Nossa equipe de conformidade enviará um e-mail em até um dia útil com algumas opções de horário para sua chamada de revisão.',
      bookSuccessClose: 'Fechar',

      errName: 'Por favor, insira seu nome.',
      errPhone: 'Insira um número de telefone válido.',
      errEmail: 'Insira um endereço de e-mail válido.',
      errRevenue: 'Selecione uma faixa de faturamento.',
      errIndustry: 'Selecione seu segmento.',
      errGeneric: 'Algo deu errado. Tente novamente.',
    },
  };

  // ─── DOM application ───────────────────────────────────────────────────────
  function applyLocale(lang) {
    const t = T[lang];
    if (!t) return;

    // html lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // <title> and meta description
    document.title = t.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.pageDesc);

    // Generic helper: set text/HTML for elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] === undefined) return;
      // <option> elements don't support innerHTML safely in all browsers
      if (el.tagName === 'OPTION') {
        el.textContent = t[key];
      } else {
        el.innerHTML = t[key];
      }
    });

    // Placeholders (inputs)
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Active flag state
    document.querySelectorAll('.lang-flag').forEach((btn) => {
      btn.classList.toggle('lang-flag--active', btn.dataset.lang === lang);
    });

    // Expose error messages for booking.js to pick up
    window.SMP_I18N = t;
  }

  // ─── Locale resolution ─────────────────────────────────────────────────────
  async function detectLocaleByIp() {
    try {
      // ipapi.co is free, no key needed, returns JSON
      const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
      if (!res.ok) return null;
      const data = await res.json();
      const country = (data.country_code || '').toUpperCase();
      if (country === 'BR') return 'pt';
      if (country === 'US') return 'en';
      return null; // let caller decide fallback
    } catch {
      return null;
    }
  }

  async function resolveLocale() {
    // 1. User already picked a language
    const saved = localStorage.getItem(LS_KEY);
    if (saved === 'en' || saved === 'pt') return saved;

    // 2. Browser language hint
    const browserLang = (navigator.language || '').toLowerCase();
    if (browserLang.startsWith('pt')) return 'pt';

    // 3. IP-based detection
    const ipLocale = await detectLocaleByIp();
    if (ipLocale) return ipLocale;

    // 4. Default
    return 'en';
  }

  // ─── Public API ────────────────────────────────────────────────────────────
  window.SMP_setLocale = function (lang) {
    if (!T[lang]) return;
    localStorage.setItem(LS_KEY, lang);
    applyLocale(lang);
  };

  // ─── Boot ──────────────────────────────────────────────────────────────────
  // Apply immediately from cache/browser hint (no flicker for returning users)
  const cached = localStorage.getItem(LS_KEY);
  const browserHint = (navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : null;
  applyLocale(cached || browserHint || 'en');

  // Then confirm/override with IP detection (async, only if no saved preference)
  if (!cached) {
    resolveLocale().then((lang) => {
      if (lang !== (browserHint || 'en')) {
        applyLocale(lang);
      }
    });
  }
})();
