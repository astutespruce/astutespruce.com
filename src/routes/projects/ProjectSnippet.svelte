<script lang="ts">
    import ArrowRight from 'lucide-svelte/icons/arrow-right'
    import { ImageCredit } from '$lib/components/image'
    const { slug, title, client, description, banner, categories } = $props()
    const url = `/projects/${slug}`
</script>

<div>
    <h3 class="mb-2"><a href={url} class="text-foreground">{title}</a></h3>
    <div class="my-4 md:mt-0">
        <div class="text-xl"><b>Client:</b> {client}</div>
    </div>

    <div class="mt-2">
        <enhanced:img src={banner.src} alt={banner.label} />
    </div>

    <ImageCredit author={banner.author} url={banner.url} label={banner.label} />

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
