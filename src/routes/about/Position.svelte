<script lang="ts">
    interface Project {
        dates: string
        name: string
        client: string
        role: string
    }

    interface Position {
        title: string
        organization: string
        location: string
        url: string
        startDate: string
        endDate: string
        description: string
        highlights?: string[]
        projects?: Project[]
    }

    const {
        title,
        organization,
        location,
        url,
        startDate,
        endDate,
        description,
        highlights,
        projects = undefined,
    }: Position = $props()
</script>

<h3 class="mt-6 text-xl md:mt-12 md:text-3xl">{title}</h3>

<div class="text-lg md:text-xl">
    <a href={url}>{organization}</a>
    <span class="text-muted-foreground">
        &nbsp;&nbsp;|&nbsp;&nbsp;
        {startDate} &mdash; {endDate}
    </span>
    <br />
    <div class="italic text-muted-foreground">{location}</div>
</div>

<p class="mt-6">{@html description}</p>

{#if highlights}
    <ul class="mt-2">
        {#each highlights as highlight}
            <li>
                {@html highlight}
            </li>
        {/each}
    </ul>
{/if}

{#if projects}
    <h4 class="mt-8 text-xl">Highlighted projects</h4>

    <ul class="mt-2">
        {#each projects as project}
            <li class="leading-snug">
                {project.dates}:
                {project.name} ({project.client}).
                <div class="text-base italic text-muted-foreground">
                    Role: {project.role}
                </div>
            </li>
        {/each}
    </ul>
{/if}
