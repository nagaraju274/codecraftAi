"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage, ChatMessageProps } from "@/components/chat-message";
import { chat } from "@/ai/flows/chat";
import { Role } from "genkit";

const formSchema = z.object({
  message: z.string().min(1, { message: "Message cannot be empty." }),
});

interface Message {
    role: Role;
    content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const userMessage: Message = {
      role: "user",
      content: values.message,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsAiLoading(true);
    form.reset();

    try {
      const response = await chat({
        history: messages,
        message: values.message,
      });

      const aiMessage: Message = {
        role: "model",
        content: response,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to get AI response", error);
      const errorMessage: Message = {
        role: "model",
        content: "Sorry, I encountered an error. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsAiLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-4">AI Chat</h1>
      <div className="flex-1 flex flex-col border rounded-lg">
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-4" ref={scrollAreaRef}>
            {messages.length === 0 && (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                    <p>Ask me anything to get started!</p>
                </div>
            )}
            {messages.map((message, index) => (
              <ChatMessage key={index} role={message.role} content={message.content} />
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex items-center gap-2"
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder="Type your message here..."
                        autoComplete="off"
                        {...field}
                        disabled={isAiLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isAiLoading}>
                {isAiLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Send"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
