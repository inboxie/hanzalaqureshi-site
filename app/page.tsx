import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Hanzala</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
              Senior Data & AI Leader • Product Builder • Creator in Saudi Arabia
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl" style={{lineHeight: '1.7'}}>
              I build AI products, write about data and productivity, and share practical insights 
              about life and work in Saudi Arabia — from the viewpoint of a Western professional 
              living in Riyadh.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link 
                href="/build"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all font-medium shadow-sm hover:shadow-md"
              >
                View Products
              </Link>
              <Link 
                href="/write"
                className="text-blue-600 dark:text-blue-400 px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-all font-medium"
              >
                Read My Writing
              </Link>
              <Link 
                href="/contact"
                className="text-blue-600 dark:text-blue-400 px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-all font-medium"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-20 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">What I Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Build</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                AI tools, Chrome extensions, and full-stack products that solve real problems for professionals.
              </p>
              <Link href="/build" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                See products →
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Write</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Articles on data, AI, productivity, and real life as a Western professional in Saudi Arabia.
              </p>
              <Link href="/write" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Read articles →
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Lead</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                10+ years leading data initiatives, building high-performing teams, and delivering enterprise solutions.
              </p>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                View career highlights →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-20 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Featured</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Inboxie */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">📧</div>
              </div>
              <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase mb-2">
                SOFTWARE
              </p>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                Inboxie
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                AI-powered Gmail Chrome extension that organizes your inbox intelligently.
              </p>
              <a 
                href="https://inboxie.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                Visit Inboxie.ai →
              </a>
            </div>

            {/* YouTube */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">🎥</div>
              </div>
              <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase mb-2">
                CONTENT
              </p>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                Life in Saudi Arabia
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                50+ videos sharing cost of living, housing, and career insights.
              </p>
              <a 
                href="https://youtube.com/@hanzinsaudi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                Watch videos →
              </a>
            </div>

            {/* Data Quality Handbook */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">📘</div>
              </div>
              <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase mb-2">
                DIGITAL PRODUCT
              </p>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                Ultimate Data Quality Handbook
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                Digital playbook for data teams with frameworks and guidance.
              </p>
              <a 
                href="https://gumroad.com/hanzalaqureshi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                Get on Gumroad →
              </a>
            </div>
          </div>
        </section>

        {/* About Me Preview */}
        <section className="py-20 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl text-lg mb-6">
            I'm a data and AI leader with over a decade of experience delivering transformation programs 
            for telecoms, finance, and public sector organizations in the UK and Saudi Arabia. I specialize 
            in building data products, leading technical teams, and simplifying complex problems through 
            practical solutions.
          </p>
          <Link 
            href="/about" 
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View experience →
          </Link>
        </section>

        {/* Final Contact CTA */}
        <section className="py-20 mb-20 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Working on something interesting in data, AI, or tech in Saudi Arabia? Get in touch.
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