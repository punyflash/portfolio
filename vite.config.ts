import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { wayfinder } from "@laravel/vite-plugin-wayfinder";
import icons from 'unplugin-icons/vite'
import svg from 'vite-plugin-svelte-svg';
import { builtinModules } from 'node:module';
import path from 'node:path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/src/app.svelte.ts',
                'resources/css/filament/admin/theme.css',
            ],
            ssr: ['resources/src/ssr.ts'],
            refresh: true,
        }),
        wayfinder({
            path: 'resources/src/.wayfinder',
        }),
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
