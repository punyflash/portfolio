<script lang="ts">
    import { page, inertia } from '@inertiajs/svelte'
    import { locale } from 'svelte-i18n'
    import Globe from '~icons/cil/globe-alt'

    let dropdown: HTMLDetailsElement = $state()
</script>

<svelte:window on:click={() => dropdown.open = false} />

<details bind:this={dropdown} class="dropdown dropdown-bottom dropdown-end">
    <summary class="btn btn-sm btn-ghost uppercase">
        <Globe /> {$locale}
    </summary>
    {#key $locale}
        <ul role="menu" tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
            {#each Object.entries(($page.props.locale as any).translations as Record<string, string>) as [key, url]}
                <li>
                    <a href={url} use:inertia class="btn btn-sm btn-ghost w-full uppercase">
                        {key}
                    </a>
                </li>
            {/each}
        </ul>
    {/key}
</details>
