import Avatar from '../atoms/Avatar'
import Text from '../atoms/Text'

type HeadingTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface CenterInfoProps {
    title: string
    description?: string | null
    avatar?: Array<{
        url: string
        mode: string
    }> | null
    type?: 'center' | 'manager'
}

const CenterInfo = ({ title, description, avatar, type = 'center' }: CenterInfoProps) => {
    const avatarUrl = avatar?.find(img => img.mode === 'medium')?.url || ''
    const headingLevel = type === 'center' ? 'h2' : 'h3'
    const HeadingTag = headingLevel as HeadingTagType
    const typeLabel = type === 'center' ? 'مرکز' : 'مدیر'
    
    return (
        <div className="flex items-start gap-4" dir="rtl">
            <Avatar 
                image={avatarUrl}
                title={`${typeLabel} - ${title}`}
                rounded="full"
                width={50}
                height={50}
            />
            <div>
                <HeadingTag className="text-lg font-semibold text-gray-900 font-iransans">
                    {title}
                </HeadingTag>
                {description && (
                    <Text 
                        size="sm" 
                        className="text-gray-600 font-iransans"
                        aria-label={`توضیحات ${typeLabel}`}
                    >
                        {description}
                    </Text>
                )}
            </div>
        </div>
    )
}

export default CenterInfo