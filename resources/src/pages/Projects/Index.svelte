<script lang="ts">
    import { inertia, WhenVisible } from '@inertiajs/svelte'
    import type { ProjectResourceType, Paginated } from '@/types';
    import { _, locale } from 'svelte-i18n'
    import { blur } from 'svelte/transition'
    import { show } from '#/routes/localized/projects/show'
    import MetaData from '@/components/MetaData.svelte';

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
                    <div class="card-body">
                        <h2 class="card-title">{project.title}</h2>
                        <p>{project.description}</p>
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
