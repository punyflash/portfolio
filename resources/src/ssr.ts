import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte'
import createServer from '@inertiajs/svelte/server'
import { render } from 'svelte/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

createServer(page =>
    createInertiaApp({
        page,
        resolve: name => resolvePageComponent(`./pages/${name}.svelte`, import.meta.glob<ResolvedComponent>('./pages/**/*.svelte')),
        setup: ({ App, props }) => render(App, { props })
    }),
)
