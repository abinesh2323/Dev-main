import Hire from '@/pages/Hire';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Hire Abinesh Kalyanasundaram | Immediate Joiner Full Stack & AI Developer',
	description:
		'Recruiter Hub: Hire Abinesh Kalyanasundaram. Immediate Joiner (0 Days Notice) specializing in Next.js, React, Node.js, AWS Cloud, and n8n AI Automation for teams in India, UAE (Dubai), and Singapore.',
	keywords: [
		'Hire Full Stack Developer',
		'Hire AI Developer India',
		'Hire Next.js Developer Dubai',
		'Full Stack Engineer Singapore Immediate Joiner',
		'React Developer 0 Days Notice',
		'Immediate Joiner Software Engineer',
		'n8n Automation Freelancer UAE',
		'AWS DevOps Engineer Singapore',
		'Abinesh Kalyanasundaram Resume',
		'Candidate Profile Abinesh K',
	],
	alternates: {
		canonical: 'https://abinesh-one.vercel.app/hire',
	},
	openGraph: {
		title: 'Hire Abinesh Kalyanasundaram | Full Stack & AI Engineer (Immediate Joiner)',
		description:
			'Recruiter Fast-Track: Immediate Joiner (0 Days Notice), B.Tech IT (8.1 CGPA), Next.js, AWS, n8n Automation. Available for roles in India, UAE, and Singapore.',
		url: 'https://abinesh-one.vercel.app/hire',
		type: 'profile',
	},
};

export default function HirePage() {
	return <Hire />;
}
