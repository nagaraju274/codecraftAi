
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, MessageSquare, Eye, ThumbsUp, FileX2 } from "lucide-react";
import Link from "next/link";
import { AuthGuard } from "@/components/auth/auth-guard";

const forumPosts = [
  {
    id: 1,
    author: "Alice",
    avatar: "https://placehold.co/40x40.png",
    title: "How do I manage state in a large React application?",
    category: "React",
    tags: ["state-management", "hooks", "best-practices"],
    replies: 12,
    views: 128,
    likes: 45,
    time: "2 hours ago",
  },
  {
    id: 2,
    author: "Bob",
    avatar: "https://placehold.co/40x40.png",
    title: "Showcase: My new AI-powered portfolio website!",
    category: "Projects",
    tags: ["showcase", "genkit", "nextjs"],
    replies: 8,
    views: 98,
    likes: 32,
    time: "5 hours ago",
  },
    {
    id: 3,
    author: "Charlie",
    avatar: "https://placehold.co/40x40.png",
    title: "Best way to learn Python for data science?",
    category: "Python",
    tags: ["learning-path", "data-science", "beginners"],
    replies: 23,
    views: 256,
    likes: 78,
    time: "1 day ago",
  },
   {
    id: 4,
    author: "Diana",
    avatar: "https://placehold.co/40x40.png",
    title: "Problem with async/await in JavaScript playground",
    category: "Playground",
    tags: ["javascript", "async", "debugging"],
    replies: 5,
    views: 72,
    likes: 15,
    time: "2 days ago",
  },
];

const categories = [
    "All Posts",
    "General Discussion",
    "Projects",
    "React",
    "Python",
    "Playground"
];


export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredPosts = forumPosts
    .filter(post => {
      if (selectedCategory === "All Posts" || selectedCategory === "General Discussion") {
        return true;
      }
      return post.category === selectedCategory;
    })
    .filter(post => {
        const query = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(query) ||
            post.author.toLowerCase().includes(query) ||
            post.category.toLowerCase().includes(query) ||
            post.tags.some(tag => tag.toLowerCase().includes(query))
        )
    });

  return (
    <AuthGuard>
      <div className="container mx-auto py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Community Forum</h1>
          <p className="text-muted-foreground mt-2">Ask questions, share your projects, and connect with fellow developers.</p>
        </header>
        
        <div className="flex flex-col md:flex-row gap-8">
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <div className="relative flex-1 min-w-[250px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                      placeholder="Search discussions..." 
                      className="pl-10" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                  />
              </div>
              <Button>
                Start a Discussion
              </Button>
            </div>

            <div className="space-y-4">
              {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                  <Card key={post.id} className="hover:bg-muted/50 transition-colors">
                      <CardContent className="p-4 flex items-start gap-4">
                      <Avatar>
                          <AvatarImage src={post.avatar} alt={post.author} data-ai-hint="user avatar" />
                          <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                          <Link href="#" className="font-semibold text-lg hover:underline">{post.title}</Link>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <span>{post.author}</span>
                          <span>&middot;</span>
                          <span>{post.time}</span>
                          <span>&middot;</span>
                          <Badge variant="secondary">{post.category}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                              {post.tags.map(tag => <Badge key={tag} variant="outline">#{tag}</Badge>)}
                          </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                              <MessageSquare className="w-4 h-4"/>
                              <span>{post.replies}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                              <ThumbsUp className="w-4 h-4"/>
                              <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                              <Eye className="w-4 h-4"/>
                              <span>{post.views}</span>
                          </div>
                      </div>
                      </CardContent>
                  </Card>
                  ))
              ) : (
                  <Card className="text-center py-12">
                      <CardContent>
                          <FileX2 className="mx-auto h-12 w-12 text-muted-foreground" />
                          <h3 className="mt-4 text-lg font-semibold">No discussions found</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                              Try adjusting your search or filter to find what you're looking for.
                          </p>
                      </CardContent>
                  </Card>
              )}
            </div>
          </main>
          
          <aside className="w-full md:w-64 lg:w-72">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {categories.map(category => (
                      <li key={category}>
                          <Button 
                              variant={selectedCategory === category ? "secondary" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => setSelectedCategory(category)}
                          >
                              {category}
                          </Button>
                      </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>

      </div>
    </AuthGuard>
  );
}
