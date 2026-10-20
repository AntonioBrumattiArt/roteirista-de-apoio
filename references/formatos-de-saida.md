# Formatos de saída

Se o usuário mandou um guia com outro formato, use o dele.

## Regra geral: tabelas dentro de bloco de código

Toda tabela (etapa 1 e etapa 2) vai **dentro de um bloco de código** (```` ``` ````), não como tabela markdown renderizada. Motivo: no chat, a tabela renderizada ocupa a tela inteira; o bloco de código fica compacto, rola na horizontal e tem botão de copiar.

Como montar:
- Use o formato de tabela com pipes (`| a | b |`), com as colunas **alinhadas com espaços** (largura fixa por coluna), e uma linha separadora `|---|`.
- Larguras de referência: Cena 4–6 · Tempo 11 · Texto/Locução ~34 · Visual ~30 · Texto na tela ~18 · Δ ~26. Texto que passar da largura continua na linha de baixo, com as outras células vazias.
- A coluna **Links** é sempre a **última** — assim URLs longas não desalinham o resto.
- Dentro do bloco não há negrito nem link clicável: escreva URLs completas em texto puro e marque destaque em MAIÚSCULAS se precisar.
- Comentários, "por que funciona" e perguntas ficam **fora** do bloco, em texto normal.

## Coluna Links

Referências de cada cena/slide: vídeos, sites, fotos da internet ou arquivos do computador do usuário.
- **Vídeo com minutagem**: sempre que o trecho importar, coloque a minutagem no link quando a plataforma suportar — YouTube `https://youtu.be/ID?t=80` (segundos) ou `&t=1m20s`; Vimeo `https://vimeo.com/ID#t=1m20s`. Quando não suportar (Instagram, TikTok, Drive), escreva o link seguido de `@ 1:20`.
- **Arquivo local**: caminho completo, ex. `D:\ARTE\Projeto\assets\ref-03.jpg` (com `@ 0:12` se for vídeo).
- **Várias referências na mesma cena**: separe com ` · `.
- **Sem referência**: `—`.
- Use os links que o usuário mandou, distribuindo-os nas cenas certas. Se você buscar referências na web, só inclua links que abriu e confirmou; nunca invente URL ou minutagem.

## Coluna Δ (diferenças) — só quando necessário

Entra **apenas** quando o usuário mandou um roteiro, rascunho ou orientação de conteúdo que você usou como base. Sem material de base, não existe Δ.

Marcação (emoji + nota curta):
- `✅ igual` — manteve o que o usuário mandou.
- `⚠️ ajustado: [o quê e por quê]` — mudou texto, ordem, tempo ou visual, com motivo (ritmo, gancho, tempo, clareza).
- `❌ [removido/contradiz]: [o quê e por quê]` — cortou algo do original ou foi contra uma orientação. Use com parcimônia e sempre justifique.

Trechos do original que foram removidos por inteiro entram como linha própria da tabela, com Cena `—` e `❌ removido: …`, para nada sumir sem aviso. Se tudo for `✅`, a coluna pode ser omitida e basta dizer em uma linha que o roteiro foi mantido.

---

## Etapa 1 — 3 abordagens em tabela enxuta

Abra com uma linha de contexto travado (tipo · plataforma · duração/tamanho · público · objetivo · CTA). Depois, para cada abordagem:

Fora do bloco:
```
### Abordagem A — [nome curto do ângulo]
Por que funciona: [1 frase] · Estrutura: [ex.: PAS] · Duração: [~XX s / X slides]
```

Dentro do bloco (vídeo):
```
| Cena | Tempo     | Texto / Locução                    | Visual (resumo)                | Δ                          | Links
|------|-----------|------------------------------------|--------------------------------|----------------------------|------
| 1    | 0:00–0:03 | "Pare de postar todo dia."         | Close no celular, dedo trava   | ⚠️ ajustado: gancho direto | https://youtu.be/abc123?t=12
|      |           |                                    | o scroll                       |                            |
| 2    | 0:03–0:08 | "O algoritmo não premia volume.    | Gráfico de views caindo        | ✅ igual                   | —
|      |           | Premia retenção."                  |                                |                            |
```
(Δ só se houver material de base.)

Estático — troque as colunas por: `Slide | Headline / Copy | Visual (resumo) | Δ | Links`.

Ganchos alternativos (anúncio/vídeo curto), se fizer sentido, ficam fora do bloco, em lista curta.

Repita para B e C. Termine com:

> Qual abordagem seguimos? Pode misturar trechos e pedir ajustes — depois de aprovado, monto o roteiro completo.

## Etapa 2 — Roteiro técnico completo (só da abordagem escolhida)

Fora do bloco:
```
## [Título do projeto] — Roteiro técnico
Tipo · Plataforma · Proporção · Duração total · Abordagem escolhida
```

### Vídeo (dentro do bloco)
```
| Cena | Tempo     | Visual                         | Áudio (locução · trilha · SFX)     | Texto na tela      | Δ             | Links
|------|-----------|--------------------------------|------------------------------------|--------------------|---------------|------
| 1    | 0:00–0:03 | Close no celular, polegar      | "Pare de postar todo dia."         | PARE DE POSTAR     | ✅ igual      | https://youtu.be/abc123?t=12
|      |           | trava o scroll; corte seco     | Trilha entra seca · SFX tap        |                    |               |
```

Regras:
- Tempos acumulados e somando a duração total.
- **Visual** descreve o suficiente para quem vai produzir (animador, editor, filmmaker): composição, ação, movimento de câmera/elementos, transição. Para animação, inclua a metáfora visual e o que se transforma em quê.
- **Áudio** usa o texto aprovado na etapa 1, sem reescrever (se precisar cortar para caber no tempo, marque `⚠️` no Δ ou avise).
- Depois do bloco, **notas de produção** curtas se necessário (tom de locução, referência de trilha, assets necessários, pontos a confirmar `[INSERIR DADO REAL]`).

Para ficção em formato cinema, entregue o screenplay (ver `longo-narrativo.md`) em bloco de código e, se útil, a tabela.

### Estático (dentro do bloco)
```
| Slide | Visual (composição · imagem · destaque)  | Copy (headline · apoio)            | CTA / obs.     | Δ          | Links
|-------|------------------------------------------|------------------------------------|----------------|------------|------
| 1     | Foco no produto, texto no terço superior,| CORTE 3 HORAS DO SEU FECHAMENTO    | arraste →      | ✅ igual   | D:\ARTE\Cliente\assets\ref-01.jpg
|       | elemento cortado na borda puxa o slide 2 | Sem planilha, sem retrabalho.      |                |            |
```

Depois do bloco (texto normal ou outro bloco de código, para copiar fácil):
- **Legenda** (se social), **hashtags**, **texto principal / título / descrição** (se anúncio).
- **Palavras em destaque** por peça.
- Variações de headline, se for anúncio.
