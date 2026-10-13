---
name: Miguel Avelar
description: Apresentação conceitual de advocacia com contraste mineral e leitura editorial.
colors:
  ivory: "#f3f0e9"
  ink: "#24221f"
  dark: "#24221f"
  dark-soft: "#302d28"
  bronze: "#806348"
  sand: "#c7b291"
  stone: "#ddd7cc"
  soft: "#e9e4da"
  muted: "#504a42"
  rule: "#c8c0b3"
  control-rule: "#867c6d"
  inverse-muted: "#cec7bc"
  inverse-rule: "#62594c"
  error: "#993d2e"
  button-hover: "#494136"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(48px, 4.3vw, 66px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(36px, 3.3vw, 52px)"
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  square: "0"
spacing:
  gutter: "clamp(24px, 5vw, 90px)"
  section: "88px"
  section-mobile: "56px"
  field: "24px"
  topics-gap: "64px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  text-link:
    textColor: "{colors.ink}"
  text-link-hover:
    textColor: "{colors.bronze}"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "13px 15px"
    width: "100%"
  message-preview:
    backgroundColor: "{colors.soft}"
    padding: "36px"
  navigation:
    textColor: "{colors.ink}"
  topic-row:
    padding: "24px 0"
  photo-space:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.muted}"
    padding: "0"
---

# Design System: Miguel Avelar

## Overview

**Creative North Star: "Monografia de arquitetura"**

A monografia de arquitetura orienta uma apresentação editorial sóbria: marfim mineral e preto quente alternam planos de leitura, enquanto títulos serifados dão presença ao conteúdo. Divisórias precisas e listas abertas organizam a informação sem uma sequência de cartões iguais.

A identidade do profissional é conceitual e permanece explícita. A reserva tipográfica em pedra prepara o retrato real com legenda honesta. Fotografia e credenciais entram somente quando fornecidas. Sobre da home e contexto de artigos evitam repetir reservas ausentes.

**Key Characteristics:**

- Contraste entre planos claros e escuros.
- Bodoni Moda nos títulos e Geist na leitura.
- Listas abertas com divisórias e setas discretas.
- Reserva tipográfica em pedra e fotografias reais com proporção definida.

Fonte normativa: `src/app/globals.css`; fontes em `src/app/layout.tsx`; padrões em `src/components`; fotografias e identidade em `src/config/site.ts`. A substituição da identidade anterior foi autorizada no briefing de 6 de outubro de 2026.

## Colors

A paleta é mineral e quente; bronze orienta pequenos detalhes sem brilho metálico.

### Primary

- **Preto quente** (`ink`, `dark`): texto, ação principal e planos escuros. Os dois nomes preservam os papéis existentes no CSS.
- **Bronze discreto** (`bronze`): foco em planos claros, links, setas, marcadores e fecho em itálico do hero.

### Neutral

- **Marfim mineral** (`ivory`): fundo geral e texto inverso.
- **Pedra** (`stone`) e **plano suave** (`soft`): molduras, reserva de retrato, contato e prévia de mensagem.
- **Preto suave** (`dark-soft`): variação tonal nas etapas.
- **Areia** (`sand`): números, hover e foco sobre planos escuros.
- **Texto de apoio** (`muted`, `inverse-muted`): leitura secundária em superfícies claras e escuras.
- **Divisórias** (`rule`, `inverse-rule`) e **borda de controle** (`control-rule`): estrutura e identificação de campos editáveis.
- **Erro terroso** (`error`): campos inválidos acompanhados de explicação textual.
- **Preto terroso de resposta** (`button-hover`): estado hover da ação principal.

**The Bronze Detail Rule.** Reserve bronze para orientação e detalhes; organize as grandes superfícies com marfim, pedra e preto quente.

## Typography

**Display Font:** Bodoni Moda, com Georgia e serif como alternativas.

**Body Font:** Geist, com sans-serif como alternativa.

**Character:** A serifa de alto contraste dá caráter editorial a títulos, marca e números. A sans-serif mantém leitura e controles limpos. Não há família mono nem escala de proporção fixa.

### Hierarchy

