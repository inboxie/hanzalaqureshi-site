"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Post {
  title: string;
  link: string;
  contentSnippet: string;
  thumbnail: string;
}

export default function Write() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hanzalaqureshi`
        );
        const data = await response.json();

        const formattedPosts = data.items.slice(0, 6).map((item: any) => {
          const imgRegex = /<img[^>]+src="([^">]+)"/;
          const imgMatch = item.content?.match(imgRegex);
          const thumbnail = imgMatch ? imgMatch[1] : '/placeholder-blog.jpg';

          return {
            title: item.title,
            link: item.link,
            contentSnippet: '',
            thumbnail,
          };
        });

        setPosts(formattedPosts);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMediumPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <section className="py-20">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block font-medium">
            Back to Home
          </Link>

          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Writing on Data, AI, and Building a High-Impact Tech Career
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-8">
            I write about data leadership, AI tools, productivity, and practical frameworks for becoming 
            a top-tier Data & AI professional.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <a href="https://gumroad.com/hanzalaqureshi" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all font-medium shadow-sm hover:shadow-md">
              Download the Data Quality Handbook
            </a>
            <a href="https://medium.com/@hanzalaqureshi" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Read on Medium →
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-500">
              Read by 100,000+ people on Medium
            </p>
          </div>
        </section>

        <section className="py-16 border-t border-gray-100 dark:border-gray-800 mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Latest Articles</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Practical insights on data leadership, AI tooling, productivity, and the realities of working in modern tech.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400">No posts found.</p>
            </div>
          ) : (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {posts.map((post, index) => (
                  <div key={index} className="group">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden mb-4">
                      <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
                      Read on Medium →
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-2 border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 mb-8">
                <div className="text-4xl mb-4">📘</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  Free Digital Handbook
                </h3>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Download the Ultimate Data Quality Handbook (20+ pages)
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  A practical guide for data teams. Includes frameworks, checklists, maturity models, 
                  and real-world examples you can use immediately.
                </p>
                <a href="https://gumroad.com/hanzalaqureshi" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all font-medium shadow-sm hover:shadow-md">
                  Download on Gumroad
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                  Free • No spam • Instant download
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">📰</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  Join My Medium Newsletter
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-xl mx-auto">
                  Get my new essays on data, AI, and career growth — sent directly to your inbox.
                  <br />
                  No spam. Only practical insights.
                </p>
                <a href="https://medium.com/@hanzalaqureshi" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg">
                  Subscribe on Medium →
                </a>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}