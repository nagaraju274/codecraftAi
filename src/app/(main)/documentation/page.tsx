
import { AuthGuard } from "@/components/auth/auth-guard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocumentationPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Welcome to the documentation page. Here you will find detailed information about our platform, features, and APIs.
            </p>
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                <p>Find out how to set up your account, create your first project, and start using our AI tools.</p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
                <p>Explore the full reference for our public APIs to integrate CodeCraft AI into your own applications.</p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Guides & Tutorials</h2>
                <p>Follow our step-by-step guides to master specific features and build complex applications with ease.</p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthGuard>
  );
}
