import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumb from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
    title: 'Molecules/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
    args: {
        items: [
            { label: 'ریسلو', href: '/' },
            { label: 'مراکز مشاوره', href: '/centers' }
        ]
    }
}