// Import UI components from the project's design system.
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

// The main component for the Settings page.
export default function SettingsPage() {
  // Return the JSX structure of the page.
  return (
    // A container with vertical spacing for the settings sections.
    <div className="space-y-8">
      {/* Page header section. */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and website settings.</p>
      </div>

      {/* Card for General Settings. */}
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Update your site's public information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input id="siteName" defaultValue="CodeCraft AI" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="adminEmail">Admin Email</Label>
            <Input id="adminEmail" type="email" defaultValue="admin@codecraft.ai" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      {/* Card for Security Settings. */}
      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Manage your security settings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" />
          </div>
        </CardContent>
         <CardFooter>
          <Button>Update Password</Button>
        </CardFooter>
      </Card>

      {/* Card for Notification Settings. */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage how you receive notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            {/* Switch for new user sign-up emails. */}
            <div className="flex items-center justify-between">
                <div>
                    <Label htmlFor="new-user-emails">New User Sign-ups</Label>
                    <p className="text-sm text-muted-foreground">Receive an email every time a new user signs up.</p>
                </div>
                <Switch id="new-user-emails" defaultChecked />
            </div>
             {/* Switch for weekly summary emails. */}
             <div className="flex items-center justify-between">
                <div>
                    <Label htmlFor="weekly-summary">Weekly Summary</Label>
                    <p className="text-sm text-muted-foreground">Get a weekly summary of platform activity.</p>
                </div>
                <Switch id="weekly-summary" />
            </div>
        </CardContent>
         <CardFooter>
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
