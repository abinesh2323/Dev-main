import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Abinesh Kalyanasundaram | Full Stack Developer Chennai | React • AWS • AI',
    description: 'Abinesh Kalyanasundaram - Full Stack Developer & Cloud Engineer based in Chennai, India. Expert in React, Node.js, Python, AWS, Docker, AI Integration. Available for hire in Chennai, Bengaluru, Pan-India & Remote. Built AI platforms handling 1000+ daily requests.',
    keywords: [
        // Name variations
        'Abinesh Kalyanasundaram',
        'Abinesh K',
        'Abinesh Chennai',
        // Role + Location (HIGH PRIORITY)
        'Full Stack Developer Chennai',
        'Full Stack Developer Bengaluru',
        'Full Stack Developer India',
        'React Developer Chennai',
        'Node.js Developer India',
        'Software Developer Tamil Nadu',
        'Web Developer Chennai',
        // Cloud & DevOps + Location
        'AWS Developer Chennai',
        'Cloud Engineer India',
        'DevOps Engineer Bengaluru',
        'Docker Developer India',
        // Tech Stack
        'React Developer',
        'Node.js Developer',
        'Python Developer',
        'TypeScript Developer',
        'Next.js Developer',
        'MERN Stack Developer',
        'MongoDB Developer',
        // Specializations
        'AI Integration Developer',
        'LLM Developer India',
        'Blockchain Developer',
        // General
        'Software Developer',
        'Full Stack Developer',
        'Backend Developer',
        'Frontend Developer',
        'JavaScript Expert',
        'SQL Developer',
    ].join(', '),
    authors: [{ name: 'Abinesh Kalyanasundaram', url: 'https://abinesh-one.vercel.app' }],
    creator: 'Abinesh Kalyanasundaram',
    publisher: 'Abinesh Kalyanasundaram',
    manifest: '/manifest.json',
    themeColor: '#000000',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    
    // Open Graph (Facebook, LinkedIn, etc.)
    openGraph: {
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['en_IN', 'en_GB'],
        url: 'https://abinesh-one.vercel.app/',
        title: 'Abinesh Kalyanasundaram | Full Stack Developer Chennai | React • AWS • AI',
        description: 'Full Stack Developer & Cloud Engineer based in Chennai, India. Expert in React, Node.js, AWS, Docker, AI Integration. Built AI platforms with 1000+ daily requests. Available for remote & relocation.',
        siteName: 'Abinesh Kalyanasundaram Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Abinesh Kalyanasundaram - Full Stack Developer Chennai',
                type: 'image/png',
            },
        ],
    },
    
    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Abinesh Kalyanasundaram | Full Stack Developer Chennai',
        description: 'Full Stack Developer & Cloud Engineer based in Chennai, India. React, Node.js, AWS, AI Integration. Available for hire.',
        creator: '@abinesh_dev',
        images: ['/og-image.png'],
    },
    
    // Robots
    robots: {
        index: true,
        follow: true,
        nocache: false, // Changed - let search engines cache for speed
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    
    metadataBase: new URL('https://abinesh-one.vercel.app'),
    
    alternates: {
        canonical: '/',
    },
    
    verification: {
        google: '/googlea4a36904e14398c1.html',
    },
    
    // NEW: Category for search engines
    category: 'technology',
    
    // NEW: Application info

	

};