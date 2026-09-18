'use client';

import { VercelLogo } from '@/components/TechLogos';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Copy, Check, FileDown, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';
import AeoFaq from '@/components/AeoFaq';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home = () => {
	const [copied, setCopied] = useState(false);
	const email = 'abineshkalyan2002@gmail.com';
	const whatsappNumber = '+919159447439';

	const { data: githubData } = useSWR('https://abinesh-portfolio-nine.vercel.app', fetcher);
	function formatRepoCount(count: number): string {
		if (count < 5) return count.toString();
		return `${Math.floor(count / 5) * 5}+`;
	}
	const githubRepos = githubData?.public_repos || 0;
	const displayRepos = formatRepoCount(githubRepos);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	const handleEmailClick = (e: React.MouseEvent) => {
		if (window.innerWidth <= 640) { // sm breakpoint
			window.location.href = `mailto:${email}`;
			e.preventDefault();
		} else {
			copyToClipboard();
		}
	};

	return (
		<div className="w-full">
			<div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
				<div className="text-center relative z-10 max-w-4xl mx-auto">
					<motion.div
						className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 backdrop-blur-md"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
						<span>Available across India 🇮🇳 • UAE 🇦🇪 • Singapore 🇸🇬</span>
					</motion.div>

					<motion.h1
						className="text-4xl sm:text-6xl md:text-7xl font-bold mb-3 sm:mb-6 relative tracking-tighter"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						Abinesh Kalyanasundaram
					</motion.h1>
				<motion.h2
					className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					I design & code for web
				</motion.h2>

				<motion.p
					className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Software Developer / Devops & Cloud Engineer / Automation Engineer.
				</motion.p>

				<motion.div
					className="flex flex-col items-center gap-4 sm:gap-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<div className="flex justify-center space-x-3 sm:space-x-4">
						<a
							href="/files/cv_pdf/Abinesh_K_Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
						>
							<FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
							Download CV
						</a>
						<Link
							href="/about"
							className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
						>
							<User className="w-4 h-4 sm:w-5 sm:h-5" />
							About Me
						</Link>
					</div>

					<button
						onClick={handleEmailClick}
						className="group relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-transparent transition-all cursor-copy sm:cursor-pointer"
					>
						<div className="absolute left-0 flex items-center">
							<div className="w-3 text-gray-500 group-hover:text-white transition-colors">
								<VercelLogo />
							</div>
							<span className="text-lg font-mono text-gray-400 ml-3 group-hover:text-white transition-colors">~</span>
						</div>
						<span className="text-gray-400 group-hover:text-white transition-colors ml-4 sm:text-base">{email}</span>
						<div className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 hidden sm:block">
							{copied ? (
								<Check className="w-4 h-4 text-green-500" />
							) : (
								<Copy className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
							)}
						</div>
					</button>
				</motion.div>

				<motion.div
					className="grid grid-cols-3 justify-items-center gap-6 mt-8 sm:mt-12 max-w-xs sm:max-w-none mx-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<motion.a
						href="https://github.com/abinesh2323"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center group w-full"
						whileHover={{ y: -2 }}
					>
						<div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
							<Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
						</div>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							<span className="text-base sm:text-lg font-semibold">20</span>
							<span className="text-xs sm:text-sm text-gray-400">GitHub Projects</span>
						</motion.div>
					</motion.a>

					<motion.a
						href="https://www.linkedin.com/in/abinesh-kalyanasundaram-369494322"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center group w-full"
						whileHover={{ y: -2 }}
					>
						<div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
							<Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
						</div>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							<span className="text-base sm:text-lg font-semibold">3000+</span>
							<span className="text-xs sm:text-sm text-gray-400">LinkedIn Followers</span>
						</motion.div>
					</motion.a>

					<motion.a
						href={`https://wa.me/${whatsappNumber}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center group w-full"
						whileHover={{ y: -2 }}
					>
						<div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
							<MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
						</div>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							<span className="text-base sm:text-lg font-semibold">24x7</span>
							<span className="text-xs sm:text-sm text-gray-400">WhatsApp Me</span>
						</motion.div>
					</motion.a>
				</motion.div>
			</div>
		</div>

		{/* Recruiter & Hiring Manager Fast-Track Banner */}
		<div className="max-w-4xl mx-auto px-4 mt-10 mb-6">
			<div className="relative rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-black/50 to-blue-950/30 p-6 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-emerald-500/5">
				<div className="flex items-start sm:items-center gap-4 text-left w-full sm:w-auto">
					<div className="mt-1.5 sm:mt-0 w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
					<div>
						<div className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-0.5">
							Recruiter Quick Dossier
						</div>
						<div className="text-white font-semibold text-base sm:text-lg">
							Immediate Joiner (0 Days Notice) • India, UAE &amp; Singapore
						</div>
						<p className="text-xs sm:text-sm text-gray-400 mt-0.5">
							Full Stack (Next.js/React/Node) • AWS Cloud • n8n Workflow Automation
						</p>
					</div>
				</div>
				<div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
					<Link
						href="/hire"
						className="w-full sm:w-auto text-center px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all hover:scale-105"
					>
						Recruiter Hub &rarr;
					</Link>
				</div>
			</div>
		</div>

		<AeoFaq />
	</div>
	);
};


export default Home;

