<script lang="ts">
    import atkinsonHyperlegibleRegular from '@fontsource/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-400-normal.woff2?url'

    import '../app.css'

    import { beforeNavigate, afterNavigate } from '$app/navigation'
    import { page } from '$app/state'

    import { Analytics, Header, Footer } from '$lib/components/layout'
    let { children } = $props()

    // reset the scroll to top on navigation
    let contentDiv: Element
    let pathname: string
    beforeNavigate(() => {
        pathname = page.url.pathname
    })

    afterNavigate(() => {
        if (contentDiv && pathname !== page.url.pathname) {
            contentDiv.scrollTo({ top: 0, behavior: 'auto' })
        }
    })
</script>

<svelte:head>
    <link rel="preload" as="font" type="font/woff2" href={atkinsonHyperlegibleRegular} crossorigin="anonymous" />
</svelte:head>

<Analytics />

<Header />

<div class="h-full w-full flex-auto overflow-auto" bind:this={contentDiv}>
    {@render children()}
    <Footer />
</div>
