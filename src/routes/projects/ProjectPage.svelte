<script module>
    // add custom overrides of parsed markdown => html elements
    import { a } from '$lib/components/markdown'

    export { a }
</script>

<script>
    import { HeaderImage, ImageCredit } from '$lib/components/image'
    const { title, client, banner, url, endDate, categories, tech, children } = $props()

    // dynamically import header image
    const images = import.meta.glob('$projects/**/*.jpg', { eager: true, import: 'default' })
    const imageKey = Object.keys(images).filter((path) => path.endsWith(banner.file))[0]
    const img = images[imageKey]
</script>

<svelte:head>
    <title>{title} | Astute Spruce</title>
</svelte:head>

<HeaderImage src={img} class="min-h-64 bg-center" />
<ImageCredit author={banner.author} url={banner.url} label={banner.label} />

<div class="container mb-20">
    <div class="mt-2 flex text-xs leading-tight text-muted-foreground sm:text-lg">
        <a href="/">Home</a>
        &nbsp;/&nbsp;
        <a href="/projects">Projects</a>
        &nbsp;/&nbsp;
        {title}
    </div>

    <h1 class="mb-4 mt-10 text-5xl md:text-6xl">{title}</h1>
    <div class="text-2xl"><b>Client:</b> {client}</div>

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
