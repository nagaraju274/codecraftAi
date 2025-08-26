import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codecraft-ai.com';
  
  // For now, these are static. In a real app, you'd fetch these from a database.
  const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/help',
    '/privacy',
    '/terms',
    '/learn',
    '/projects',
    '/playground',
    '/ask-a-mentor',
    '/community',
    '/cheatsheets',
    '/glossary',
    '/study-plan',
    '/time-management',
    '/growth-mindset',
    '/treasure',
    '/dsa-learning-path',
    '/dsa-problems',
    '/dsa-mastery',
    '/login',
    '/signup',
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
