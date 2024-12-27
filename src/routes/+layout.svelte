<script lang="ts">
    import { Header, Footer } from '$lib/components/layout'

    import '../app.css'
    let { children } = $props()
</script>

<Header />

<div class="h-full w-full flex-auto overflow-auto">
    {@render children()}
    <Footer />
</div>
