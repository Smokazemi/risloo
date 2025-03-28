import type { Meta, StoryObj } from '@storybook/react'
import CenterInfo from './CenterInfo'

const meta: Meta<typeof CenterInfo> = {
  title: 'Molecules/CenterInfo',
  component: CenterInfo,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CenterInfo>

export const Default: Story = {
  args: {
    title: 'Center Name',
    description: 'Center Description',
    avatar: [{
      url: 'https://api.risloo.ir/storage/public/Files_1000/P9666AGE_medium.png',
      mode: 'medium'
    }]
  },
}

export const WithoutDescription: Story = {
  args: {
    title: 'Center Name',
    avatar: [{
      url: 'https://api.risloo.ir/storage/public/Files_1000/P9666AGE_medium.png',
      mode: 'medium'
    }]
  },
}