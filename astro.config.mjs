import { defineConfig } from 'astro/config';

// `build.format: 'file'` preserva las URLs públicas actuales:
// src/pages/index.astro -> /index.html, src/pages/velarispos.astro -> /velarispos.html
export default defineConfig({
  site: 'https://zentrosoft.vercel.app/',
  output: 'static',
  build: {
    format: 'file',
  },
});
