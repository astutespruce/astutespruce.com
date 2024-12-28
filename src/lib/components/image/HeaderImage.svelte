<script>
    import { cn } from '$lib/utils'
    const { src, class: className = '', style: propStyle = '', children = undefined } = $props()
</script>

<div class={cn('w-full bg-cover', className)} style={`background-image: url(${src}); ${propStyle}`}>
    {#if children}
        {@render children?.()}
    {/if}
</div>
