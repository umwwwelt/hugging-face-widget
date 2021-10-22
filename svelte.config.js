import dotenv from 'dotenv';
dotenv.config();

import preprocess from 'svelte-preprocess';

const build = process.env.BUILD;

import node from '@sveltejs/adapter-node';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: build === 'vercel' ? vercel() : node()
	}
};

export default config;
