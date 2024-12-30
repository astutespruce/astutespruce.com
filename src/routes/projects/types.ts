type Banner = {
    file: string
    credits: string
    url: string
    // added dynamically
    src: object
}

export type Project = {
    // from frontmatter
    title: string
    client: string
    url?: string
    description: string
    startDate: string
    endDate: string
    categories: string[]
    tech: string[]
    banner: Banner
    // added dynamically
    slug: string
    timestamp: number
}
