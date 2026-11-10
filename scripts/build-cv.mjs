// Genera los tres CV (ES/EN/PT) a partir de scripts/cv-data.mjs.
// Usa Chrome/Edge en modo headless para imprimir el HTML a PDF con las fuentes
// del proyecto incrustadas, de modo que el resultado no dependa de la máquina.
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { cvData } from './cv-data.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = resolve(root, 'scripts/.cv-build');
const publicDir = resolve(root, 'public');

const interFont = readFileSync(
  resolve(root, 'node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2'),
).toString('base64');
const monoFont = readFileSync(
  resolve(root, 'node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-ext-wght-normal.woff2'),
).toString('base64');

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const rich = (value) =>
  escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');

const contact = (items) => items.map((item) => `<span>${escapeHtml(item)}</span>`).join('');

const experience = (entries, labels) =>
  entries
    .map(
      ({ role, company, context, date, location, bullets, stack }) => `
        <article class="job">
          <div class="row">
            <h3>${escapeHtml(role)} · <span class="company">${escapeHtml(company)}</span></h3>
            <span class="date">${escapeHtml(date)}</span>
          </div>
          <div class="row sub">
            <span>${escapeHtml(context)}</span>
            <span>${escapeHtml(location)}</span>
          </div>
          <ul class="bullets">
            ${bullets.map((bullet) => `<li>${rich(bullet)}</li>`).join('')}
          </ul>
          <p class="stack"><span>${escapeHtml(labels.stack)}:</span> ${escapeHtml(stack)}</p>
        </article>`,
    )
    .join('');

const skills = (groups) => `
  <dl class="skills">
    ${groups.map(({ title, items }) => `<dt>${escapeHtml(title)}</dt><dd>${escapeHtml(items)}</dd>`).join('')}
  </dl>`;

const projects = (entries) => `
  <ul class="projects">
    ${entries
      .map(
        ({ name, body, link }) => `
        <li>
          <strong>${escapeHtml(name)}</strong>${link ? ` <span class="link">${escapeHtml(link)}</span>` : ''}
          <span class="sep">—</span> ${rich(body)}
        </li>`,
      )
      .join('')}
  </ul>`;

