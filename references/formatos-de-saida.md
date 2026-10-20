# Formatos de saída

Se o usuário mandou um guia com outro formato, use o dele.

## Regra geral: tabelas dentro de bloco de código

Toda tabela (etapa 1 e etapa 2) vai **dentro de um bloco de código** (```` ``` ````), não como tabela markdown renderizada. No chat, a tabela renderizada ocupa a tela inteira; o bloco de código fica compacto e tem botão de copiar.

Três regras de apresentação:
1. **Cabe na janela**: a tabela tem no máximo **86 caracteres de largura** — nada de rolagem horizontal. Texto que não cabe quebra para a linha de baixo dentro da própria célula.
2. **Linha pontilhada entre cenas**: cada cena/slide é separada da próxima por uma linha de pontos (`|.....|.....|`). Cabeçalho separado por traços (`|-----|`).
3. **Comentários fora do bloco**: nome da abordagem, "por que funciona", legenda de links, notas e perguntas ficam em texto normal.

### Monte com o script (recomendado)
Alinhar à mão erra fácil. Se houver Node disponível, gere a tabela com `scripts/tabela.js` e cole a saída dentro do bloco:

```
node <pasta-da-skill>/scripts/tabela.js entrada.json
```

`entrada.json`:
```json
{"cols": [{"h":"Cena","w":9}, {"h":"Texto / Locução","w":24}, {"h":"Visual (resumo)","w":19}, {"h":"Δ","w":14}, {"h":"Link","w":4}],
 "rows": [["1\n0:00–0:03", "\"18 horas.\"", "Timelapse: pó na água fria", "⚠️ número vira o gancho", "L1"]]}
```
- `\n` força quebra dentro da célula (use para pôr o tempo embaixo do número da cena).
- O script quebra o texto, alinha, põe as linhas pontilhadas e **recusa** tabela mais larga que 86 (ajuste as larguras se isso acontecer).
- A soma das larguras + 3 por coluna + 1 deve ficar ≤ 86.

Sem Node, monte à mão seguindo as mesmas larguras e regras.

### Larguras de referência (somam ≤ 86)
| Tabela | Colunas e larguras |
|---|---|
| Etapa 1, vídeo, com Δ | Cena 9 · Texto/Locução 24 · Visual 19 · Δ 14 · Link 4 |
| Etapa 1, vídeo, sem Δ | Cena 9 · Texto/Locução 30 · Visual 28 · Link 4 |
| Etapa 2, vídeo, com Δ | Cena 9 · Visual 17 · Áudio 20 · Tela 10 · Δ 7 · Link 4 |
| Etapa 2, vídeo, sem Δ | Cena 9 · Visual 20 · Áudio 22 · Tela 12 · Link 4 |
| Estático, com Δ | Slide 5 · Visual 20 · Copy 21 · CTA 8 · Δ 9 · Link 4 |
| Estático, sem Δ | Slide 5 · Visual 24 · Copy 26 · CTA 10 · Link 4 |

A coluna **Cena** leva o número na 1ª linha e o tempo na 2ª (`1\n0:00–0:03`). Na etapa 2 com Δ, a coluna Δ é estreita: use só o emoji + 1–2 palavras e detalhe nas notas abaixo da tabela.

## Coluna Link

Dentro da tabela vai só uma **etiqueta curta** (`L1`, `L2`, `L1 L3`), ou `—` se não houver referência. Logo **abaixo do bloco**, em texto normal, a legenda com o link completo — fora do bloco ele fica clicável e não estoura a largura:

```
**Links**
- L1 — https://youtu.be/ID?t=45 · servir o café (0:45)
- L2 — `D:\ARTE\Projeto\assets\copo.jpg` · foto do copo
```

- **Vídeo com minutagem**: coloque a minutagem no próprio link quando a plataforma suportar — YouTube `https://youtu.be/ID?t=80` (segundos) ou `&t=1m20s`; Vimeo `https://vimeo.com/ID#t=1m20s`. Quando não suportar (Instagram, TikTok, Drive), escreva o tempo depois do link: `@ 1:20`.
- **Arquivo local**: caminho completo entre crases (com `@ 0:12` se for vídeo).
- Mesma etiqueta pode aparecer em várias cenas. Numere na ordem em que aparecem.
- Use os links que o usuário mandou, distribuindo-os nas cenas certas. Se buscar referências na web, só inclua links que abriu e confirmou; nunca invente URL ou minutagem.

## Coluna Δ (diferenças) — só quando necessário

Entra **apenas** quando o usuário mandou um roteiro, rascunho ou orientação de conteúdo que você usou como base. Sem material de base, não existe Δ.

Marcação (emoji + nota curta, cabendo na largura):
- `✅` — manteve o que o usuário mandou (ex.: `✅ linha 3`).
- `⚠️` — mudou texto, ordem, tempo ou visual (ex.: `⚠️ número vira o gancho`).
- `❌` — removeu algo do original ou foi contra uma orientação (ex.: `❌ horário saiu da fala`). Use com parcimônia.

Todo `⚠️` e `❌` precisa de motivo: se não couber na célula, explique numa lista **Diferenças** abaixo do bloco (`Cena 4 ⚠️ — anúncio foi para o payoff porque…`). Trechos do original removidos por inteiro entram como linha própria, com Cena `—`, para nada sumir sem aviso. Se tudo for `✅`, omita a coluna e diga em uma linha que o roteiro foi mantido.

---

## Etapa 1 — 3 abordagens em tabela enxuta

Abra com uma linha de contexto travado (tipo · plataforma · duração/tamanho · público · objetivo · CTA). Depois, para cada abordagem:

Fora do bloco:
```
### Abordagem A — [nome curto do ângulo]
Por que funciona: [1 frase] · Estrutura: [ex.: PAS] · Duração: [~XX s / X slides]
```

Dentro do bloco (vídeo, com Δ):
```
| Cena      | Texto / Locução          | Visual (resumo)     | Δ              | Link |
|-----------|--------------------------|---------------------|----------------|------|
| 1         | "18 horas."              | Timelapse: pó na    | ⚠️ número vira | L1   |
| 0:00–0:03 |                          | água fria, relógio  | o gancho       |      |
|           |                          | girando             |                |      |
|...........|..........................|.....................|................|......|
| 2         | "É o tempo que o nosso   | Macro das gotas     | ⚠️ linha 2     | —    |
| 0:03–0:09 | café passa na água fria. | filtrando, bem      | expandida      |      |
|           | Sem pressa. Sem calor."  | lentas              |                |      |
```

Abaixo do bloco: **Links** (legenda) e, se precisar, **Diferenças**. Ganchos alternativos (anúncio/vídeo curto), se fizer sentido, em lista curta.

Estático — colunas: `Slide · Headline / Copy · Visual (resumo) · [Δ] · Link`.

Repita para B e C. Termine com:

> Qual abordagem seguimos? Pode misturar trechos e pedir ajustes — depois de aprovado, monto o roteiro completo.

## Etapa 2 — Roteiro técnico completo (só da abordagem escolhida)

Fora do bloco:
```
## [Título do projeto] — Roteiro técnico
Tipo · Plataforma · Proporção · Duração total · Abordagem escolhida
```

### Vídeo (dentro do bloco)
Colunas: Cena (nº + tempo) · Visual · Áudio (locução · trilha · SFX) · Tela (texto na tela) · [Δ] · Link — larguras na tabela acima.

Regras:
- Tempos acumulados e somando a duração total.
- **Visual** descreve o suficiente para quem vai produzir (animador, editor, filmmaker): composição, ação, movimento de câmera/elementos, transição. Para animação, inclua a metáfora visual e o que se transforma em quê. Se a descrição ficar longa demais para a coluna, mantenha o essencial na tabela e detalhe em **Notas por cena** abaixo do bloco.
- **Áudio** usa o texto aprovado na etapa 1, sem reescrever (se precisar cortar para caber no tempo, marque `⚠️`).
- Abaixo do bloco: **Links**, **Diferenças** (se houver Δ) e **Notas de produção** curtas (tom de locução, referência de trilha, assets necessários, pontos a confirmar `[INSERIR DADO REAL]`).

Para ficção em formato cinema, entregue o screenplay (ver `longo-narrativo.md`) em bloco de código, também com no máximo 86 caracteres por linha.

### Estático (dentro do bloco)
Colunas: Slide · Visual (composição · imagem · destaque) · Copy (headline · apoio) · CTA · [Δ] · Link.

Abaixo do bloco (texto normal ou outro bloco de código, para copiar fácil):
- **Links** e **Diferenças**, se houver.
- **Legenda** (se social), **hashtags**, **texto principal / título / descrição** (se anúncio).
- **Palavras em destaque** por peça.
- Variações de headline, se for anúncio.
