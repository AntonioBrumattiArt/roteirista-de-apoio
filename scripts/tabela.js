// Monta tabela de roteiro alinhada para colar dentro de bloco de código.
// Uso: node tabela.js entrada.json
// entrada.json: {
//   "max": 86,                                  // largura máxima total (padrão 86)
//   "cols": [{"h": "Cena", "w": 9}, ...],       // cabeçalho e largura de cada coluna
//   "rows": [["1\n0:00–0:03", "texto", ...]]    // "\n" força quebra de linha na célula
// }
const fs = require('fs');
const cfg = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const { cols, rows } = cfg;
const max = cfg.max || 86;

// largura visual: ✅ ❌ ⚠ ocupam 2 colunas; seletor de variação não ocupa
const dw = s => [...s.replace(/️/g, '')].reduce((n, c) => n + (/[✅❌⚠]/.test(c) ? 2 : 1), 0);
const pad = (s, w) => s + ' '.repeat(Math.max(0, w - dw(s)));

const wrap = (s, w) => {
  const out = [];
  for (const par of String(s).split('\n')) {
    let line = '';
    for (let word of par.split(' ')) {
      while (dw(word) > w) {               // palavra maior que a coluna (ex.: URL, caminho)
        if (line) { out.push(line); line = ''; }
        // corta depois de / \ ? & = . - quando possível, para o link continuar legível
        let cut = -1;
        for (let i = Math.min(w, word.length) - 1; i > 0; i--) if ('/\\?&=.-#'.includes(word[i])) { cut = i + 1; break; }
        if (cut < w / 2) cut = w;
        out.push(word.slice(0, cut)); word = word.slice(cut);
      }
      if (line && dw(line + ' ' + word) > w) { out.push(line); line = word; }
      else line = line ? line + ' ' + word : word;
    }
    out.push(line);
  }
  return out;
};

for (const c of cols) c.w = Math.max(c.w, dw(c.h));   // coluna nunca menor que o título
const total = cols.reduce((n, c) => n + c.w + 3, 1);
if (total > max) {
  console.error(`Tabela com ${total} caracteres; o máximo é ${max}. Reduza as larguras.`);
  process.exit(1);
}

const fmt = cells => '|' + cells.map((c, i) => ' ' + pad(c, cols[i].w) + ' ').join('|') + '|';
const rule = ch => '|' + cols.map(c => ch.repeat(c.w + 2)).join('|') + '|';

const lines = [fmt(cols.map(c => c.h)), rule('-')];
rows.forEach((r, idx) => {
  if (idx > 0) lines.push(rule('.'));
  const wrapped = r.map((c, i) => wrap(c, cols[i].w));
  const n = Math.max(...wrapped.map(w => w.length));
  for (let k = 0; k < n; k++) lines.push(fmt(wrapped.map(w => w[k] || '')));
});
console.log(lines.join('\n'));
