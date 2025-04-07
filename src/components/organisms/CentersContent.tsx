'use client'
import { useCallback, useEffect, useLayoutEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useInView } from 'react-intersection-observer'
import { Center, Pagination } from '@/types'
import Container from '@/components/atoms/Container'
import CenterCard from '@/components/organisms/CenterCard'
import { useStructuredData } from '@/hooks/useStructuredData'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'
import { useCentersData } from '@/hooks/useCentersData'
import PaginationHead from '../atoms/PaginationHead'
import Link from 'next/link'
import Grid from '@/components/atoms/Grid'

interface CentersContentProps {
    initialCenters: Center[]
    initialIndex?: string,
    initialPagination: Pagination
}

export default function CentersContent({ initialCenters, initialIndex, initialPagination }: CentersContentProps) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentIndex = searchParams?.get('index')

    const {
        centers,
        isLoading,
        hasMore,
        loadMore,
        scrollToCenter
    } = useCentersData({
        initialCenters,
        initialIndex
    })

    const { jsonLd } = useStructuredData({
        centers,
        pageTitle: 'لیست مراکز مشاوره | ریسلو',
        metaDescription: 'دسترسی به بهترین مراکز مشاوره و روانشناسی در ریسلو - خدمات مشاوره آنلاین و حضوری'
    })

    const [ref, inView] = useInView({
        threshold: 0,
        rootMargin: '500px',
    })

    const updateURL = useCallback((index: string) => {
        const params = new URLSearchParams(searchParams?.toString() || '')
        params.set('index', index.toString())
        router.replace(`?${params.toString()}`, { scroll: false })
    }, [router, searchParams])

    useLayoutEffect(() => {
        if (initialIndex) {
            scrollToCenter(initialIndex)
        }
    }, []);

    useEffect(() => {
        if (inView && centers.length > 0) {
            const lastCenter = centers[centers.length - 1]
            updateURL(lastCenter.id)
        }
    }, [inView, centers, updateURL])

    useEffect(() => {
        if (!currentIndex) {
            scrollToCenter(initialIndex)
            return
        }
        loadMore(currentIndex)
    }, [initialIndex])


    return (
        <main>
            <PaginationHead
                baseUrl='/'
                nextIndex={initialPagination.nextIndex}
                prevIndex={initialPagination.prevIndex}
            />
            <Container className="py-8">
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="flex items-center space-x-2 text-sm text-gray-600" dir="ltr">
                        <li><Link href="/">ریسلو</Link></li>
                        <li>/</li>
                        <li aria-current="page">مراکز مشاوره</li>
                    </ol>
                </nav>

                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">لیست مراکز مشاوره</h1>
                    <p className="text-gray-600 text-lg">
                        دسترسی به بهترین مراکز مشاوره و روانشناسی در ریسلو
                    </p>
                </header>

                <Grid
                    cols={{
                        default: 1,
                        sm: 1,
                        md: 2,
                        lg: 4,
                        xl: 4,
                    }}
                    gap={4}
                    aria-label="لیست مراکز مشاوره"
                >
                    {centers.map((center) => (
                        <article
                            key={center.id}
                            id={`center-${center.id}`}
                            role="listitem"
                            itemScope
                            itemType="https://schema.org/MedicalOrganization"
                            className="h-full"
                        >
                            <CenterCard center={center} />
                        </article>
                    ))}
                </Grid>

                {(hasMore || isLoading) && (
                    <div
                        ref={ref}
                        className="h-20 flex items-center justify-center mt-8"
                        aria-label="در حال بارگذاری مراکز بیشتر"
                    >
                        <LoadingSpinner />
                    </div>
                )}
            </Container>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    )
}