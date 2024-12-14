import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Trading Courses</h1>
          <p className="text-xl text-blue-100">
            Comprehensive forex trading education for all skill levels
          </p>
        </div>
      </div>

      {/* Course Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${course.levelColor}`}>
                    {course.level}
                  </span>
                  <span className="text-gray-600">{course.duration}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {course.features[0]}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {course.features[1]}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {course.price}
                  </span>
                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const courses = [
  {
    id: 'beginner-forex',
    title: 'Beginner Forex Trading',
    description:
      'Perfect for newcomers to forex trading. Learn the fundamentals and build a strong foundation.',
    level: 'Beginner',
    levelColor: 'bg-green-100 text-green-800',
    duration: '6 weeks',
    price: '$199',
    image: '/course-1.jpg',
    features: ['Complete trading basics', 'Market analysis fundamentals'],
  },
  {
    id: 'intermediate-trading',
    title: 'Intermediate Trading Strategies',
    description:
      'Take your trading to the next level with advanced concepts and strategies.',
    level: 'Intermediate',
    levelColor: 'bg-blue-100 text-blue-800',
    duration: '8 weeks',
    price: '$299',
    image: '/course-2.jpg',
    features: ['Advanced chart patterns', 'Risk management strategies'],
  },
  {
    id: 'advanced-forex',
    title: 'Advanced Forex Mastery',
    description:
      'Master complex trading strategies and advanced market analysis techniques.',
    level: 'Advanced',
    levelColor: 'bg-purple-100 text-purple-800',
    duration: '10 weeks',
    price: '$499',
    image: '/course-3.jpg',
    features: ['Expert trading techniques', 'Portfolio management'],
  },
  {
    id: 'technical-analysis',
    title: 'Technical Analysis Deep Dive',
    description:
      'Comprehensive course on technical analysis tools and indicators.',
    level: 'Intermediate',
    levelColor: 'bg-blue-100 text-blue-800',
    duration: '6 weeks',
    price: '$249',
    image: '/course-4.jpg',
    features: ['Indicator mastery', 'Chart pattern analysis'],
  },
  {
    id: 'risk-management',
    title: 'Risk Management & Psychology',
    description:
      'Learn to manage risks effectively and master trading psychology.',
    level: 'All Levels',
    levelColor: 'bg-yellow-100 text-yellow-800',
    duration: '4 weeks',
    price: '$199',
    image: '/course-5.jpg',
    features: ['Risk calculation', 'Trading psychology'],
  },
  {
    id: 'algorithmic-trading',
    title: 'Algorithmic Trading',
    description:
      'Learn to create and implement automated trading strategies.',
    level: 'Advanced',
    levelColor: 'bg-purple-100 text-purple-800',
    duration: '12 weeks',
    price: '$699',
    image: '/course-6.jpg',
    features: ['Strategy automation', 'BackTesting'],
  },
];
