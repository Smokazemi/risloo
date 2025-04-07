import type { Meta, StoryObj } from '@storybook/react'
import CentersContent from '@/components/organisms/CentersContent'


const meta: Meta<typeof CentersContent> = {
  title: 'Templates/CentersPage',
  component: CentersContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
}

export default meta

type Story = StoryObj<typeof CentersContent>

export const Default: Story = {
  args: {
    initialCenters: [
      {
        id: '1',

        detail: {
          title: 'First Center',
          description: 'Description for first center',
          address: 'Address 1',

          avatar: [
            {
              url: 'https://api.risloo.ir/storage/public/Files_1000/P9666AGE_medium.png',
              mode: 'medium',
            },
          ],

          phone_numbers: ['123-456-7890'],
        },

        manager: {
          name: 'Manager 1',

          avatar: [
            {
              url: 'https://api.risloo.ir/storage/public/Files_1000/P9666MYF_medium.png',
              mode: 'medium',
            },
          ],
        },
      },
      {
        id: '2',

        detail: {
          title: 'Second Center',
          description: 'ندارد',
          address: 'Address 2',
          avatar: null,
          phone_numbers: ['098-765-4321'],
        },

        manager: {
          name: 'Manager 2',
          avatar: null,
        },
      },
    ],
    initialIndex: '1',
    initialPagination: {
      prevIndex: '',
      nextIndex: '3',
      totalItems: 10,
      itemsPerPage: 2
    }
  },
}
