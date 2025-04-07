import type { Meta, StoryObj } from '@storybook/react'
import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    image: {
      description: 'Image source URL',
      control: 'text',
    },
    title: {
      description: 'Alt text for the image',
      control: 'text',
    },
    rounded: {
      description: 'Avatar border radius variant',
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
    },
    width: {
      description: 'Width of the avatar',
      control: { type: 'number', min: 20, max: 200 },
    },
    height: {
      description: 'Height of the avatar',
      control: { type: 'number', min: 20, max: 200 },
    },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    image: 'https://api.risloo.ir/storage/public/Files_1000/P9666MYF_large.png',
    title: 'Default Avatar',
    rounded: 'none',
    width: 40,
    height: 40,
  },
}

export const Rounded: Story = {
  args: {
    image: 'https://api.risloo.ir/storage/public/Files_1000/P9666MYF_large.png',
    title: 'Rounded Avatar',
    rounded: 'full',
    width: 40,
    height: 40,
  },
}

export const Large: Story = {
  args: {
    image: 'https://via.placeholder.com/80',
    title: 'Large Avatar',
    rounded: 'md',
    width: 80,
    height: 80,
  },
}

export const CustomSize: Story = {
  args: {
    image: 'https://via.placeholder.com/60',
    title: 'Custom Size Avatar',
    rounded: 'none',
  },
}
