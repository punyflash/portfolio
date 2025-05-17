<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import Comments from "@/components/Comments.svelte";
    import MetaData from "@/components/MetaData.svelte";
    import type { BlogPostResourceType, FrontMatter } from "@/types";
    import { safe } from '@/utils/markdown';
    import { store } from '#/routes/localized/blog/comments';

    const { post, comments }: { post: { data: BlogPostResourceType }, comments: { data: any[]} } = $props();

    const content = $derived(post?.data?.content && safe.processSync(post.data.content))
</script>

<svelte:head>
    <MetaData {...content.data.meta as FrontMatter} />
</svelte:head>

<div class="flex-1 p-8 flex flex-col items-center">
    <div class="container">
        <article class="prose max-w-none">
            {@html content.value}
        </article>

        <div class="divider"></div>
        <Comments post={store({ locale: $locale, post: post.data })} comments={comments.data} />
    </div>
</div>
