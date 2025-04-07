import { useState, useCallback } from 'react'
import { Center } from '@/types'
import { getCenters } from '@/services/center'

interface UseCentersDataProps {
    initialCenters: Center[]
    initialIndex?: string
}

export function useCentersData({ initialCenters }: UseCentersDataProps) {
    const [centers, setCenters] = useState<Center[]>(initialCenters)
    const [isLoading, setIsLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    const loadMore = useCallback(async (index?: string) => {
        try {
            setIsLoading(true)
            const { data, error, pagination } = await getCenters(index || '')
            if (error) throw error

            if (!pagination?.nextIndex) {
                setHasMore(false)
            }

            const newCenters = data!.filter(newCenter =>
                !centers.some(existingCenter => existingCenter.id === newCenter.id)
            )

            setCenters(prev => [...prev, ...newCenters])
        } catch (error) {
            console.error('Failed to load centers:', error)
            setHasMore(false)
        } finally {
            setIsLoading(false)
        }
    }, [centers])

    const scrollToCenter = useCallback((centerId?: string) => {
        if (!centerId) return

        const centerExists = centers.some(center => center.id === centerId)
        if (centerExists) {
            const element = document.getElementById(`center-${centerId}`)
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [centers])

    return {
        centers,
        isLoading,
        hasMore,
        loadMore,
        scrollToCenter
    }
}