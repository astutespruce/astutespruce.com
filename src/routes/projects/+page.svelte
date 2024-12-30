<script lang="ts">
    import type { Project } from './types'
    import ProjectSnippet from './ProjectSnippet.svelte'

    const images = import.meta.glob('$projects/**/*.jpg', { eager: true, import: 'default' })
    const paths = import.meta.glob('$projects/**/*.md', { eager: true })
    let projects = []

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-2)
        if (slug && file && typeof file === 'object' && 'metadata' in file) {
            const metadata = file.metadata as Omit<Project, 'slug,timestamp'>
            const timestamp = new Date(metadata.startDate).getTime()
            const imageKey = Object.keys(images).filter((m) => m.endsWith(metadata.banner.file))[0]
            const imageSrc = images[imageKey]
            projects.push({ ...metadata, slug, timestamp, banner: { ...metadata.banner, src: imageSrc } })
        }
    }

    // sort most to least recent
    projects = projects.sort((p1, p2) => p2.timestamp - p1.timestamp)

    console.log('projects', projects)
</script>

<svelte:head>
    <title>Projects | Astute Spruce</title>
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
