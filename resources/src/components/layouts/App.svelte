<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { _, locale } from "svelte-i18n";
    import { inertia, page } from "@inertiajs/svelte";
    import ThemeChange from "../ThemeChange.svelte";
    import LocaleChange from "../LocaleChange.svelte";
    import { home } from "#/routes/localized";
    import { index as contact } from "#/routes/localized/contact";
    import { index as projects } from "#/routes/localized/projects";
    import { index as blog } from "#/routes/localized/blog";
    import ChevronDown from "~icons/cil/chevron-bottom";
    import Logo from "../Logo.svelte";

    type Toast = {
        id: number;
        class: string;
        message: string;
    }

    let toasts: Toast[] = $state([]);

    page.subscribe(page => {
        const flash = Object.entries(page.props.flash || {});

        for (const [key, message] of flash) {
            const id = performance.now()
            const data: Toast = {
                id, message, class: {
                    success: "alert-success",
                    error: "alert-error",
                    warning: "alert-warning",
                    info: "alert-info",
                }[key] || "",
            };

            toasts.push(data);

            setTimeout(() => toasts = toasts.filter(t => t.id !== id), 4000);
        }
    })

    const { children } = $props();

    let dropdown: HTMLDetailsElement = $state();
</script>

<svelte:window on:click={() => dropdown.open = false} />

{#snippet links()}
    {#key $locale}
        <li>
            <a href={blog.url({ locale: $locale })} use:inertia>
                {$_("Blog")}
            </a>
        </li>
        <li>
            <a href={projects.url({ locale: $locale })} use:inertia>
                {$_("Projects")}
            </a>
        </li>
        <li>
            <a href={contact.url({ locale: $locale })} use:inertia>
                {$_("Contact")}
            </a>
        </li>
    {/key}
{/snippet}

<main class="min-h-screen bg-base-100 text-base-content flex flex-col">
    <header class="navbar bg-base-200 shadow-md px-6">
        <div class="flex-1">
            {#key $locale}
                <a
                    class="btn btn-square btn-ghost text-xl"
                    href={home.url({ locale: $locale })}
                    use:inertia><Logo class="h-full" /></a
                >
            {/key}
        </div>
        <div class="hidden sm:flex flex-none">
            <ul class="menu menu-horizontal px-1">
                {@render links()}
            </ul>
        </div>
        <details bind:this={dropdown} class="dropdown dropdown-bottom dropdown-end sm:hidden">
            <summary class="btn btn-sm btn-ghost">
                <ChevronDown class="w-full" />
            </summary>
            <ul role="menu" tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
                {@render links()}
            </ul>
        </details>
        <LocaleChange />
    </header>

    {#key $page.component}
        <div class="flex-1 flex flex-col" in:fade>
            {@render children()}
        </div>
    {/key}

    <footer class="footer p-6 bg-base-300 text-base-content">
        <div class="items-center grid-flow-row justify-center lg:grid-flow-col lg:justify-between w-full text-xs sm:text-sm">
            <p>
                {new Date().getFullYear()} © {$_("All rights reserved")}.
            </p>
            <div class="flex items-center justify-center w-full">
                <ThemeChange class="capitalize select select-sm w-32" />
            </div>
        </div>
    </footer>
</main>

{#if toasts.length}
    <div class="toast toast-top toast-end" role="alert" in:fly={{ x: 100 }} out:fly={{ x: 100 }}>
        {#each toasts as toast, i (toast.message)}
            <button type="button" onclick={() => toasts.splice(i, 1)} class="alert cursor-pointer {toast.class}" in:fly={{ x: 100 }} out:fly={{ x: 100 }}>
                <span>{toast.message}</span>
            </button>
        {/each}
    </div>
{/if}
