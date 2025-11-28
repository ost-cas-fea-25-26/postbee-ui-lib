import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  project: ['src/**/*.{ts,tsx,css}'],
  ignore: ['.prettier.config.js', '.storybook/**', 'storybook-static/**', 'release.config.js', 'svgr.config.cjs'],
  ignoreDependencies: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};

export default config;
