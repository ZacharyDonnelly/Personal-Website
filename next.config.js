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
    }
}
