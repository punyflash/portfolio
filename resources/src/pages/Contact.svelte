<script lang="ts">
    import { _ } from "svelte-i18n";
    import { useForm, page } from "@/utils/inertia";
    import Honeypot, { withHoneypot } from "@/components/Honeypot.svelte";
    import { store } from "#/routes/contact";
    import User from "~icons/cil/user";
    import Phone from "~icons/cil/phone";
    import Mail from "~icons/ant-design/mail-outlined";
    import MetaData from "@/components/MetaData.svelte";

    const { honeypot } = $props();

    const form = useForm(
        withHoneypot(honeypot, {
            name: "",
            email: "",
            phone: "",
            message: "",
        }),
    );

    function onsubmit(e: SubmitEvent) {
        e.preventDefault();
        $form.submit(store());
    }
</script>

<svelte:head>
    <MetaData
        title={$_('Contact')}
        description={$_('Contact me')}
    />
</svelte:head>

<div class="flex-1 flex items-center justify-center p-8">
    <div class="container flex flex-col gap-8 items-center justify-center">
        <div class="text-center">
            <h1 class="text-5xl font-bold">{$_("Contact")}</h1>
        </div>
        <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-200">
            <form method="POST" action={store.url()} class="card-body gap-2 items-center" {onsubmit}>
                <input type="hidden" name="_token" value={$page.props.csrf} />
                <Honeypot {honeypot} {form} />

                <label
                    class="input w-full {$form.errors.name
                        ? 'input-error'
                        : ''}"
                >
                    <User class="w-4 h-4" />
                    <input
                        bind:value={$form.name}
                        type="text"
                        id="name"
                        name="name"
                        class="grow"
                        placeholder="Name"
                    />
                </label>
                {#if $form.errors.name}
                    <label class="label" for="name">
                        <span class="label-text-alt text-error"
                            >{$form.errors.name}</span
                        >
                    </label>
                {/if}

                <label
                    class="input w-full {$form.errors.email
                        ? 'input-error'
                        : ''}"
                >
                    <Mail class="w-4 h-4" />
                    <input
                        bind:value={$form.email}
                        type="email"
                        id="email"
                        name="email"
                        class="grow"
                        placeholder={$_("Email")}
                    />
                </label>
                {#if $form.errors.email}
                    <label class="label" for="email">
                        <span class="label-text-alt text-error"
                            >{$form.errors.email}</span
                        >
                    </label>
                {/if}

                <label
                    class="input w-full {$form.errors.phone
                        ? 'input-error'
                        : ''}"
                >
                    <Phone class="w-4 h-4" />
                    <input
                        bind:value={$form.phone}
                        type="tel"
                        id="phone"
                        name="phone"
                        class="grow"
                        placeholder={$_("Phone")}
                    />
                </label>
                {#if $form.errors.phone}
                    <label class="label" for="phone">
                        <span class="label-text-alt text-error"
                            >{$form.errors.phone}</span
                        >
                    </label>
                {/if}

                <textarea
                    bind:value={$form.message}
                    id="message"
                    name="message"
                    class="textarea w-full {$form.errors.message
                        ? 'textarea-error'
                        : ''}"
                    placeholder={$_("Message")}
                ></textarea>
                {#if $form.errors.message}
                    <label class="label" for="message">
                        <span class="label-text-alt text-error"
                            >{$form.errors.message}</span
                        >
                    </label>
                {/if}

                <button class="btn btn-primary w-full">Submit</button>
            </form>
        </div>
    </div>
</div>
