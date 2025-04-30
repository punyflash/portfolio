<script lang="ts">
    import ThemeChange from "../ThemeChange.svelte";

    const { children } = $props()
</script>

<main class="min-h-screen bg-base-100 text-base-content flex flex-col">
    <header class="navbar bg-base-200 shadow-md">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl" href="/">Dmytro Morozov</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <ThemeChange class="capitalize select select-sm bg-base-100 text-current rounded-full w-32" />
    </header>

    {@render children()}

    <footer class="footer p-6 bg-base-300 text-base-content">
        <div class="items-center grid-flow-col">
            <p>© {new Date().getFullYear()} Dmtro Morozov. All rights reserved.</p>
        </div>
    </footer>
</main>
