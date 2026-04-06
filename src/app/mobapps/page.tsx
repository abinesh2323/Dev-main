import Mobapp from '@/pages/Mobapp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Mobile Apps - Abinesh Kalyanasundaram',
	description: 'View Abinesh Kalyanasundaram\'s portfolio of mobile apps including Abinyte and Locktask.',
};

export default function MobappsPage() {
	return <Mobapp />;
}