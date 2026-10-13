import { practiceAreas, site } from "./site";

export type PracticeTopic = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  introduction: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    list?: string[];
  }[];
  comparison?: {
    title: string;
    columns: [string, string, string];
    rows: [string, string, string][];
  };
  preparation: string[];
  related: string[];
};

export const practiceTopics: PracticeTopic[] = [
  {
    slug: "divorcio",
    category: "direito-de-familia",
    title: "Divórcio",
    summary: "O fim do vínculo e as decisões que precisam ser organizadas.",
    introduction:
      "Encerrar uma relação pode exigir decisões diferentes sobre patrimônio, responsabilidades e convivência. Separar essas questões ajuda a compreender o que precisa ser resolvido, sem reduzir toda a mudança a um único procedimento.",
    sections: [
      {
        id: "questoes",
        title: "O vínculo é uma parte da conversa.",
        paragraphs: [
          "O divórcio trata da dissolução do casamento. Questões como partilha, nome, alimentos e organização da vida dos filhos podem acompanhar a mudança, mas cada uma tem seu próprio contexto. O término de uma união estável também pode envolver questões semelhantes, com análise do vínculo e da documentação correspondente.",
          "Uma primeira conversa não precisa conter toda a história da relação. Identificar os assuntos em aberto e as dúvidas mais urgentes já ajuda a organizar o atendimento. A descrição detalhada e os documentos devem ser compartilhados somente em um canal combinado com o profissional.",
        ],
        list: [
          "Existe acordo sobre as questões que precisam ser discutidas?",
          "Há patrimônio, obrigações ou responsabilidades familiares a organizar?",
          "Alguma medida anterior ou situação urgente precisa ser informada ao profissional?",
        ],
      },
      {
        id: "caminhos",
        title: "Consenso e procedimento são questões diferentes.",
        paragraphs: [
          "Um acordo pode facilitar a organização das decisões, mas não define sozinho o procedimento. A via judicial ou extrajudicial depende dos requisitos aplicáveis e das circunstâncias dos envolvidos. O divórcio por escritura exige verificação profissional; situações com filhos menores envolvem requisitos específicos relativos às questões deles.",
          "Quando há divergência, é preciso delimitar o que permanece em discussão. Isso não permite antecipar duração, custo ou resultado. Mesmo em uma situação consensual, compreender os efeitos do acordo e formalizá-lo corretamente é parte importante da análise.",
        ],
      },
      {
        id: "patrimonio",
        title: "Patrimônio pede informação, não suposições.",
        paragraphs: [
          "Regime de bens, origem do patrimônio, momento de aquisição e obrigações podem ser relevantes para a partilha. Não é possível concluir que todos os bens serão divididos da mesma forma apenas porque existe um casamento.",
          "Uma organização inicial de dúvidas costuma ser mais útil que uma proposta precipitada. Antes de assumir compromissos ou transmitir documentos, combine com o advogado a forma de analisar os aspectos patrimoniais e familiares.",
        ],
      },
    ],
    comparison: {
      title: "Duas questões para não confundir.",
      columns: ["Questão", "Quando há consenso", "Quando há divergência"],
      rows: [
        [
          "Decisões",
          "Os envolvidos constroem uma proposta de acordo.",
          "É necessário identificar os pontos que continuam em discussão.",
        ],
        [
          "Procedimento",
          "Os requisitos da via adequada ainda precisam ser verificados.",
          "O caminho depende das questões em disputa e da situação concreta.",
        ],
        [
          "Expectativas",
          "Acordo não significa ausência de cuidados ou efeitos futuros.",
          "Divergência não permite prever prazo nem desfecho.",
        ],
      ],
    },
    preparation: [
      "Anote quais temas estão em aberto: vínculo, patrimônio ou questões dos filhos.",
      "Pergunte como serão definidos escopo, documentos e condições do serviço.",
      "Não envie relatos íntimos ou documentos por esta demonstração.",
    ],
    related: ["guarda-e-convivencia", "planejamento-sucessorio"],
  },
  {
    slug: "guarda-e-convivencia",
    category: "direito-de-familia",
    title: "Guarda e convivência",
    summary:
      "Responsabilidades e rotina, com atenção às necessidades dos filhos.",
    introduction:
      "A organização da vida de crianças e adolescentes envolve cuidado, responsabilidades e convivência. O ponto de partida é compreender suas necessidades e a realidade familiar, em vez de buscar um modelo único para todas as famílias.",
    sections: [
      {
        id: "responsabilidades",
        title: "Guarda não é apenas uma agenda.",
        paragraphs: [
          "A guarda envolve responsabilidades e decisões sobre a vida dos filhos. A convivência trata também da organização dos períodos e das relações familiares. São assuntos relacionados, mas a definição de um não substitui a análise do outro.",
          "A guarda compartilhada não se traduz automaticamente em uma divisão exata do tempo. Escola, saúde, distância entre residências, rotina e circunstâncias de proteção precisam ser consideradas. O conteúdo desta página não determina qual organização se aplica a uma família.",
        ],
        list: [
          "Como são realizados os cuidados e as decisões do dia a dia?",
          "Qual rotina escolar, de saúde e deslocamento precisa ser considerada?",
          "Há circunstâncias de proteção que exigem atenção específica?",
        ],
      },
      {
        id: "rotina",
        title: "Uma rotina precisa funcionar na vida real.",
        paragraphs: [
          "Dias de convivência, férias, datas relevantes, comunicação e deslocamentos podem exigir previsões claras. Mais que produzir uma lista de horários, importa compreender se a organização é possível e atende às necessidades dos filhos.",
          "Mudanças na rotina ou no contexto familiar podem justificar uma nova avaliação. A existência de uma decisão anterior deve ser informada ao profissional; ajustes não devem ser tratados como simples alterações informais quando há obrigações formalizadas.",
        ],
      },
      {
        id: "alimentos",
        title: "Convivência e alimentos têm análise própria.",
        paragraphs: [
          "A contribuição para despesas envolve necessidades de quem recebe e condições de quem contribui. Não existe um percentual único que possa ser aplicado a todas as situações. Guarda, convivência e alimentos devem ser examinados em conjunto quando relacionados, respeitando os efeitos de cada tema.",
          "Em caso de risco ou violência, a situação exige avaliação específica e pode demandar canais de proteção adequados. Esta demonstração não recebe pedidos urgentes e não oferece atendimento. Não compartilhe dados de crianças ou informações sensíveis aqui.",
        ],
      },
    ],
    preparation: [
      "Identifique se a dúvida envolve responsabilidades, rotina, alimentos ou uma decisão anterior.",
      "Pergunte como tratar informações e documentos dos filhos com privacidade.",
      "Combine um canal adequado antes de detalhar a situação familiar.",
    ],
    related: ["divorcio", "inventario"],
  },
  {
    slug: "inventario",
    category: "sucessoes",
    title: "Inventário",
    summary: "Pessoas, bens e obrigações na organização de uma sucessão.",
    introduction:
      "Depois de um falecimento, compreender a composição do patrimônio e identificar os interessados são passos importantes. O inventário organiza essa apuração e a partilha, com cuidados que variam conforme a situação.",
    sections: [
      {
        id: "organizacao",
        title: "Entender o conjunto antes de dividir.",
        paragraphs: [
          "Bens, direitos e obrigações precisam ser considerados na organização da sucessão. A relação de interessados, a documentação dos bens e a existência de disposições de última vontade podem alterar as perguntas que precisam ser feitas.",
          "O inventário não é apenas uma lista de imóveis. Participações, valores, dívidas e outras relações patrimoniais podem fazer parte da análise. Uma informação ainda incompleta deve ser tratada como questão a verificar, sem presumir a titularidade ou a forma de divisão.",
        ],
        list: [
          "Quem são os interessados e quais vínculos precisam ser comprovados?",
          "Quais bens, direitos e obrigações são conhecidos?",
          "Existe testamento, divergência ou documentação pendente?",
        ],
      },
      {
        id: "procedimento",
        title: "O caminho depende dos requisitos.",
        paragraphs: [
          "A possibilidade de inventário judicial ou por escritura pública exige análise do caso e das regras vigentes. Consenso, documentação, testamento e participação de menores ou incapazes podem exigir cuidados próprios. A existência de um desses elementos não deve ser usada, isoladamente, como resposta automática sobre a via possível.",
          "As regras do procedimento extrajudicial contemplam situações específicas e salvaguardas. A avaliação deve ser realizada por profissional habilitado. O quadro abaixo organiza diferenças gerais; não é um teste de elegibilidade nem indicação de procedimento.",
        ],
      },
      {
        id: "partilha",
        title: "A partilha tem efeitos que continuam depois.",
        paragraphs: [
          "A composição da partilha precisa considerar os direitos dos envolvidos, as obrigações e os efeitos de cada decisão. Tributos, avaliações e registros podem exigir verificação própria. Valores e prazos não podem ser estimados com segurança a partir desta apresentação.",
          "Documentação pendente ou identificação posterior de patrimônio pode demandar medidas adicionais. Vale perguntar ao profissional quais informações são necessárias, quem deve participar e como serão acompanhadas as providências de formalização.",
        ],
      },
    ],
    comparison: {
      title: "Dois caminhos, com análise individual.",
      columns: ["Aspecto", "Via judicial", "Escritura pública"],
      rows: [
        [
          "Ambiente",
          "Procedimento perante o Judiciário.",
          "Ato formalizado em tabelionato, quando os requisitos permitem.",
        ],
        [
          "Verificação",
          "Questões e documentação são tratadas conforme o procedimento aplicável.",
          "Consenso, documentação e salvaguardas precisam ser verificados.",
        ],
        [
          "Após a partilha",
          "Registros e outras providências podem continuar necessários.",
          "Registros e outras providências também podem ser necessários.",
        ],
      ],
    },
    preparation: [
      "Indique que a dúvida é sobre inventário, sem informar valores ou documentos no primeiro formulário.",
      "Pergunte sobre os interessados, a documentação e as providências que exigem prioridade.",
      "Solicite explicação sobre procedimento, tributos, registros e condições do serviço.",
    ],
    related: ["planejamento-sucessorio", "guarda-e-convivencia"],
  },
  {
    slug: "planejamento-sucessorio",
    category: "sucessoes",
    title: "Planejamento sucessório",
    summary: "Escolhas em vida e seus efeitos sobre a transmissão patrimonial.",
    introduction:
      "Planejar a sucessão significa avaliar escolhas sobre a transmissão do patrimônio, respeitando os limites legais e o contexto familiar. O objetivo não é encontrar uma fórmula universal, mas compreender efeitos e responsabilidades antes de decidir.",
    sections: [
      {
        id: "objetivos",
        title: "Comece pelo que precisa ser organizado.",
        paragraphs: [
          "A composição familiar, a titularidade dos bens, as obrigações e as necessidades de quem depende do patrimônio ajudam a definir as questões do planejamento. Objetivos diferentes podem exigir instrumentos diferentes, ou indicar que uma solução proposta não atende ao contexto.",
          "Organizar informações não significa transferir bens imediatamente. Uma análise pode começar por documentação, dúvidas e prioridades. Promessas genéricas de redução de custos, eliminação de conflitos ou dispensa de inventário não substituem a verificação dos efeitos concretos.",
        ],
        list: [
          "Que decisões futuras preocupam a família?",
          "Quais responsabilidades e necessidades precisam ser preservadas?",
          "Quem deverá compreender os efeitos das escolhas consideradas?",
        ],
      },
      {
        id: "instrumentos",
        title: "Cada instrumento tem limites e efeitos.",
        paragraphs: [
          "Testamento, doação e outras formas de organização patrimonial têm requisitos, consequências e possibilidades de revisão próprios. Direitos dos herdeiros, regras de disponibilidade patrimonial, tributos e registros devem ser considerados antes de escolher um instrumento.",
          "A combinação de medidas também exige cuidado. Uma solução adequada a uma família ou a um tipo de patrimônio pode não servir a outra situação. Decisões societárias, registrais ou tributárias podem exigir participação de outros profissionais.",
        ],
      },
      {
        id: "revisao",
        title: "O planejamento precisa acompanhar mudanças.",
        paragraphs: [
          "Relações familiares, composição do patrimônio e objetivos podem mudar. Por isso, é útil combinar como as escolhas serão revistas e quais acontecimentos justificam uma nova análise. A existência de documentos anteriores deve ser informada ao profissional.",
          "Planejamento em vida e inventário após o falecimento se relacionam, mas não são a mesma atividade. Planejar não garante que todas as providências posteriores deixem de existir. A clareza sobre esses limites ajuda a construir expectativas responsáveis.",
        ],
      },
    ],
    preparation: [
      "Defina os objetivos gerais, sem expor o patrimônio neste site.",
      "Pergunte sobre efeitos, limites, custos, registros e possibilidade de revisão das medidas.",
      "Combine quais profissionais e documentos serão necessários para a análise.",
    ],
    related: ["inventario", "divorcio"],
  },
];

// Only these labels cross the contact form client boundary.
export const contactTopics = [
  ...practiceAreas.map((area) => area.title),
  ...practiceTopics.map((topic) => topic.title),
  site.form.otherTopic,
];
