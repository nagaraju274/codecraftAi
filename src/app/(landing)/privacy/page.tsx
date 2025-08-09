
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Last Updated: October 28, 2023
            </p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p>
                Welcome to CodeCraft AI ("we," "our," "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Services. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
               <ul>
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Improve our website and services.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              </ul>
            </section>
            
            <Separator />

            <section>
                <h2 className="text-2xl font-semibold">4. Data Security</h2>
                <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-2xl font-semibold">5. Policy for Children</h2>
                <p>
                   We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-2xl font-semibold">6. Changes to This Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
            </section>

             <Separator />
            
            <section>
                <h2 className="text-2xl font-semibold">7. Contact Us</h2>
                <p>
                    If you have questions or comments about this Privacy Policy, please contact us at <a href="mailto:privacy@codecraft.ai" className="text-primary hover:underline">privacy@codecraft.ai</a>.
                </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
