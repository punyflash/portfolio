<script lang="ts">
    import MetaData from "@/components/MetaData.svelte";
    import type { BlogPostResourceType, FrontMatter } from "@/types";
    import markdown from '@/utils/markdown';

    const { post }: { post: { data: BlogPostResourceType } } = $props();

    const content = $derived(post?.data?.content && markdown.process(post.data.content))
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
