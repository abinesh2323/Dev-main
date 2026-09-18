import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Professional Experience & Roles | Abinesh Kalyanasundaram',
	description:
		'Professional track record of Abinesh Kalyanasundaram: Software engineering internships, full-stack application development, AWS infrastructure setup, and workflow automation achievements.',
	alternates: {
		canonical: 'https://abinesh-one.vercel.app/experience',
	},
	openGraph: {
		title: 'Professional Experience - Abinesh Kalyanasundaram',
		description:
			'Industry experience in building scalable web software, automating business processes, and cloud engineering.',
		url: 'https://abinesh-one.vercel.app/experience',
	},
};

export default function ExperiencePage() {
	return <Experience />;
}