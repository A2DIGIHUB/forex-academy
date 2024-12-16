import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Currency Pairs: A Beginner\'s Guide',
    excerpt:
      'Learn the basics of currency pairs and how they form the foundation of forex trading.',
    image: '/images/blog/currency-pairs.jpg',
    category: 'Basics',
    author: 'John Smith',
    date: 'December 16, 2023',
    readTime: '5 min read',
    slug: 'understanding-currency-pairs',
  },
  {
    id: 2,
    title: 'Top Technical Analysis Patterns Every Trader Should Know',
    excerpt:
      'Master the most important chart patterns that can help you identify trading opportunities.',
    image: '/images/blog/technical-analysis.jpg',
    category: 'Technical Analysis',
    author: 'Sarah Johnson',
    date: 'December 14, 2023',
    readTime: '8 min read',
    slug: 'top-technical-analysis-patterns',
  },
  {
    id: 3,
    title: 'Risk Management Strategies for Forex Trading',
    excerpt:
      'Discover essential risk management techniques to protect your trading capital.',
    image: '/images/blog/risk-management.jpg',
    category: 'Risk Management',
    author: 'Michael Chen',
    date: 'December 12, 2023',
    readTime: '6 min read',
    slug: 'risk-management-strategies',
  },
  {
    id: 4,
    title: 'The Psychology of Trading: Mastering Your Emotions',
    excerpt:
      'Learn how to control your emotions and develop a winning trading mindset.',
    image: '/images/blog/trading-psychology.jpg',
    category: 'Psychology',
    author: 'Emma Davis',
    date: 'December 10, 2023',
    readTime: '7 min read',
    slug: 'psychology-of-trading',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Forex Trading Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest forex trading insights, strategies, and
              market analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1E293B] rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-full">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-[#F59E0B] text-white px-3 py-1 rounded-full text-sm">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-400 text-sm ml-4">
                    {blogPosts[0].date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-white font-medium">
                      {blogPosts[0].author}
                    </span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-400">{blogPosts[0].readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="text-[#F59E0B] hover:text-[#D97706] font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-[#1E293B] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-[#F59E0B] text-white px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm ml-4">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{post.author}</span>
                      <span className="text-gray-400">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#1E293B] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 mb-8">
            Get the latest forex trading insights and analysis delivered directly to
            your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:border-[#F59E0B] flex-grow max-w-md"
            />
            <button
              type="submit"
              className="bg-[#F59E0B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D97706] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
