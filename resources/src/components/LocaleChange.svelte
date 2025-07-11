<script lang="ts">
    import { link } from '@westacks/vortex'
    import { locale } from 'svelte-i18n'
    import { page } from '@westacks/vortex/svelte';
    import Globe from '~icons/cil/globe-alt'

    let dropdown: HTMLDetailsElement = $state()
</script>

<svelte:window on:click={() => dropdown.open = false} />

<details bind:this={dropdown} class="dropdown dropdown-bottom dropdown-end">
    <summary class="btn btn-sm btn-ghost uppercase">
        <Globe /> {$locale}
    </summary>
    {#key $page}
        <ul role="menu" tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
            {#each Object.entries(($page.props.locale as any).translations as Record<string, string>) as [key, url]}
                <li>
                    <a href={url} use:link={{ vortex: { preserveScroll: true }}} class="btn btn-sm btn-ghost w-full uppercase">
                        {key}
                    </a>
                </li>
            {/each}
        </ul>
    {/key}
</details>
