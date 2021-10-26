const withImages = require('next-images')

module.exports = {
    reactStrictMode: true,
    env: {
        ENV: process.env.ENVIRONMENT
    }
}

module.exports = withImages({
    esModule: true,
})
