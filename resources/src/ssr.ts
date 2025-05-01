import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte'
import createServer from '@inertiajs/svelte/server'
import { render } from 'svelte/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { prepareTranslation } from './utils/i18n'

createServer(page =>
    createInertiaApp({
        page,
        resolve: name => resolvePageComponent(`./pages/${name}.svelte`, import.meta.glob<ResolvedComponent>('./pages/**/*.svelte')),
        setup: ({ App, props }) => {
            const locale = props.initialPage.props.locale as { default: string, fallback: string }

            prepareTranslation(locale.fallback, locale.default)

            render(App, { props })
        }
    }),
)
