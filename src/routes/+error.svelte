<script>
    import { page } from '$app/state'
    import { ImageCredit } from '$lib/components/image'
    import NotFoundImage from '$lib/assets/images/deanna-ritchie-227649-unsplash.jpg?enhanced'

    console.error(page.status)
    console.error(page.error)
</script>

<svelte:head>
    <title>{page.status} | Astute Spruce</title>
</svelte:head>

{#if page.status === 404}
    <div class="hidden sm:block">
        <div class="relative z-0 h-max w-full overflow-hidden">
            <enhanced:img src={NotFoundImage} alt="signpost" class="z-1 relative" />
            <div class="z-2 absolute bottom-0 left-0 right-0 top-10">
                <div class=" container border-foreground p-12 sm:border-2 sm:bg-muted md:max-w-[700px]">
                    <h1>PAGE NOT FOUND</h1>
                    <div class="mt-4 text-2xl md:mt-10 md:text-4xl">You appear to be lost...</div>
                </div>
            </div>
        </div>
        <ImageCredit author="Deanna Ritchie" url="https://unsplash.com/photos/wORTURlz7jg" />
    </div>

    <div class="container mt-10 sm:hidden">
        <h1>PAGE NOT FOUND</h1>
        <div class="mt-4 text-2xl md:mt-10 md:text-4xl">You appear to be lost...</div>
    </div>
{:else}
    <div class="container my-20">
        <h1>Uh oh!</h1>
        <h2>There was an unexpected error</h2>
        <div class="mt-4 text-xl text-muted-foreground">
            Please try again in a few minutes. If that still doesn't work, please
            <a href="mailto:bcward@astutespruce.com"> let us know</a>!
        </div>
    </div>
{/if}
