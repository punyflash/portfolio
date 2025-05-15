<script lang="ts">
    import { _ } from "svelte-i18n";
    import type { FrontMatter } from "@/types/blog";
    import { page } from "@/utils/inertia";

    const canonical = $derived($page?.props?.locale && ($page.props.locale as any).canonical)
    const { title = null, ...tags }: FrontMatter = $props();
</script>

{#if title}
    <title>{title} | {$_(import.meta.env.VITE_APP_NAME)}</title>
{:else}
    <title>{$_(import.meta.env.VITE_APP_NAME)}</title>
{/if}
{#if canonical}
    <link rel="canonical" href={canonical} />
{/if}

{#each Object.entries(tags) as [tag, value]}
    <meta name={tag} content={value} />
{/each}
