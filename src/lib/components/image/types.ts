export type ImageType = {
    img: {
        src: string
        w: number
        h: number
    }
    sources: {
        avif?: string
        jpeg?: string
        webp?: string
    }
}
