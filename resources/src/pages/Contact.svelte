<script lang="ts" module>
    export { default as layout } from "../components/layouts/App.svelte";
</script>

<script lang="ts">
    import { useForm } from "@inertiajs/svelte";
    import Honeypot, { withHoneypot } from "@/components/Honeypot.svelte";
    import { store } from "#/routes/contact/store";
    import User from '~icons/cil/user'
    import Phone from '~icons/cil/phone'
    import Mail from '~icons/cib/mail-ru'

    const { honeypot } = $props()

    const form = useForm(withHoneypot(honeypot, {
        name: "",
        email: "",
        phone: "",
        message: "",
    }))

    function onsubmit(e: SubmitEvent) {
        e.preventDefault()
        $form.submit(store())
    }
</script>

<div class="flex-1 flex items-center justify-center">
    <div class="container flex flex-col gap-8 items-center justify-center">
            <div class="text-center">
                <h1 class="text-5xl font-bold">Contact</h1>
            </div>
            <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-200">
                    <form class="card-body gap-4 items-center" {onsubmit}>
                        <Honeypot {honeypot} {form} />

                        <label class="input w-full">
                            <User class="w-4 h-4" />
                            <input type="text" id="name" name="name" class="grow" placeholder="Name" />
                        </label>
                        {#if $form.errors.name}
                            <label class="label" for="name">
                                <span class="label-text-alt text-error">{$form.errors.name}</span>
                            </label>
                        {/if}

                        <label class="input w-full">
                            <Mail class="w-4 h-4" />
                            <input type="email" id="email" name="email" class="grow" placeholder="Email" />
                        </label>
                        {#if $form.errors.email}
                            <label class="label" for="email">
                                <span class="label-text-alt text-error">{$form.errors.email}</span>
                            </label>
                        {/if}

                        <label class="input w-full">
                            <Phone class="w-4 h-4" />
                            <input type="tel" id="phone" name="phone" class="grow" placeholder="Phone" />
                        </label>
                        {#if $form.errors.phone}
                            <label class="label" for="phone">
                                <span class="label-text-alt text-error">{$form.errors.phone}</span>
                            </label>
                        {/if}

                        <textarea id="message" name="message" class="textarea w-full" placeholder="Message"></textarea>
                        {#if $form.errors.message}
                            <label class="label" for="message">
                                <span class="label-text-alt text-error">{$form.errors.message}</span>
                            </label>
                        {/if}

                        <button class="btn btn-primary w-full">Submit</button>
                    </form>
            </div>
        </div>
</div>
