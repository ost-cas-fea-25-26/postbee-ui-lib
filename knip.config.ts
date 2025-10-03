import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.ts'],
  ignore: ['.prettier.config.js', '.storybook/**', 'storybook-static/**', 'release.config.js'],
  ignoreDependencies: [
    'tailwindcss', // Ignore tailwindcss because knip doesn't recognize v4 yet
    '@semantic-release/commit-analyzer',
    '@semantic-release/changelog',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};

export default config;
