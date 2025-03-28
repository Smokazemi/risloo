interface GridProps {
    children: React.ReactNode
    cols?: {
        default: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
    }
    gap?: number
    className?: string
}

const Grid = ({ children, cols = { default: 1 }, gap = 6, className = '' }: GridProps) => {
    const getGridCols = () => {
        const classes = [`grid-cols-${cols.default}`]
        if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`)
        if (cols.md) classes.push(`md:grid-cols-${cols.md}`)
        if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`)
        if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`)
        return classes.join(' ')
    }

    return (
        <div className={`grid ${getGridCols()} grid-cols-4 gap-${gap} ${className}`}>
            {children}
        </div>
    )
}

export default Grid