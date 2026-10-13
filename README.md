# Miguel Avelar — projeto conceitual da dev_norm

Site demonstrativo em Next.js, TypeScript e Tailwind CSS. Miguel Avelar é fictício. Não há atendimento jurídico, backend de formulário, banco de dados ou envio de mensagens.

## Executar

Ambiente preparado com Node.js 24 e npm. Instale as dependências e inicie o desenvolvimento:

```sh
npm ci
npm run dev
```

Abra `http://localhost:3000`. Para executar a versão de produção:

```sh
npm run build
npm start
```

## Publicação no GitHub Pages

Site: https://luizgsch.github.io/Direito/

O workflow `.github/workflows/pages.yml` publica automaticamente cada push na branch `main`. Ele verifica lint, exporta o Next.js para `out/` e envia o resultado ao GitHub Pages. A publicação usa o prefixo `/Direito/`, inclusive nos recursos, nas imagens e nos metadados. O modo local continua usando o servidor Next.js; a exportação é ativada por `GITHUB_PAGES=true`. Os avisos de demonstração e a desativação da indexação permanecem ativos.

## Verificações locais

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

Os testes usam a versão de produção na porta 3100. Cobrem rotas, links, teclado, FAQ, menu móvel, formulário, cópia automática e manual, ausência de envio/armazenamento, indexação, compartilhamento e acessibilidade com axe. Capturas atuais ficam em `.impeccable/review/code-audit/`; há verificações em 320px e 768px e tabelas em 320px e 390px. Estados de formulário são capturados no viewport para preservar a posição do header sticky. Os testes não substituem revisão humana de acessibilidade ou revisão jurídica.

## Adaptar para um profissional real

- Edite `src/config/site.ts`: nome, descrição, textos de todas as páginas, biografia, identificação profissional/OAB confirmada, áreas, FAQ, etapas e canais reais.
- Coloque fotografias autorizadas em `public/` e configure `site.photos.hero`, `site.photos.about` e `site.photos.context`. Cada posição aceita `{ src, alt, position, fit }`; `position: "50% 30%"` ajusta o foco e `fit: "contain"` preserva o enquadramento inteiro. O padrão é `cover`, sem deformação. `site.photo` continua disponível como fotografia comum de fallback. Use caminhos locais, como `/fotos/retrato.webp`, e texto alternativo real. As molduras mantêm proporção 4:5; somente a fotografia do hero é pré-carregada.
- Configure e-mail e WhatsApp reais em `site.contact`. O WhatsApp aceita número internacional com código de país. Links inválidos ou não configurados são omitidos; na demonstração, canais permanecem inativos.
- Use `.env.example` como referência e defina `NEXT_PUBLIC_SITE_URL` com o domínio publicado. Não inclua dados secretos nessa variável pública.
- Atualize o aviso de privacidade de acordo com a hospedagem, o responsável e os canais realmente utilizados. A versão atual não usa análise de audiência, cookies publicitários ou serviços externos de formulário.
- Depois de substituir todo o conteúdo fictício e obter a revisão do profissional, defina `site.conceptual = false` e `site.indexing = true`. As duas condições são necessárias para habilitar indexação e preencher o sitemap. Não faça essa alteração na demonstração de portfólio.
- Revise favicon e imagem de compartilhamento, textos, conteúdos jurídicos, identificação e publicidade com o profissional antes de publicar. Confirme links, privacidade e experiência de contato em dispositivos reais.

O formulário valida nome e assunto geral, prepara texto localmente e permite copiar. Em uma adaptação real, pode abrir o aplicativo de e-mail ou WhatsApp com o texto preenchido; o visitante confirma o envio no aplicativo. Não existe confirmação simulada de envio.

## Estrutura e identidade

`src/app/` contém as páginas; `src/components/` reúne navegação, listas, artigos, FAQ, fotografia e contato; `src/config/site.ts` concentra identidade, textos gerais, canais e imagens; `src/config/topics.ts` organiza os quatro assuntos, seções, comparações, preparação e relações entre páginas; `src/lib/` contém metadados e preparo da mensagem. As páginas e os componentes de composição podem ser reorganizados para outras identidades; a base não depende apenas de troca de cores. Tokens e regras visuais estão em `src/app/globals.css` e são documentados em `DESIGN.md`.

## Páginas e evolução visual

Início, Sobre, Áreas, Contato, Privacidade e 404; visões gerais de Direito de Família e Sucessões; páginas próprias de Divórcio, Guarda e convivência, Inventário e Planejamento sucessório. O visitante encontra assuntos na homepage e no diretório, consulta um índice local, lê textos organizados e continua por temas relacionados. Divórcio e Inventário possuem comparações introdutórias, sem indicar automaticamente uma via jurídica.

