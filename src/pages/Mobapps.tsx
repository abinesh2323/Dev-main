'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const mobapps = [	
    {
		title: 'Abinyte - An Open-Source Offline Music Player for Local Libraries',
		description: 'An open-source offline music player built for people tired of paying for what they already own. No streaming. No subscription. No internet required. Your local music library, beautifully organized and ready to play.',
		image: '/projects_img/image14.png',
		github: 'https://github.com/abinesh2323/Abinfy-muic-app',
		live: 'https://www.linkedin.com/posts/abinesh-kalyanasundaram-369494322_reactnative-mobileappdevelopment-appdevelopment-activity-7444360371378843648-8NtT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGVxgEB3eQPhkn-ILD9WjuOBbtNzl2G4X0',
		tags: ['React Native', 'TypeScript', 'Android SDK', 'ADB', 'Metro Bundler', 'Gradle', 'AES-256 Encryption', 'AsyncStorage']
	},
	{
		title: 'Locktask - A Privacy-First Task Manager with Dumb Mind thoughts',
		description: 'A privacy-first task manager built in React Native with AES-256 on-device encryption. No cloud. No backend. No one can read your tasks but you. Not even the developer.',
		image: '/projects_img/image13.png',
		github: 'https://github.com/abinesh2323/Locktask.git',
		live: 'https://www.linkedin.com/posts/abinesh-kalyanasundaram-369494322_opentowork-reactnative-mobiledevelopment-activity-7443521906873462784-XGyO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGVxgEB3eQPhkn-ILD9WjuOBbtNzl2G4X0',
		tags: ['React Native', 'TypeScript', 'Android SDK', 'ADB', 'Metro Bundler', 'Gradle', 'Redux Toolkit', 'React Native Track Player']
	},
];

const Mobapps = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Mobile Applications - 2</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{mobapps.map((mobapps, index) => (
					<ScrollAnimation key={mobapps.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={mobapps.image}
								alt={`Screenshot of ${mobapps.title} - ${mobapps.description.substring(0, 50)}...`}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{mobapps.title}</h3>
								<p className="text-gray-400 mb-4">{mobapps.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{mobapps.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={mobapps.github} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<Github className="w-4 h-4" />
										<span>Code</span>
									</a>
									<a href={mobapps.live} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<ExternalLink className="w-4 h-4" />
										<span>Linkedin</span>
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

export default Mobapps;