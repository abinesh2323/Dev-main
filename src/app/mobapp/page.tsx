import Mobapp from '@/pages/mobapp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Mobile Apps - Abinesh Kalyanasundaram',
	description: 'View Abinesh Kalyanasundaram\'s portfolio of mobile apps including Abinyte and Locktask.',
};

export default function ProjectsPage() {
	return <Mobapp />;
}