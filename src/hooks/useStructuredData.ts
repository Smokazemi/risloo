import { Center } from '@/types'

interface StructuredDataProps {
    centers: Center[]
    pageTitle: string
    metaDescription: string
}

export function useStructuredData({ centers, pageTitle, metaDescription }: StructuredDataProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": pageTitle,
        "description": metaDescription,
        "numberOfItems": centers.length,
        "itemListOrder": "Ascending",
        "url": "https://risloo.ir/centers",
        "mainEntity": {
            "@type": "CollectionPage",
            "hasPart": centers.map((center) => ({
                "@type": "MedicalOrganization",
                "@id": `https://risloo.ir/centers/${center.id}`
            })),
            "pageStart": "1",
            "isPartOf": {
                "@type": "WebSite",
                "name": "ریسلو",
                "@id": "https://risloo.ir"
            }
        },
        "itemListElement": centers.map((center, index) => ({
            "@type": "MedicalOrganization",
            "@id": `https://risloo.ir/centers/${center.id}`,
            "position": index + 1,
            "name": center.detail.title,
            "description": center.detail.description,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": center.detail.address
            },
            "telephone": center.detail.phone_numbers?.[0],
            "image": center.detail.avatar?.[0]?.url,
            "employee": {
                "@type": "Person",
                "name": center.manager.name,
                "image": center.manager.avatar?.[0]?.url,
                "jobTitle": "Manager"
            },
            "url": `https://risloo.ir/centers/${center.id}`
        }))
    }

    return { jsonLd }
}