import Link from 'next/link'

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="breadcrumb" className="mb-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-600" dir="ltr">
                {items.map((item, index) => (
                    <>
                        {index > 0 && <li>/</li>}
                        <li key={item.href}>
                            {index === items.length - 1 ? (
                                <span aria-current="page">{item.label}</span>
                            ) : (
                                <Link href={item.href}>{item.label}</Link>
                            )}
                        </li>
                    </>
                ))}
            </ol>
        </nav>
    )
}