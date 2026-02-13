import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education - Abinesh Kalyanasundaram',
	description: 'Abinesh Kalyanasundaram\'s educational background including B.Tech in Information Technology from Sri Sairam Engineering College.',
};

export default function EducationPage() {
	return <Education />;
}