<script lang="ts">
    import MetaData from "@/components/MetaData.svelte";
    import type { BlogPostResourceType, FrontMatter } from "@/types";
    import { compile } from 'mdsvex';

    const { post }: { post: { data: BlogPostResourceType } } = $props();

    const content = $derived(post?.data?.content && compile(post.data.content))
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
