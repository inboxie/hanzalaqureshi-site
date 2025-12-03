import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <section className="py-20">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block font-medium">
            Back to Home
          </Link>

          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-2">
            Let's connect. Whether you have a question, want to collaborate, or just want to chat 
            about data, AI, or life in Saudi Arabia.
          </p>
          <p className="text-gray-500 dark:text-gray-500">
            Based in Riyadh (GMT+3)
          </p>
        </section>

        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Email Me</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              The fastest way to reach me
            </p>
            
            <a href="mailto:hello@hanzalaqureshi.com" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-medium text-lg shadow-md hover:shadow-lg">
              <span className="text-2xl">📧</span>
              hello@hanzalaqureshi.com
            </a>

            <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
              I usually reply within 24-48 hours
            </p>
          </div>
        </section>

        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">What I Can Help With</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Collaboration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Explore AI product ideas together
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Consulting</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Data strategy and AI implementation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Saudi Advice</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Moving to Riyadh? Happy to share insights
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Mentorship</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Career help for data professionals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✍️</span>
              </div>
              <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Speaking & Writing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Podcasts, guest posts, and interviews
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Partnerships</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Technical partnerships and projects
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 mb-20 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Connect on Social</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.linkedin.com/in/hanzalaqureshi" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-600 dark:hover:border-blue-400 transition-all font-medium">
                LinkedIn
              </a>
              <a href="https://youtube.com/@hanzinsaudi" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-600 dark:hover:border-blue-400 transition-all font-medium">
                YouTube
              </a>
              <a href="https://x.com/hanzalaqureshi_" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-600 dark:hover:border-blue-400 transition-all font-medium">
                X (Twitter)
              </a>
              <a href="https://medium.com/@hanzalaqureshi" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-600 dark:hover:border-blue-400 transition-all font-medium">
                Medium
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}