<script>
    import TriangeAlert from 'lucide-svelte/icons/triangle-alert'
    import { page } from '$app/state'
    import { contactEmail } from '$lib/config'
    import { ImageCredit } from '$lib/components/image'
    import NotFoundImage from '$lib/assets/images/deanna-ritchie-227649-unsplash.jpg'

    console.error(page.status)
    console.error(page.error)
</script>

{#if page.status === 400}
    <div class="h-full w-full bg-cover py-12" style={`background-image: url(${NotFoundImage});`}>
        <div
            class="container max-w-[700px] border-2 border-foreground bg-muted p-12"
            style="box-shadow: 1px 1px 0.5rem #000;"
        >
            <h1 class="text-6xl font-bold">PAGE NOT FOUND</h1>
            <div class="mt-10 text-4xl">You appear to be lost...</div>
        </div>
    </div>
    <ImageCredit author="Deanna Ritchie" url="https://unsplash.com/photos/wORTURlz7jg" />
{:else}
    <div class="w-full py-12">
        <div class="mx-auto mt-10 max-w-[540px] border-4 border-accent-foreground/50 bg-muted p-12">
            <h1 class="flex items-center gap-8 text-7xl font-bold">
                <TriangeAlert size="4rem" class="text-muted-foreground" />
                Uh oh!
            </h1>
            <div class="mt-4 text-3xl">There was an unexpected error</div>
            <div class="mt-4 text-xl text-muted-foreground">
                Please try again in a few minutes. If that still doesn't work, please <a href={`mailto:${contactEmail}`}
                    >let us know</a
                >!
            </div>
        </div>
    </div>
{/if}
