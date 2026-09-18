import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

// ─── Centralized SEO & Geo-Targeted Metadata (India, UAE, Singapore) ──────────
export const metadata: Metadata = {
  metadataBase: new URL('https://abinesh-one.vercel.app'),

  title: {
    default: 'Abinesh Kalyanasundaram | Full Stack & AI Engineer (India, UAE, Singapore)',
    template: '%s | Abinesh Kalyanasundaram',
  },

  description:
    'Full Stack Developer & AI Automation Engineer available across India, UAE, and Singapore. Specializing in Next.js, React, Node.js, AWS Cloud, Generative AI, and n8n workflows.',

  keywords: [
    // Identity
    'Abinesh Kalyanasundaram',
    'Abinesh K',
    // India Targeting
    'Full Stack Developer India',
    'AI Engineer India',
    'React Developer Chennai',
    'Next.js Developer India',
    'Cloud Engineer Bangalore',
    'Node.js Developer India',
    'AWS Developer Chennai',
    'Software Developer Tamil Nadu',
    // UAE / Middle East Targeting
    'Full Stack Developer Dubai',
    'AI Engineer UAE',
    'Software Engineer Abu Dhabi',
    'Freelance Web Developer UAE',
    'React Developer Dubai',
    'Automation Engineer Middle East',
    'Cloud Architect UAE',
    // Singapore / APAC Targeting
    'Full Stack Developer Singapore',
    'AI Automation Engineer Singapore',
    'Next.js React Developer SG',
    'Software Engineer APAC',
    'Remote AI Engineer Singapore',
    'Cloud Consultant Singapore',
    // Technical Specialties & AEO
    'n8n Automation Developer',
    'Workflow Automation Engineer',
    'Generative AI Developer',
    'LLM Application Engineer',
    'DevOps CI/CD AWS Engineer',
    'MERN Stack Specialist',
  ],

  authors: [{ name: 'Abinesh Kalyanasundaram', url: 'https://abinesh-one.vercel.app' }],
  creator: 'Abinesh Kalyanasundaram',
  publisher: 'Abinesh Kalyanasundaram',
  category: 'technology',

  manifest: '/manifest.json',

  // Canonical & Hreflang Multi-Region Alternates
  alternates: {
    canonical: 'https://abinesh-one.vercel.app',
    languages: {
      'en-IN': 'https://abinesh-one.vercel.app',
      'en-AE': 'https://abinesh-one.vercel.app',
      'en-SG': 'https://abinesh-one.vercel.app',
      'en': 'https://abinesh-one.vercel.app',
      'x-default': 'https://abinesh-one.vercel.app',
    },
  },

  // Open Graph — International & Social Sharing
  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    alternateLocale: ['en_AE', 'en_SG', 'en_US'],
    url: 'https://abinesh-one.vercel.app/',
    siteName: 'Abinesh Kalyanasundaram Portfolio',
    title: 'Abinesh Kalyanasundaram | Full Stack & AI Developer (India • UAE • Singapore)',
    description:
      'Full Stack Developer & AI Automation Engineer building modern web applications, scalable AWS cloud systems, and intelligent n8n workflows for teams in India, UAE, and Singapore.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abinesh Kalyanasundaram - Full Stack & AI Developer Portfolio (India, UAE, Singapore)',
        type: 'image/png',
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: 'summary_large_image',
    title: 'Abinesh Kalyanasundaram | Full Stack & AI Developer (India • UAE • Singapore)',
    description:
      'Full Stack Developer & AI Engineer available for projects and roles across India, UAE, and Singapore. Expertise in React, Next.js, AWS, and n8n.',
    creator: '@abinesh_dev',
    images: ['/og-image.png'],
  },

  // Robots & Bot indexing directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/nextjs.png',
    shortcut: '/nextjs.png',
    apple: '/nextjs.png',
  },

  verification: {
    google: 'evH87UOfBUGfNHClB05Pv-nV4sV-quxlH29oXq8gPMs',
  },
};

