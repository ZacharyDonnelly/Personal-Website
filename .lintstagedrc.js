'use strict'

module.exports = {
  'src/**/*.{css,scss}': ['pnpm lint:stylelint'],
  'src/**/*.{tsx,ts}': ['pnpm lint:prettier', 'pnpm lint:eslint'],
  '**/*.{md,mdx}': ['pnpm lint:md'],
  '**/.js': ['pnpm lint:prettier', 'pnpm lint:eslint'],
  '**/.json': ['pnpm lint:prettier']
}
