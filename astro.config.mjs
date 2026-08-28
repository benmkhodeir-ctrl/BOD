import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://benondelivery.com',
  output: 'static',
  trailingSlash: 'never'
});
