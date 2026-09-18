import Projects from '@/pages/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects & Work Portfolio | Abinesh Kalyanasundaram',
	description:
		'Explore production-grade full-stack and AI projects built by Abinesh Kalyanasundaram: Live Docs collaborative editor, Figma Clone, Video Conferencing, and AWS Cloud deployments.',
	alternates: {
		canonical: 'https://abinesh-one.vercel.app/projects',
	},
	openGraph: {
		title: 'Projects Portfolio - Abinesh Kalyanasundaram',
		description:
			'Explore full-stack web applications, AI integrations, and cloud architectures built for scalability.',
		url: 'https://abinesh-one.vercel.app/projects',
	},
};

export default function ProjectsPage() {
	return <Projects />;
}