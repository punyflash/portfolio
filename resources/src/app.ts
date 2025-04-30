import "./app.css";
import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte'
import { mount, hydrate } from 'svelte'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
    resolve: name => resolvePageComponent(`./pages/${name}.svelte`, import.meta.glob<ResolvedComponent>('./pages/**/*.svelte')),
    setup({ el, App, props }) {
        const h = el.dataset?.serverRendered ? hydrate : mount
        delete el.dataset.page

        h(App, { target: el as HTMLElement, props })
    },
})
