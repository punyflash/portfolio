<script lang="ts">
    import { _ } from 'svelte-i18n'
    import Carousel from '@/components/Carousel.svelte';
    import MetaData from '@/components/MetaData.svelte';
    import type { TagResourceType } from '@/types';

    const { tags }: { tags: { data: TagResourceType[] } } = $props()

    let carousel: Carousel = $state()

    // const items = $state([
    //     { alt: "PHP", src: import("../assets/img/php.svg") },
    //     { alt: "JavaScript", src: import("../assets/img/javascript.svg") },
    //     { alt: "TypeScript", src: import("../assets/img/typescript.svg") },
    //     { alt: "Laravel", src: import("../assets/img/laravel.svg") },
    //     { alt: "Svelte", src: import("../assets/img/svelte.svg") },
    //     { alt: "Vue", src: import("../assets/img/vue.svg") },
    //     { alt: "Livewire", src: import("../assets/img/livewire.svg") },
    //     { alt: "Tailwind", src: import("../assets/img/tailwind.svg") },
    //     { alt: "Docker", src: import("../assets/img/docker.svg") },
    // ])

    const socials = $state([
        { icon: import("~icons/cib/github"), url: "https://github.com/punyflash" },
        { icon: import("~icons/cib/linkedin"), url: "https://linkedin.com/in/punyflash" },
        { icon: import("~icons/cib/stackoverflow"), url: "https://stackoverflow.com/users/10249529" },
        { icon: import("~icons/cib/telegram-plane"), url: "https://t.me/punyflash" },
        { icon: import("~icons/ant-design/mail-outlined"), url: "mailto:puny.flash@gmail.com" },
        { icon: import("~icons/cil/phone"), url: "tel:+380681076687" },
    ])
</script>

<svelte:head>
    <MetaData title={$_('Full Stack Web Developer')} />
</svelte:head>

<section class="hero bg-base-100 py-8 flex-1">
    <div class="hero-content text-left xl:gap-20 lg:gap-16 md:gap-12 gap-4">
        <div class="flex flex-col gap-4">
            <h1 class="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold">{$_('Dmytro Morozov')}</h1>
            <p class="xl:text-lg lg:text-base md:text-sm sm:text-xs text-xs">
                {$_('Full Stack Web Developer')}
            </p>
            <div class="flex gap-1 md:gap-2">
                {#each socials as { icon, url }}
                    <a href={url} target="_blank" class="btn btn-circle btn-primary p-1 btn-xs sm:btn-sm md:btn-md">
                        {#await icon then Icon}
                            <Icon.default class="h-full" />
                        {/await}
                    </a>
                {/each}
            </div>
        </div>
        <Carousel
            class="rounded-box xl:w-64 md:w-48 w-24 xl:h-64 md:h-48 h-24 gap-6"
            itemClass="w-full"
            scroll={false}
            items={tags.data}
            infinite
            loop={2000}
            bind:this={carousel}
        >
            {#snippet item({ title, icon })}
                <img src={icon} alt={title} class="w-full" />
            {/snippet}
        </Carousel>
    </div>
</section>