- **Display:** hero limitado a 20ch; tablet a 52px. No mobile, `clamp(38px, 9.8vw, 54px)`, 21ch e entrelinha 1.14. Desktop usa entrelinha 1.12. O final em bronze usa Bodoni Moda em itálico. Títulos internos usam `clamp(48px, 5.3vw, 80px)`; mobile, `clamp(44px, 9.8vw, 66px)`.
- **Headline:** segue o token geral; mobile usa `clamp(34px, 8vw, 46px)`. Prosa usa 39px, entrelinha 1.25; mobile, 30px.
- **Title:** terceiro nível segue o token; mobile usa 27px. Categorias usam 32px/29px; etapas, 30px/25px.
- **Body:** segue o token geral; mobile usa 17px. Prosa usa 19px/18px e entrelinha 1.8, com parágrafos limitados a 72ch. Introduções internas usam 19px/17px, entrelinha 1.75 e 65ch. A abertura do artigo usa 21px e divisória inferior.
- **Label:** campos e navegação desktop usam 16px; navegação tablet usa 14px e mobile, 16px. Assuntos usam 21px/20px, peso 450; descrições usam 17px. Marca usa 31px/28px/27px, entrelinha 1.25. Avisos e legendas mantêm tamanhos contextuais.

**The Editorial Pair Rule.** Use a serifa para títulos e identidade; mantenha textos de leitura, tabelas, navegação e controles na sans-serif.

## Layout

Conteúdo e header centralizados, com limite de 1800px. Recuo lateral e espaçamento compartilhados no frontmatter; mobile usa section-mobile. Breakpoints em 1100px e 760px.

Hero em 62% / 38%, empilhado no mobile. Quatro caminhos diretos em linha no desktop e em sequência no mobile. Assuntos em duas colunas com intervalo de 64px, 40px no tablet; mobile em uma coluna com 36px. Sobre na homepage usa identidade e texto em 0.85fr / 1.15fr, intervalo de 100px e fundo suave. Foto configurada substitui a identidade. Página Sobre usa 0.8fr / 1.2fr e 90px. Ambas usam 60px no tablet e empilham com 36px no mobile.

Etapas em duas colunas no desktop e tablet, com intervalo horizontal de 64px; uma coluna no mobile. FAQ em 0.8fr / 1.2fr, intervalo de 80px; mobile em uma coluna. Artigos usam índice de 210px e conteúdo limitado a 780px, com intervalo `clamp(40px, 5vw, 76px)`. Tablet usa 220px e intervalo de 44px. Índice sem sticky. Mobile organiza índice, artigo e contexto, com 40px de intervalo. Contato e ferramenta passam de duas colunas para uma; ferramenta com 36px no mobile.

Homepage reúne início, atuação, apresentação, atendimento, FAQ e contato. Menu aponta para essas seções a partir de qualquer rota; links editoriais aprofundam assuntos. Header sticky e opaco em marfim, com altura medida e scroll-padding-top correspondente. Menu mobile abre abaixo da barra, com rolagem local. Formulário da home ocupa faixa inferior separada por linha.

## Elevation & Depth

Não há sombras. Profundidade vem da alternância de superfícies, de bordas de 1px e do espaço. O preto quente distingue as etapas e o footer; pedra e plano suave distinguem molduras, preparação e prévia da mensagem.

**The Flat Plane Rule.** Preserve superfícies planas e divisórias; não use sombras para organizar o conteúdo.

## Shapes

A linguagem é retangular, sem arredondamento decorativo. Campos têm raio explicitamente zero. Fotografias reais usam abertura 4:5 sem borda, com recorte de conteúdo. Reserva do hero mobile usa formato compacto horizontal. A seta é SVG de 26 × 20px, com traço 1.2; o FAQ usa SVG de 20 × 20px, e o menu de 22 × 22px.

## Components

### Buttons

A ação principal usa preto quente, texto marfim, borda de 1px e altura mínima de 56px. O frontmatter registra padding, sem converter altura mínima em altura fixa. Hover altera fundo e borda em 0.3s. Desabilitada, usa opacidade 0.6 e cursor `wait`. Links secundários têm sublinhado bronze, intervalo de 22px, texto de 15px e mínimo de 44px; hover muda o texto para bronze. Não há estado active próprio.

Foco global: contorno bronze de 2px, afastado 5px; no footer e nas etapas, areia. Setas avançam 5px em 0.4s no hover e no foco de links. A curva comum é `cubic-bezier(0.19, 1, 0.22, 1)`. Movimento reduzido remove transições e animações e troca rolagem suave por automática.

### Cards / Containers

Não há biblioteca de cartões. A prévia de mensagem é um plano suave com mínimo de 360px e padding do frontmatter. No tablet o padding passa a 28px; no móvel, 24px e mínimo de 280px. A área de texto tem mínimo de 275px, ou 300px no móvel, e redimensionamento vertical.

### Inputs / Fields

