<script lang="ts">
    import MetaData from "@/components/MetaData.svelte";
    import type { ProjectResourceType, FrontMatter } from "@/types";
    import { safe } from '@/utils/markdown';

    const { project }: { project: { data: ProjectResourceType }} = $props()

    const content = $derived(project?.data?.content && safe(project.data.content))
</script>

<svelte:head>
    <MetaData {...content.data.meta as FrontMatter} />
</svelte:head>

<div class="flex-1 p-8 flex flex-col items-center">
    <div class="container">
        <article class="prose max-w-none">
            {@html content.value}
        </article>
    </div>
</div>
