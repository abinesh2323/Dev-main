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

export const metadata: Metadata = {
  title:
    'Abinesh Kalyanasundaram | Full Stack Developer & Cloud Engineer Portfolio',
  description:
    'Portfolio of Abinesh Kalyanasundaram, a Full Stack Developer and Cloud Engineer specializing in React, AWS, and AI. Explore my projects, skills, and certifications.',

  keywords: [
    // Name variations
    'Abinesh Kalyanasundaram',
    'Abinesh K',
    'Abinesh Chennai',

    // Role + Location
    'Full Stack Developer Chennai',
    'Best Full Stack Developer Chennai',
    'Full Stack Developer Bengaluru',
    'Full Stack Developer India',
    'Automation Developer Chennai',
    'React Developer Chennai',
    'Node.js Developer India',
    'Software Developer Tamil Nadu',
    'Web Developer Chennai',

    // Cloud & DevOps
    'AWS Developer Chennai',
    'Cloud Engineer India',
    'DevOps Engineer Bengaluru',
    'Docker Developer India',

    //Automation
    'n8n Automation Developer',
    'Workflow Automation Engineer',
    'Automation Specialist Chennai',
    
    // Tech stack
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
  ],

  authors: [
    {
      name: 'Abinesh Kalyanasundaram',
      url: 'https://abinesh-one.vercel.app',
    },
  ],
  creator: 'Abinesh Kalyanasundaram',
  publisher: 'Abinesh Kalyanasundaram',

  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',

  // Open Graph (LinkedIn, Facebook, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_IN', 'en_GB'],
    url: 'https://abinesh-one.vercel.app/',
    title:
      'Abinesh Kalyanasundaram | Full Stack Developer & Cloud Engineer Portfolio',
    description:
      'Portfolio of Abinesh Kalyanasundaram, a Full Stack Developer and Cloud Engineer specializing in React, AWS, and AI. Explore my projects, skills, and certifications.',
    siteName: 'Abinesh Kalyanasundaram Portfolio',
    images: [
      {
        url: 'https://abinesh-one.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abinesh Kalyanasundaram - Full Stack Developer Portfolio',
        type: 'image/png',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Abinesh Kalyanasundaram | Full Stack Developer & Cloud Engineer Portfolio',
    description:
      'Portfolio of Abinesh Kalyanasundaram, a Full Stack Developer and Cloud Engineer specializing in React, AWS, and AI. Explore my projects, skills, and certifications.',
    creator: '@abinesh_dev',
    images: ['https://abinesh-one.vercel.app/og-image.png'],
  },

  // Robots
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

  metadataBase: new URL('https://abinesh-one.vercel.app'),

  alternates: {
    canonical: 'https://abinesh-one.vercel.app/',
  },

  // Google Search Console (HTML file method)
  verification: {
    google: '/google2c34c2c389a58e19.html',
  },

  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Icons */}
        <link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/nextjs.png" />

        {/* Security */}
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