No celular, comparações preservam texto de 16px e largura mínima de 680px numa região de rolagem local. A primeira coluna tem 144px, mantendo palavras inteiras. A dica explica o gesto e o uso das setas do teclado após focar a tabela. A página inteira não recebe rolagem horizontal.

A evolução usa marfim mineral, preto quente, pedra e bronze discreto, com Bodoni Moda nos títulos e Geist na leitura. O Hero prepara uma foto real vertical 4:5; sem fotografia, mostra uma composição tipográfica em pedra. No celular, somente a composição temporária fica compacta; uma fotografia configurada conserva 4:5. A apresentação na homepage usa identidade textual enquanto não houver foto. Artigos não repetem molduras vazias. Nenhuma fotografia de pessoa é publicada nesta demonstração. Fontes são otimizadas e servidas pelo próprio Next.js. Capturas atuais ficam em `.impeccable/review/code-audit/`.

O conteúdo introdutório consulta o [Código Civil](https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm), o [Código de Processo Civil](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105compilada.htm) e a [Resolução CNJ nº 35 atualizada](https://atos.cnj.jus.br/atos/detalhar/179). A análise incluiu as alterações da [Resolução CNJ nº 571](https://atos.cnj.jus.br/atos/detalhar/5705). Textos e requisitos devem ser revistos por profissional habilitado antes de adaptação comercial.

## Dependências

`npm audit --omit=dev` não apontou vulnerabilidades na verificação desta entrega. A auditoria completa sinalizou cinco ocorrências na cadeia de desenvolvimento ESLint/fast-glob/micromatch/braces, sem atualização compatível disponível na ocasião. Não foi aplicado o downgrade major sugerido por `npm audit fix --force`. Revise as atualizações dessa cadeia antes de futuras entregas.
## Navegação da homepage

Na demonstração, os contatos usam `(00) 0000-0000` e `contato@exemplo.invalid`, identificados como fictícios e sem links ativos. Dados reais configurados substituem esses exemplos.

Telefone/WhatsApp e e-mail aparecem abaixo da prévia, também antes de preparar a mensagem. Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` e `NEXT_PUBLIC_CONTACT_EMAIL` em `.env.local` para a adaptação real. Sem dados válidos, o site mostra exemplos identificados como fictícios, sem links. E-mail só fica ativo no modo real.

A demonstração termina em preparar, revisar e copiar. O botão de WhatsApp só aparece após preparar uma mensagem e quando houver um número real válido configurado. Não há botão de envio desativado na demonstração. Ao modificar os campos, a mensagem anterior é invalidada e a cópia fica indisponível até preparar o novo texto.

Para habilitar o botão de WhatsApp após preparar uma mensagem, defina `NEXT_PUBLIC_WHATSAPP_NUMBER` em `.env.local`, com país e DDD. O destino aparece junto ao botão. O link contém exatamente o texto preparado pelo formulário, codificado para URL; o usuário confirma o envio no WhatsApp. Reinicie o ambiente de desenvolvimento e gere novo build após alterar esse número. O aviso de projeto fictício permanece ativo.

A rolagem usa Lenis 1.3.26, com interpolação `lerp: 0.1`, âncoras tratadas pelo controlador e toque nativo. A preferência por movimento reduzido é respeitada, inclusive quando alterada durante o uso. Menu móvel, tabelas e campos com rolagem própria mantêm comportamento nativo. O controlador é destruído ao desmontar, liberando eventos e o ciclo de animação.

A inércia é interrompida por foco, teclado, histórico e navegação. O ciclo de animação também sincroniza alterações nativas da posição antes de continuar, evitando voltar ao destino anterior. A instância é recriada ao trocar de rota. O teste `tests/scroll-interruption.spec.ts` cobre interrupção por rolagem nativa, tecla End e foco no formulário.

O menu principal usa `/#inicio`, `/#atuacao`, `/#sobre`, `/#atendimento`, `/#duvidas` e `/#contato` em todas as rotas. As páginas internas continuam acessíveis pelos links de aprofundamento. A homepage inclui o mesmo formulário de preparo e cópia de mensagens da página Contato, sem envio de dados.

O header permanece visível com `position: sticky`. Sua altura é medida por `ResizeObserver` para definir o deslocamento de rolagem; o menu móvel abre abaixo da barra e fecha após uma escolha ou Escape. O teste `tests/home-navigation.spec.ts` verifica o percurso entre seções, página interna, retorno, histórico e preparo da mensagem em desktop e celular.
