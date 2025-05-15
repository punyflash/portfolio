import { createVortexServer } from '@westacks/vortex/server'
import { render } from 'svelte/server'
import { resolve } from './resolve'
import App from './SSR.svelte'
import { prepareTranslation } from './utils/i18n'

createVortexServer(async (page) => {
    const locale = page.props.locale as { current: string, fallback: string }
    prepareTranslation(locale.fallback, locale.current)

    const { body, head } = render(App, { props: { page, ...await resolve(page) }})

    return { body, head: [head] }
})