function renderCv(data) {
  const { labels } = data;
  return `<!doctype html>
<html lang="${data.lang}">
<head>
  <meta charset="utf-8" />
  <meta name="author" content="${escapeHtml(data.name)}" />
  <title>${escapeHtml(data.title)}</title>
  <style>
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 100 900;
      font-display: block;
      src: url(data:font/woff2;base64,${interFont}) format('woff2');
    }
    @font-face {
      font-family: 'JetBrains Mono';
      font-style: normal;
      font-weight: 100 800;
      font-display: block;
      src: url(data:font/woff2;base64,${monoFont}) format('woff2');
    }

    :root {
      --ink: #102a43;
      --body: #243b53;
      --muted: #627d98;
      --faint: #9fb3c8;
      --line: #d9e2ec;
      --accent: #2f7d72;
    }

    * { box-sizing: border-box; }
    @page { size: A4; margin: 13mm 15mm 14mm; }
    html, body { margin: 0; padding: 0; background: #fff; }
    body {
      font-family: 'Inter', 'Segoe UI', sans-serif;
      font-size: 9.2pt;
      line-height: 1.45;
      color: var(--body);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    strong { color: var(--ink); font-weight: 600; }
    p { margin: 0; }

    .header h1 {
      margin: 0;
      font-size: 23pt;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.03em;
      color: var(--ink);
    }
    .role {
      margin-top: 4pt;
      font-size: 11pt;
      font-weight: 600;
      color: var(--accent);
    }
    .contact {
      display: flex;
      flex-wrap: wrap;
      margin-top: 5pt;
      font-size: 8.6pt;
      color: var(--muted);
    }
    .contact span + span::before {
      content: '·';
      margin: 0 6pt;
      color: var(--faint);
    }

    section { margin-top: 12pt; }
    h2 {
      margin: 0 0 6pt;
      padding-bottom: 3pt;
      border-bottom: 1.5px solid var(--accent);
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.6pt;
      font-weight: 600;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--ink);
      break-after: avoid;
    }

    .summary { text-align: justify; }

    .job { break-inside: avoid; }
    .job + .job { margin-top: 9pt; }
    .row {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 8pt;
    }
    .job h3 {
      margin: 0;
      font-size: 10.2pt;
      font-weight: 600;
      color: var(--ink);
    }
    .company { color: var(--accent); }
    .date {
      flex-shrink: 0;
      font-size: 8.6pt;
      font-weight: 500;
      color: var(--ink);
      white-space: nowrap;
    }
    .sub {
      margin-top: 0.5pt;
      font-size: 8.3pt;
      font-style: italic;
      color: var(--muted);
    }
    .bullets { margin: 3pt 0 0; padding-left: 11pt; }
    .bullets li { margin-bottom: 1.8pt; padding-left: 1pt; }
    .bullets li::marker { color: var(--accent); }
    .stack {
      margin-top: 2pt;
      font-size: 8.2pt;
      color: var(--muted);
    }
    .stack span { font-weight: 600; color: #486581; }

    .skills {
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 2.5pt 10pt;
      margin: 0;
    }
    .skills dt { font-weight: 600; color: var(--ink); }
    .skills dd { margin: 0; }

    .projects { margin: 0; padding-left: 11pt; }
    .projects li { margin-bottom: 2.5pt; break-inside: avoid; }
    .projects li::marker { color: var(--accent); }
    .projects .link {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.4pt;
      color: var(--muted);
    }
    .projects .sep { color: var(--faint); }

    .closing {
      display: grid;
      grid-template-columns: 1.6fr 1fr;
      gap: 14mm;
      break-inside: avoid;
    }
    .closing section { margin-top: 12pt; }
    .edu h3 { margin: 0; font-size: 9.6pt; font-weight: 600; color: var(--ink); }
    .edu .muted { color: var(--muted); }
    .edu .note { margin-top: 2pt; font-size: 8.4pt; }
    .langs { margin: 0; padding: 0; list-style: none; }
    .langs li {
      display: flex;
      justify-content: space-between;
      padding: 1.5pt 0;
    }
    .langs .muted { color: var(--muted); }
  </style>
</head>
<body>
  <header class="header">
    <h1>${escapeHtml(data.name)}</h1>
    <p class="role">${escapeHtml(data.role)}</p>
    <div class="contact"><span>${escapeHtml(data.location)}</span>${contact(data.contact)}</div>
  </header>

  <section>
    <h2>${escapeHtml(labels.profile)}</h2>
    <p class="summary">${rich(data.profile)}</p>
  </section>

  <section>
    <h2>${escapeHtml(labels.experience)}</h2>
    ${experience(data.experience, labels)}
  </section>

  <section>
    <h2>${escapeHtml(labels.skills)}</h2>
    ${skills(data.skills)}
  </section>

  <section>
    <h2>${escapeHtml(labels.projects)}</h2>
    ${projects(data.projects)}
  </section>

  <div class="closing">
    <section class="edu">
      <h2>${escapeHtml(labels.education)}</h2>
      <div class="row">
        <h3>${escapeHtml(data.education.title)}</h3>
        <span class="date">${escapeHtml(data.education.dates)}</span>
      </div>
      <p class="muted">${escapeHtml(data.education.org)}</p>
      <p class="note">${escapeHtml(data.education.note)}</p>
    </section>
    <section>
      <h2>${escapeHtml(labels.languages)}</h2>
      <ul class="langs">
        ${data.languages
          .map(({ name, level }) => `<li><span>${escapeHtml(name)}</span><span class="muted">${escapeHtml(level)}</span></li>`)
          .join('')}
      </ul>
    </section>
  </div>
</body>
</html>`;
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean);

  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error('No se encontró Chrome ni Edge. Define CHROME_PATH para generar los CV.');
  }
  return found;
}

const chrome = findChrome();
mkdirSync(buildDir, { recursive: true });
mkdirSync(publicDir, { recursive: true });

for (const [code, data] of Object.entries(cvData)) {
  const htmlPath = resolve(buildDir, `${code}.html`);
  const pdfPath = resolve(publicDir, `cv-${code}.pdf`);
  const html = renderCv({ ...data, name: 'Raidel Martínez Santos' });
  writeFileSync(htmlPath, html, 'utf8');

  const result = spawnSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--no-pdf-header-footer',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=5000',
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: 'pipe', encoding: 'utf8' },
  );

  if (result.status !== 0 || !existsSync(pdfPath)) {
    throw new Error(
      `Chrome no pudo generar ${pdfPath} (código ${result.status}).\n${result.stderr ?? ''}`,
    );
  }

  console.log(`✓ public/cv-${code}.pdf`);
}

rmSync(buildDir, { recursive: true, force: true });
