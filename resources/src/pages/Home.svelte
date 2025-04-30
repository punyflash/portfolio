<script lang="ts" module>
    export { default as layout } from "../components/layouts/App.svelte";
</script>

<script lang="ts">
    import { onMount } from 'svelte'

    let carousel: HTMLElement = $state()

    const items = $state([
        { alt: "PHP", src: import("../assets/img/php.svg") },
        { alt: "JavaScript", src: import("../assets/img/javascript.svg") },
        { alt: "TypeScript", src: import("../assets/img/typescript.svg") },
        { alt: "Laravel", src: import("../assets/img/laravel.svg") },
        { alt: "Tailwind", src: import("../assets/img/tailwind.svg") },
        { alt: "Svelte", src: import("../assets/img/svelte.svg") },
        { alt: "Vue", src: import("../assets/img/vue.svg") },
    ])

    const socials = $state([
        { icon: import("virtual:icons/cib/github"), url: "https://github.com/punyflash" },
        { icon: import("virtual:icons/cib/linkedin"), url: "https://linkedin.com/in/punyflash" },
        { icon: import("virtual:icons/cib/stackoverflow"), url: "https://stackoverflow.com/users/10249529" },
        { icon: import("virtual:icons/cib/mail-ru"), url: "mailto:puny.flash@gmail.com" },
    ])

    onMount(() => {
        const timeout = setInterval(() => {
            carousel.scrollTo({ left: carousel.scrollLeft + 256, behavior: "smooth" })
            setTimeout(() => items.push(items.shift()), 500)
        }, 2000)

        return () => clearInterval(timeout)
    })
</script>

<section class="hero bg-base-100 flex-1">
    <div class="hero-content text-left gap-20">
        <div>
            <h1 class="text-5xl font-bold">Dmytro Morozov</h1>
            <p class="py-6">
                Full Stack Web Developer
            </p>
            <div class="flex gap-2">
                {#each socials as { icon, url }}
                    <a href={url} target="_blank" class="btn btn-circle">
                        {#await icon then Icon}
                            <Icon.default class="w-4 h-4" />
                        {/await}
                    </a>
                {/each}
            </div>
        </div>
        <div class="carousel rounded-box w-64 h-64 gap-6" bind:this={carousel} onwheel={(e) => e.preventDefault()}>
            {#each items as { src, alt } (alt)}
                <div class="carousel-item w-full">
                    {#await src then src}
                        <img src={src.default} {alt} class="w-full" />
                    {/await}
                </div>
            {/each}
        </div>
    </div>
</section>
