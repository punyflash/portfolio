<script lang="ts">
    import { _ } from "svelte-i18n";
    import { useForm, page } from "@/utils/inertia";
    import Honey, { withHoneypot, type Honeypot } from './Honeypot.svelte';

    type Submit = {
        url: string
        method: 'get' | 'post' | 'put' | 'patch' | 'delete'
    }

    const { submit, data = null }: { submit: Submit, data?: { name: string, content: string }} = $props();

    let dialog: HTMLDialogElement = $state();

    const form = useForm(withHoneypot($page.props.honeypot as Honeypot, data || { name: '', content: ''}));

    export function toggle(open: boolean = null) {
        open = open === null ? !open : open
        open ? dialog.showModal() : dialog.close()
    }

    function onsubmit(e: SubmitEvent) {
        e.preventDefault();

        $form.submit({ ...submit, vortex: { preserveScroll: true }})
            .then(() => toggle(false));
    }
</script>

<dialog class="modal" bind:this={dialog}>
    <form {onsubmit} class="modal-box flex flex-col gap-2">
        <Honey honeypot={$page.props.honeypot as Honeypot} {form} />

        <input name="name" class="input w-full {$form.errors.name ? 'input-error' : ''}" bind:value={$form.name} type="text" placeholder={$_("Name")} />
        {#if $form.errors.name}
            <label class="label" for="name">
                <span class="label-text-alt text-error">{$form.errors.name}</span>
            </label>
        {/if}

        <textarea name="content" class="textarea w-full {$form.errors.content ? 'input-error' : ''}" bind:value={$form.content} placeholder={$_("Message")}></textarea>
        {#if $form.errors.content}
            <label class="label" for="content">
                <span class="label-text-alt text-error">{$form.errors.content}</span>
            </label>
        {/if}

        <button class="btn btn-primary">
            {data ? $_("Update comment") : $_("Post comment")}
        </button>
    </form>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
