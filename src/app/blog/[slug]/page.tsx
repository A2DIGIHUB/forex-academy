import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This would typically come from a CMS or API
const blogPost = {
  title: 'Understanding Currency Pairs: A Beginner\'s Guide',
  excerpt:
    'Learn the basics of currency pairs and how they form the foundation of forex trading.',
  content: `
    <p>Currency pairs are the foundation of forex trading. When you trade forex, you're essentially buying one currency while selling another. This article will help you understand how currency pairs work and how to read them effectively.</p>

    <h2>What is a Currency Pair?</h2>
    <p>A currency pair consists of two currencies, where the first currency is called the base currency and the second is called the quote currency. For example, in the EUR/USD pair:</p>
    <ul>
      <li>EUR is the base currency</li>
      <li>USD is the quote currency</li>
    </ul>

    <h2>Major Currency Pairs</h2>
    <p>The most commonly traded currency pairs are known as the "majors." These include:</p>
    <ul>
      <li>EUR/USD (Euro/US Dollar)</li>
      <li>GBP/USD (British Pound/US Dollar)</li>
      <li>USD/JPY (US Dollar/Japanese Yen)</li>
      <li>USD/CHF (US Dollar/Swiss Franc)</li>
    </ul>

    <h2>Understanding Pip Values</h2>
    <p>A pip is the smallest price move that a given exchange rate makes based on market convention. Most major currency pairs are priced to four decimal places, and the pip is the last decimal point.</p>

    <h2>Trading Currency Pairs</h2>
    <p>When trading currency pairs, you're speculating on whether the base currency will strengthen or weaken against the quote currency. If you believe the base currency will strengthen, you go long (buy). If you think it will weaken, you go short (sell).</p>
  `,
  image: '/images/blog/currency-pairs.jpg',
  category: 'Basics',
  author: {
    name: 'John Smith',
    image: '/images/team/john.jpg',
    role: 'Lead Instructor',
  },
  date: 'December 16, 2023',
  readTime: '5 min read',
};

// This would be your actual page component
export default function BlogPost() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="bg-[#F59E0B] text-white px-3 py-1 rounded-full text-sm">
                {blogPost.category}
              </span>
              <span className="text-gray-400">{blogPost.date}</span>
              <span className="text-gray-400">{blogPost.readTime}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {blogPost.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {blogPost.excerpt}
            </p>
            <div className="flex items-center justify-center mb-12">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={blogPost.author.image}
                  alt={blogPost.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">
                  {blogPost.author.name}
                </div>
                <div className="text-gray-400 text-sm">{blogPost.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert mx-auto">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </article>
        </div>
      </section>

      {/* Share Section */}
      <section className="bg-[#1E293B] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-white text-lg font-medium mb-4 sm:mb-0">
              Share this article
            </div>
            <div className="flex space-x-4">
              <button className="bg-[#1DA1F2] text-white p-2 rounded-full hover:bg-opacity-80">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button className="bg-[#4267B2] text-white p-2 rounded-full hover:bg-opacity-80">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="bg-[#0A66C2] text-white p-2 rounded-full hover:bg-opacity-80">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <article
                key={index}
                className="bg-[#1E293B] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <Link href="/blog/sample-post">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/placeholder.jpg"
                      alt="Blog post"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-[#F59E0B] text-white px-3 py-1 rounded-full text-sm">
                        Category
                      </span>
                      <span className="text-gray-400 text-sm ml-4">
                        Dec 10, 2023
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Sample Blog Post Title
                    </h3>
                    <p className="text-gray-300">
                      Brief excerpt of the blog post content...
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
