<script>
    import { cn } from '$lib/utils'
    const { src, class: className = '' } = $props()
</script>

<div class={cn('relative z-0 w-full overflow-hidden', className)}>
    <div class="z-1 absolute bottom-0">
        <enhanced:img {src} alt="" class="h-auto min-w-[720px] object-cover" />
    </div>
</div>
