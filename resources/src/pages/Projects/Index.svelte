<script lang="ts">
    import { inertia, WhenVisible } from '@inertiajs/svelte'
    import type { ProjectResourceType, Paginated } from '@/types';
    import { _, locale } from 'svelte-i18n'
    import { blur } from 'svelte/transition'
    import { show } from '#/routes/localized/projects'
    import { dayjs } from "@/utils/i18n";
    import MetaData from '@/components/MetaData.svelte';
    import Callendar from "~icons/cil/calendar";

    const { projects }: { projects: Paginated<ProjectResourceType> } = $props()
</script>

<svelte:head>
    <MetaData title={$_('Projects')} />
</svelte:head>

<div class="flex-1 p-8 flex flex-col items-center">
    <div class="container flex flex-col items-center gap-6">
        <h1 class="text-3xl font-bold mb-4">{$_('Projects')}</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each projects.data as project (project.id)}
                <!-- svelte-ignore a11y_mouse_events_have_key_events -->
                <a href={show.url({ locale: $locale, project })} use:inertia class="card w-full bg-base-200 shadow-xl hover:scale-105 transition" in:blur>
                    <div class="card-body gap-2">
                        <h2 class="card-title">{project.title}</h2>
                        <hr class="text-base-content/30">
                        {#if project.subtitle}
                            <h3 class="card-title text-base font-normal">{project.subtitle}</h3>
                            <hr class="text-base-content/30">
                        {/if}
                        {#if project.tags.length}
                            <div class="flex flex-wrap gap-2">
                                {#each project.tags as tag}
                                    <span class="badge px-2 py-1">
                                        <img src={tag.icon} alt={tag.title} class="h-full" />
                                        {tag.title}
                                    </span>
                                {/each}
                            </div>
                            <hr class="text-base-content/30">
                        {/if}
                        <p>{project.description}</p>
                        <hr class="text-base-content/30">
                        <span class="flex items-center justify-between gap-2">
                            <span class="flex items-center gap-1">
                                <Callendar class="inline-block" /> {$dayjs(project.started_at).format("MMMM YYYY")}
                            </span>
                            <span class="flex items-center gap-1">
                                <Callendar class="inline-block" />
                                {project.ended_at
                                    ? $dayjs(project.ended_at).format("MMMM YYYY")
                                    : $_("Present")
                                }
                            </span>
                        </span>
                    </div>
                </a>
            {:else}
                <div class="col-span-full italic">
                    {$_("It's very quiet here... Too quiet.")}
                </div>
            {/each}
        </div>

        {#if projects.meta.next_cursor}
            <WhenVisible always params={{
                only: ['projects'],
                data: { cursor: projects.meta.next_cursor},
                preserveUrl: true
            }}>
                <svelte:fragment slot="fallback">
                    <span class="loading loading-dots loading-xl"></span>
                </svelte:fragment>
            </WhenVisible>
        {/if}
    </div>
</div>
