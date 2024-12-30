import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { enhancedImages } from 'mdsvex-enhanced-images'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'],
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: ['.md'],
            layout: 'src/routes/projects/ProjectPage.svelte',
            remarkPlugins: [enhancedImages],
        }),
    ],

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',
            precompress: false,
            strict: true,
        }),
        alias: {
            $projects: 'src/routes/projects',
        },
    },
}

export default config
