import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.ts'],
  ignore: ['.prettier.config.js', '.storybook/**', 'storybook-static/**', 'release.config.js'],
  ignoreDependencies: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};

export default config;
