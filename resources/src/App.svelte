<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { _, locale } from "svelte-i18n";
    import { link, subscribe, getPage, type Page } from "@westacks/vortex";
    import { onDestroy } from "svelte";
    import { page } from "./utils/inertia";
    import ThemeChange from "./components/ThemeChange.svelte";
    import LocaleChange from "./components/LocaleChange.svelte";
    import ChevronDown from "~icons/cil/chevron-bottom";
    import Logo from "./components/Logo.svelte";

    type Toast = {
        id: number;
        class: string;
        message: string;
    }

    const initial = createToasts(getPage().props.flash)

    let { component, props } = $props()
    let dropdown: HTMLDetailsElement = $state();
    let toasts: Toast[] = $state(initial);

    const unsubscribe = subscribe(page => {
        const incoming = createToasts(page.props.flash);
        toasts = [...toasts, ...incoming];
        removeToasts(incoming);
    })

    removeToasts(initial);

    function createToasts(flash) {
        let toasts = []
        flash = Object.entries(flash || {});

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
        }

        return toasts
    }

    function removeToasts(toastsToHide) {
        toastsToHide = toastsToHide.map(t => t.id);

        setTimeout(() => toasts = toasts.filter(t => !toastsToHide.includes(t.id)), 4000);
    }

    onDestroy(unsubscribe);
</script>

<svelte:head>
    <meta name="csrf-token" content={$page.props.csrf as string} />
</svelte:head>

<svelte:window on:click={() => dropdown.open = false} />

{#snippet links()}
    {#key $locale}
        <li>
            <a href={`/${$locale}/blog`} use:link>
                {$_("Blog")}
            </a>
        </li>
        <li>
            <a href={`/${$locale}/projects`} use:link>
                {$_("Projects")}
            </a>
        </li>
        <li>
            <a href={`/${$locale}/contact`} use:link>
                {$_("Contact")}
            </a>
        </li>
    {/key}
{/snippet}

<main class="min-h-dvh bg-base-100 text-base-content flex flex-col">
    <header class="navbar bg-base-200 shadow-md px-6">
        <div class="flex-1">
            {#key $locale}
                <a
                    class="btn btn-square btn-ghost text-xl"
                    href={`/${$locale}`}
                    use:link><Logo class="h-full" /></a
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

    {#key component}
        <div class="flex-1 flex flex-col" in:fade>
            <component.default {...props}></component.default>
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
        {#each toasts as toast, i}
            <button type="button" onclick={() => toasts.splice(i, 1)} class="alert cursor-pointer {toast.class}" in:fly={{ x: 100 }} out:fly={{ x: 100 }}>
                <span>{toast.message}</span>
            </button>
        {/each}
    </div>
{/if}
