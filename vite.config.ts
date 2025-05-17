import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { run } from "vite-plugin-run";
import icons from 'unplugin-icons/vite'
import svg from 'vite-plugin-svelte-svg';
import { builtinModules } from 'node:module';
import path from 'node:path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/src/app.svelte.ts'],
            ssr: ['resources/src/ssr.ts'],
            refresh: true,
        }),
        run([
            {
                name: 'wayfinder',
                build: false,
                run: ['php', 'artisan', 'wayfinder:generate', '--path=resources/src/.wayfinder', '--skip-actions'],
                pattern: ["routes/**/*.php", "app/**/Http/**/*.php"],
            },
            {
                name: 'runtype',
                run: ['php', 'artisan', 'runtype:generate'],
                pattern: ["app/**/*.php"],
            }
        ]),
        svelte({
            extensions: ['.svelte'],
            preprocess: [
                vitePreprocess({ script: true }),
            ],
        }),
        icons({
            autoInstall: true,
            compiler: 'svelte',
        }),
        svg(),
        tailwindcss(),
    ],
    ssr: {
        external: builtinModules as string[],
        noExternal: true,
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.startsWith('~icons') || id.endsWith('.svg')) {
                        return 'assets';
                    }

                    for (const lib of ['rehype', 'remark', 'prism', 'katex']) {
                        if (id.includes(lib)) {
                            return lib;
                        }
                    }
                }
            }
        }
    },
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, 'resources/src') },
            { find: "#", replacement: path.resolve(__dirname, 'resources/src/.wayfinder') },
        ]
    },
});
