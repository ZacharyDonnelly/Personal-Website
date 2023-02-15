'use strict'

module.exports = {
    'src/**/*.{tsx,ts}': ['pnpm lint:prettier', 'pnpm lint:eslint'],
    'src/*.{css,scss}': ['pnpm lint:stylelint']
}
