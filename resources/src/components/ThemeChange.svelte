<script lang="ts">
    import themeChange from '@/utils/theme';

    const { target = null, ...restProps }: { target?: HTMLElement, [key: string]: any } = $props();

    const themes = [
        "light", "dark", "cupcake", "bumblebee", "emerald",
        "corporate", "synthwave", "retro", "cyberpunk", "valentine",
        "halloween", "garden", "forest", "aqua", "lofi",
        "pastel", "fantasy", "wireframe", "black", "luxury",
        "dracula", "cmyk", "autumn", "business", "acid",
        "lemonade", "night", "coffee", "winter", "dim",
        "nord", "sunset", "caramellatte", "abyss", "silk",
    ]
    let value = $state(!import.meta.env.SSR ? (localStorage.getItem("theme") || "") : "")
</script>

<select bind:value onchange={(e) => themeChange(e.currentTarget.value, target)} {...restProps}>
    <option value="">Default</option>
    {#each themes as theme}
        <option value="{theme}" class="capitalize">{theme}</option>
    {/each}
</select>
