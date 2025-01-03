<script lang="ts">
    import type { Project } from './types'
    import ProjectSnippet from './ProjectSnippet.svelte'

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
    const paths = import.meta.glob('$projects/**/+page.md', { eager: true })

    let projects = []

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-2)
        if (slug && file && typeof file === 'object' && 'metadata' in file) {
            const metadata = file.metadata as Omit<Project, 'slug'>
            const imageKey = Object.keys(images).filter((m) => m.split('/').at(-2) === slug)[0]
            const imageSrc = images[imageKey]
            projects.push({
                ...metadata,
                slug,
                banner: { ...metadata.banner, src: imageSrc, order: metadata.order || 99 },
            })
        }
    }

    projects = projects.sort((p1, p2) => p1.order - p2.order)
</script>

<svelte:head>
    <title>Projects | Astute Spruce</title>
    <meta
        name="description"
        content="Astute Spruce, LLC has helped clients create intuitive and meaningful data exploration tools and data processing pipelines for scientific data."
    />
</svelte:head>

<div class="container pb-20">
    <h1 class="mb-20 mt-10">Recent projects</h1>
    {#each projects as project, i}
        {#if i > 0}
            <hr class="my-6 md:my-12" />
        {/if}
        <ProjectSnippet {...project} />
    {/each}
</div>
