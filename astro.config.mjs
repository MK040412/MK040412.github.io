// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { template } from './src/settings';

export default defineConfig({
	integrations: [sitemap()],
	site: template.website_url,
	base: template.base,
});
