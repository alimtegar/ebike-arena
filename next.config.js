module.exports = {
    async redirects() {
        return [
            {
                source: '/products',
                destination: '/products/all',
                permanent: true,
            },
            {
                source: '/posts',
                destination: '/posts/all',
                permanent: true,
            },
        ]
    },
}