import "@/css/app.css"
import { createVortex } from '@westacks/vortex'
import inertia from '@westacks/vortex/inertia'
import bprogress from '@westacks/vortex/bprogress'
import { resolve } from '@/resolve'
import { mount, hydrate } from 'svelte'
import themeChange from "@/utils/theme"
import { prepareTranslation } from "@/utils/i18n"
import App from "@/App.svelte"

themeChange()

createVortex(async (target, page, install, ssr) => {
    const h: typeof mount = ssr ? hydrate : mount

    install(inertia(page.get()), bprogress())

    delete target.dataset.page
    delete target.dataset.ssr

    const locale = page.get().props.locale as { current: string, fallback: string }
    prepareTranslation(locale.fallback, locale.current)

    let props = $state(await resolve(page.get()))

    h(App, { target, props })

    page.subscribe(async (page) => Object.assign(props, await resolve(page)))
})
