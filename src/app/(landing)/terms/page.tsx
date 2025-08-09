
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Last Updated: October 28, 2023
            </p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p>
                Welcome to CodeCraft AI ("we," "our," "us"). These Terms of Service ("Terms") govern your use of our website, products, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold">2. User Accounts</h2>
              <p>
                To access certain features of our Services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold">3. User Conduct</h2>
              <p>
                You agree not to use the Services for any unlawful purpose or in any way that could harm, disable, overburden, or impair our servers or networks. You agree not to attempt to gain unauthorized access to any part of the Services, other accounts, or computer systems or networks connected to our Services.
              </p>
            </section>
            
            <Separator />

            <section>
                <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
                <p>
                    All content and materials available on our Services, including but not limited to text, graphics, website name, code, images, and logos, are the intellectual property of CodeCraft AI and are protected by applicable copyright and trademark law. Any unauthorized use, including but not limited to the reproduction, distribution, display, or transmission of any content on this site is strictly prohibited.
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-2xl font-semibold">5. Disclaimer of Warranties</h2>
                <p>
                    The Services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
                <p>
                    In no event shall CodeCraft AI, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.
                </p>
            </section>

             <Separator />
            
            <section>
                <h2 className="text-2xl font-semibold">8. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us at <a href="mailto:support@codecraft.ai" className="text-primary hover:underline">support@codecraft.ai</a>.
                </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
