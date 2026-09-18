import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Abinesh Kalyanasundaram | Full Stack & AI Engineer (India, UAE, Singapore)',
	description:
		'Learn about Abinesh Kalyanasundaram, Full Stack Developer and AI Automation Engineer. Proven experience delivering web applications, AWS infrastructure, and n8n workflows for teams in India, UAE, and Singapore.',
	alternates: {
		canonical: 'https://abinesh-one.vercel.app/about',
	},
	openGraph: {
		title: 'About Abinesh Kalyanasundaram | Full Stack & AI Engineer',
		description:
			'Background, engineering philosophy, and technical expertise across web development, cloud, and AI automation for global companies.',
		url: 'https://abinesh-one.vercel.app/about',
	},
};

export default function AboutPage() {
	return <About />;
}