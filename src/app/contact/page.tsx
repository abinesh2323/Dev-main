import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Abinesh Kalyanasundaram | Hire for India, UAE & Singapore Projects',
	description:
		'Get in touch with Abinesh Kalyanasundaram for full-stack engineering, AI & n8n automation, or cloud DevOps consulting. Available for opportunities across India, UAE (Dubai/Abu Dhabi), and Singapore.',
	alternates: {
		canonical: 'https://abinesh-one.vercel.app/contact',
	},
	openGraph: {
		title: 'Contact Abinesh Kalyanasundaram | India • UAE • Singapore',
		description:
			'Connect with Abinesh for software development projects, contract roles, or technical consulting.',
		url: 'https://abinesh-one.vercel.app/contact',
	},
};

export default function ContactPage() {
	return <Contact />;
}