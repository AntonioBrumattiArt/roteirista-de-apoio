# Formatos de saída

Se o usuário mandou um guia com outro formato, use o dele.

## Índice
1. Quadro visual interativo (padrão)
2. Colunas e regras de conteúdo
3. Dados do quadro (JSON)
4. Etapa 1 e etapa 2
5. Plano B: bloco de código

---

## 1. Quadro visual interativo (padrão)

As duas etapas são entregues num **quadro visual interativo no chat**, usando a ferramenta de visual inline do ambiente (`show_widget` / visualize). Se ela pedir, chame o `read_me` dela antes, sem comentar isso com o usuário.

Por que o quadro: no chat, uma tabela markdown ocupa a tela inteira, e no bloco de código a seleção pega a linha toda, misturando colunas. O quadro tem células de verdade, botão de copiar por célula, links clicáveis e botões de ação.

**Como montar:** leia `assets/quadro.html`, troque `/*DADOS*/{}` pelo objeto JSON da seção 3 (só isso, não mexa no resto do template) e passe o resultado como `widget_code`. Fora do quadro, no texto da resposta, escreva só o mínimo: uma linha de contexto e o que você precisa que o usuário decida. Não repita o conteúdo do quadro em texto.

O template já cuida do estilo aprovado pelo usuário:
- **Só linhas**: linha vertical fina entre colunas, linha pontilhada entre cenas, sem cor de fundo nas colunas.
- Ícones no lugar de emoji (o quadro não aceita emoji): alerta = ajustado, check = mantido, x = removido/contradiz, + = novo.
- Botões (ver seção 4).

## 2. Colunas e regras de conteúdo

Ordem fixa: **Cena/Frame/Slide · Copy/Locução · [Texto original] · Visual · Link**. A relação entre a copy sugerida e o texto original vem primeiro, lado a lado.

- **Cena / Frame / Slide** — número; embaixo, o tempo em duas linhas (`0:00–` / `0:03`) quando for vídeo; embaixo, o botão de ajustar aquela cena.
- **Copy / Locução** — o texto final proposto, completo, com as quebras de linha da peça (hierarquia em maiúsculas quando fizer sentido: título, nome do chef etc.). Botão de copiar na célula.
- **Texto original** — **só existe se a coluna Copy/Locução alterar alguma coisa do texto que o usuário mandou** (mudança só de visual ou layout não conta). Quando existe:
  - cada célula traz **o texto original completo daquela cena/frame, palavra por palavra, como veio no guia** (pode juntar espaços múltiplos e manter as quebras de linha);
  - começa com o status: `w` ajustado · `o` mantido · `x` removido ou contradiz · `n` novo (sem correspondente — escreva "Sem correspondente no texto original");
  - em vídeo cujo texto original não vem dividido em cenas, numere as linhas do original (`(1) …`, `(2) …`) e coloque em cada cena a(s) linha(s) correspondente(s);
  - logo abaixo, na mesma célula: `Mudanças: (1) …; (2) …; (3) …` — corrido, itens curtos, dizendo o que mudou (e por quê quando não for óbvio);
  - trecho do original removido por inteiro vira linha própria com status `x`, para nada sumir sem aviso.
- **Visual** — o que se vê: composição, ação, destaque, transição. Curto e produzível.
- **Link** — referências da cena: vídeos, sites, fotos da internet ou arquivos do computador do usuário. Link completo e clicável; em vídeo, minutagem no próprio link quando a plataforma deixar (YouTube `?t=80`, Vimeo `#t=1m20s`) e o tempo legível em `tempo`. Arquivo local: caminho completo. Sem referência, `—`. Use os links que o usuário mandou nas cenas certas; se buscar na web, só links que você abriu e confirmou. Nunca invente URL nem minutagem.

Não há colunas de Tela, trilha ou SFX.

## 3. Dados do quadro (JSON)

```json
{
  "modo": "abordagens",
  "meta": {
    "projeto": "Grão Vivo — lançamento cold brew",
    "arquivo": "V1-graovivo-coldbrew-reels-roteiro.md",
    "tipo": "Vídeo curto social", "plataforma": "Instagram Reels", "formato": "9:16",
    "duracao": "30s", "publico": "Local, 20–35", "objetivo": "Visita à loja",
    "cta": "Provar + seguir", "tom": "Leve e sensorial"
  },
  "rotulos": {"unidade": "Cena", "texto": "Locução"},
  "temOriginal": true,
  "videoCurto": true,
  "abordagens": [
    {"id": "A", "nome": "Paciência", "porque": "O 18 horas vira o gancho · dado → sensação → produto",
     "linhas": [
       {"ini": "0:00", "fim": "0:03", "texto": "\"18 horas.\"",
        "status": "w", "original": "(2) Feito em 18 horas de extração a frio.",
        "mudancas": "(1) só o número virou o gancho",
        "visual": "Timelapse: pó na água fria, relógio girando",
        "links": [{"url": "https://youtu.be/ID?t=45", "tempo": "0:45"}]},
       {"ini": "0:16", "fim": "0:23", "texto": "\"Chegou o cold brew do Grão Vivo.\"",
        "status": "w", "original": "(1) Chegou o cold brew do Grão Vivo!",
        "mudancas": "(1) saiu da abertura para o payoff",
        "visual": "Copo na bancada, logo",
        "links": [{"caminho": "D:\\ARTE\\GraoVivo\\assets\\copo.jpg"}]}
     ]}
  ],
  "escolhida": "A",
  "ajuste": "ajuste aplicado na cena 5"
}
```

