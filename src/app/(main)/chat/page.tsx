import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChatPage() {
  return (
    <div className="flex flex-col h-full gap-4">
      <h1 className="text-2xl font-bold">AI Chat</h1>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Chat with CodeCraft AI</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">The AI Chat Assistant feature is coming soon. You'll be able to ask for code explanations, bug fixes, and generate code snippets right here!</p>
        </CardContent>
      </Card>
    </div>
  );
}
