import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://abinesh-one.vercel.app', lastModified: new Date() },
    { url: 'https://abinesh-one.vercel.app/about', lastModified: new Date() },
    { url: 'https://abinesh-one.vercel.app/projects', lastModified: new Date() },
    { url: 'https://abinesh-one.vercel.app/skills', lastModified: new Date() },
    { url: 'https://abinesh-one.vercel.app/contact', lastModified: new Date() },
    { url: 'https://abinesh-one.vercel.app/experience', lastModified: new Date() },
    { url: 'https://abinesh-one.vercel.app/certificates', lastModified: new Date() },
    { url: 'https://abinesh-one.vercel.app/education', lastModified: new Date() },
  ]
}