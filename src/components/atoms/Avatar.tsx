'use client'
import Image from 'next/image'
import React, { useState } from 'react'

interface AvatarProps {
    image: string,
    title?: string,
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full',
    width?: number,
    height?: number
}

const Avatar = ({ image = '', title = '', rounded = 'md', width = 40, height = 40 }: AvatarProps) => {
    const [imgError, setImgError] = useState(image === '')
    
    const roundedClasses = {
        'none': '',
        'sm': 'rounded-sm',
        'md': 'rounded-md',
        'lg': 'rounded-lg',
        'xl': 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        'full': 'rounded-full'
    }

    const fallbackImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&background=random&size=${width}`

    return (
        <Image
            src={imgError ? fallbackImage : image}
            alt={title}
            width={width}
            height={height}
            className={`${roundedClasses[rounded]} overflow-hidden`}
            onError={() => setImgError(true)}
            priority={true}
        />
    )
}

export default Avatar