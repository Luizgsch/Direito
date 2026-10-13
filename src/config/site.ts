export type PracticeArea = {
  slug: string;
  title: string;
  summary: string;
  introduction: string;
  topics: { title: string; text: string }[];
  preparation: string[];
};

export type ProfessionalPhoto = {
  src: string;
  alt: string;
  position?: string;
  fit?: "cover" | "contain";
};

export const site = {
  name: "Miguel Avelar",
  author: "dev_norm",
  conceptual: true,
  indexing: false,
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Projeto conceitual da dev_norm: uma apresentação informativa sobre Direito de Família e Sucessões. Miguel Avelar é fictício e não há atendimento jurídico ativo.",
  photo: null as ProfessionalPhoto | null,
  photos: {
    hero: null as ProfessionalPhoto | null,
    about: null as ProfessionalPhoto | null,
    context: null as ProfessionalPhoto | null,
  },
  credentials: [] as string[],
  contact: {
    demoPhone: "(00) 0000-0000 · fictício",
    demoEmail: "contato@exemplo.invalid · fictício",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || null,
    address: null as string | null,
    hours: null as string | null,
  },
  navigation: [
    { label: "Início", href: "/#inicio" },
    { label: "Atuação", href: "/#atuacao" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Como funciona", href: "/#atendimento" },
    { label: "Dúvidas", href: "/#duvidas" },
    { label: "Contato", href: "/#contato" },
  ],
  interface: {
    skip: "Pular para o conteúdo",
    home: "Início",
    menu: "Menu",
    close: "Fechar",
    navigation: "Navegação principal",
    required: "(obrigatório)",
    newTab: "(abre em outra aba)",
    homeLabel: "início",
    noService: "Não há atendimento jurídico ativo.",
    portfolio: "Projeto conceitual · Portfólio",
    paths: "Caminho da página",
  },
  pages: {
    home: { title: "Família e Sucessões" },
    about: {
      title: "Sobre a apresentação",
      description:
        "Conheça o projeto conceitual da dev_norm e o espaço preparado para uma biografia profissional real. Miguel Avelar é fictício.",
      intro:
        "Um projeto de portfólio com informações de exemplo. Sem credenciais inventadas, sem atendimento jurídico ativo.",
      themes: "Conhecer os temas",
      principlesTitle: "Uma apresentação que prioriza compreensão.",
    },
    areas: {
      title: "Áreas de atuação",
      description:
        "Conteúdo de exemplo sobre Família e Sucessões: situações, temas e dúvidas para uma conversa inicial. Projeto conceitual sem atendimento ativo.",
      readAction: "Compreender",
      note: "Conteúdo informativo de exemplo. As possibilidades aplicáveis a uma situação dependem de análise individual por um profissional habilitado.",
    },
    area: {
      contents: "Nesta página",
      topicsNavigation: "Tópicos da área",
      preparationTitle: "Antes de uma conversa.",
      disclaimer:
        "Este conteúdo é geral e não substitui aconselhamento individual. Nesta demonstração, não há análise de casos nem atendimento jurídico.",
      action: "Experimentar preparo de mensagem",
      sourcesTitle: "Fontes para leitura.",
      sourcesText:
        "Referências oficiais para consulta. Requisitos e situações concretas precisam de verificação profissional.",
      relatedTitle: "Conheça também.",
      metadataNote:
        "Conteúdo informativo de uma demonstração fictícia, sem atendimento jurídico.",
    },
    contact: {
      title: "Preparar uma mensagem",
      description:
        "Prepare, revise e copie uma mensagem inicial no próprio navegador. Esta demonstração não envia dados nem oferece atendimento jurídico.",
      privacyQuestion: "Como os dados são utilizados?",
      privacyAction: "Leia o aviso de privacidade.",
    },
    privacy: {
      title: "Aviso de privacidade",
      description:
        "Entenda o preparo local de mensagens, a cópia para a área de transferência e os limites de coleta desta demonstração.",
    },
  },
  notice: "Projeto conceitual da dev_norm · Profissional fictício · Sem atendimento jurídico ativo",
  fictionNote:
    "Miguel Avelar é um personagem fictício, criado para fins de demonstração deste projeto.",
  hero: {
    titleLead: "Quando a família muda,",
    titleEnd: "surgem decisões que não cabem em respostas prontas.",
    description:
      "Divórcio, guarda, inventário e planejamento sucessório envolvem pessoas, documentos e escolhas diferentes. Conheça os assuntos e as perguntas que podem orientar uma primeira conversa.",
    primary: "Conhecer as áreas de atuação",
    secondary: "Como funciona o contato",
  },
  areasIntro: {
    title: "Assuntos distintos. Uma visão de conjunto.",
    description:
      "Temas que envolvem vínculos, responsabilidades e a organização do patrimônio. Conheça o que pode fazer parte de uma conversa com um advogado.",
  },
  about: {
    title: "Uma apresentação feita com transparência.",
    homeTitle: "Quem está nesta apresentação.",
    homeText:
      "Miguel Avelar é o personagem desta apresentação de Direito de Família e Sucessões. A proposta reúne temas que surgem quando uma relação termina, a rotina dos filhos muda ou é preciso organizar a transmissão de bens.",
    homeNote:
      "Em um site real, este espaço contará a trajetória do profissional, com fotografia, biografia e identificação confirmadas por ele.",
    homeAction: "Sobre a apresentação",
    paragraphs: [
      "Miguel Avelar é um nome fictício. Este site é um projeto conceitual da dev_norm, criado para demonstrar uma apresentação profissional de advocacia. Não representa um escritório, não oferece atendimento e não estabelece relação entre advogado e cliente.",
      "A proposta reúne conteúdo de exemplo sobre Direito de Família e Sucessões, uma navegação direta e uma experiência de contato que prepara mensagens no próprio navegador.",
      "Em um projeto real, este espaço apresentará a trajetória, as áreas de atuação e os dados profissionais confirmados pelo advogado. A fotografia, a biografia e a identificação profissional serão fornecidas por ele antes da publicação.",
    ],
    biography: [] as string[],
    principles: [
      {
        title: "Informação compreensível",
        text: "Textos que explicam os assuntos e ajudam a organizar dúvidas, sem antecipar conclusões sobre uma situação individual.",
      },
      {
        title: "Atenção ao contexto",
        text: "Relações familiares e decisões patrimoniais têm particularidades. Uma análise responsável depende dos fatos e dos documentos pertinentes.",
      },
      {
        title: "Expectativas claras",
        text: "Em um atendimento real, escopo, etapas e condições precisam ser definidos com transparência, sem promessa de resultado.",
      },
    ],
  },
  process: {
    title: "O que esperar de um primeiro contato.",
    steps: [
      {
        title: "Indicar o assunto",
        text: "Divórcio, guarda, inventário ou planejamento? Informe o tema em linhas gerais e sua preferência de retorno. Não envie documentos ou relatos íntimos.",
      },
      {
        title: "Organizar as perguntas",
        text: "Em uma conversa real, o profissional identifica o que precisa ser esclarecido e quais informações serão relevantes. O canal para compartilhar documentos é combinado depois.",
      },
      {
        title: "Entender as possibilidades",
        text: "Depois da análise, o advogado explica os caminhos possíveis e seus limites. Acordos, procedimentos e medidas dependem das particularidades de cada situação.",
      },
      {
        title: "Definir o acompanhamento",
        text: "Antes de iniciar um trabalho, são combinados o escopo, as condições, os canais e a frequência de retorno. Este exemplo não representa uma contratação nem uma sequência obrigatória.",
      },
    ],
  },
  faq: {
    title: "Perguntas que ajudam a começar.",
    items: [
      {
        question: "O divórcio sempre precisa de um processo judicial?",
        answer:
          "Não necessariamente. Há situações em que a via extrajudicial pode ser admitida, mas o consenso, a documentação e as questões relativas aos filhos precisam ser verificados. O procedimento adequado depende da análise de um advogado e dos requisitos vigentes.",
      },
      {
        question: "O que levar a uma primeira conversa?",
        answer:
          "Em um site real, nome, tema geral e preferência de retorno costumam ajudar a organizar a conversa. Evite enviar documentos, dados de crianças, informações de saúde ou relatos íntimos antes de combinar um canal adequado com o profissional.",
      },
      {
        question: "O que é considerado ao tratar da guarda dos filhos?",
        answer:
          "As necessidades dos filhos, a rotina de cuidados e as condições da família são relevantes. Guarda e convivência são assuntos relacionados, mas distintos. A definição exige análise individual; não existe uma organização única que sirva para todas as famílias.",
      },
      {
        question: "Inventário e planejamento sucessório são a mesma coisa?",
        answer:
          "São temas diferentes. O inventário organiza questões patrimoniais após um falecimento. O planejamento considera escolhas de organização e transmissão de bens em vida, respeitando limites legais. As páginas de cada assunto explicam essas diferenças e as perguntas iniciais.",
      },
      {
        question: "Um acordo dispensa orientação profissional?",
        answer:
          "O consenso não elimina a necessidade de entender os efeitos e a forma de formalizar uma decisão. Um advogado pode verificar direitos, obrigações e requisitos do procedimento. Um texto geral não substitui essa avaliação.",
      },
      {
        question: "Guarda compartilhada significa dividir o tempo igualmente?",
        answer:
          "Não necessariamente. Responsabilidades e organização da convivência são questões relacionadas, mas distintas. A rotina precisa considerar as necessidades dos filhos e o contexto familiar; uma distribuição de tempo não pode ser definida por uma regra genérica neste site.",
      },
      {
        question: "Quando o inventário pode ser feito em cartório?",
        answer:
          "É preciso verificar a documentação, os interessados e os requisitos vigentes. Consenso, testamento e participação de menores ou incapazes exigem análise específica. Esta página não faz essa avaliação nem substitui orientação profissional.",
      },
    ],
  },
  contactContent: {
    title: "Para começar, basta indicar o assunto.",
    intro:
      "Esta é uma demonstração. Selecione o tema e prepare uma mensagem breve, sem incluir documentos ou informações sensíveis.",
    demoNotice:
      "Prepare, revise e copie. A demonstração não envia mensagens.",
    homeText:
      "Selecione o tema, prepare uma mensagem breve e copie o texto. Esta demonstração não envia dados nem pede documentos ou relatos íntimos.",
    action: "Preparar uma mensagem",
    disclaimer:
      "Não inclua documentos, nomes de terceiros ou detalhes sensíveis. Esta ferramenta não realiza consultas jurídicas.",
  },
  form: {
    title: "Prepare sua mensagem",
    nameLabel: "Seu nome",
    namePlaceholder: "Como prefere ser chamado?",
    topicLabel: "Assunto geral",
    topicPlaceholder: "Selecione um assunto",
    otherTopic: "Orientação inicial sobre o assunto",
    preferenceLabel: "Preferência de contato",
    preferences: ["Definir depois", "E-mail", "WhatsApp"],
    nameError: "Informe um nome com 2 a 80 caracteres.",
    topicError: "Selecione o assunto geral da mensagem.",
    preferenceError: "Selecione uma das preferências disponíveis.",
    submit: "Preparar mensagem",
    previewTitle: "Prévia da mensagem",
    previewEmpty:
      "Sua mensagem aparecerá aqui depois de preencher os campos e selecionar “Preparar mensagem”.",
    previewLabel: "Mensagem preparada",
    copy: "Copiar mensagem",
    copying: "Copiando…",
    copied: "Texto copiado. Nenhuma mensagem foi enviada.",
    copyError:
      "A cópia automática não está disponível. O texto foi selecionado; use a opção Copiar do seu dispositivo.",
    ready: "Mensagem preparada. Revise o texto e copie quando estiver pronto.",
    stale:
      "Os campos mudaram. Prepare a mensagem novamente para atualizar o texto.",
    whatsappAction: "Enviar mensagem pelo WhatsApp",
    clear: "Limpar campos",
    channelHint:
      "Abrir um aplicativo apenas preenche o texto. Confirme o destinatário e decida o envio no próprio aplicativo.",
    demoHint: "Demonstração: prepare e copie o texto. Nenhuma mensagem será enviada.",
    message: {
      greeting: "Olá! Meu nome é",
      interest: "Gostaria de informações sobre",
      preference: "Minha preferência para o contato inicial é:",
      closing:
        "Podemos combinar um momento e um canal adequado para conversar?",
      subject: "Contato inicial",
    },
  },
  privacy: {
    title: "Privacidade, com clareza.",
    intro:
      "Este aviso descreve o funcionamento desta demonstração. O site não oferece atendimento jurídico e o formulário não envia dados.",
    sections: [
      {
        title: "Informações no formulário",
        text: "Nome, tema e preferência de contato são utilizados somente no navegador para preparar o texto da mensagem. Não há backend de formulário, banco de dados, envio por e-mail ou integração com um serviço externo. Os campos não são gravados pelo site em cookies ou armazenamento local e ficam disponíveis enquanto a página permanece aberta.",
      },
      {
        title: "Cópia da mensagem",
        text: "O formulário acessa a área de transferência somente quando você escolhe Copiar mensagem. O texto pode permanecer nela sob o controle do dispositivo. Se a cópia automática não estiver disponível, a mensagem é selecionada para você copiar manualmente. Nenhum envio é realizado pela demonstração.",
      },
      {
        title: "Cookies e medição de audiência",
        text: "Esta versão não utiliza cookies de publicidade, ferramentas de análise de audiência ou rastreamento de visitantes. As fontes são servidas pelo próprio site. O conteúdo não carrega mapas, vídeos ou widgets externos.",
      },
      {
        title: "Acesso ao site e hospedagem",
        text: "Para entregar as páginas, o servidor recebe dados técnicos da conexão, como endereço IP e informações da requisição. O provedor de hospedagem pode manter registros operacionais conforme sua própria configuração. Como ainda não há provedor de publicação definido para esta base, suas condições devem ser verificadas antes de colocá-la em produção.",
      },
      {
        title: "Links e futura adaptação",
        text: "Links para fontes informativas abrem sites de terceiros, que possuem suas próprias práticas de privacidade. Quando um WhatsApp estiver configurado, seu número aparece junto ao botão. Ao escolher abrir a conversa, o texto preparado é incluído no link para o WhatsApp, e o envio depende da sua confirmação no aplicativo. O WhatsApp possui suas próprias práticas de privacidade. O projeto continua fictício e não oferece atendimento jurídico.",
      },
      {
        title: "Sobre este projeto",
        text: "Este é um projeto conceitual da dev_norm. Miguel Avelar é fictício. Não compartilhe dados de um caso jurídico com esta demonstração. Em um site de um profissional real, a identificação do responsável, os canais para solicitações e as condições de tratamento deverão ser informados de acordo com o funcionamento efetivamente adotado.",
      },
    ],
  },
  notFound: {
    title: "Este caminho não leva a uma página.",
    text: "O endereço pode ter mudado ou ter sido digitado incorretamente. Retome a navegação pela página inicial ou explore os temas disponíveis.",
    home: "Voltar ao início",
    areas: "Explorar áreas",
  },
  footer: {
    text: "Conteúdo informativo de exemplo. Não constitui aconselhamento jurídico individual.",
    credit: "Design e desenvolvimento",
    privacy: "Aviso de privacidade",
  },
  editorial: {
    specialty: "Direito de Família e Sucessões",
    categoryAction: "Visão geral",
    profileNote:
      "Personagem fictício deste projeto conceitual. Biografia e identificação profissional aguardam dados reais.",
    profileAction: "Sobre a apresentação",
    topicNavigation: "Navegação entre assuntos",
    relatedTopics: "Assuntos que se conectam.",
    topicPreparation: "Organize as primeiras perguntas.",
    comparisonNote:
      "Quadro introdutório. A escolha do caminho exige análise das circunstâncias e dos requisitos vigentes.",
    comparisonHint:
      "Deslize a tabela para comparar as colunas. Pelo teclado, use as setas após focar a tabela.",
    contactLink: "Preparar mensagem",
    overviewTitle: "Explore os assuntos desta área.",
    footerNavigation: "Explore o site",
    footerTopics: "Aprofunde um assunto",
    footerProject: "Uma base para histórias reais.",
    footerProjectText:
      "Projeto conceitual da dev_norm. Fotografia, trajetória e canais profissionais serão definidos em uma adaptação real.",
  },
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "direito-de-familia",
    title: "Direito de Família",
    summary: "Questões sobre divórcio, guarda, convivência e responsabilidades familiares.",
    introduction:
      "Mudanças nas relações familiares podem envolver decisões sobre convivência, responsabilidades e patrimônio. Entender os assuntos separadamente ajuda a organizar a conversa e a reconhecer o que precisa de análise individual.",
    topics: [
      {
        title: "Divórcio e dissolução de união estável",
        text: "O término de uma relação pode envolver questões patrimoniais e familiares distintas. A existência de consenso, as circunstâncias dos envolvidos e os requisitos aplicáveis precisam ser examinados para identificar o procedimento adequado.",
      },
      {
        title: "Guarda e convivência",
        text: "Decisões sobre a organização da vida de crianças e adolescentes exigem atenção às suas necessidades e ao contexto familiar. Rotina, cuidados e comunicação entre os responsáveis são assuntos que podem integrar a análise, sem que exista uma resposta única para todas as famílias.",
      },
      {
        title: "Alimentos e responsabilidades",
        text: "A discussão sobre contribuição para despesas exige informações sobre as necessidades de quem recebe e as condições de quem contribui. Fixação, revisão e cumprimento envolvem circunstâncias próprias; valores ou percentuais não podem ser definidos por uma regra genérica neste site.",
      },
      {
        title: "Patrimônio nas relações familiares",
        text: "O regime de bens, a origem do patrimônio e a documentação podem ser relevantes para compreender questões patrimoniais. Organizar essas informações permite formular perguntas mais precisas, sem presumir como uma eventual partilha será realizada.",
      },
    ],
    preparation: [
      "Identifique o tema geral que deseja compreender.",
      "Anote suas dúvidas, sem expor detalhes íntimos em um formulário aberto.",
      "Combine com o profissional um canal adequado antes de compartilhar documentos.",
    ],
  },
  {
    slug: "sucessoes",
    title: "Sucessões",
    summary: "Informações sobre inventário, partilha e organização da transmissão de bens.",
    introduction:
      "A transmissão do patrimônio envolve pessoas, documentos e escolhas com efeitos diferentes. Inventário e planejamento sucessório são assuntos relacionados, mas atendem a momentos e necessidades distintos.",
    topics: [
      {
        title: "Inventário e identificação do patrimônio",
        text: "O inventário organiza a apuração do patrimônio, das obrigações e dos interessados após um falecimento. A identificação de bens, documentos e vínculos é parte importante dessa organização. O procedimento aplicável depende das circunstâncias e dos requisitos que precisam ser verificados.",
      },
      {
        title: "Partilha e interesses envolvidos",
        text: "A definição da partilha exige compreender a composição do patrimônio e os direitos dos envolvidos. A existência de acordo não dispensa a análise da situação. Divergências, documentos e obrigações podem afetar os próximos passos e precisam ser examinados individualmente.",
      },
      {
        title: "Planejamento sucessório",
        text: "O planejamento considera como organizar a transmissão patrimonial, respeitando os limites legais e as particularidades familiares. Instrumentos diferentes têm efeitos, custos e requisitos próprios. Nenhuma solução deve ser escolhida apenas por uma promessa genérica de economia ou simplicidade.",
      },
      {
        title: "Organização de informações",
        text: "Uma relação inicial de bens, obrigações e documentos pode facilitar a compreensão do contexto. Questões tributárias e registrais também podem exigir verificação específica. Não envie essas informações por esta demonstração; em um atendimento real, combine a forma de compartilhamento com o profissional.",
      },
    ],
    preparation: [
      "Diferencie se a dúvida é sobre um inventário ou planejamento em vida.",
      "Liste perguntas sobre o procedimento, sem inserir dados patrimoniais no contato inicial.",
      "Aguarde a orientação do profissional sobre documentos e canal de compartilhamento.",
    ],
  },
];

export const informativeSources = [
  {
    title: "Código Civil — texto oficial",
    href: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm",
  },
  {
    title: "Código de Processo Civil — texto oficial",
    href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105compilada.htm",
  },
  {
    title: "Resolução CNJ nº 35 — texto atualizado",
    href: "https://atos.cnj.jus.br/atos/detalhar/179",
  },
];
