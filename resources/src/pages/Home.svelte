<script lang="ts">
    import { _ } from 'svelte-i18n'
    import Carousel from '@/components/Carousel.svelte';
    import MetaData from '@/components/MetaData.svelte';

    let carousel: Carousel = $state()

    const items = $state([
        { alt: "PHP", src: import("../assets/img/php.svg") },
        { alt: "JavaScript", src: import("../assets/img/javascript.svg") },
        { alt: "TypeScript", src: import("../assets/img/typescript.svg") },
        { alt: "Laravel", src: import("../assets/img/laravel.svg") },
        { alt: "Svelte", src: import("../assets/img/svelte.svg") },
        { alt: "Vue", src: import("../assets/img/vue.svg") },
        { alt: "Livewire", src: import("../assets/img/livewire.svg") },
        { alt: "Tailwind", src: import("../assets/img/tailwind.svg") },
    ])

    const socials = $state([
        { icon: import("~icons/cib/github"), url: "https://github.com/punyflash" },
        { icon: import("~icons/cib/linkedin"), url: "https://linkedin.com/in/punyflash" },
        { icon: import("~icons/cib/stackoverflow"), url: "https://stackoverflow.com/users/10249529" },
        { icon: import("~icons/cib/telegram"), url: "https://t.me/punyflash" },
        { icon: import("~icons/cib/mail-ru"), url: "mailto:puny.flash@gmail.com" },
        { icon: import("~icons/cil/phone"), url: "tel:+380681076687" },
    ])
</script>

<svelte:head>
    <MetaData title={$_('Full Stack Web Developer')} />
</svelte:head>

<section class="hero bg-base-100 flex-1">
    <div class="hero-content text-left gap-20">
        <div>
            <h1 class="text-5xl font-bold">{$_('Dmytro Morozov')}</h1>
            <p class="py-6">
                {$_('Full Stack Web Developer')}
            </p>
            <div class="flex gap-2">
                {#each socials as { icon, url }}
                    <a href={url} target="_blank" class="btn btn-circle btn-primary">
                        {#await icon then Icon}
                            <Icon.default class="w-6 h-6" />
                        {/await}
                    </a>
                {/each}
            </div>
        </div>
        <Carousel
            class="rounded-box w-64 h-64 gap-6"
            itemClass="w-full"
            scroll={false}
            items={items}
            infinite
            loop={2000}
            bind:this={carousel}
        >
            {#snippet item({ src, alt })}
                {#await src then src}
                    <img src={src.default} {alt} class="w-full" />
                {/await}
            {/snippet}
        </Carousel>
    </div>
</section>
