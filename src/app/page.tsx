'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
const Home = dynamic(() => import('@/pages/Home'), {
	loading: () => <Loading />,
	ssr: false,
	suspense: true,
});

export default function HomePage() {
	return (
		<>{
		      /* This is what Googlebot reads — plain HTML, no JS needed */}
      <div style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
        <h1>Abinesh Kalyanasundaram</h1>
        <p>Full Stack Developer | AI & Automation Engineer | DevOps & Cloud Engineer</p>
        <p>Building scalable web applications, AI agent systems, and cloud infrastructure.</p>
        <p>Skills: React.js, Node.js, Python, TypeScript, AWS, Docker, Terraform, n8n, MongoDB</p>
        <p>Projects: Abinex AI Orchestration Platform, Uraiyadal Slack Clone, AI Finance Analytics Platform</p>
        <p>Location: Chennai, India. Open to work in Bengaluru, Hyderabad, Remote.</p>
        <p>Contact: abineshkalyan2002@gmail.com</p>
      </div>
	  {}
	  </>
	);
}
		<Suspense fallback={<Loading />}>
			<Home />
		</Suspense>
