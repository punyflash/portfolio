<script lang="ts">
    import App from './App.svelte';

    const { component, props, page } = $props()
</script>

<div id="app" data-ssr="true" data-page="{JSON.stringify(page)}" >
    <App {component} {props}/>
</div>
