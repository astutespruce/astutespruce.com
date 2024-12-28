<script>
    import { page } from '$app/state'
</script>

<header
    class="flex flex-none items-center justify-between gap-10 border-b-[3px] border-primary/50 px-5 pb-3 pt-2 leading-none"
>
    <a href="/" class="text-foreground hover:no-underline">
        <h1 class="text-2xl md:text-4xl">Astute Spruce</h1>
    </a>

    <nav
        class="flex items-center gap-2 text-lg text-accent-foreground md:gap-6 md:text-2xl [&>a]:decoration-2 [&>a]:underline-offset-4"
    >
        <a href="/about" class:underline={page.url.pathname === '/about'}>About</a>
        <a class="border-l pl-2 md:pl-6" href="/services" class:underline={page.url.pathname === '/services'}
            >Services</a
        >
        <a class="border-l pl-2 md:pl-6" href="/projects" class:underline={page.url.pathname === '/projects'}
            >Projects</a
        >
    </nav>
</header>
