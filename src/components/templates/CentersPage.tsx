'use client'
import { useState, useCallback, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import CenterCard from '../organisms/CenterCard'
import Container from '../atoms/Container'
import { useInView } from 'react-intersection-observer'

interface Center {
    id: string
    detail: {
        title: string
        description: string | null
        address: string | null
        avatar: Array<{
            url: string
            mode: string
        }> | null
        phone_numbers: string[] | null
    }
    manager: {
        name: string
        avatar: Array<{
            url: string
            mode: string
        }> | null
    }
}

interface CentersPageProps {
    centers: Center[]
}

const ITEMS_PER_PAGE = 10
const LOAD_DELAY_MS = 500

const CentersPage = ({ centers }: CentersPageProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    
    const currentPage = Number(searchParams?.get('page') || '1')
    const [page, setPage] = useState(currentPage)
    const [displayedCenters, setDisplayedCenters] = useState(() => {
        const end = currentPage * ITEMS_PER_PAGE
        return centers.slice(0, Math.min(end, centers.length))
    })

    const [ref, inView] = useInView({
        threshold: 0,
        rootMargin: '200px',
    })

    const hasMoreItems = centers.length > displayedCenters.length

    const updateURL = useCallback((newPage: number) => {
        const params = new URLSearchParams(searchParams?.toString() || '')
        params.set('page', newPage.toString())
        router.replace(`?${params.toString()}`, { scroll: false })
    }, [router, searchParams])

    const loadMoreItems = useCallback(() => {
        if (isLoading || !hasMoreItems) return

        setIsLoading(true)
        const nextPage = page + 1
        const end = nextPage * ITEMS_PER_PAGE

        setTimeout(() => {
            setDisplayedCenters(centers.slice(0, Math.min(end, centers.length)))
            setPage(nextPage)
            updateURL(nextPage)
            setIsLoading(false)
        }, LOAD_DELAY_MS)
    }, [centers, hasMoreItems, isLoading, page, updateURL])

    useEffect(() => {
        if (inView) {
            loadMoreItems()
        }
    }, [inView, loadMoreItems])

    useEffect(() => {
        if (currentPage !== page) {
            const end = currentPage * ITEMS_PER_PAGE
            setDisplayedCenters(centers.slice(0, Math.min(end, centers.length)))
            setPage(currentPage)
        }
    }, [currentPage, centers, page])

    return (
        <main>
            <Container className="py-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">لیست مراکز مشاوره</h1>
                    <p className="text-gray-600 text-lg">دسترسی به بهترین مراکز مشاوره و روانشناسی در ریسلو</p>
                </header>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                    role="list"
                    aria-label="لیست مراکز مشاوره"
                >
                    {displayedCenters.map(center => (
                        <article key={center.id} role="listitem">
                            <CenterCard center={center} />
                        </article>
                    ))}
                </div>
                {hasMoreItems && (
                    <div
                        ref={ref}
                        className="h-20 flex items-center justify-center mt-8"
                        aria-label="در حال بارگذاری مراکز بیشتر"
                    >
                        <div 
                            className={`rounded-full h-8 w-8 border-b-2 border-gray-900 ${isLoading ? 'animate-spin' : ''}`} 
                        />
                    </div>
                )}
            </Container>
        </main>
    )
}

export default CentersPage