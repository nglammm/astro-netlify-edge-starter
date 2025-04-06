import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://nglam.dev',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Ng Lam',
      openGraph: {
        home: {
          title: 'Ng Lam',
          description: 'My profile page.'
        },
        blog: {
          title: 'Blog',
          description: 'News and guides from Ng Lam.'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'nglammm/discussions',
        repositoryId: 'R_kgDOOU1gIg',
        category: 'General',
        categoryId: 'DIC_kwDOOU1gIs4Co1Lz',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});