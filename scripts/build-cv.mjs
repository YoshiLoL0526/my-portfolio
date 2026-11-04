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
const tags = (items) => items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join('');

const skillGroups = (groups) =>
  groups
    .map(
      ({ title, items }) => `
        <div class="skill-group">
          <h3>${escapeHtml(title)}</h3>
          <div class="tags">${tags(items)}</div>
        </div>`,
    )
    .join('');

const experience = (entries) =>
  entries
    .map(
      ({ role, company, date, location, bullets }) => `
        <article class="job">
          <div class="job-head">
            <h3>${escapeHtml(role)} — ${escapeHtml(company)}</h3>
            <span class="job-date">${escapeHtml(date)}</span>
          </div>
          <p class="job-meta">${escapeHtml(location)}</p>
          <ul class="bullets">
            ${bullets.map((bullet) => `<li>${rich(bullet)}</li>`).join('')}
          </ul>
        </article>`,
    )
    .join('');

const projects = (entries) =>
  entries
    .map(
      ({ name, tech, body, link }) => `
        <article class="project">
          <div class="project-head">
            <h3>${escapeHtml(name)}</h3>
            <span class="tech">${escapeHtml(tech)}</span>
          </div>
          <p>${rich(body)}</p>
          ${link ? `<p class="link">${escapeHtml(link)}</p>` : ''}
        </article>`,
    )
    .join('');

function pageFoot(data, page, total) {
  return `
    <div class="page-foot">
      <span>${escapeHtml(data.name)} · ${escapeHtml(data.labels.cv)}</span>
      <span>${escapeHtml(data.labels.page)} ${String(page).padStart(2, '0')} / ${String(total).padStart(2, '0')}</span>
    </div>`;
}

