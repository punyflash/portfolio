import "@/css/app.css"
import { createVortex, install, subscribe } from '@westacks/vortex'
import inertia from '@westacks/vortex/inertia'
import bprogress from '@westacks/vortex/bprogress'
import { resolve } from '@/resolve'
import { mount, hydrate } from 'svelte'
import themeChange from "@/utils/theme"
import { prepareTranslation } from "@/utils/i18n"
import App from "@/App.svelte"

themeChange()

createVortex(async (target, page, ssr) => {
    const h = ssr ? hydrate : mount

    install(inertia(page), bprogress())

    const locale = page.props.locale as { current: string, fallback: string }
    prepareTranslation(locale.fallback, locale.current)

    let props = $state(await resolve(page))
    h(App, { target, props })
    subscribe(async (page) => Object.assign(props, await resolve(page)))
})
