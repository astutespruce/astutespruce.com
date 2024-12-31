<script>
    import { cn } from '$lib/utils'

    const { author, url, label = '', class: className = '' } = $props()
</script>

<div class={cn('mr-2 text-end text-xs leading-tight text-muted-foreground/50 sm:text-sm', className)}>
    Photo: {label}
    {#if label}
        by
    {/if}
    <a class="text-muted-foreground/50 hover:text-accent-foreground" href={url}>{author}</a>
</div>
