import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://abinesh-one.vercel.app';
	const now = new Date();

	return [
		{
			url: `${baseUrl}`,
			lastModified: now,
			changeFrequency: 'weekly',
			priority: 1.0,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: now,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/skills`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/experience`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/certificates`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/education`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/mobapps`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/kali`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: now,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	];
}