import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import type { Page } from '@westacks/vortex'
import type { Component } from 'svelte'

export async function resolve(page: Page) {
    const component = await resolvePageComponent(
        `./pages/${page.component}.svelte`,
        import.meta.glob<Component>('./pages/**/*.svelte')
    )

    return { component, props: page.props ?? {} }
}
