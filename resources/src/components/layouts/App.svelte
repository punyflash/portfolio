<script lang="ts">
    import { _, locale } from 'svelte-i18n'
    import { inertia } from "@inertiajs/svelte";
    import ThemeChange from "../ThemeChange.svelte";
    import LocaleChange from "../LocaleChange.svelte";
    import home from '#/routes/localized/home';
    import { index as contact } from '#/routes/localized/contact';
    import { index as projects } from '#/routes/localized/projects';

    const { children } = $props()
</script>

<main class="min-h-screen bg-base-100 text-base-content flex flex-col">
    <header class="navbar bg-base-200 shadow-md">
        <div class="flex-1">
            {#key $locale}
                <a class="btn btn-ghost text-xl" href={home.url({ locale: $locale })} use:inertia>{$_('Dmytro Morozov')}</a>
            {/key}
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                {#key $locale}
                    <li><a href={home.url({ locale: $locale })} use:inertia>{$_('Blog')}</a></li>
                    <li><a href={projects.url({ locale: $locale })} use:inertia>{$_('Projects')}</a></li>
                    <li><a href={contact.url({ locale: $locale })} use:inertia>{$_('Contact')}</a></li>
                {/key}
            </ul>
        </div>
        <ThemeChange class="capitalize select select-sm w-32" />
        <LocaleChange />
    </header>

    {@render children()}

    <footer class="footer p-6 bg-base-300 text-base-content">
        <div class="items-center grid-flow-col">
            <p>© {new Date().getFullYear()} {$_('Dmytro Morozov')}. {$_('All rights reserved')}.</p>
        </div>
    </footer>
</main>
