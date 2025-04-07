import React from 'react'
import '../src/app/globals.css'
import './preview.css'
import type { Preview } from '@storybook/react'
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({
  subsets: ['latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
})


const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/centers',
        query: {},
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    locale: 'fa',
    defaultLocale: 'fa',
  },
  decorators: [
    (Story) => (
      <div dir="rtl" lang="fa" className={`w-full max-w-full ${vazirmatn.className}`}>
        <Story />
      </div>
    ),
  ],
  globalTypes: {
    font: {
      defaultValue: 'font-iransans',
    },
    direction: {
      defaultValue: 'rtl',
    },
    locale: {
      defaultValue: 'fa',
    },
  },
}

export default preview
