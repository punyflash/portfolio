<script lang="ts" module>
    export type Honeypot = {
        enabled: boolean
        encryptedValidFrom: string
        nameFieldName: string
        unrandomizedNameFieldName: string
        validFromFieldName: string
    }

    export function withHoneypot(honeypot: Honeypot, data: object = {}) {
        if (!honeypot?.enabled) return data

        return {
            ...data,
            [honeypot.nameFieldName]: '',
            [honeypot.validFromFieldName]: honeypot.encryptedValidFrom,
        }
    }
</script>

<script lang="ts">
    import type { Writable } from 'svelte/store';
    import type { InertiaForm } from '@inertiajs/svelte';

    const { honeypot, form }: { honeypot: Honeypot; form: Writable<InertiaForm<any>> } = $props();
</script>

{#if honeypot?.enabled}
    <div class="hidden">
        <input
            type="text"
            bind:value={$form[honeypot.nameFieldName]}
            name={honeypot.nameFieldName}
            id={honeypot.nameFieldName}
        />
        <input type="text" bind:value={$form[honeypot.validFromFieldName]} name={honeypot.validFromFieldName} />
    </div>
{/if}
