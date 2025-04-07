import { Metadata } from 'next'

interface PaginationHeadProps {
    baseUrl: string;
    prevIndex?: string,
    nextIndex?: string,
}

export default function PaginationHead({ prevIndex, nextIndex, baseUrl }: PaginationHeadProps) {
    return (
        <>
            {prevIndex && (
                <link
                    rel="prev"
                    href={`${baseUrl}${prevIndex === 'initial' ? '' : `?index=${prevIndex}`}`}
                />
            )}

            {nextIndex && (
                <link
                    rel="next"
                    href={`${baseUrl}?index=${nextIndex}`}
                />
            )}
        </>
    );
}

export function generateMetadata({ prevIndex, nextIndex, baseUrl }: PaginationHeadProps): Metadata {
    return {
        pagination: {
            previous: prevIndex ? `${baseUrl}${prevIndex === 'initial' ? '' : `?index=${prevIndex}`}` : undefined,
            next: nextIndex ? `${baseUrl}?index=${nextIndex}` : undefined,
        },
    }
}