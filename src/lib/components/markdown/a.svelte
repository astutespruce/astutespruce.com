<script>
    const { href, children } = $props()
</script>

<a {href} target="_blank">
    {@render children()}
</a>
