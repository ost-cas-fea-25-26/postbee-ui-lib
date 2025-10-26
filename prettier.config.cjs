const { $schema, ...config } = require('@smartive/prettier-config');

module.exports = {
  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports'],
  ...config,
  tailwindStylesheet: './src/styles/globals.css',
  importOrder: ['^react$', '<THIRD_PARTY_MODULES>', '^components/(.*)$', '^utils/(.*)$', '^styles/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
