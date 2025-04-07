import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  webpackFinal: async (config) => {
    config?.module?.rules?.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    });
    return config;
  },
  // framework: {
  //   name: '@storybook/nextjs',
  //   options: {},
  // },
  framework: '@storybook/experimental-nextjs-vite',
  docs: {
    autodocs: 'tag',
  },
  features: {
    experimentalRSC: true,
  },
  staticDirs: ['../public'],
}

export default config
