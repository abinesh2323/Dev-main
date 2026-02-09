'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
			{
		title: 'Whisper - Mobile Realtime Chat Application(Both Android & Apple IOS)',
		description: 'Built a Full-Stack Web + Mobile App Successfully developed a production-ready full-stack application with: Runs on both 🤖 Android 🍎 Apple / iOS.',
		image: '/projects_img/image7.jpg',
		github: 'https://github.com/abinesh2323/mobile_app.git',
		live: 'https://www.linkedin.com/posts/abinesh-kalyanasundaram-369494322_fullstackdeveloper-reactnative-webdevelopment-activity-7418979830546948096-8j2N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGVxgEB3eQPhkn-ILD9WjuOBbtNzl2G4X0',
		tags: ['ReactNative','Typescript','React.js','Vite','Node.js','Express.js','MongoDB Atlas','Stream Chat','Clerk','Tailwind CSS','Inngest','Cloudinary','AWS Amplify','Vercel','CI/CD','DevOps','End-to-End Encryption','Cloud Firewall']

	},

		{
		title: 'ErosByte-A community Coding platform',
		description: 'I built a platform where they can do it online. No setup. No Docker. Just run it. 💻Introducing ErosByte (seduce your syntax) - a SaaS online IDE for developers.',
		image: '/projects_img/image6.png',
		github: 'https://github.com/abinesh2323/Erosbyte',
		live: 'https://erosbyte-byaabi.vercel.app/',
		tags: ['10-Programming Lnaguage IDE','React.js','Vite','Node.js','Express.js','MongoDB Atlas','Stream Chat','Clerk','Tailwind CSS','Inngest','Cloudinary','AWS Amplify','Vercel','CI/CD','DevOps','End-to-End Encryption','Cloud Firewall']

	},
	{
		title: 'URAIYADAL-Clone Version of Slack',
		description: 'Implemented real-time chat, calls, file sharing, and production monitoring using modern full-stack and DevOps practices.',
		image: '/projects_img/image5.png',
		github: 'https://github.com/abinesh2323/slackclone',
		live: 'https://main.d24al9annwk1zu.amplifyapp.com/auth',
		tags: ['React.js','Vite','Node.js','Express.js','MongoDB Atlas','Stream Chat','Clerk','Tailwind CSS','Inngest','Cloudinary','AWS Amplify','Vercel','CI/CD','DevOps','End-to-End Encryption','Cloud Firewall']

	},
	{
		title: 'Abinify-Live(Clone Version of Streamify)',
		description: 'A real-time collaborative design tool inspired by Streamify.A React based App enables users to create and join video meetings with chat, reaction Emojis,screen sharing, and recording features.',
		image: '/projects_img/image2.png',
		github: 'https://github.com/abinesh2323/Abinify-Live',
		live: 'https://tigma1.vercel.app/',
		tags: ["Next.js", "React.js", "Tailwindcss", "Clerk", "Vite", "Javascript","Stream_Api","Mongodb"]
	},
	{
		title: 'AI VIRTUAL ASSISTANT USING GEMINI API',
		description: 'AI-powered virtual assistant web app built with the MERN stack that understands voice commands, talks back using Web Speech API, and generates intelligent replies via Gemini AI.',
		image: '/projects_img/image4.png',
		github: 'https://github.com/abinesh2323/Jarvis.git',
		live: 'https://vrfrontend.onrender.com',
		tags: ["React.js","Node.js","Express.js","MongoDB","Gemini AI","Web Speech API","JWT","bcryptjs","Multer","Cloudinary","Render","MongoDB Atlas","dotenv","cookie-parser"]
	},	
	{
		title: 'Simple-Docker Based react Application',
		description: 'A simple web page designed with react.js,javascript,css and deployed with AWS S3 bucket with docker image file.',
		image: '/projects_img/image3.png',
		github: 'https://github.com/abinesh2323/Docker-React-App-Deploy-in-AWS.git',
		tags: ["React.js", "AWS","S3","Docker","DevOps"]
	},
	{
		title: 'Blockchain Based Counterfiet Goods Identification',
		description: 'A Decentrelised Application to stop the supply chain of duplicates products running in black market. ',
		image: '/projects_img/image1.png',
		github: 'https://github.com/abinesh2323/Blockchain-Based-Counterfeit-Detection-System.git',
		tags: ["Node.js","Javascript","React.js","SHA256-Algo","Ganache","Metamask","Truffle","Blockchain","QR_code Generation"]
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={project.github} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<Github className="w-4 h-4" />
										<span>Code</span>
									</a>
									<a href={project.live} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<ExternalLink className="w-4 h-4" />
										<span>Live</span>
									</a>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;
