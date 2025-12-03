import Link from "next/link";

export default function Build() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <section className="py-20">
          <Link 
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block font-medium"
          >
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Products</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            AI-powered software, digital tools, and experiments I've built to solve real problems for professionals.
          </p>
        </section>

        {/* Software Section */}
        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Software</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Inboxie */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl mb-4 flex items-center justify-center">
                <div className="text-6xl">📧</div>
              </div>
              <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
                🟢 ACTIVE
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Inboxie</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                AI Gmail Chrome Extension
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Turn email from a distraction into a productivity system. AI-powered inbox organization and smart replies.
              </p>
              <a 
                href="https://inboxie.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all font-medium text-sm shadow-sm hover:shadow-md"
              >
                Visit Inboxie.ai
              </a>
            </div>

            {/* CanvasKit */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl mb-4 flex items-center justify-center">
                <div className="text-6xl">🎨</div>
              </div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                IN DEVELOPMENT
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">CanvasKit</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                AI Marketing Adaptation Tool
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Upload copy or visuals and automatically generate multiple versions tailored for different channels.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500 italic">
                Testing internal prototypes
              </div>
            </div>

            {/* AI Outbound Survey Agent */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl mb-4 flex items-center justify-center">
                <div className="text-6xl">📞</div>
              </div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                IN DEVELOPMENT
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">AI Outbound Survey Agent</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                Real-Time Voice Surveys
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Groq-powered ultra-low latency voice agent for customer surveys, lead qualification, and feedback automation.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500 italic">
                Early research & prototyping
              </div>
            </div>

            {/* Data & AI Scoring */}
            <div className="group opacity-60">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20 rounded-2xl mb-4 flex items-center justify-center">
                <div className="text-6xl">📊</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-500 font-medium mb-2">
                ARCHIVED
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Data & AI Scoring</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                Readiness Assessment Tool
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Prototype scoring system for evaluating organizational data strategy and AI capability readiness.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Products Section */}
        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Digital Products</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Data Quality Handbook */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl mb-4 flex items-center justify-center">
                <div className="text-6xl">📘</div>
              </div>
              <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
                ✅ AVAILABLE NOW
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Ultimate Data Quality Handbook</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                Practical Guide for Data Teams
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Complete resource on designing, measuring, and improving data quality. Includes frameworks, maturity models, and implementation templates.
              </p>
              <a 
                href="https://gumroad.com/hanzalaqureshi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all font-medium text-sm shadow-sm hover:shadow-md"
              >
                Get on Gumroad
              </a>
            </div>
          </div>
        </section>

        {/* Why I Build */}
        <section className="py-16 mb-20 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why I Build</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-lg">
              I believe in learning through shipping. Instead of six-month build cycles, I prefer 
              fast experiments where real users provide feedback early.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
              Interested in collaborations or technical partnerships?
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all font-medium shadow-sm hover:shadow-md"
            >
              Contact Me →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}