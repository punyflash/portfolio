<script lang="ts">
    import MetaData from "@/components/MetaData.svelte";
    import type { ProjectResourceType, FrontMatter } from "@/types";
    import markdown from '@/utils/markdown';

    const { project }: { project: { data: ProjectResourceType }} = $props()

    const content = $derived(project?.data?.content && markdown.process(project.data.content))
</script>

<svelte:head>
    {#await content then content}
        <MetaData {...content.data.meta as FrontMatter} />
    {/await}
</svelte:head>

<div class="flex-1 p-8 flex flex-col items-center">
    <div class="container">
        <article class="prose max-w-none">
            {#await content then content}
                {@html content.value}
            {/await}
        </article>
    </div>
</div>
