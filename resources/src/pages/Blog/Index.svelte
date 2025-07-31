<script lang="ts">
    import { link, visible } from "@westacks/vortex/svelte";
    import type { Paginated } from "@/types";
    import { _, locale } from "svelte-i18n";
    import { blur } from "svelte/transition";
    import { show } from "#/routes/localized/blog";
    import { dayjs } from "@/utils/i18n";
    import MetaData from "@/components/MetaData.svelte";
    import Callendar from "~icons/cil/calendar";

    const { posts }: { posts: Paginated<App.BlogPost> } = $props();
</script>

<svelte:head>
    <MetaData
        title={$_('Blog')}
        description={$_('Blog')}
    />
</svelte:head>

<div class="flex-1 p-8 flex flex-col items-center">
    <div class="container flex flex-col items-center gap-6">
        <h1 class="text-3xl font-bold mb-4">{$_("Blog")}</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each posts.data as post (post.id)}
                <!-- svelte-ignore a11y_mouse_events_have_key_events -->
                <a
                    href={show.url({ locale: $locale, post })}
                    use:link
                    class="card w-full bg-base-200 shadow-xl hover:scale-105 transition"
                    in:blur
                >
                    <figure>
                        <img
                        src={post.banner}
                        alt={post.title} />
                    </figure>
                    <div class="card-body gap-2">
                        <h2 class="card-title">{post.title}</h2>
                        <hr class="text-base-content/30">
                        {#if post.subtitle}
                            <h3 class="card-title text-base font-normal">{post.subtitle}</h3>
                            <hr class="text-base-content/30">
                        {/if}
                        <p class="text-base-content/70 flex-1">{post.description}</p>
                        <span class="flex items-center justify-end gap-2">
                            <Callendar class="inline-block" /> {$dayjs(post.published_at).format("L LT")}
                        </span>
                    </div>
                </a>
            {:else}
                <div class="col-span-full italic">
                    {$_("It's very quiet here... Too quiet.")}
                </div>
            {/each}
        </div>

        {#if posts.meta.next_cursor}
            <div class="group" use:visible={{
                params: { cursor: posts.meta.next_cursor },
                vortex: { only: ["posts"], preserveHistory: true, preserveScroll: true },
            }}>
                <span class="loading loading-dots loading-xl hidden group-data-[fetching]:block"></span>
            </div>
        {/if}
    </div>
</div>
