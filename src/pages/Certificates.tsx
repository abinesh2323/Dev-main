'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const certificates = [
	{
		title: "AWS - Training ",
		issuer: "Besant Technologies",
		date: "15th Nov 2025",
		link: "./files/certificates_pdf/aws.pdf",
		description: "Completed hands-on AWS training covering core cloud concepts, compute, storage, networking, and security. Gained practical experience deploying and managing applications using EC2, S3, IAM, VPC, and CloudWatch, with a focus on real-world cloud architecture and best practices.",
		skills: ["LAMBDA","Amblify", "S3", "EC2", "VPC"]
	},
	{
		title: "DevOps - Training",
		issuer: "KodeKloud",
		date: "20th March 2025",
		link: "./files/certificates_pdf/devops.pdf",
		description: "Covers deploying and managing containers on AWS using ECS, including cluster management, load balancing, auto-scaling, and CI/CD integration.",
		skills: ["Cloud Computing", "DevOps", "CI/CD","Git-version","Docker"]
	},
	{
		title: "Web Development tool",
		issuer: "Udemy",
		date: "3rd July 2021",
		link: "./files/certificates_pdf/critical_infrastructure_protection.pdf",
		description: "Covers building complete websites using no-code tools, focusing on layout design, content management, and website deployment without traditional programming.",
		skills: ["No-Code Development", "Website Design", "UI/UX Basics", "Web Deployment"]

	},
	{
		title: "Artificial Intelligence in Video : Creation Supreme Edition",
		issuer: "Udemy",
		date: "21st September 2022",
		link: "./files/certificates_pdf/4.pdf",
		description: "Covers using artificial intelligence tools for video creation, including script generation, visuals, voiceovers, and automated editing workflows.",
		skills: ["Artificial Intelligence", "Video Creation", "Generative AI", "Automation", "Content Production"]

	},
	{
		title: "AWS Services for Solutions Architect Associate",
		issuer: "Udemy",
		date: "12th April 2025",
		link: "./files/certificates_pdf/5.pdf",
		description: "Covers core AWS services and architectural principles required for the Solutions Architect Associate role, including designing secure, scalable, and highly available cloud solutions.",
		skills: ["AWS", "Cloud Architecture", "EC2", "S3", "VPC", "IAM", "High Availability"]

	},
	{
		title: "CSS And Javascript Crash Course",
		issuer: "Udemy",
		date: "22nd Aug 2023",
		link: "./files/certificates_pdf/6.pdf",
		description: "Covers core CSS and JavaScript concepts for building responsive, interactive web interfaces, including styling, layouts, DOM manipulation, and basic interactivity.",
		skills: ["CSS", "JavaScript", "Responsive Design", "DOM Manipulation", "Frontend Development"]

	},
	{
		title: "Cyber Security online (Beginner)",
		issuer: "Udemy",
		date: "28th June 2021",
		link: "./files/certificates_pdf/7.pdf",
		description: "Covers fundamental cyber security concepts, including basic threats, vulnerabilities, online safety practices, and security awareness.",
		skills: ["Cyber Security", "Information Security", "Threat Awareness", "Online Safety"]

	},
	{
		title: "Python-Introduction to Data Science and Machine learning" ,
		issuer: "Udemy",
		date: "08th July 2021",
		link: "./files/certificates_pdf/8.pdf",
		description: "Covers Python fundamentals for data science and machine learning, including data analysis, basic algorithms, and hands-on implementation concepts.",
		skills: ["Python", "Data Science", "Machine Learning Basics", "Data Analysis"]

	},
	{
		title: "Front End Web Developer - JavaScript" ,
		issuer: "Udemy",
		date: "21st Sept 2022",
		link: "./files/certificates_pdf/9.pdf",
		description: "Covers Python fundamentals for data science and machine learning, including data analysis, basic algorithms, and hands-on implementation concepts.",
		skills: ["Python", "Data Science", "Machine Learning Basics", "Data Analysis"]
	},
	{
		title: "Complete JAVASCRIPT with HTML5,CSS3" ,
		issuer: "Udemy",
		date: "12th April 2024",
		link: "./files/certificates_pdf/10.pdf",
		description: "Covers complete JavaScript development with HTML5 and CSS3, from core fundamentals to advanced concepts for building modern, responsive web applications.",
		skills: ["JavaScript", "HTML5", "CSS3", "Web Development", "Responsive Design"]


	}
];

const Certificates = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Award className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Certificates</h2>
				</motion.div>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-6">
				{certificates.map((cert, index) => (
					<ScrollAnimation key={cert.title}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5"
						>
							<h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
							<div className="text-gray-400 space-y-2">
								<div className="flex items-center justify-between">
									<span className="text-lg">{cert.issuer}</span>
									<div className="flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										<span>{cert.date}</span>
									</div>
								</div>
								<p className="text-gray-300 line-clamp-2">{cert.description}</p>
								<div className="flex flex-wrap gap-2 mt-4">
									{cert.skills.map((skill) => (
										<span
											key={skill}
											className="px-2 py-1 text-sm bg-white/10 rounded-full"
										>
											{skill}
										</span>
									))}
								</div>
								<motion.a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 group-hover:translate-x-2 transition-transform"
									whileHover={{ scale: 1.05 }}
								>
									View Certificate
									<ExternalLink className="w-4 h-4" />
								</motion.a>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Certificates;