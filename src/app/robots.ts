import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api/'],
			},
			{
				userAgent: [
					'Googlebot',
					'Bingbot',
					'Applebot',
					'GPTBot',
					'ChatGPT-User',
					'PerplexityBot',
					'ClaudeBot',
					'Claude-Web',
					'Amazonbot',
					'cohere-ai',
				],
				allow: '/',
				disallow: ['/api/'],
			},
		],
		sitemap: 'https://abinesh-one.vercel.app/sitemap.xml',
	};
}
