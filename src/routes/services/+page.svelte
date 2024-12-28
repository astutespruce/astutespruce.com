<script>
    import Globe from 'lucide-svelte/icons/globe'
    import ChartLine from 'lucide-svelte/icons/chart-line'
    import Database from 'lucide-svelte/icons/database-zap'
    import MessageCircleMore from 'lucide-svelte/icons/message-circle-more'
    import { HeaderImage, ImageCredit } from '$lib/components/image'
    import Img from '$lib/assets/images/thomas-millot-1297305-unsplash.jpg'
</script>

<svelte:head>
    <title>Services | Astute Spruce</title>
</svelte:head>

<HeaderImage src={Img} class="min-h-64" />
<ImageCredit author="Thomas Millot" url="https://unsplash.com/photos/y6X3oiDQQtY" />

<div class="container pb-20">
    <h1 class="mt-6 text-3xl md:text-5xl lg:text-6xl">How I can help you</h1>

    <div class="mt-6 flex items-center gap-4 md:mt-12">
        <Globe class="text-muted-foreground" size="2.5rem" />
        <h3 class="text-2xl md:text-4xl">Map & data visualization</h3>
    </div>
    <p class="mt-4">
        I specialize in leveraging and creating cutting-edge web mapping and data visualization technologies to make
        scientific data more accessible and informative. I create custom solutions to meet domain specific needs because
        generic solutions simply do not work well for complex scientific data.
        <br />
        <br />I can help you understand and leverage these cutting-edge technologies and approaches to empower your
        stakeholders and amplify your impact.
    </p>

    <ul class="mt-4">
        <li>
            I am an expert in{' '}
            <a href="https://leafletjs.com/">Leaflet</a>, a web-mapping library perfect for simpler projects. I created
            several{' '}
            <a href="https://github.com/search?utf8=%E2%9C%93&q=topic%3Aleaflet+org%3Aconsbio+&type=">
                open-source plugins
            </a>{' '}
            for common components across projects.
        </li>
        <li>
            I am an expert in{' '}
            <a href="https://github.com/mapbox/mapbox-gl-js"> Mapbox GL </a>
            , an advanced web-mapping library with high performance for complex data. I created a{' '}
            <a href="https://github.com/consbio/mbgl-renderer"> library for making map images </a>{' '}
            for offline documents, such as downloadable reports.
        </li>
        <li>
            I created a lightweight{' '}
            <a href="https://github.com/consbio/mbtileserver"> image and vector map tile server </a>{' '}
            used across several projects to save costs and maintenance headaches.
        </li>
        <li>
            I developed a novel approach to{' '}
            <a href="https://github.com/brendan-ward/datatiles"> encoding raster data </a>{' '}
            to power real-time data exploration in the browser without requiring complex map-server technology.
        </li>
    </ul>

    <hr class="mt-6 border-t-2 border-primary/50 md:mt-12" />

    <div class="mt-6 flex items-center gap-4 md:mt-12">
        <ChartLine class="text-muted-foreground" size="2.5rem" />
        <h3 class="text-2xl md:text-4xl">Data processing & analysis</h3>
    </div>

    <p class="mt-4">
        I am passionate about using my software development skills to help scientists and science-based organizations
        better use and interpret their data. I turn painfully slow and error-prone manual data processing into automated
        data pipelines, so that scientists can focus their scientific expertise on advancing scientific understanding.
        <br />
        <br />I can help you identify and develop novel solutions for your data processing needs. Once we have created
        these, you will be more efficient and able to focus your expertise on advancing your science.
    </p>

    <ul class="mt-4">
        <li>
            I developed a rule-based classification tool to help vegetation ecologists classify information from many
            thousands of field plots into ecologically-meaningful classes.
        </li>
        <li>
            I created an intuitive{' '}
            <a href="https://github.com/brendan-ward/echoclean"> rule-based classification tool </a>{' '}
            to help bat ecologists leverage expert knowledge to overcome shortcomings in automatic classification tools.
            This allows them to focus their limited time on manual inspection of fewer, more problematic records. This approach
            allows ecologists to define rules independent of the underlying software.
        </li>
        <li>
            When existing tools could not scale to larger volumes of data, seriously jeopardizing my clients&apos;
            ability to meet their deadlines, I created a new data processing pipeline to efficiently process the most
            detailed data on rivers and streams in the U.S. This allowed us to leverage higher quality data and still
            meet critical deadlines.
        </li>
    </ul>

    <hr class="mt-6 border-t-2 border-primary/50 md:mt-12" />

    <div class="mt-6 flex items-center gap-4 md:mt-12">
        <Database class="text-muted-foreground" size="2.5rem" />
        <h3 class="text-2xl md:text-4xl">Data sharing</h3>
    </div>

    <p class="mt-4">
        My professional career has been focused on making data more accessible. I help define and develop data sharing
        approaches to turn scientific data into broader impacts for a wide range of stakeholders.
        <br />
        <br />I can help you compare between existing data sharing platforms, evaluate tradeoffs in data sharing and
        integration approaches, and identify solutions that will allow your organization to amplify the broader impact
        of your data.
    </p>

    <ul class="mt-4">
        <li>
            I led the development team at the{' '}
            <a href="https://consbio.org"> Conservation Biology Institute </a>{' '}
            that created the largest and most functional conservation data sharing platform in the world:{' '}
            <a href="https://databasin.org">Data Basin</a>.
        </li>
        <li>
            I have successfully led multi-organization teams to define, pilot, and implement cross-organization data
            integration. These leverage the collective strengths, domain expertise, and data ownership of each
            organization to amplify the impacts of the data created and managed by each partner.
        </li>
        <li>
            I led the data management and delivery of two region-wide ecological assessment projects, which involved
            several hundred individual deliverables. I developed data pipelines to standardize data format, structure,
            and documentation - which resulted in some of the highest quality deliverables for our clients compared to
            other contractors responsible for other regions.
        </li>
    </ul>

    <hr class="mt-6 border-t-2 border-primary/50 md:mt-12" />

    <div class="mt-6 flex items-center gap-4 md:mt-12">
        <MessageCircleMore class="text-muted-foreground" size="2.5rem" />
        <h3 class="text-2xl md:text-4xl">Consulting</h3>
    </div>

    <p class="mt-4">
        Just need advice on how to approach a data visualization, processing, or sharing project? Need assistance
        leveraging the state of the art technologies to increase the impact of your organization? I am here to help.
    </p>
</div>
