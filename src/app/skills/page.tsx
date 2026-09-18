import Skills from '@/pages/Skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Technical Skills & Stack | Abinesh Kalyanasundaram',
	description:
		'Technical competencies of Abinesh Kalyanasundaram: Next.js, React, Node.js, TypeScript, AWS Cloud (EC2, S3), n8n Workflow Automation, Docker, and Generative AI application engineering.',
	alternates: {
		canonical: 'https://abinesh-one.vercel.app/skills',
	},
	openGraph: {
		title: 'Technical Skills & Tech Stack - Abinesh Kalyanasundaram',
		description:
			'Explore comprehensive skill sets covering frontend, backend, cloud DevOps, and AI workflow automation.',
		url: 'https://abinesh-one.vercel.app/skills',
	},
};

export default function SkillsPage() {
	return <Skills />;
}