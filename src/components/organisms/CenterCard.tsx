import CenterInfo from '../molecules/CenterInfo'
import Text from '../atoms/Text'

interface CenterCardProps {
    center: {
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
}

const CenterCard = ({ center }: CenterCardProps) => {
    return (
        <>
            <meta itemProp="name" content={center.detail.title} />
            {center.detail.description && (
                <meta itemProp="description" content={center.detail.description} />
            )}
            <meta itemProp="telephone" content={center.detail.phone_numbers?.[0] || ''} />
            <meta itemProp="image" content={center.detail.avatar?.[0]?.url || ''} />
            {center.detail.address && (
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <meta itemProp="streetAddress" content={center.detail.address} />
                </div>
            )}
            <div itemProp="employee" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content={center.manager.name} />
                <meta itemProp="jobTitle" content="Manager" />
                <meta itemProp="image" content={center.manager.avatar?.[0]?.url || ''} />
            </div>
            <div className="col-span-1 h-full p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className=" flex justify-between flex-col h-full">
                    <CenterInfo
                        title={center.detail.title}
                        description={center.detail.description}
                        avatar={center.detail.avatar}
                    />

                    <div className="space-y-4 divide-y divide-gray-100 py-4">
                        {center.detail.address && (
                            <div className="pt-4">
                                <Text size="sm" weight="medium" className="text-gray-600">
                                    📍 آدرس
                                </Text>
                                <Text size="sm" className="my-3 text-gray-700">
                                    {center.detail.address}
                                </Text>
                            </div>
                        )}

                        {center.detail.phone_numbers && center.detail.phone_numbers.length > 0 && (
                            <div className="py-4">
                                <Text size="sm" weight="medium" className="text-gray-600">
                                    📞 راه‌های ارتباطی
                                </Text>
                                <div className="mt-1 space-y-1" dir='ltr'>
                                    {center.detail.phone_numbers.map((phone, index) => (
                                        <Text key={index} size="sm" className="text-gray-700">
                                            {phone}
                                        </Text>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="pt-4">
                            <Text size="sm" weight="medium" className="text-gray-600 mb-2">
                                👤 مدیریت
                            </Text>
                            <CenterInfo
                                title={center.manager.name}
                                avatar={center.manager.avatar}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CenterCard