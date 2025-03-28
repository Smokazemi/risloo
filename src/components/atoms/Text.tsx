interface TextProps {
    children: React.ReactNode
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
    weight?: 'normal' | 'medium' | 'semibold' | 'bold'
    className?: string
}

const Text = ({ children, size = 'base', weight = 'normal', className = '' }: TextProps) => {
    const sizeClasses = {
        'xs': 'text-xs',
        'sm': 'text-sm',
        'base': 'text-base',
        'lg': 'text-lg',
        'xl': 'text-xl',
        '2xl': 'text-2xl'
    }
    
    const weightClasses = {
        'normal': 'font-normal',
        'medium': 'font-medium',
        'semibold': 'font-semibold',
        'bold': 'font-bold'
    }

    return (
        <p className={`${sizeClasses[size]} ${weightClasses[weight]} ${className}`}>
            {children}
        </p>
    )
}

export default Text