module.exports = {
    "singleQuote": true,
    "jsxSingleQuote": false,
    "jsxBracketSameLine": true,
    "bracketSpacing": true,
    "arrowParens": "always",
    "printWidth": 120,
    "endOfLine": "lf",
    "semi": false,
    "tabWidth": 4,
    "trailingComma": "none",
    "proseWrap": "never",
    "quoteProps": "consistent",
    "plugins": [require.resolve("prettier-plugin-organize-imports")],
    "overrides": [
        {
            "files": ["package.json", "*.md"],
            "options": {
                "printWidth": 80,
                "singleQuote": false
            }
        }
    ]
}
