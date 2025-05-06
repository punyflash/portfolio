<script lang="ts">
    import { locale, _ } from 'svelte-i18n';
    import { unsafe } from '@/utils/markdown';
    import { timed } from '@/utils/i18n';
    import { useForm, page, router } from '@inertiajs/svelte';
    import { update } from '#/routes/localized/comments/update';
    import { destroy } from '#/routes/localized/comments/destroy';
    import { store } from '#/routes/localized/comments/store';
    import Honey, { withHoneypot, type Honeypot } from './Honeypot.svelte';
    import Pencil from '~icons/cil/pencil';
    import Trash from '~icons/cil/trash';
    import Reply from '~icons/cil/comment-bubble';
    import CommentForm from './CommentForm.svelte';

    const { comment }: { comment: any } = $props();

    let edit = $state(false)
    let deleteDialog: HTMLDialogElement = $state()
    let replyDialog: CommentForm = $state()
    let content = $derived(comment.content && unsafe(comment.content).value)

    const form = useForm(withHoneypot($page.props.honeypot as Honeypot, {
        content: comment.content,
        name: comment.user.name,
    }))

    function onsubmit(e: SubmitEvent) {
        e.preventDefault();
        $form.submit(update({ locale: $locale, comment }), {
            preserveScroll: true,
            onSuccess: () => edit = false,
        });
    }

    function deleteComment(comment) {
        const { url, method } = destroy({ locale: $locale, comment })
        router.visit(url, {
            method,
            preserveScroll: true,
            onSuccess: () => deleteDialog?.close(),
        })
    }
</script>

<div class="card w-full bg-base-200 rounded-none border-b border-base-300 shadow-lg">
    <div class="card-body flex-row items-start">
        <div class="xl:w-24 lg:w-20 md:w-16 w-12 avatar float-left mr-4">
            <div class="rounded-full">
                <img src={comment.user.avatar} alt={comment.user.name} />
            </div>
        </div>
        <div class="flex flex-col flex-1 gap-1">
            <div class="flex gap-2 items-center mb-1">
                <div class="card-title">{comment.user.name}</div>
                <span class="text-sm opacity-50">{$timed(comment.created_at).fromNow()}</span>
                <div class="ml-auto flex gap-0.5">
                    <div class="tooltip" data-tip="{$_('Reply')}">
                        <button class="btn btn-accent btn-circle btn-ghost btn-sm" type="button" onclick={() => replyDialog.toggle()}>
                            <Reply />
                        </button>
                    </div>
                    {#if comment.permissions.edit}
                        <div class="tooltip" data-tip="{$_('Edit')}">
                            <button class="btn btn-circle btn-info btn-ghost btn-sm {edit ? 'btn-active' : ''}" type="button" onclick={() => edit = !edit}>
                                <Pencil />
                            </button>
                        </div>
                    {/if}
                    {#if comment.permissions.delete}
                        <div class="tooltip" data-tip="{$_('Delete')}">
                            <button class="btn btn-circle btn-error btn-ghost btn-sm" type="button" onclick={() => deleteDialog.showModal()}>
                                <Trash />
                            </button>
                        </div>
                    {/if}
                </div>
            </div>
            <hr class="text-base-content/20">
            {#if edit}
                <form class="flex flex-col gap-2" {onsubmit}>
                    <Honey honeypot={$page.props.honeypot as Honeypot} {form} />

                    <textarea name="content" rows="10" class="textarea w-full {$form.errors.content ? 'input-error' : ''}" bind:value={$form.content} placeholder={$_("Message")}></textarea>
                    {#if $form.errors.content}
                        <label class="label" for="content">
                            <span class="label-text-alt text-error">{$form.errors.content}</span>
                        </label>
                    {/if}

                    <button class="btn btn-primary max-w-64">
                        {$_("Update comment")}
                    </button>
                </form>
            {:else}
                <div class="prose max-w-none prose-sm">
                    {@html content}
                </div>
            {/if}
        </div>
    </div>
</div>

<CommentForm bind:this={replyDialog} submit={store({ locale: $locale, comment })} />

<dialog class="modal" bind:this={deleteDialog}>
    <div class="modal-box">
        <h3 class="text-lg font-bold">{$_("Delete comment")}</h3>
        <p class="py-4">{$_("Are you sure you want to delete this comment?")}</p>
        <div class="modal-action">
            <form method="dialog">
                <button class="btn">Close</button>
            </form>
            <button class="btn btn-error" type="button" onclick={() => deleteComment(comment)}>{$_("Delete")}</button>
        </div>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
