type Banner = {
    credits: string
    url?: string
    label?: string
    // added dynamically
    src: object
}

export type Project = {
    // from frontmatter
    title: string
    client: string
    order: number
    url?: string
    description: string
    startDate: string
    endDate: string
    categories: string[]
    tech: string[]
    banner: Banner
    // added dynamically
    slug: string
}
