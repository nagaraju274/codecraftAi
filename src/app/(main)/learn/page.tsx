import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LearnPage() {
  return (
    <div className="flex flex-col h-full gap-4">
      <h1 className="text-2xl font-bold">Learning Paths</h1>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Structured Learning</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Our Learning Paths for Python, JavaScript, and Web Development are being developed. Get ready for guided lessons, code examples, and mini-challenges!</p>
        </CardContent>
      </Card>
    </div>
  );
}
