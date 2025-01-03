<script>
    import Globe from 'lucide-svelte/icons/globe'
    import ChartLine from 'lucide-svelte/icons/chart-line'
    import Database from 'lucide-svelte/icons/database-zap'
    import MessageCircleMore from 'lucide-svelte/icons/message-circle-more'
    import { HeaderImage, ImageCredit } from '$lib/components/image'
    import Img from '$lib/assets/images/thomas-millot-1297305-unsplash.jpg?format=avif;webp;jpg&w=4800;3200;1920;720&as=picture'
</script>

<svelte:head>
    <title>Services | Astute Spruce</title>
</svelte:head>

<HeaderImage src={Img} class="h-64" />

<ImageCredit author="Thomas Millot" url="https://unsplash.com/photos/y6X3oiDQQtY" />

<div class="container pb-20">
    <h1 class="mt-10">How I can help you</h1>

    <div class="mt-6 flex items-center gap-4 md:mt-12">
        <Globe class="text-muted-foreground" size="2.5rem" />
        <h3>Map & data visualization</h3>
    </div>
    <p class="mt-2">
        I specialize in leveraging and creating cutting-edge web mapping and data visualization technologies to make
        scientific data more accessible and informative. I create custom solutions to meet domain specific needs because
        generic solutions simply do not work well for complex scientific data.
        <br />
        <br />I can help you understand and leverage these cutting-edge technologies and approaches to empower your
        stakeholders and amplify your impact.
    </p>

    <ul class="mt-4">
        <li>
            I am an expert in
            <a href="https://github.com/mapbox/mapbox-gl-js" target="_blank"> Mapbox GL </a> /
            <a href="https://github.com/maplibre/maplibre-gl-js" target="_blank">MapLibre GL JS</a>, which are advanced
            web-mapping libraries with high performance for complex data. I created a
            <a href="https://github.com/brendan-ward/pymgl" target="_blank"> library</a> on top of
            <a href="https://github.com/maplibre/maplibre-native" target="_blank">MapLibre Native</a> for making map images
            for offline documents, such as downloadable reports.
        </li>
        <li>
            I created a lightweight
            <a href="https://github.com/consbio/mbtileserver" target="_blank"> image and vector map tile server </a>
            used across several projects to save costs and maintenance headaches.
        </li>
        <li>
            I developed a novel approach to encoding raster data to power pixel-level details and dynamic filtering in
            the browser without requiring complex map-server technology, and created a
            <a href="https://github.com/brendan-ward/rastertiler-rs" target="_blank">tile rendering tool</a>
            using Rust for high performance. See it used in the
            <a href="/projects/southeast-blueprint-explorer">Southeast Conservation Blueprint Explorer</a>.
        </li>
    </ul>

    <hr class="my-6 border-t-2 border-primary/50 md:my-12" />

    <div class="flex items-center gap-4">
        <ChartLine class="text-muted-foreground" size="2.5rem" />
        <h3>Data processing & analysis</h3>
    </div>

    <p class="mt-2">
        I am passionate about using my software development skills to help scientists and science-based organizations
        better use and interpret their data. I turn painfully slow and error-prone manual data processing into automated
        data pipelines, so that scientists can focus their scientific expertise on advancing scientific understanding.
        <br />
        <br />I can help you identify and develop novel solutions for your data processing needs. Once we have created
        these, you will be more efficient and able to focus your expertise on advancing your science.
    </p>

    <ul class="mt-4">
        <li>
            I developed a sophisticated data processing pipeline to process millions of aquatic barriers on millions of
            river and stream segments across the U.S. to help measure aquatic connectivity as part of the
            <a href="/projects/national-barrier-prioritization-tool"
                >National Aquatic Barrier Inventory & Prioritization Tool</a
            >
        </li>
        <li>
            I created an <a href="/projects/nzdoc">intuitive budget allocation application</a> to help staff in New Zealand's
            Department of Conservation explore tradeoffs in achieving conservation outcomes based on strategic goals and
            finite resources.
        </li>
        <li>
            I created an intuitive
            <a href="https://github.com/brendan-ward/echoclean" target="_blank"> rule-based classification tool </a>
            to help bat ecologists leverage expert knowledge to overcome shortcomings in automatic classification tools.
            This allows them to focus their limited time on manual inspection of fewer, more problematic records. This approach
            allows ecologists to define rules independent of the underlying software.
        </li>
    </ul>

    <hr class="my-6 border-t-2 border-primary/50 md:my-12" />

    <div class="flex items-center gap-4">
        <Database class="text-muted-foreground" size="2.5rem" />
        <h3>Data sharing</h3>
    </div>

    <p class="mt-2">
        My professional career has been focused on making data more accessible. I help define and develop data sharing
        approaches to turn scientific data into broader impacts for a wide range of stakeholders.
        <br />
        <br />I can help you compare between existing data sharing platforms, evaluate tradeoffs in data sharing and
        integration approaches, and identify solutions that will allow your organization to amplify the broader impact
        of your data.
    </p>

    <ul class="mt-4">
        <li>
            I developed the <a href="/projects/mpatlas">Marine Protection Atlas</a>
            for the <a href="https://marine-conservation.org/" target="_blank">Marine Conservation Institute</a> to help
            them share the latest scientific assessments of marine protection around the world.
        </li>
        <li>
            I developed the <a href="https://batamp.org" target="_blank"
                >Bat Acoustic Monitoring Portal Visualization Tool</a
            >
            in partnership with the U.S. Forest Service to enable members of the bat monitoring and conservation community
            to explore acoustic data records across North America. I am currently expanding it to better provide data for
            <a href="/projects/hoary-bat">hoary bats in California</a>.
        </li>
        <li>
            I led the development team at the
            <a href="https://consbio.org" target="_blank"> Conservation Biology Institute </a>
            that created the largest and most functional conservation data sharing platform in the world:
            <a href="https://databasin.org" target="_blank">Data Basin</a>.
        </li>
    </ul>
</div>
