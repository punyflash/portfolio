<script lang="ts">
    import MetaData from "@/components/MetaData.svelte";
    import type { ProjectResourceType, FrontMatter } from "@/types";
    import { compile } from 'mdsvex';

    const { project }: { project: { data: ProjectResourceType }} = $props()

    const content = $derived(project?.data?.content && compile(project.data.content))
</script>

<svelte:head>
    {#await content then content}
        <MetaData {...content.data.fm as FrontMatter} />
    {/await}
</svelte:head>

<div class="flex-1 p-8 flex flex-col items-center">
    <div class="container">
        <article class="prose max-w-none">
            {#await content then content}
                {@html content.code}
            {/await}
        </article>
    </div>
</div>
