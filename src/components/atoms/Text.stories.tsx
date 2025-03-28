import type { Meta, StoryObj } from '@storybook/react'
import Text from './Text'

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'Default Text',
    size: 'base',
    weight: 'normal',
  },
}

export const Large: Story = {
  args: {
    children: 'Large Bold Text',
    size: 'xl',
    weight: 'bold',
  },
}