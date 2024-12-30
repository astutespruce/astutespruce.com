<script lang="ts">
    import ArrowRight from 'lucide-svelte/icons/arrow-right'
    import { HeaderImage } from '$lib/components/image'
    const { slug, title, client, description, banner, categories } = $props()
    const url = `/projects/${slug}`
</script>

<div>
    <h3 class="mb-2"><a href={url} class="text-foreground">{title}</a></h3>
    <div class="my-4 md:mt-0">
        <div class="text-xl"><b>Client:</b> {client}</div>
    </div>

    <div class="mb-2 mt-2">
        <HeaderImage src={banner.src} class="min-h-64" />
    </div>

    <div class="my-2 text-muted-foreground">
        {@html categories.join('&nbsp;&nbsp;|&nbsp;&nbsp;')}
    </div>
    <hr class="my-2" />
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
