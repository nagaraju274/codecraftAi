
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import { User, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
        <article className="prose dark:prose-invert max-w-4xl mx-auto">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {post.title}
                </h1>
                <div className="flex items-center gap-6 mt-4 text-muted-foreground">
                    <div className="flex items-center gap-2"><User className="h-4 w-4" /> {post.author}</div>
                    <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</div>
                </div>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
    </div>
  )
}
