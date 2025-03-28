import type { Meta, StoryObj } from '@storybook/react'
import CenterCard from './CenterCard'

const meta: Meta<typeof CenterCard> = {
  title: 'Organisms/CenterCard',
  component: CenterCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CenterCard>

export const Default: Story = {
  args: {
    center: {
      id: '1',
      detail: {
        title: 'Center Name',
        description: 'Center Description',
        address: 'Center Address, Street, City',
        avatar: [{
          url: 'https://api.risloo.ir/storage/public/Files_1000/P9666AGE_medium.png',
          mode: 'medium'
        }],
        phone_numbers: ['123-456-7890', 'contact@example.com']
      },
      manager: {
        name: 'Manager Name',
        avatar: [{
          url: 'https://api.risloo.ir/storage/public/Files_1000/P9666MYF_medium.png',
          mode: 'medium'
        }]
      }
    }
  },
}