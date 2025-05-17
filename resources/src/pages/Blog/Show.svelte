<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import Comments from "@/components/Comments.svelte";
    import MetaData from "@/components/MetaData.svelte";
    import type { BlogPostResourceType, FrontMatter } from "@/types";
    import { safe } from '@/utils/markdown';
    import { store } from '#/routes/localized/blog/comments';

    const { post, comments }: { post: { data: BlogPostResourceType }, comments: { data: any[]} } = $props();

    const content = $derived(post?.data?.content && safe(post.data.content))
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

        <div class="divider"></div>
        <Comments post={store({ locale: $locale, post: post.data })} comments={comments.data} />
    </div>
</div>
