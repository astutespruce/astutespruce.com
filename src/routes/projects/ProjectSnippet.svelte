<script lang="ts">
    import ArrowRight from 'lucide-svelte/icons/arrow-right'
    const { slug, title, client, description, banner, categories } = $props()
    const url = `/projects/${slug}`

    const {
        src: { sources, img },
    } = banner

    // NOTE: this assumes only one format per size
    const sourceEntries = Object.entries(sources).map(([format, images]) => ({
        format,
        images,
        type: `image/${format}`,
    }))
</script>

<div>
    <h3 class="mb-2"><a href={url} class="text-foreground">{title}</a></h3>
    <div class="my-4 md:mt-0">
        <div class="text-xl"><b>Client:</b> {client}</div>
    </div>

    <div class="mt mb-2 mt-2">
        <picture>
            {#each sourceEntries as entry}
                <source srcset={entry.images} type={entry.type} />
            {/each}
            <img src={img.src} alt={banner.label} />
        </picture>
    </div>

    <div class="my-2 hidden text-muted-foreground md:block">
        {@html categories.join('&nbsp;&nbsp;|&nbsp;&nbsp;')}
    </div>

    <hr class="my-2 hidden md:block" />

    <p>
        {description}
        <br />
        <a href={url} class="flex w-max items-center gap-2"
            >Learn more

            <span>
                <ArrowRight size="1.5em" />
            </span>
        </a>
    </p>
</div>
