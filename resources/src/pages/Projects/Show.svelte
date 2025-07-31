<script lang="ts">
    import MetaData from "@/components/MetaData.svelte";
    import type { FrontMatter } from "@/types";
    import { safe } from '@/utils/markdown';

    const { project }: { project: { data: App.Project }} = $props()

    const content = $derived(project?.data?.content && safe.processSync(project.data.content))
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
