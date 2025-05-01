import "./app.css";
import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte'
import { mount, hydrate } from 'svelte'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import themeChange from "./utils/theme";
import { prepareTranslation } from "./utils/i18n";

themeChange()

createInertiaApp({
    resolve: name => resolvePageComponent(`./pages/${name}.svelte`, import.meta.glob<ResolvedComponent>('./pages/**/*.svelte')),
    setup({ el, App, props }) {
        const h = el.dataset?.serverRendered ? hydrate : mount
        delete el.dataset.page

        const locale = props.initialPage.props.locale as { default: string, fallback: string }

        prepareTranslation(locale.fallback, locale.default)

        h(App, { target: el as HTMLElement, props })
    },
})
