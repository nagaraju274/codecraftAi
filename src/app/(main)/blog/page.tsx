
import { AuthGuard } from "@/components/auth/auth-guard";
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { blogPosts, Post } from "@/lib/blog-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Calendar } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CodeCraft AI Blog - Tutorials, Tips, and News',
  description: 'Explore articles and tutorials on web development, AI integration, and coding best practices from the CodeCraft AI team.',
}

export default function BlogPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            CodeCraft AI Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tutorials, industry insights, and updates from the Mine-Yours team.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: Post) => (
                <Card key={post.slug} className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-2xl hover:text-primary transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </CardTitle>
                        <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center mt-auto">
                        <div className="text-sm text-muted-foreground space-y-1">
                            <p className="flex items-center gap-2"><User className="h-4 w-4" /> {post.author}</p>
                            <p className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</p>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                            <Link href={`/blog/${post.slug}`}>
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </AuthGuard>
  )
}
