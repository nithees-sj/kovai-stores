import { mkdir, copyFile } from 'node:fs/promises';
// Support direct page visits on static hosts, without relying on an SPA rewrite.
for (const route of ['products', 'about']) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile('dist/index.html', `dist/${route}/index.html`);
}
await copyFile('dist/index.html', 'dist/404.html');
