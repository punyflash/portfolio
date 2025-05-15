<script lang="ts">
  import { axios, type VortexConfig } from '@westacks/vortex'
  import { onDestroy, onMount } from 'svelte'

  export let data: string | string[] = ''
  export let params: VortexConfig = {}
  export let buffer: number = 0
  export let as: keyof HTMLElementTagNameMap = 'div'
  export let always: boolean = false

  let loaded = false
  let fetching = false
  let el: HTMLElement
  let observer: IntersectionObserver | null = null

  onMount(() => {
    if (!el) {
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          return
        }

        if (!always) {
          observer?.disconnect()
        }

        if (fetching) {
          return
        }

        fetching = true

        axios.reload({ vortex: getReloadParams() })
            .finally(() => {
                loaded = true
                fetching = false
            })
      },
      {
        rootMargin: `${buffer}px`,
      },
    )

    observer.observe(el)
  })

  onDestroy(() => {
    observer?.disconnect()
  })

  function getReloadParams(): Partial<VortexConfig> {
    if (data !== '') {
      return {
        only: (Array.isArray(data) ? data : [data]) as string[],
      }
    }

    if (!params.data) {
      throw new Error('You must provide either a `data` or `params` prop.')
    }

    return params
  }
</script>

{#if always || !loaded}
  <svelte:element this={as} bind:this={el} />
{/if}

{#if loaded}
  <slot />
{:else if $$slots.fallback}
  <slot name="fallback" />
{/if}
