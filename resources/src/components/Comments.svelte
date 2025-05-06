<script lang="ts">
    import { _ } from "svelte-i18n";
    import CommentForm from "./CommentForm.svelte";
    import Comment from "./Comment.svelte";

    let modal: CommentForm = $state();

    const { post, comments, ...rest }: { post: any, comments: any[], [key: string]: any } = $props();
</script>

{#snippet tree(comment, level = 0)}
    <Comment {comment} />

    {#if comment.children.length && level < 2}
        <div class="flex">
            <div class="divider divider-horizontal"></div>
            <div class="flex flex-col flex-1">
                {#each comment.children as child}
                    {@render tree(child, level + 1)}
                {/each}
            </div>
        </div>
    {/if}
{/snippet}

<section class="flex flex-col gap-6 {rest.class}">
    <div class="flex gap-4 items-center justify-between">
        <h1 class="flex gap-2 items-center text-2xl">{$_("Comments")}</h1>
        <button class="btn btn-primary btn-outline btn-sm" type="button" onclick={() => modal.toggle()}>+ {$_("Add comment")}</button>
    </div>

    <CommentForm submit={post} bind:this={modal} />

    <div class="flex flex-col rounded-lg overflow-clip">
        {#each comments as comment}
            {@render tree(comment)}
        {/each}
    </div>
</section>
