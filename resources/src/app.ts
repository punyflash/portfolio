import "./app.css";
import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte'
import { mount, hydrate } from 'svelte'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import themeChange from "./utils/theme";
import { prepareTranslation } from "./utils/i18n";
import App from "./components/layouts/App.svelte";

themeChange()

createInertiaApp({
    async resolve(name) {
        const component = await resolvePageComponent(`./pages/${name}.svelte`, import.meta.glob<ResolvedComponent>('./pages/**/*.svelte'))

        return {default: component.default, layout: component.layout || App} as ResolvedComponent
    },
    setup({ el, App, props }) {
        const h = el.dataset?.serverRendered ? hydrate : mount
        delete el.dataset.page

        const locale = props.initialPage.props.locale as { current: string, fallback: string }

        prepareTranslation(locale.fallback, locale.current)

        h(App, { target: el as HTMLElement, props })
    }
})
