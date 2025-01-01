<script>
    import Download from 'lucide-svelte/icons/file-down'
    import { HeaderImage, ImageCredit } from '$lib/components/image'
    import { Button } from '$lib/components/ui/button'
    import Img from '$lib/assets/images/elias-arnar-1309173-unsplash.jpg?format=avif;webp;jpg&w=4800;3200;1920;720&as=picture'

    import Position from './Position.svelte'
    import { positions } from './positions'
</script>

<svelte:head>
    <title>About | Astute Spruce</title>
</svelte:head>

<HeaderImage src={Img} class="h-64" />
<ImageCredit author="Elias Arnar" url="https://unsplash.com/photos/7efP-a8ZK54" />

<div class="container pb-20">
    <p class="mt-6 text-2xl md:text-3xl">
        <a href="mailto:bcward@astutespruce.com">Brendan C. Ward</a> founded Astute Spruce in 2019 to work with science-based
        organizations to shape a healthier world.
    </p>
    <p class="mt-6 md:mt-10">
        Brendan is passionate about bridging science with real-world applications. He combines a Master&apos;s of
        Science in Landscape Ecology with over a decade of experience developing software solutions.
        <br />
        <br />
        He has led software teams to create groundbreaking solutions to data sharing and visualization needs. Brendan has
        helped empower decision makers and stakeholders by building software that leverages the best available scientific
        data with cutting-edge technology to increase positive impact. He has partnered with scientists to streamline their
        data processing to derive more value from less manual labor. He has collaborated with government agencies, conservation
        non-profits, and others to amplify the impact of their work.
        <br />
        <br />
        Every step of the way, Brendan combines a passion for expanding the impact of organizations and individuals with
        better tools and data. He brings a strong attention to detail and a creative spark to meld innovation with high-quality
        results. He is a strong collaborator and actively engages partners throughout all stages of his work. Through his
        careful focus on maximizing impact, his projects are more effective and intuitive than many out-of-the-box solutions.
    </p>

    <hr class="my-10 border-t-2 border-primary/50 md:my-20" />

    <div class="mb-10 flex flex-wrap items-baseline justify-between gap-4">
        <h1>Curriculum vitae</h1>
        <Button
            href="/Brendan_C_Ward__Resume.pdf"
            download="Brendan_C_Ward__Resume.pdf"
            class="flex items-center gap-2 border bg-muted-foreground/10 leading-tight text-foreground hover:bg-muted-foreground/20 hover:no-underline md:text-xl"
        >
            <Download />
            Download resume
        </Button>
    </div>

    {#each positions as position, i}
        {#if i > 0}
            <hr class="my-6 md:my-12" />
        {/if}
        <Position {...position} />
    {/each}

    <hr class="my-6 border-t-2 border-primary/50 md:my-12" />

    <h3>Publications</h3>

    <p class="mt-4">
        Weller, T.J. and <b>B.C. Ward</b>. 2020. AMPlifying Bat Monitoring Across North America: an online portal shares
        acoustic data to advance bat conservation across the continent. The Wildlife Professional May/June 2020: 44-48.
        <br />
        <br />
        Scheller, R.M., W.D. Spencer, H. Rustigian-Romsos, A.D. Syphard, <b>B.C. Ward</b>, and J.R. Strittholt. 2011.
        Using stochastic simulation to evaluate competing risks of wildfires and fuels management on an isolated forest
        carnivore. Landscape Ecology 26: 1491-1504.
        <br />
        <br />
        Syphard, A.D., R.M. Scheller, <b>B.C. Ward</b>, W.D. Spencer, and J.R. Strittholt. 2011. Simulating
        landscape-scale effects of fuels treatments in the Sierra Nevada, California, USA. International Journal of
        Wildland Fire 20:364-383.
        <br />
        <br />
        Scheller, R.M., E.J. Gustafson, B.R. Sturtevant, <b>B.C. Ward</b>, and D.J. Mladenoff. 2010. Increasing the
        research and management value of ecological models using modern software techniques. Frontiers in Ecology and
        the Environment 8(5): 253-260.
        <br />
        <br />
        <b>Ward, B.C.</b>, D.J. Mladenoff, and R.M. Scheller. 2005. Simulating landscape-level effects of constraints to
        public forest regeneration harvests due to adjacent residential development in northern Wisconsin. Forest
        Science 51(6): 616-632.
    </p>

    <hr class="my-6 border-t-2 border-primary/50 md:my-12" />

    <h3>Technical reports</h3>

    <p class="mt-4">
        <b>Ward, B.C.</b>, M. Lundin, D. Harvey, J. Strittholt, G. Joseph, T. Comendant. 2016. California Water Planning
        Information Exchange (Water PIE) - Data Basin Pilot. Prepared for the California Department of Water Resources.
        <br />
        <br />
        Multiple authors. 2014. Landscape Conservation Cooperative - Integrated Data Management Network - Toolshed. Prepared
        for the U.S. Fish and Wildlife Service.{' '}
        <a
            href="https://lccnetwork.org/project/integrated-data-management-network-lccs-and-partners-framework-coordinated-data-discovery-0"
        >
            More information.
        </a>
        <br />
        <br />
        Strittholt, J.R., S.A. Bryce, <b>B.C. Ward</b>, and D.M. Bachelet. 2012. Sonoran Desert Rapid Ecoregional
        Assessment Report. Prepared for the U.S. Department of the Interior, Bureau of Land Management, Denver,
        Colorado.{' '}
        <a href="https://landscape.blm.gov/REA_General_Docs/SOD_Final_Report_Body.pdf"> Access report. </a>
        <br />
        <br />
        Bryce, S.A., J.R. Strittholt, <b>B.C. Ward</b>, and D.M. Bachelet. 2012. Colorado Plateau Rapid Ecoregional
        Assessment Report. Prepared for the U.S. Department of the Interior, Bureau of Land Management, Denver,
        Colorado.{' '}
        <a href="https://landscape.blm.gov/REA_General_Docs/COP_Final_Report_Body.pdf"> Access report. </a>
    </p>
</div>
