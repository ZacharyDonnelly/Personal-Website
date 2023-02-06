module.exports = {
    singleQuote: true,
    jsxSingleQuote: false,
    bracketSpacing: true,
    arrowParens: 'always',
    printWidth: 120,
    endOfLine: 'lf',
    semi: false,
    tabWidth: 4,
    trailingComma: 'none',
    proseWrap: 'never',
    quoteProps: 'consistent',
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
