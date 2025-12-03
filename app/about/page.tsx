import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <section className="py-20">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block font-medium">
            Back to Home
          </Link>

          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm Hanzala Qureshi — I build AI products and lead data teams. I have over 10 years 
            of experience delivering large-scale data transformation initiatives in telecom, finance, 
            and government sectors. I'm currently based in Riyadh, Saudi Arabia.
          </p>
        </section>

        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Notable Experience</h2>
          <ul className="space-y-6 text-gray-600 dark:text-gray-400 text-lg">
            <li className="leading-relaxed">
              Led strategic data transformation for a major UK telecom, directing a 100+ person delivery team and modernizing core platforms from legacy systems to cloud-native architecture.
            </li>
            <li className="leading-relaxed">
              Established and directed an enterprise Data & AI Center of Excellence, creating a five-year maturity roadmap that integrated governance, privacy, analytics, and machine learning into everyday business operations.
            </li>
            <li className="leading-relaxed">
              Delivered core banking modernization for a financial institution, leading teams to implement a Single Customer View and managing budgets, delivery, and executive stakeholder alignment.
            </li>
          </ul>
        </section>

        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            After building my career in the UK, I relocated to Riyadh to work in one of the world's 
            fastest-growing digital economies. Living and working in Saudi Arabia has given me a unique 
            perspective on data, AI, and business transformation in the Middle East — something I share 
            through my writing and content.
          </p>
        </section>

        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">What I'm Building</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
            I spend my time building simple AI tools that solve real problems:
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-8 text-lg">
            <li>
              <strong className="text-gray-900 dark:text-gray-100">inboxie</strong> — AI-powered email organization
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-100">YouTube + Writing</strong> — Saudi life, data, and productivity
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-100">Other Experiments</strong> — Small data and AI products
            </li>
          </ul>
          <Link href="/build" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all font-medium shadow-sm hover:shadow-md">
            View Products
          </Link>
        </section>

        <section className="py-16 mb-20 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
              Let's talk data, AI, or moving to Saudi. Best way to reach me is through the contact page.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all font-medium shadow-sm hover:shadow-md">
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}