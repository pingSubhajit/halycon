/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['@halycron/ui'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'halycron-photos.s3.ap-south-1.amazonaws.com',
				pathname: '/**'
			}
		]
	},
	experimental: {
		reactCompiler: true
	}
}

export default nextConfig
