/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://djjacjpot.onrender.com/:path*', // Replace with your API base URL
            },
        ];
    },
};

export default nextConfig;
