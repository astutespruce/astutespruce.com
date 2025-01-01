<script>
    import { page } from '$app/state'
</script>

<nav
    class="hidden items-center gap-2 text-lg text-accent-foreground sm:flex md:gap-6 md:text-2xl [&>a]:decoration-2 [&>a]:underline-offset-4"
>
    <a href="/about" class:underline={page.url.pathname === '/about'}>About</a>
    <a class="border-l pl-2 md:pl-6" href="/services" class:underline={page.url.pathname === '/services'}>Services</a>
    <a class="border-l pl-2 md:pl-6" href="/projects" class:underline={page.url.pathname === '/projects'}>Projects</a>
</nav>
