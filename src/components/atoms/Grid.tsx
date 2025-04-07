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

const gridColsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    'sm-1': 'sm:grid-cols-1',
    'sm-2': 'sm:grid-cols-2',
    'sm-3': 'sm:grid-cols-3',
    'sm-4': 'sm:grid-cols-4',
    'md-1': 'md:grid-cols-1',
    'md-2': 'md:grid-cols-2',
    'md-3': 'md:grid-cols-3',
    'md-4': 'md:grid-cols-4',
    'lg-1': 'lg:grid-cols-1',
    'lg-2': 'lg:grid-cols-2',
    'lg-3': 'lg:grid-cols-3',
    'lg-4': 'lg:grid-cols-4',
    'xl-1': 'xl:grid-cols-1',
    'xl-2': 'xl:grid-cols-2',
    'xl-3': 'xl:grid-cols-3',
    'xl-4': 'xl:grid-cols-4',
} as const

const gapMap = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
} as const

const Grid = ({ children, cols = { default: 1 }, gap = 6, className = '' }: GridProps) => {
    const getGridCols = () => {
        const gridClasses = [gridColsMap[cols.default as keyof typeof gridColsMap]]
        
        Object.entries(cols).forEach(([breakpoint, value]) => {
            if (breakpoint !== 'default' && value) {
                const key = `${breakpoint}-${value}` as keyof typeof gridColsMap
                if (key in gridColsMap) {
                    gridClasses.push(gridColsMap[key])
                }
            }
        })
        
        return gridClasses.join(' ')
    }

    return (
        <div role="list" className={`grid ${getGridCols()} ${gapMap[gap as keyof typeof gapMap]} ${className}`.trim()}>
            {children}
        </div>
    )
}

export default Grid