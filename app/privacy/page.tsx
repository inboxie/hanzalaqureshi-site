import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block font-medium">
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-12">Last updated: December 6, 2025</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              When you use our Saudi Relocation Eligibility Quiz, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Email address (when voluntarily provided to receive your personalized report)</li>
              <li>Quiz responses (industry, experience, goals, and other professional information)</li>
              <li>Basic analytics data (page views, quiz completions) via Google Analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Generate and deliver your personalized Saudi relocation report</li>
              <li>Send occasional updates about Saudi relocation opportunities (only if you opted in)</li>
              <li>Improve our quiz and website content</li>
              <li>Analyze usage patterns to better serve our audience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Data Storage & Security</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Your data is securely stored using Supabase (a SOC 2 Type II certified platform). We implement industry-standard security measures to protect your information. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cookies & Analytics</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We use Google Analytics to understand how visitors use our site. This involves cookies that collect anonymized data about your visit. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out Browser Add-on</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Unsubscribe from email communications at any time</li>
              <li>Opt out of analytics tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li><strong>Supabase</strong> - Data storage and authentication</li>
              <li><strong>Google Analytics</strong> - Website analytics</li>
              <li><strong>Vercel</strong> - Website hosting</li>
              <li><strong>YouTube</strong> - Embedded videos</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              These services have their own privacy policies governing how they handle data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Children's Privacy</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our services are not directed at children under 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Changes to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If you have questions about this privacy policy or want to exercise your rights, contact me at: <Link href="/contact" className="text-blue-600 hover:underline">hanzalaqureshi.com/contact</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}