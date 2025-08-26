
"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ScrollArea } from '@/components/ui/scroll-area';
import { AuthGuard } from '@/components/auth/auth-guard';
import { askMentor } from '@/ai/flows';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ask an AI Mentor',
  description: 'Get expert guidance on coding problems, career advice, and technical concepts from your personal AI mentor. Ask questions and get unstuck.',
}

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

export default function AskMentorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
        sender: 'ai',
        text: "Hello! I'm your AI Mentor. How can I help you with your coding journey today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);


  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (input.trim() === '' || loading) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      const result = await askMentor({ message: currentInput });
      const aiMessage: Message = { text: result.response, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error calling mentor flow:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "I'm having trouble connecting right now. Please try again in a moment.",
      });
      // Optionally remove the user's message or add an error message to the chat
      // For now, we'll just let the user re-submit
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthGuard>
      <div className="flex justify-center items-start pt-10 h-full">
        <Card className="w-full max-w-3xl h-[calc(100vh-10rem)] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Bot />
                Ask a Mentor
            </CardTitle>
            <CardDescription>Your personal AI guide for coding questions and advice.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden p-4">
             <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
                <div className="space-y-6">
                {messages.map((msg, index) => (
                    <div key={index} className={cn('flex items-start gap-3', { 'justify-end': msg.sender === 'user' })}>
                        {msg.sender === 'ai' && (
                            <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                                <Bot className="h-5 w-5"/>
                            </div>
                        )}
                         <div className={cn('rounded-lg px-4 py-3 max-w-lg prose prose-sm dark:prose-invert break-words', { 
                            'bg-primary text-primary-foreground': msg.sender === 'user',
                            'bg-muted': msg.sender === 'ai' 
                         })}>
                           <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                        {msg.sender === 'user' && (
                            <div className="bg-muted text-muted-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                                <User className="h-5 w-5"/>
                            </div>
                        )}
                    </div>
                ))}
                {loading && (
                     <div className='flex items-start gap-3'>
                         <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                            <Bot className="h-5 w-5"/>
                        </div>
                        <div className='rounded-lg px-4 py-3 bg-muted flex items-center'>
                           <Loader2 className="h-5 w-5 animate-spin"/>
                        </div>
                    </div>
                )}
                </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="pt-4 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
              <Input 
                placeholder="Ask about a concept, a bug, or for career advice..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={loading}
                autoComplete="off"
              />
              <Button type="submit" disabled={loading || input.trim() === ''}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </AuthGuard>
  );
}
