import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte'
import createServer from '@inertiajs/svelte/server'
import { render } from 'svelte/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { prepareTranslation } from './utils/i18n'

createServer(page =>
    createInertiaApp({
        page,
        async resolve(name) {
            const component = await resolvePageComponent(`./pages/${name}.svelte`, import.meta.glob<ResolvedComponent>('./pages/**/*.svelte'))
            // @ts-ignore
            component.layout = component.layout || App
            return component
        },
        setup: ({ App, props }) => {
            const locale = props.initialPage.props.locale as { default: string, fallback: string }

            prepareTranslation(locale.fallback, locale.default)

            render(App, { props })
        }
    }),
)
