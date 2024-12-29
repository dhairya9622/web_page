/** @type {import('next').NextConfig} */
const nextConfig = {};
export default {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.pharmeasy.in',
                port: '',
                pathname: '/**',
            },
        ],
    },
};



