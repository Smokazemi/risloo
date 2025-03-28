import Head from 'next/head'

interface SEOProps {
    title: string
    description: string
    ogImage?: string
    canonical?: string
}

const SEO = ({ title, description, ogImage, canonical }: SEOProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            {canonical && <link rel="canonical" href={canonical} />}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </Head>
    )
}

export default SEO