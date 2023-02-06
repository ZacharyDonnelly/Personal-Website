const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ['ts', 'tsx'],
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })

        return config
    }
}
