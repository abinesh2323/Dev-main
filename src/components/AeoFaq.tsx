'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Sparkles, Clock, Briefcase } from 'lucide-react';

interface FaqItem {
	question: string;
	answer: string;
	icon: React.ReactNode;
	tag: string;
}

const faqs: FaqItem[] = [
	{
		question: 'What services do you provide for businesses in UAE, Singapore, and India?',
		answer:
			'I provide end-to-end Full Stack Web Development (Next.js, React, TypeScript), AI & Workflow Automation (custom n8n pipelines, LLM agent integration), and AWS Cloud DevOps (architecture, Docker containerization, CI/CD). I help startups and businesses scale resilient, high-speed digital products.',
		icon: <Sparkles className="w-5 h-5 text-purple-400" />,
		tag: 'Services',
	},
	{
		question: 'How do you coordinate with clients across different time zones?',
		answer:
			'I maintain flexible working hours aligned with IST (India Standard Time UTC+5:30), GST (Gulf Standard Time UTC+4 for Dubai/Abu Dhabi, 1.5h diff), and SGT (Singapore Standard Time UTC+8, 2.5h diff). I leverage async documentation, real-time Slack/WhatsApp communication, and scheduled sprint syncs.',
		icon: <Clock className="w-5 h-5 text-blue-400" />,
		tag: 'Timezones',
	},
	{
		question: 'What are your core technical strengths?',
		answer:
			'My core strengths span modern web architectures with Next.js App Router, real-time web applications, robust cloud deployments on AWS (EC2, S3, CloudFront), and autonomous workflow automation with n8n and OpenAI APIs for eliminating manual operational tasks.',
		icon: <Globe className="w-5 h-5 text-emerald-400" />,
		tag: 'Tech Stack',
	},
	{
		question: 'Are you available for contract, remote, or full-time engagements?',
		answer:
			'Yes. I am open to full-time engineering roles, contract-based development, and freelance consultations for forward-thinking engineering teams and founders across India, the UAE, Singapore, and worldwide.',
		icon: <Briefcase className="w-5 h-5 text-amber-400" />,
		tag: 'Availability',
	},
];

export default function AeoFaq() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			aria-labelledby="faq-heading"
			className="w-full max-w-4xl mx-auto px-4 py-16 sm:py-24"
		>
			<div className="text-center mb-12">
				<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 mb-4 backdrop-blur-md">
					<Globe className="w-3.5 h-3.5 text-blue-400" />
					<span>Cross-Border Engineering & AI Solutions</span>
				</div>
				<h2
					id="faq-heading"
					className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3"
				>
					Frequently Asked Questions
				</h2>
				<p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
					Essential information for recruiters, founders, and teams in India, the UAE, and Singapore.
				</p>
			</div>

			<div className="space-y-4">
				{faqs.map((faq, index) => {
					const isOpen = openIndex === index;
					return (
						<div
							key={faq.question}
							className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-colors hover:border-white/20"
						>
							<button
								onClick={() => toggleFaq(index)}
								aria-expanded={isOpen}
								className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
							>
								<div className="flex items-center gap-3">
									<div className="p-2 rounded-xl bg-white/5 border border-white/10 hidden sm:flex items-center justify-center">
										{faq.icon}
									</div>
									<span className="font-medium text-white text-base sm:text-lg">
										{faq.question}
									</span>
								</div>
								<div className="flex items-center gap-3 shrink-0">
									<span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 hidden md:inline-block">
										{faq.tag}
									</span>
									<ChevronDown
										className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
											isOpen ? 'rotate-180 text-white' : ''
										}`}
									/>
								</div>
							</button>

							<AnimatePresence initial={false}>
								{isOpen && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: 'easeInOut' }}
									>
										<div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-300 border-t border-white/5 leading-relaxed">
											{faq.answer}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					);
				})}
			</div>
		</section>
	);
}
