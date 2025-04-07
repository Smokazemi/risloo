import { Suspense } from 'react'
import { Metadata } from 'next'
import { getCenters } from '@/services/center'
import CentersContent from '@/components/organisms/CentersContent'
import Container from '@/components/atoms/Container'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'
import { Center, Pagination } from '@/types'
import { generateMetadata as paginationMetadata } from '@/components/atoms/PaginationHead'



export async function generateMetadata({ searchParams }: {
    params: { slug: string[] }
    searchParams: { index?: string }
}): Promise<Metadata> {
    const { pagination } = await getInitialCenters(searchParams.index)

    const paginationMeta = paginationMetadata({
        baseUrl: 'https://risloo.ir/centers',
        prevIndex: pagination?.prevIndex || undefined,
        nextIndex: pagination?.nextIndex || undefined
    })

    return {
        title: 'لیست مراکز مشاوره | ریسلو',
        description: 'دسترسی به بهترین مراکز مشاوره و روانشناسی در ریسلو - خدمات مشاوره آنلاین و حضوری',
        keywords: 'مراکز مشاوره, روانشناسی, مشاوره آنلاین, خدمات روانشناسی, ریسلو',
        openGraph: {
            title: 'لیست مراکز مشاوره | ریسلو',
            description: 'دسترسی به بهترین مراکز مشاوره و روانشناسی در ریسلو - خدمات مشاوره آنلاین و حضوری',
            type: 'website',
        },
        robots: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1',
        ...paginationMeta,
    }
}
async function getInitialCenters(index?: string) {
    try {
        const { data, pagination, error } = await getCenters(index || '', true)
        if (error) throw error
        return { data, pagination }
    } catch (error) {
        console.error('Failed to fetch initial centers:', error)
        return { error }
    }
}

export default async function CentersPage({
    initialIndex,
}: {
    initialIndex?: string
}) {
    const initialCenters = await getInitialCenters(initialIndex)

    return (
        <Suspense
            fallback={
                <Container className="py-8">
                    <div className="h-20 flex items-center justify-center">
                        <LoadingSpinner />
                    </div>
                </Container>
            }
        >
            <CentersContent
                initialCenters={initialCenters.data as Center[]}
                initialPagination={initialCenters.pagination as Pagination}
                initialIndex={initialIndex}
            />
        </Suspense>
    )
}