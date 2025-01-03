export const prerender = true

const paths = import.meta.glob('$projects/**/+page.md', { eager: false })
const projects = Object.keys(paths).map((path) => `/projects/${path.split('/').at(-2)}`)

const pages = ['/', '/about', '/services', '/projects', ...projects]

const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>

<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
      .map(
          (page) => `
    <url>
        <loc>https://astutespruce.com${page}</loc>
        <changefreq>daily</changefreq>
        <priority>0.5</priority>
    </url>
`
      )
      .join('')}

</urlset>`

export async function GET() {
    const body = sitemap
    const response = new Response(body)
    response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600')
    response.headers.set('Content-Type', 'application/xml')
    return response
}
