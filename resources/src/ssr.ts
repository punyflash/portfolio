import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte'
import createServer from '@inertiajs/svelte/server'
import { render } from 'svelte/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { prepareTranslation } from './utils/i18n'
import Layout from './components/layouts/App.svelte'

createServer(page =>
    createInertiaApp({
        page,
        async resolve(name) {
            const component = await resolvePageComponent(`./pages/${name}.svelte`, import.meta.glob<ResolvedComponent>('./pages/**/*.svelte'))
            // @ts-ignore
            return {default: component.default, layout: component.layout || Layout} as ResolvedComponent
        },
        setup: ({ App, props }) => {
            const locale = props.initialPage.props.locale as { default: string, fallback: string }

            prepareTranslation(locale.fallback, locale.default)

            return render(App, { props })
        }
    }),
    import.meta.env.VITE_SSR_PORT,
)
