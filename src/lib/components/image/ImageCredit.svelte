<script>
    import { cn } from '$lib/utils'

    const { url, author, class: className = '' } = $props()
</script>

<div class={cn('mr-2 text-end text-muted-foreground/50', className)}>
    Photo: <a class="text-muted-foreground/50 hover:text-accent-foreground" href={url}>{author}</a>
</div>
