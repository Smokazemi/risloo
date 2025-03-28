import type { Meta, StoryObj } from '@storybook/react'
import Grid from './Grid'

const meta: Meta<typeof Grid> = {
    title: 'Atoms/Grid',
    component: Grid,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Grid>

export const Default: Story = {
    args: {
        children: Array(6).fill(0).map((_, i) => (
            <div key={i} className="bg-gray-200 p-4 rounded">Item {i + 1}</div>
        )),
        cols: {
            default: 1,
            md: 2,
            lg: 3
        },
        gap: 6
    }
}