- `modo`: `"abordagens"` (etapa 1, com abas) ou `"confirmacao"` (etapa 2, só a `escolhida`).
- `rotulos.unidade`: `Cena` (vídeo), `Frame` ou `Slide` (estático). `rotulos.texto`: `Locução`, `Copy` ou `Fala`.
- `temOriginal`: `true` só se a copy/locução alterou o texto do usuário (seção 2). Com `false`, a coluna some e `status/original/mudancas` são ignorados.
- `videoCurto`: `true` em Reels/TikTok/Shorts/anúncio em vídeo — mostra o botão "Mais ganchos".
- `ini`/`fim`: vazios em peça estática.
- `meta.arquivo`: nome do arquivo de exportação no padrão do usuário, `V1-<projeto-sem-acentos>-roteiro.md` (mudança pequena `V1-opb-…`, grande `V2-…`).
- Escape JSON: aspas `\"`, quebra de linha `\n`, barra invertida `\\`.

## 4. Etapa 1 e etapa 2

**Etapa 1 — `modo: "abordagens"`**: 3 abordagens em abas (A, B, C), cada uma com "Por que funciona". Botões: copiar por célula · ajustar por cena · Copiar todo o texto · Escolher esta abordagem · Misturar abordagens · Mais ganchos (só vídeo curto) · Pedir ajuste. Pare e espere a escolha.

**Etapa 2 — `modo: "confirmacao"`**: é só a confirmação da escolha — a abordagem escolhida, com os ajustes pedidos aplicados, no mesmo quadro, sem abas e sem colunas novas. Atualize `mudancas` para registrar ajustes pedidos pelo usuário (ex.: "mantido, como pedido no ajuste"). Botões:
- **Copiar roteiro aprovado** — cenas, copy/locução, visual e link, **sem** texto original e mudanças (para mandar a outro chat ou skill sem confundir).
- **Copiar tabela completa** — tudo, com texto original e mudanças.
- **Baixar arquivo para outra skill** — `.md` otimizado para outra skill ler (Contexto: status, tipo, plataforma, formato, duração, nº de cenas, público, objetivo, CTA, tom, abordagem; depois cada cena com texto final, visual e referência; em locução, a locução corrida). Sem texto original. Se o download for bloqueado, o texto é copiado.
- Copiar todo o texto · Aprovar roteiro · Pedir ajuste · Voltar às abordagens.

As cópias vão em dois formatos ao mesmo tempo: texto simples organizado por cena (cola limpo em chat) e tabela HTML (cola como tabela em Docs, Word, Sheets).

Quando o usuário aprovar ("Roteiro aprovado"), responda em uma linha confirmando; não gere outro quadro.

## 5. Plano B: bloco de código

Só se a ferramenta de visual inline não existir no ambiente ou falhar. Mesmo conteúdo e ordem de colunas, dentro de um bloco de código:
- No máximo **86 caracteres de largura**; texto e links quebram dentro da célula.
- Linha pontilhada (`|.....|`) entre cenas, traços sob o cabeçalho.
- Gere com `scripts/tabela.js` quando houver Node (escreva o `entrada.json` com a ferramenta de arquivo — barras invertidas do Windows se perdem no shell):
  ```
  node <pasta-da-skill>/scripts/tabela.js entrada.json
  ```
  `{"cols":[{"h":"Cena","w":5},{"h":"Locução","w":19},{"h":"Texto original","w":22},{"h":"Visual","w":12},{"h":"Link","w":10}], "rows":[["1\n0:00–\n0:03","...","⚠️ ...\n\nMudanças: (1) ...","...","https://..."]]}`
  O script alinha, põe as linhas pontilhadas e recusa tabela com mais de 86 caracteres.
- Larguras (somam ≤ 86): com texto original — Cena 5 · Copy 19 · Texto original 22 · Visual 12 · Link 10; sem texto original — Cena 5 · Copy 28 · Visual 24 · Link 14.
- Emojis no lugar dos ícones: ⚠️ ✅ ❌ ➕.