function renderCv(data) {
  const page1 = `
    <section class="page">
      <header class="header">
        <h1>${escapeHtml(data.name)}</h1>
        <p class="role">${escapeHtml(data.role)}</p>
        <p class="location">${escapeHtml(data.location)}</p>
        <div class="contact">${contact(data.contact)}</div>
      </header>
      <div class="rule"></div>

      <div class="grid">
        <aside class="sidebar">
          <div class="section">
            <h2 class="section-title">${escapeHtml(data.labels.stack)}</h2>
            ${skillGroups(data.skills)}
          </div>
        </aside>

        <main class="main">
          <section class="section">
            <h2 class="section-title">${escapeHtml(data.labels.profile)}</h2>
            <div class="profile"><p>${rich(data.profile)}</p></div>
          </section>

          <section class="section">
            <h2 class="section-title">${escapeHtml(data.labels.experience)}</h2>
            ${experience(data.experience)}
          </section>
        </main>
      </div>
      ${pageFoot(data, 1, 2)}
    </section>`;

  const page2 = `
    <section class="page">
      <div class="runhead">
        <span>${escapeHtml(data.name)}</span>
        <span class="line"></span>
        <span>${escapeHtml(data.role)}</span>
      </div>

      <div class="grid">
        <aside class="sidebar">
          <div class="section">
            <h2 class="section-title">${escapeHtml(data.labels.education)}</h2>
            <div class="education">
              <h3>${escapeHtml(data.education.title)}</h3>
              <p>${escapeHtml(data.education.org)}</p>
              <p>${escapeHtml(data.education.meta)}</p>
              <p class="muted">${escapeHtml(data.education.dates)}</p>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">${escapeHtml(data.labels.languages)}</h2>
            <ul class="language-list">
              ${data.languages
                .map(
                  ({ name, level }) =>
                    `<li><span>${escapeHtml(name)}</span><span class="muted">${escapeHtml(level)}</span></li>`,
                )
                .join('')}
            </ul>
          </div>
        </aside>

        <main class="main">
          <section class="section">
            <h2 class="section-title">${escapeHtml(data.labels.projects)}</h2>
            ${projects(data.projects)}
            <p class="footer-note">${rich(data.footer)}</p>
          </section>
        </main>
      </div>
      ${pageFoot(data, 2, 2)}
    </section>`;

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
      --tag: #edf1f5;
      --accent: #2f7d72;
    }

    * { box-sizing: border-box; }
    @page { size: A4; margin: 0; }
    html, body { margin: 0; padding: 0; background: #fff; }
    body {
      font-family: 'Inter', 'Segoe UI', sans-serif;
      color: var(--body);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      font-variant-ligatures: common-ligatures;
    }
    strong { color: var(--ink); font-weight: 600; }
    code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.92em;
      color: var(--ink);
    }

    .page {
      position: relative;
      width: 210mm;
      height: 297mm;
      padding: 15mm 14mm 13mm;
      overflow: hidden;
      background: #fff;
      page-break-after: always;
      break-after: page;
    }
    .page:last-child { page-break-after: auto; break-after: auto; }

    .header h1 {
      margin: 0;
      font-size: 26pt;
      line-height: 1.02;
      font-weight: 700;
      letter-spacing: -0.035em;
      color: var(--ink);
    }
    .role {
      margin: 6pt 0 0;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.6pt;
      font-weight: 500;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #334e68;
    }
    .location {
      margin: 9pt 0 0;
      font-size: 8.7pt;
      color: var(--muted);
    }
    .contact {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 2.5pt;
      font-size: 8.7pt;
      color: var(--muted);
    }
    .contact span + span::before {
      content: '•';
      margin: 0 6pt;
      color: var(--faint);
    }
    .rule {
      height: 2px;
      margin: 9pt 0 12pt;
      background: var(--accent);
    }

    .grid {
      display: grid;
      grid-template-columns: 57mm minmax(0, 1fr);
      gap: 9mm;
      align-items: start;
    }
    .sidebar {
      min-width: 0;
      padding-right: 7mm;
      border-right: 1px solid var(--line);
    }
    .main { min-width: 0; }

    .section + .section { margin-top: 12pt; }
    .section-title {
      display: flex;
      align-items: center;
      gap: 7pt;
      margin: 0 0 6pt;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7pt;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #486581;
      white-space: nowrap;
    }
    .section-title::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--line);
    }

    .skill-group { margin-bottom: 8pt; }
    .skill-group:last-child { margin-bottom: 0; }
    .skill-group h3 {
      margin: 0 0 3pt;
      font-size: 8.4pt;
      font-weight: 600;
      color: var(--ink);
    }
    .tags { display: flex; flex-wrap: wrap; gap: 2.6pt; }
    .tag {
      padding: 1.4pt 4pt;
      border-radius: 2pt;
      background: var(--tag);
      font-size: 7.3pt;
      line-height: 1.35;
      color: #334e68;
      white-space: nowrap;
    }

    .profile p {
      margin: 0;
      font-size: 9.05pt;
      line-height: 1.52;
      text-align: justify;
    }

    .job { margin-top: 9pt; break-inside: avoid; }
    .job:first-of-type { margin-top: 0; }
    .job-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 5pt;
    }
    .job h3 {
      margin: 0;
      font-size: 9.9pt;
      font-weight: 600;
      color: var(--ink);
    }
    .job-date {
      flex-shrink: 0;
      font-size: 7.9pt;
      color: var(--muted);
      white-space: nowrap;
    }
    .job-meta { margin: 1pt 0 0; font-size: 8.1pt; color: var(--muted); }
    .bullets { margin: 3pt 0 0; padding: 0; list-style: none; }
    .bullets li {
      position: relative;
      margin-bottom: 2.3pt;
      padding-left: 9pt;
      font-size: 8.85pt;
      line-height: 1.45;
    }
    .bullets li::before {
      content: '◇';
      position: absolute;
      top: -0.3pt;
      left: 0;
      font-size: 7pt;
      color: var(--accent);
    }

    .runhead {
      display: flex;
      align-items: center;
      margin-bottom: 10pt;
      font-family: 'JetBrains Mono', monospace;
      font-size: 6.8pt;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #486581;
    }
    .runhead .line {
      flex: 1;
      height: 1px;
      margin: 0 8pt;
      background: var(--line);
    }

    .education h3 {
      margin: 0 0 2pt;
      font-size: 9pt;
      font-weight: 600;
      color: var(--ink);
    }
    .education p { margin: 0; font-size: 8.3pt; line-height: 1.4; }
    .education .muted { margin-top: 3pt; color: var(--muted); }
    .language-list { margin: 0; padding: 0; list-style: none; }
    .language-list li {
      display: flex;
      justify-content: space-between;
      gap: 5pt;
      padding: 4.5pt 0;
      border-bottom: 1px solid var(--line);
      font-size: 8.7pt;
    }
    .language-list li:last-child { border-bottom: 0; }
    .muted { color: var(--muted); }

    .project {
      margin-top: 8pt;
      padding-bottom: 7pt;
      border-bottom: 1px solid var(--line);
      break-inside: avoid;
    }
    .project:first-of-type { margin-top: 0; }
    .project:last-of-type { padding-bottom: 0; border-bottom: 0; }
    .project-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 5pt;
    }
    .project h3 {
      margin: 0;
      font-size: 9.7pt;
      font-weight: 600;
      color: var(--ink);
    }
    .tech {
      max-width: 55%;
      overflow: hidden;
      font-family: 'JetBrains Mono', monospace;
      font-size: 6.7pt;
      color: var(--muted);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .project p {
      margin: 1.8pt 0 0;
      font-size: 8.7pt;
      line-height: 1.45;
    }
    .project .link {
      margin-top: 1.5pt;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.1pt;
      color: #486581;
    }
    .footer-note {
      margin-top: 9pt;
      font-size: 8.3pt;
      line-height: 1.45;
      color: #486581;
    }

    .page-foot {
      position: absolute;
      right: 14mm;
      bottom: 7mm;
      left: 14mm;
      display: flex;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
      font-size: 6.5pt;
      letter-spacing: 0.08em;
      color: var(--faint);
    }
  </style>
</head>
<body>
  ${page1}
  ${page2}
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
