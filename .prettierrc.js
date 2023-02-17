'use strict'

module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf',
  insertPragma: false,
  bracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 120,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  plugins: [require.resolve('prettier-plugin-organize-imports')],
  overrides: [
    {
      files: ['*.json', '*.md', '*.yaml', '*.yml'],
      options: {
        printWidth: 80,
        singleQuote: false
      }
    }
  ]
}
