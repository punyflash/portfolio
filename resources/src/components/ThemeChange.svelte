<script lang="ts">
    import themeChange from '@/utils/theme';
    import Palette from '~icons/cil/color-palette'
    import Sun from '~icons/cil/sun'
    import Moon from '~icons/cil/moon'
    import Chevron from '~icons/cil/chevron-right'
    import Monitor from '~icons/cil/monitor'

    let dropdown: HTMLDetailsElement = $state()

    const { target = null, ...restProps }: { target?: HTMLElement, [key: string]: any } = $props();

    const themes = [
        "cupcake", "bumblebee", "emerald",
        "corporate", "synthwave", "retro", "cyberpunk", "valentine",
        "halloween", "garden", "forest", "aqua", "lofi",
        "pastel", "fantasy", "wireframe", "black", "luxury",
        "dracula", "cmyk", "autumn", "business", "acid",
        "lemonade", "night", "coffee", "winter", "dim",
        "nord", "sunset", "caramellatte", "abyss", "silk",
    ]
    let value = $state(!import.meta.env.SSR ? (localStorage.getItem("theme") || "") : "")

    $effect(() => themeChange(value, target))
</script>

<svelte:window on:click={() => dropdown.open = false} />

<details class="dropdown dropdown-end dropdown-top" bind:this={dropdown}>
    <summary class="btn btn-sm btn-ghost capitalize">
        <Palette/> {#if value} {value} {:else} System {/if}
    </summary >
    <ul role="menu" tabindex="0" class="dropdown-content max-h-96 overflow-y-auto shadow bg-base-100 rounded-box" style="scrollbar-width: none">
        <div class="menu p-0">
            <div class="menu pb-0 menu-horizontal justify-between w-full">
                <li class:menu-active={value === ""} >
                    <button class="capitalize btn-square p-1" onclick={() => value = ""}>
                        <Monitor class="text-primary h-6 w-6" />
                    </button>
                </li>
                <li class:menu-active={value === "light"} >
                    <button class="capitalize btn-square p-1" onclick={() => value = "light"}>
                        <Sun class="text-primary h-6 w-6" />
                    </button>
                </li>
                <li class:menu-active={value === "dark"} >
                    <button class="capitalize btn-square p-1" onclick={() => value = "dark"}>
                        <Moon class="text-primary h-6 w-6" />
                    </button>
                </li>
            </div>
            <div class="divider my-0"></div>
            {#each themes as theme}
                <li data-theme={theme} class:menu-active={value === theme}>
                    <button class="capitalize" onclick={() => value = theme}>
                        <Chevron class="text-primary" />
                        {theme}
                    </button>
                </li>
            {/each}
        </div>
    </ul>
</details>