// ─── JSON-LD Structured Knowledge Graph (AEO & Schema.org) ───────────────────
// Built for Google Knowledge Graph, SearchGPT, Perplexity, and Gemini citations.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://abinesh-one.vercel.app/#person',
      name: 'Abinesh Kalyanasundaram',
      alternateName: ['Abinesh K', 'Abinesh'],
      url: 'https://abinesh-one.vercel.app',
      image: 'https://abinesh-one.vercel.app/profile/profile.png',
      jobTitle: 'Full Stack Developer & AI Automation Engineer',
      hasOccupation: { '@id': 'https://abinesh-one.vercel.app/#occupation' },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Sri Sairam Engineering College',
      },
      description:
        'Full Stack Developer and AI Automation Engineer serving engineering teams and clients across India, UAE, and Singapore. Specializing in Next.js, React, Node.js, AWS cloud architecture, and n8n intelligent workflows.',
      email: 'mailto:abineshkalyan2002@gmail.com',
      telephone: '+919159447439',
      sameAs: [
        'https://github.com/abinesh2323',
        'https://linkedin.com/in/abinesh-kalyanasundaram-369494322',
        'https://twitter.com/abinesh_dev',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Singapore' },
        { '@type': 'AdministrativeArea', name: 'Dubai' },
        { '@type': 'AdministrativeArea', name: 'Abu Dhabi' },
        { '@type': 'AdministrativeArea', name: 'Chennai' },
        { '@type': 'AdministrativeArea', name: 'Bangalore' },
      ],
      knowsAbout: [
        'Full Stack Web Development',
        'Next.js',
        'React.js',
        'TypeScript',
        'Node.js',
        'Amazon Web Services (AWS)',
        'n8n Workflow Automation',
        'Artificial Intelligence',
        'Generative AI',
        'Large Language Models (LLMs)',
        'DevOps & CI/CD',
        'Docker',
        'Tailwind CSS',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Engineering & Consulting Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full-Stack Web Application Development',
              description:
                'End-to-end production web applications using Next.js, React, TypeScript, and modern APIs for startups and businesses in India, UAE, and Singapore.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI & Workflow Automation Engineering',
              description:
                'Autonomous business process workflows, customer agents, and LLM integrations using n8n, OpenAI, and custom API pipelines.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Architecture & DevOps Deployment',
              description:
                'Secure AWS infrastructure, Docker containerization, and automated CI/CD pipelines designed for high availability and zero downtime.',
            },
          },
        ],
      },
    },
    {
      '@type': 'Occupation',
      '@id': 'https://abinesh-one.vercel.app/#occupation',
      name: 'Full Stack Developer & AI Automation Engineer',
      occupationalCategory: '15-1252.00',
      description:
        'Software engineer specializing in Next.js, React, Node.js, AWS cloud architecture, and n8n AI workflow automation.',
      skills:
        'Next.js, React, TypeScript, Node.js, AWS, n8n, Generative AI, Docker, DevOps, CI/CD',
      qualifications: 'Bachelor of Technology in Information Technology (CGPA 8.1)',
      responsibilities: [
        'Developing production-ready full-stack applications with Next.js and TypeScript',
        'Designing autonomous workflow automations and AI agent pipelines with n8n and LLM APIs',
        'Architecting and deploying cloud infrastructure on Amazon Web Services (AWS)',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://abinesh-one.vercel.app/#website',
      url: 'https://abinesh-one.vercel.app',
      name: 'Abinesh Kalyanasundaram Portfolio',
      description:
        'Official portfolio of Abinesh Kalyanasundaram, Full Stack Developer and AI Automation Engineer serving India, UAE, and Singapore.',
      publisher: {
        '@id': 'https://abinesh-one.vercel.app/#person',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://abinesh-one.vercel.app/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is Abinesh Kalyanasundaram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Abinesh Kalyanasundaram is a Full Stack Developer and AI Automation Engineer specializing in Next.js, React, Node.js, AWS Cloud, and n8n intelligent workflows. He builds scalable digital products and automations for clients across India, the UAE, and Singapore.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Abinesh available for immediate joining?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Abinesh is an Immediate Joiner with 0 days notice period. He is available for full-time employment, contract (C2C/W2), or freelance roles for companies in India, UAE (Dubai/Abu Dhabi), and Singapore.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Abinesh available for contract or full-time roles in UAE, Singapore, and India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Abinesh actively collaborates with companies, startups, and clients across India, the United Arab Emirates (Dubai/Abu Dhabi), and Singapore, working comfortably across IST (UTC+5:30), GST (UTC+4), and SGT (UTC+8) timezones on remote, contract, or full-time arrangements.',
          },
        },
        {
          '@type': 'Question',
          name: 'What core technologies and services does Abinesh provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Abinesh specializes in Full Stack Web Development (Next.js, React, TypeScript, Node.js), AI & Workflow Automation (n8n, LangChain, LLM APIs), Cloud & DevOps (AWS EC2/S3/CloudFront, Docker, CI/CD pipelines), and secure REST/GraphQL API development.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can companies in Dubai (UAE), Singapore, or India contact Abinesh?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can reach Abinesh directly via email at abineshkalyan2002@gmail.com, through WhatsApp at +919159447439, or connect on LinkedIn at linkedin.com/in/abinesh-kalyanasundaram-369494322.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Knowledge Graph JSON-LD Structured Data for Google & AI Answer Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' data: blob: https:;
          script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:;
          style-src 'self' 'unsafe-inline' https:;
          img-src 'self' data: blob: https: http:;
          font-src 'self' data: https:;
          connect-src 'self' data: blob: https:;
          worker-src 'self' blob: data:;"
        />
      </head>

      <body>
        <div className="min-h-screen flex flex-col">
          <Background3D />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <SpeedInsights />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
