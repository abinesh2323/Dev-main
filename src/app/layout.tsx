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

// ─── All metadata lives HERE. Do not add <meta> tags manually in <head>. ───
export const metadata: Metadata = {
  metadataBase: new URL('https://abinesh-one.vercel.app'),

  // Keep title under 60 chars for SERP. Use template for sub-pages.
  title: {
    default: 'Abinesh Kalyanasundaram | Full Stack & AI Developer',
    template: '%s | Abinesh Kalyanasundaram',
  },

  // Keep description 120–155 chars. This is what Google shows in search results.
  description:
    'Full Stack Developer & AI Engineer based in Chennai. Building with React, Next.js, AWS, and n8n automation. Explore projects, skills, and certifications.',

  keywords: [
    'Abinesh Kalyanasundaram',
    'Abinesh K',
    'Full Stack Developer Chennai',
    'AI Engineer Chennai',
    'Automation Developer India',
    'React Developer Chennai',
    'Node.js Developer India',
    'AWS Developer Chennai',
    'Cloud Engineer India',
    'n8n Automation Developer',
    'Workflow Automation Engineer',
    'Next.js Developer',
    'MERN Stack Developer',
    'LLM Developer India',
    'Generative AI Developer',
    'DevOps Engineer India',
    'Software Developer Tamil Nadu',
  ],

  authors: [{ name: 'Abinesh Kalyanasundaram', url: 'https://abinesh-one.vercel.app' }],
  creator: 'Abinesh Kalyanasundaram',
  publisher: 'Abinesh Kalyanasundaram',
  category: 'technology',

  manifest: '/manifest.json',

  // Canonical: Next.js derives this from metadataBase + alternates.canonical
  alternates: {
    canonical: '/',
  },

  // Open Graph — used by LinkedIn, Facebook, WhatsApp
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://abinesh-one.vercel.app/',
    siteName: 'Abinesh Kalyanasundaram Portfolio',
    title: 'Abinesh Kalyanasundaram | Full Stack & AI Developer',
    description:
      'Full Stack Developer & AI Engineer based in Chennai. Building with React, Next.js, AWS, and n8n automation. Explore projects, skills, and certifications.',
    images: [
      {
        // Make sure this file exists in /public — must be exactly 1200×630px
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abinesh Kalyanasundaram - Full Stack & AI Developer Portfolio',
        type: 'image/png',
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: 'summary_large_image',
    title: 'Abinesh Kalyanasundaram | Full Stack & AI Developer',
    description:
      'Full Stack Developer & AI Engineer based in Chennai. Building with React, Next.js, AWS, and n8n automation.',
    creator: '@abinesh_dev',
    images: ['/og-image.png'],
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

  // Icons — centralised here, not repeated in <head>
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // replace nextjs.png with a proper 180×180 icon
  },

  // Google Search Console verification
  // Use the meta-tag method, not the HTML file method (more reliable)
  verification: {
    google: 'google2c34c2c389a58e19', // paste just the token, not the full path
  },
};

// ─── JSON-LD structured data (Person schema) ─────────────────────────────────
// This helps Google show a knowledge panel for your name in search results.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abinesh Kalyanasundaram',
  url: 'https://abinesh-one.vercel.app',
  jobTitle: 'Full Stack Developer & AI Engineer',
  description:
    'Full Stack Developer and AI Engineer based in Chennai, specializing in React, Next.js, AWS, and workflow automation with n8n.',
  image: 'https://abinesh-one.vercel.app/og-image.png',
  sameAs: [
    // Add your actual profile URLs below
    'https://github.com/yourusername',
    'https://linkedin.com/in/yourusername',
    'https://twitter.com/abinesh_dev',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'AWS',
    'n8n',
    'AI Workflow Automation',
    'DevOps',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* JSON-LD structured data — the only thing that belongs in <head> here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* CSP — kept here since Next.js metadata API doesn't support it */}
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
