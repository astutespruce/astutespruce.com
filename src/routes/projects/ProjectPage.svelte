<script module>
    // add custom overrides of parsed markdown => html elements
    import { a } from '$lib/components/markdown'

    export { a }
</script>

<script lang="ts">
    import { page } from '$app/state'
    import { ImageCredit } from '$lib/components/image'
    import type { ImageType } from '$lib/components/image/types'
    const { title, description, client, banner, url, categories, tech, children } = $props()

    const slug = page.url.pathname.split('/').at(-1)

    // dynamically import banner image
    const images = import.meta.glob('$projects/**/banner.jpg', {
        eager: true,
        import: 'default',
        query: {
            w: '1920;960;540',
            sizes: '(min-width:1920px) 1920px, (min-width:1024px) 960px, (min-width:768px) 540px',
            format: 'avif;webp;jpg',
            as: 'picture',
        },
    })
    const imageKey = Object.keys(images).filter((path) => path.split('/').at(-2) === slug)[0]
    const img = images[imageKey] as ImageType
</script>

<svelte:head>
    <title>{title} | Astute Spruce</title>
    <meta name="description" content={description} />
</svelte:head>

<div class="container mb-20">
    <div class="mt-2 flex text-xs leading-tight text-muted-foreground sm:text-lg">
        <a href="/">Home</a>
        &nbsp;/&nbsp;
        <a href="/projects">Projects</a>
        &nbsp;/&nbsp;
        {title}
    </div>

    <h1 class="mb-4 mt-10 text-5xl md:mb-8 md:text-6xl">{title}</h1>
    <div class="mb-2 text-2xl"><b>Client:</b> {client}</div>

    <enhanced:img src={img} alt="" />
    <ImageCredit author={banner.author} url={banner.url} label={banner.label} />

    <div class="my-4 hidden text-lg text-muted-foreground sm:block">
        {@html categories.join('&nbsp;&nbsp;|&nbsp;&nbsp;')}
    </div>

    {#if url}
        <div class="mt-4 text-xl">
            Check it out at: <a href={url} target="_blank">{url}</a>
        </div>
    {/if}

    <hr class="my-6 md:my-12" />

    <div class="markdown-content">
        {@render children()}
    </div>

    <hr class="my-6 md:my-12" />

    <p class="font-bold">Technologies used:</p>

    <ul class="mt-2">
        {#each tech as group}
            <li>
                {group.join(', ')}
            </li>
        {/each}
    </ul>
</div>
