import Mobapp from '@/pages/mobapp';
import Projects from '@/pages/mobapp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects - Abinesh Kalyanasundaram',
	description: 'View Abinesh Kalyanasundaram\'s portfolio of projects including Live Docs, Figma Clone, Video Conferencing App, and more.',
};

export default function ProjectsPage() {
	return <Mobapp />;
}