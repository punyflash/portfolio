<script lang="ts" generics="T = unknown">
    import type { Snippet } from 'svelte'

    type Carousel<T> = {
        items: T[],
        item: Snippet<[T]>,
        loop?: number,
        scroll?: boolean,
        infinite?: boolean,
        class?: string,
        itemClass?: string
    }

    const { items, item, ...restProps }: Carousel<T> = $props()

    let carousel: HTMLElement = $state()
    let lastSlide: number = $state(null)
    let slide = $state(0)
    let timer = restProps.loop
    let max = $derived(restProps.infinite ? items.length : items.length - 1)

    export const next = () => goto(slide < max ? slide + 1 : 0)
    export const prev = () => goto(slide > 0 ? slide - 1 : max)
    export function goto(index: number) {
        if (index >= 0 && index <= max) {
            const child = carousel.children[index] as HTMLElement
            carousel.scrollTo({ left: child.offsetLeft, behavior: "smooth" })
            timer = restProps.loop
        } else {
            throw new Error("Index out of range")
        }

        return index
    }

    $effect(() => {
        if (restProps.infinite !== true || items.length < 2) {
            return
        }

        if (slide === max && slide - lastSlide === 1) {
            carousel.classList.add("scroll-auto")
            carousel.scrollLeft = 0
            carousel.classList.remove("scroll-auto")
        } else if (slide === 0 && lastSlide - slide === 1) {
            carousel.classList.add("scroll-auto")
            carousel.scrollLeft = carousel.scrollWidth
            carousel.classList.remove("scroll-auto")
        }
    })

    $effect(() => {
        const updateCurrentSlide = () => {
            timer = restProps.loop
            const carouselRect = carousel.getBoundingClientRect()
            const items = Array.from(carousel.children)

            for (let item of items) {
                const itemRect = item.getBoundingClientRect()
                const distance = itemRect.left - carouselRect.left

                if (distance === 0) {
                    lastSlide = slide
                    slide = items.indexOf(item)
                    break
                }
            }
        }

        carousel.addEventListener("scroll", updateCurrentSlide)

        return () => carousel.removeEventListener("scroll", updateCurrentSlide)
    })

    $effect(() => {
        if (!restProps.loop) {
            return
        }

        const interval = setInterval(() => {
            if (timer > 0) {
                return timer -= 100
            }

            next()
        }, 100)

        return () => clearInterval(interval)
    })
</script>

<svelte:window onresize={() => carousel.children[slide].scrollIntoView({ behavior: "smooth" })}/>

<div class="relative flex flex-col gap-4">
    <div class="carousel {restProps.scroll === false ? 'scroll-auto snap-none overflow-hidden' : ''} {restProps.class || ''}" bind:this={carousel}>
        {#each items as _item}
            <div class="carousel-item {restProps.itemClass || ''}">
                {@render item(_item)}
            </div>
        {/each}
        {#if restProps.infinite && items.length >= 2}
            <div class="carousel-item {restProps.itemClass || ''}">
                {@render item(items[0])}
            </div>
        {/if}
    </div>
</div>
