import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserCircle } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex flex-col h-full gap-4">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <Card>
        <CardHeader className="flex flex-row gap-4 items-center">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://placehold.co/64x64.png" alt="@student" data-ai-hint="user avatar" />
              <AvatarFallback>
                <UserCircle className="h-16 w-16" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">Student</CardTitle>
              <p className="text-muted-foreground">student@example.com</p>
            </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">User profiles are coming soon. You'll be able to track your progress, view saved projects, and customize your settings here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
