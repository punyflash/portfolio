import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/src/app.ts'],
            ssr: ['resources/src/ssr.ts'],
            refresh: true,
        }),
        tailwindcss(),
        svelte({
            preprocess: [vitePreprocess({ script: true })],
        }),
    ],
});
