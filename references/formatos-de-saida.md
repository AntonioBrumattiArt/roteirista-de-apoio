# Formatos de saída

Se o usuário mandou um guia com outro formato, use o dele.

## Regra geral: tabelas dentro de bloco de código

Toda tabela (etapa 1 e etapa 2) vai **dentro de um bloco de código** (```` ``` ````), não como tabela markdown renderizada. No chat, a tabela renderizada ocupa a tela inteira; o bloco de código fica compacto e tem botão de copiar.

Regras de apresentação:
1. **Cabe na janela**: no máximo **86 caracteres de largura** — nada de rolagem horizontal. Texto que não cabe quebra para a linha de baixo dentro da própria célula (links e caminhos também, quebrando depois de `/`, `\`, `?`, `.`, `-`).
2. **Linha pontilhada entre cenas**: cada cena/slide é separada da próxima por uma linha de pontos (`|.....|.....|`). Cabeçalho separado por traços (`|-----|`).
3. **Coluna Cena fina**: número da cena na 1ª linha e o tempo em duas linhas embaixo (`1` / `0:00–` / `0:03`), largura 5.
4. **Tudo dentro da tabela**: links e texto original vão nas suas colunas, não em listas abaixo.
5. **Fora do bloco**, só: nome da abordagem, "por que funciona", notas de produção e perguntas.

### Monte com o script (recomendado)
Alinhar à mão erra fácil. Se houver Node disponível, escreva um `entrada.json` (com a ferramenta de escrita de arquivo, não via linha de comando — barras invertidas de caminhos do Windows se perdem no shell) e rode:

```
node <pasta-da-skill>/scripts/tabela.js entrada.json
```

```json
{"cols": [{"h":"Cena","w":5}, {"h":"Visual + tela","w":16}, {"h":"Áudio","w":18},
          {"h":"Texto original","w":14}, {"h":"Link","w":14}],
 "rows": [["1\n0:00–\n0:03", "Timelapse...\nTELA: 18 HORAS", "\"18 horas.\"\nSFX: tique-taque",
           "⚠️ \"Chegou o cold brew!\"", "https://youtu.be/ID?t=45 (0:45)"]]}
```
- `\n` força quebra dentro da célula.
- O script quebra texto e links, alinha, põe as linhas pontilhadas, alarga a coluna se o título for maior que a largura e **recusa** tabela mais larga que 86 (ajuste as larguras se isso acontecer).

Sem Node, monte à mão com as mesmas larguras e regras.

### Larguras (somam ≤ 86)
| Tabela | Colunas e larguras |
|---|---|
| Etapa 1, vídeo, com texto original | Cena 5 · Texto / Locução 21 · Visual 16 · Texto original 14 · Link 14 |
| Etapa 1, vídeo, sem texto original | Cena 5 · Texto / Locução 28 · Visual 24 · Link 16 |
| Etapa 2, vídeo, com texto original | Cena 5 · Visual + tela 16 · Áudio 18 · Texto original 14 · Link 14 |
| Etapa 2, vídeo, sem texto original | Cena 5 · Visual + tela 22 · Áudio 24 · Link 16 |
| Estático, com texto original | Slide 5 · Visual 15 · Copy + CTA 18 · Texto original 14 · Link 14 |
| Estático, sem texto original | Slide 5 · Visual 20 · Copy + CTA 24 · Link 16 |

Na etapa 2, o texto na tela entra no fim da célula Visual, numa linha `TELA: …` em maiúsculas. No estático, o CTA entra no fim da célula Copy, numa linha `CTA: …`.

## Coluna Link

O link completo vai **na própria célula** da cena (quebrado em várias linhas se precisar). Sem referência, `—`.
- **Vídeo com minutagem**: coloque a minutagem no link quando a plataforma suportar — YouTube `https://youtu.be/ID?t=80` (segundos) ou `&t=1m20s`; Vimeo `https://vimeo.com/ID#t=1m20s` — e repita o tempo legível entre parênteses: `(1:20)`. Quando a plataforma não suportar (Instagram, TikTok, Drive), escreva o link seguido de `(1:20)`.
- **Arquivo local**: caminho completo (com `(0:12)` se for vídeo).
- **Várias referências na mesma cena**: uma por linha (`\n`).
- Use os links que o usuário mandou, distribuindo-os nas cenas certas. Se buscar referências na web, só inclua links que abriu e confirmou; nunca invente URL ou minutagem.

## Coluna Texto original — só quando necessário

Entra **apenas** quando o usuário mandou um roteiro, rascunho ou orientação de conteúdo que você usou como base. Sem material de base, a coluna não existe.

Cada célula começa com o emoji e traz **o trecho original do usuário** correspondente àquela cena, entre aspas:
- `✅ "texto original"` — manteve.
- `⚠️ "texto original"` — mudou texto, ordem, tempo ou visual. Se o motivo não for óbvio, acrescente uma nota curta entre parênteses depois do texto: `(era a abertura)`.
- `❌ "texto original"` — removeu ou foi contra uma orientação; sempre com o motivo entre parênteses. Use com parcimônia.
- `➕ (novo)` — cena sem correspondente no original.

Trechos do original removidos por inteiro entram como linha própria da tabela, com Cena `—` e `❌ "trecho" (motivo)`, para nada sumir sem aviso. Se o usuário mandou uma orientação (não um texto), coloque na célula a orientação que aquela cena atende.

---

## Etapa 1 — 3 abordagens em tabela enxuta

Abra com uma linha de contexto travado (tipo · plataforma · duração/tamanho · público · objetivo · CTA). Depois, para cada abordagem:

Fora do bloco:
```
### Abordagem A — [nome curto do ângulo]
Por que funciona: [1 frase] · Estrutura: [ex.: PAS] · Duração: [~XX s / X slides]
```

Dentro do bloco (vídeo, com texto original):
```
| Cena  | Texto / Locução       | Visual           | Texto original | Link           |
|-------|-----------------------|------------------|----------------|----------------|
| 1     | "18 horas."           | Timelapse: pó na | ⚠️ "Chegou o   | https://youtu. |
| 0:00– |                       | água fria,       | cold brew do   | be/EXEMPLO1?t= |
| 0:03  |                       | relógio girando  | Grão Vivo!"    | 45 (0:45)      |
|.......|.......................|..................|................|................|
| 2     | "É o tempo que o      | Macro das gotas  | ⚠️ "Feito em   | —              |
| 0:03– | nosso café passa na   | filtrando, bem   | 18 horas de    |                |
| 0:09  | água fria."           | lentas           | extração..."   |                |
```

Ganchos alternativos (anúncio/vídeo curto), se fizer sentido, em lista curta abaixo do bloco.

Estático — colunas: `Slide · Headline / Copy · Visual · [Texto original] · Link`.

Repita para B e C. Termine com:

> Qual abordagem seguimos? Pode misturar trechos e pedir ajustes — depois de aprovado, monto o roteiro completo.

## Etapa 2 — Roteiro técnico completo (só da abordagem escolhida)

Fora do bloco:
```
## [Título do projeto] — Roteiro técnico
Tipo · Plataforma · Proporção · Duração total · Abordagem escolhida
```

### Vídeo (dentro do bloco)
Colunas: Cena · Visual + tela · Áudio (locução · trilha · SFX) · [Texto original] · Link — larguras na tabela acima.

Regras:
- Tempos acumulados e somando a duração total.
- **Visual** descreve o suficiente para quem vai produzir (animador, editor, filmmaker): composição, ação, movimento de câmera/elementos, transição; termina com `TELA: …`. Para animação, inclua a metáfora visual e o que se transforma em quê.
- **Áudio** usa o texto aprovado na etapa 1, sem reescrever (se precisar cortar para caber no tempo, marque `⚠️` no texto original e explique entre parênteses). Trilha e SFX em linhas próprias.
- Abaixo do bloco: **Notas de produção** curtas (tom de locução, referência de trilha, assets necessários, pontos a confirmar `[INSERIR DADO REAL]`).

Para ficção em formato cinema, entregue o screenplay (ver `longo-narrativo.md`) em bloco de código, também com no máximo 86 caracteres por linha.

### Estático (dentro do bloco)
Colunas: Slide · Visual (composição · imagem · destaque) · Copy + CTA · [Texto original] · Link.

Abaixo do bloco (texto normal ou outro bloco de código, para copiar fácil):
- **Legenda** (se social), **hashtags**, **texto principal / título / descrição** (se anúncio).
- **Palavras em destaque** por peça.
- Variações de headline, se for anúncio.
