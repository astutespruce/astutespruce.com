<script lang="ts">
    import Menu from 'lucide-svelte/icons/menu'
    import { page } from '$app/state'
    import { Root, Trigger, Content, Close } from '$lib/components/ui/sheet'
</script>

<Root>
    <Trigger class="sm:hidden">
        <Menu />
    </Trigger>
    <Content side="top">
        <nav class="gap-2 text-2xl text-accent-foreground [&>a]:decoration-2 [&>a]:underline-offset-4">
            <Close>
                <a href="/" class="block" class:underline={page.url.pathname === '/'}>Home</a>
            </Close>
            <hr class="my-4" />
            <Close>
                <a href="/about" class="block" class:underline={page.url.pathname === '/about'}>About</a>
            </Close>
            <hr class="my-4" />
            <Close>
                <a class="block" href="/services" class:underline={page.url.pathname === '/services'}>Services</a>
            </Close>
            <hr class="my-4" />
            <Close>
                <a class="block" href="/projects" class:underline={page.url.pathname === '/projects'}>Projects</a>
            </Close>
        </nav>
    </Content>
</Root>
