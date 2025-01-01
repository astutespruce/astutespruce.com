<script>
    import Logo from '$lib/assets/images/AstuteSpruce_logo.svg'
    import Nav from './Nav.svelte'
    import MobileNav from './MobileNav.svelte'
</script>

<header
    class="flex flex-none items-center justify-between gap-4 border-b-[3px] border-primary/50 px-2 pb-3 pt-2 leading-none"
>
    <a href="/" class="text-foreground hover:no-underline">
        <img src={Logo} alt="Astute Spruce logo" height="auto" width="300" class="min-w-[150px]" />
    </a>
    <Nav />
    <MobileNav />
</header>
