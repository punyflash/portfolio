<script lang="ts">
    import { inertia, WhenVisible } from "@inertiajs/svelte";
    import type { BlogPostResourceType, Paginated } from "@/types";
    import { _, locale } from "svelte-i18n";
    import { blur } from "svelte/transition";
    import { show } from "#/routes/localized/blog/show";

    const { posts }: { projects: Paginated<BlogPostResourceType> } = $props();
</script>

<div class="flex-1 p-8 flex flex-col items-center">
    <div class="container flex flex-col items-center gap-6">
        <h1 class="text-3xl font-bold mb-4">{$_("Blog")}</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each posts.data as post (post.id)}
                <!-- svelte-ignore a11y_mouse_events_have_key_events -->
                <a
                    href={show.url({ locale: $locale, post })}
                    use:inertia
                    class="card w-full bg-base-200 shadow-xl hover:scale-105 transition"
                    in:blur
                >
                    <div class="card-body">
                        <h2 class="card-title">{post.title}</h2>
                        <p>{post.description}</p>
                    </div>
                </a>
            {:else}
                <div class="col-span-full italic">
                    {$_("It's very quiet here... Too quiet.")}
                </div>
            {/each}
        </div>

        {#if posts.meta.next_cursor}
            <WhenVisible
                always
                params={{
                    only: ["posts"],
                    data: { cursor: posts.meta.next_cursor },
                    preserveUrl: true,
                }}
            >
                <svelte:fragment slot="fallback">
                    <span class="loading loading-dots loading-xl"></span>
                </svelte:fragment>
            </WhenVisible>
        {/if}
    </div>
</div>
