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
          const thumbnail = imgMatch ? imgMatch[1] : '';

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

          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Writing</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            Insights on data, AI, productivity, and navigating life as a tech professional in Saudi Arabia.
          </p>
        </section>

        <section className="py-16 border-t border-gray-100 dark:border-gray-800 mb-20">
          {loading && (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400">Loading posts...</p>
            </div>
          )}
          
          {!loading && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400">No posts found.</p>
            </div>
          )}
          
          {!loading && posts.length > 0 && (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => {
                  return (
                    <div key={index} className="group">
                      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden mb-4">
                        <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{post.title}</h3>
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all font-medium text-sm shadow-sm hover:shadow-md">Read on Medium</a>
                    </div>
                  );
                })}
              </div>

              <div className="mt-20 pt-16 border-t border-gray-100 dark:border-gray-800 text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Want More?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto text-lg">
                  Follow me on Medium for regular updates on data, AI, and life in Saudi Arabia.
                </p>
                <a href="https://medium.com/@hanzalaqureshi" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all font-medium shadow-sm hover:shadow-md">Follow on Medium</a>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}