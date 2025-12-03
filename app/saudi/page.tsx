"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

export default function Saudi() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchYouTubeShorts() {
      try {
        const channelId = "UC0XGbrjpSQbyCvR0fRLs5sA"; // @hanzinsaudi channel ID
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=6&type=video&videoDuration=short`
        );
        
        const data = await response.json();
        
        const formattedVideos = data.items?.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        })) || [];
        
        setVideos(formattedVideos);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchYouTubeShorts();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <section className="py-20">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block font-medium">
            Back to Home
          </Link>

          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">Life in Saudi Arabia</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            Practical insights on cost of living, careers, and daily life in Riyadh.
          </p>
        </section>

        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <div className="text-5xl">🎥</div>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase mb-2">
                YOUTUBE CHANNEL
              </p>
              <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">@hanzinsaudi</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                50+ videos about life, career, housing, and opportunities in Saudi Arabia.
              </p>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
            I document my experience as a Western expat in Saudi Arabia through data-driven videos. 
            No fluff, just real numbers, honest experiences, and practical insights for professionals 
            considering the move.
          </p>

          <a href="https://youtube.com/@hanzinsaudi" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all font-medium shadow-sm hover:shadow-md">
            Watch on YouTube
          </a>
        </section>

        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Latest Shorts</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">Loading videos...</p>
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No videos found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm font-semibold text-white line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </a>
              ))}
            </div>
          )}
        </section>

        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why Saudi Arabia?</h2>
          <div className="space-y-4 text-lg">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I relocated to Riyadh to work in one of the world's fastest-growing tech markets. 
              Saudi Arabia's Vision 2030 is creating unprecedented opportunities for experienced 
              data and AI professionals.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My goal is to share honest, practical information I wish I had before moving — 
              without hype or assumptions.
            </p>
          </div>
        </section>

        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">What I Cover</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Financial</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Salary expectations</li>
                <li>Cost of living</li>
                <li>Tax advantages</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Practical Living</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Housing and visas</li>
                <li>Healthcare</li>
                <li>Daily logistics</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Career</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Job market</li>
                <li>Networking</li>
                <li>Career progression</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Culture and Life</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Adaptation tips</li>
                <li>Social life</li>
                <li>Family activities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 mb-20 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Considering a Move?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              If you're a tech professional exploring opportunities in Saudi Arabia, I'm happy 
              to answer questions or share insights from my experience.
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