Campos transparentes têm texto preto quente, borda de controle de 1px, altura mínima de 56px e texto de 16px. Labels de 16px ficam 9px acima, com intervalo de 24px entre campos. Select reserva 36px à direita. Caret bronze; foco global. Campo inválido recebe borda de erro e explicação de 15px, entrelinha 1.6 e margem superior de 8px.

### Navigation

A navegação horizontal usa intervalo de 22px, reduzido a 18px no tablet. Links têm mínimo de 44px; hover e página atual recebem linha bronze. Contato tem borda própria. Até 760px, um botão abre lista vertical de links a 16px, com mínimo de 54px e divisórias superiores. Escape fecha e devolve foco ao botão; escolher link fecha o menu.

### Assuntos e índice

Assuntos são linhas abertas com título, descrição e seta bronze. O título usa 21px, peso 450; a descrição usa 17px, entrelinha 1.65 e limite de 44ch. A linha inferior bronze cresce da esquerda em 0.5s no hover ou foco. No móvel, padding vertical de 22px e título de 20px e descrição de 17px. O índice usa linhas de 16px, padding de 13px 0 e divisórias.

### Etapas e FAQ

Etapas usam divisórias e números serifados de 42px em areia, com grade interna de 60px / 1fr (62px no mobile). Textos de 17px e entrelinha 1.8. FAQ usa details e summary: perguntas de 19px/18px, respostas de 17px. Summary tem mínimo de 84px/80px e padding de 24px 0/22px 0. Sinal gira 45 graus ao abrir; sem animação de altura.

### Tabelas comparativas

Cabeçalho preto quente, texto marfim, linhas inferiores e alternância suave no corpo. Texto de 16px; padding de 18px 16px. No móvel, entrelinha 1.65, padding de 14px 10px, layout fixo, largura mínima de 680px e primeira coluna de 144px. As células preservam palavras inteiras com `overflow-wrap: normal`. A rolagem horizontal é local à região, com `overscroll-behavior-inline: contain` e scrollbar bronze sobre o plano suave. A dica móvel visível explica deslizar e usar teclado; a região focalizável referencia a dica por `aria-describedby`. Cabeçalhos preservam `scope`.

### Reserva de fotografia

Três slots configuráveis: hero, about e context, com fallback para site.photo. Fotografias reais usam abertura 4:5, sem borda, fit cover ou contain e position configurável; padrões cover e 50% 35%. Hero limitado a 330px, apresentação a 360px, Sobre a 430px e contexto a 220px. Mobile: 330px nos três primeiros e 200px no contexto. Contexto conserva padding de 12px; demais slots sem padding externo.

Sem foto, plano de pedra recebe MA em Bodoni Moda bronze e temas Família, Patrimônio e Escolhas, com padding interno de 32px e legenda de 14px. Somente a reserva do hero mobile abandona 4:5: composição horizontal com padding de 24px e altura mínima de 160px. Fotografias reais mantêm 4:5. Sobre da homepage usa nome e especialidade sem repetir reserva; contexto dos artigos omite foto ausente. Foto configurada remove legenda de reserva.

### Preparar e copiar

Demonstração organiza preparar, revisar e copiar. Prévia usa título neutro, texto somente leitura, botão de cópia e confirmação em região viva. Mudança nos campos invalida prévia. Limpar restaura estado inicial. Falha da área de transferência oferece foco e seleção para cópia manual. Sem transmissão ou armazenamento. WhatsApp aparece somente com mensagem preparada e número real válido; exemplos fictícios permanecem sem links.

## Do's and Don'ts

### Do:

- **Do** preserve Bodoni Moda nos títulos e Geist na leitura e nos controles.
- **Do** mantenha foco visível, semântica de tabela e disclosure nativo no FAQ.
- **Do** preserve 4:5 nas fotografias reais e ajuste o enquadramento pela configuração; use a reserva compacta somente no hero mobile sem foto.
- **Do** respeite movimento reduzido e a ordem de leitura móvel.

### Don't:

- **Don't** recoloque verde como cor principal.
- **Don't** transforme listas abertas em cartões genéricos repetidos.
- **Don't** acrescente símbolos jurídicos clichês, brilho dourado ou provas profissionais fictícias.
- **Don't** acrescente sombras ao vocabulário de planos e divisórias.

Não canonizado: CSS residual sem elemento renderizado, como error-code na 404, não define padrão para novas superfícies. Nenhum defeito visual foi incorporado como token. Revisão final ship confirma composição e estados; avisos consultivos contra escala anterior não definem escala atual.
