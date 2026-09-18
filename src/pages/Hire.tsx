'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
	Check,
	Copy,
	FileDown,
	Mail,
	MessageCircle,
	Sparkles,
	Clock,
	MapPin,
	GraduationCap,
	Briefcase,
	Code2,
	Cpu,
	Cloud,
	Workflow,
	Zap,
} from 'lucide-react';

export default function Hire() {
	const [copied, setCopied] = useState(false);
	const email = 'abineshkalyan2002@gmail.com';
	const phone = '+919159447439';

	const recruiterBlurb = `Candidate: Abinesh Kalyanasundaram
Role: Full Stack Developer & AI Automation Engineer
Notice Period: Immediate (0 Days / Immediate Joiner)
Target Regions: India (Remote/On-site), UAE (Dubai/Abu Dhabi), Singapore (APAC Remote)
Key Stack: Next.js, React, TypeScript, Node.js, AWS Cloud, n8n Automation, Docker
Education: B.Tech in Information Technology (8.1 CGPA)
Portfolio: https://abinesh-one.vercel.app/hire
Resume: https://abinesh-one.vercel.app/files/cv_pdf/Abinesh_K_Resume.pdf
Contact: abineshkalyan2002@gmail.com | WhatsApp: +919159447439`;

	const copySummary = async () => {
		try {
			await navigator.clipboard.writeText(recruiterBlurb);
			setCopied(true);
			setTimeout(() => setCopied(false), 2500);
		} catch (err) {
			console.error('Failed to copy blurb:', err);
		}
	};

	const quickFacts = [
		{
			icon: <Clock className="w-5 h-5 text-emerald-400" />,
			label: 'Notice Period',
			value: 'Immediate (0 Days Notice)',
			highlight: true,
		},
		{
			icon: <MapPin className="w-5 h-5 text-blue-400" />,
			label: 'Target Regions',
			value: 'India • UAE (Dubai) • Singapore',
		},
		{
			icon: <Briefcase className="w-5 h-5 text-purple-400" />,
			label: 'Work Models',
			value: 'Full-Time • Contract • C2C • Remote',
		},
		{
			icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
			label: 'Education',
			value: 'B.Tech IT (8.1 CGPA) - Sri Sairam',
		},
	];

	const skillCategories = [
		{
			category: 'Frontend Engineering',
			icon: <Code2 className="w-5 h-5 text-blue-400" />,
			skills: ['Next.js 14/15 (App Router)', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'State Management'],
		},
		{
			category: 'Backend & APIs',
			icon: <Cpu className="w-5 h-5 text-purple-400" />,
			skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Authentication (NextAuth/JWT)', 'MongoDB & SQL'],
		},
		{
			category: 'AI & Automation',
			icon: <Workflow className="w-5 h-5 text-emerald-400" />,
			skills: ['n8n Workflow Automation', 'OpenAI / LLM Integration', 'Custom AI Agents', 'Webhook Pipelines', 'RAG Systems'],
		},
		{
			category: 'Cloud & DevOps',
			icon: <Cloud className="w-5 h-5 text-sky-400" />,
			skills: ['AWS (EC2, S3, CloudFront)', 'Docker & Containers', 'CI/CD (GitHub Actions)', 'Vercel Deployment', 'Linux / Bash'],
		},
	];

	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
			{/* Top Recruiter Alert Badge */}
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				className="text-center mb-6"
			>
				<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg shadow-emerald-500/5">
					<span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
					<span>Actively Interviewing • Immediate Joiner (0 Days Notice)</span>
				</div>
			</motion.div>

			{/* Main Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="text-center max-w-3xl mx-auto mb-12"
			>
				<h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
					Hire Abinesh Kalyanasundaram
				</h1>
				<p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
					Full Stack Developer & AI Automation Engineer ready to deliver high-performance web products, scalable AWS cloud infrastructure, and autonomous n8n workflows for teams in <span className="text-white font-semibold">India</span>, the <span className="text-white font-semibold">UAE</span>, and <span className="text-white font-semibold">Singapore</span>.
				</p>
			</motion.div>

			{/* Action CTA Row */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="flex flex-wrap items-center justify-center gap-4 mb-16"
			>
				<a
					href="/files/cv_pdf/Abinesh_K_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="px-6 py-3.5 bg-white text-black hover:bg-gray-100 rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg hover:scale-105 transition-transform duration-200"
				>
					<FileDown className="w-5 h-5" />
					Download Resume (PDF)
				</a>

				<a
					href={`https://wa.me/${phone}?text=Hi%20Abinesh,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20role.`}
					target="_blank"
					rel="noopener noreferrer"
					className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-emerald-600/20 hover:scale-105 transition-transform duration-200"
				>
					<MessageCircle className="w-5 h-5" />
					Instant WhatsApp Chat
				</a>

				<a
					href={`mailto:${email}?subject=Hiring%20Inquiry%20-%20Abinesh%20Kalyanasundaram`}
					className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 border border-white/10 hover:scale-105 transition-transform duration-200"
				>
					<Mail className="w-5 h-5" />
					Email Directly
				</a>
			</motion.div>

			{/* 1-Click Copy for Recruiters (Highlight Feature) */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="relative rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-black/40 to-blue-900/20 p-6 sm:p-8 mb-16 backdrop-blur-xl shadow-2xl overflow-hidden"
			>
				<div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
					<Sparkles className="w-32 h-32 text-purple-400" />
				</div>

				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
					<div>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-2">
							<Zap className="w-3.5 h-3.5" />
							<span>For Recruiters & Hiring Managers</span>
						</div>
						<h2 className="text-xl sm:text-2xl font-bold text-white">
							1-Click Candidate Dossier (Forward to Team Lead)
						</h2>
						<p className="text-sm text-gray-300 mt-1">
							Quickly copy a formatted summary to share on Slack, Microsoft Teams, or Email.
						</p>
					</div>

					<button
						onClick={copySummary}
						className="px-5 py-2.5 bg-white text-black hover:bg-gray-100 rounded-xl font-medium text-sm flex items-center gap-2 transition-all shadow-md active:scale-95 shrink-0"
					>
						{copied ? (
							<>
								<Check className="w-4 h-4 text-emerald-600" />
								<span className="font-semibold text-emerald-700">Copied to Clipboard!</span>
							</>
						) : (
							<>
								<Copy className="w-4 h-4" />
								<span>Copy Recruiter Summary</span>
							</>
						)}
					</button>
				</div>

				<div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs sm:text-sm text-gray-300 whitespace-pre-wrap leading-relaxed select-all">
					{recruiterBlurb}
				</div>
			</motion.div>

			{/* Quick Facts Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
				{quickFacts.map((fact, idx) => (
					<motion.div
						key={fact.label}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 * idx }}
						className={`p-6 rounded-2xl border backdrop-blur-md ${
							fact.highlight
								? 'bg-emerald-500/10 border-emerald-500/30'
								: 'bg-white/[0.03] border-white/10'
						}`}
					>
						<div className="p-2.5 rounded-xl bg-white/5 w-fit mb-4">
							{fact.icon}
						</div>
						<div className="text-xs uppercase tracking-wider text-gray-400 mb-1">
							{fact.label}
						</div>
						<div className="text-base sm:text-lg font-semibold text-white">
							{fact.value}
						</div>
					</motion.div>
				))}
			</div>

			{/* Technical Skill Matrix */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
				className="mb-16"
			>
				<div className="text-center mb-10">
					<h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
						Skills & Technical Capabilities
					</h2>
					<p className="text-sm sm:text-base text-gray-400">
						Full stack expertise spanning modern client experiences, cloud backends, and AI automation.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{skillCategories.map(cat => (
						<div
							key={cat.category}
							className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
						>
							<div className="flex items-center gap-3 mb-4">
								<div className="p-2 rounded-xl bg-white/5 border border-white/10">
									{cat.icon}
								</div>
								<h3 className="text-lg font-semibold text-white">
									{cat.category}
								</h3>
							</div>

							<div className="flex flex-wrap gap-2">
								{cat.skills.map(s => (
									<span
										key={s}
										className="px-3 py-1.5 rounded-lg bg-white/5 text-xs sm:text-sm text-gray-300 border border-white/10 font-medium"
									>
										{s}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</motion.div>

			{/* Bottom Direct Recruiter Pitch */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
				className="text-center p-8 sm:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
			>
				<h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
					Ready for Interview Rounds & Technical Screenings
				</h2>
				<p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
					I am flexible across time zones (IST, GST, SGT) and eager to contribute to mission-driven engineering teams. Feel free to book a direct conversation or request code samples.
				</p>
				<div className="flex flex-wrap items-center justify-center gap-4">
					<a
						href={`mailto:${email}?subject=Interview%20Invitation%20-%20Abinesh%20Kalyanasundaram`}
						className="px-8 py-3.5 bg-white text-black hover:bg-gray-100 rounded-full font-semibold text-sm sm:text-base transition-colors"
					>
						Schedule an Interview
					</a>
					<a
						href={`https://wa.me/${phone}`}
						target="_blank"
						rel="noopener noreferrer"
						className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-sm sm:text-base border border-white/10 transition-colors"
					>
						WhatsApp: +91 91594 47439
					</a>
				</div>
			</motion.div>
		</div>
	);
}
