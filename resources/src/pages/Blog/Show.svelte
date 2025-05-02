<script lang="ts">
    import type { BlogPostResourceType } from "@/types";

    const { post }: { post: { data: BlogPostResourceType } } = $props();
</script>

<div class="flex-1 p-8 flex flex-col">
    <div class="container">
        <h1 class="text-3xl font-bold mb-4">{post.data.title}</h1>
        <p>{post.data.description}</p>
        {@html post.data.content}
    </div>
</div>
