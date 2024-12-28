<script lang="ts">
    import { beforeNavigate, afterNavigate } from '$app/navigation'
    import { page } from '$app/state'

    import { Analytics, Header, Footer } from '$lib/components/layout'
    import '../app.css'

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

<Analytics />

<Header />

<div class="h-full w-full flex-auto overflow-auto" bind:this={contentDiv}>
    {@render children()}
    <Footer />
</div>
