import React from 'react';
import Image from 'next/image';

export default function BeginnerForex() {
  return (
    <div className="min-h-screen bg-[#1E293B]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1E293B] to-[#000000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                Beginner Forex Trading Course
              </h1>
              <p className="text-xl text-white mb-8">
                Master the fundamentals of forex trading and build a strong foundation for your trading journey
              </p>
              <button className="bg-[#F59E0B] text-[#1E293B] px-8 py-3 rounded-lg font-semibold hover:bg-[#F59E0B]/90 transition-colors">
                Start Learning Now
              </button>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-96 w-full">
              <Image
                src="/course-1.jpg"
                alt="Beginner Forex Trading"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#2D3748] p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4">Course Overview</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">6 Weeks</span>
                <span>Course Duration</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">Beginner</span>
                <span>Difficulty Level</span>
              </li>
              <li className="flex items-center">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">Certificate</span>
                <span>Upon Completion</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#2D3748] p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Forex Market Basics</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Currency Pairs</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic Chart Reading</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Trading Platform Usage</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#2D3748] p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4">Course Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Support</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Practice Exercises</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Video Tutorials</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Community Access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#1E293B]">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Course Curriculum</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {curriculum.map((week, index) => (
            <div key={index} className="bg-[#2D3748] rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-[#1E293B]">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{week.title}</h3>
                  <span className="px-3 py-1 bg-[#F59E0B] text-[#1E293B] rounded-full text-sm font-medium">
                    Week {index + 1}
                  </span>
                </div>
                <p className="mt-2 text-gray-300">{week.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {week.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <svg className="w-6 h-6 text-[#F59E0B] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="text-white font-medium">{topic.title}</h4>
                        <p className="text-gray-400 text-sm mt-1">{topic.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-[#1E293B] flex items-center justify-between">
                <div className="flex items-center text-gray-400 text-sm">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {week.duration}
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {week.assignments} Assignments
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const curriculum = [
  {
    title: 'Introduction to Forex Trading',
    description: 'Learn the fundamentals of forex markets and how they operate.',
    duration: '4-5 hours',
    assignments: 2,
    topics: [
      {
        title: 'What is Forex Trading?',
        description: 'Understanding currency markets, their history, and role in global finance.'
      },
      {
        title: 'Market Participants',
        description: 'Explore different types of traders, banks, and institutions in forex markets.'
      },
      {
        title: 'Major Currency Pairs',
        description: 'Learn about major, minor, and exotic currency pairs and their characteristics.'
      },
      {
        title: 'Market Structure',
        description: 'Understanding how the forex market is organized and operates 24/7.'
      }
    ]
  },
  {
    title: 'Trading Basics',
    description: 'Master the essential concepts and terminology of forex trading.',
    duration: '5-6 hours',
    assignments: 3,
    topics: [
      {
        title: 'Understanding Pips and Lots',
        description: 'Learn how to calculate pip values and understand position sizing.'
      },
      {
        title: 'Reading Currency Quotes',
        description: 'Master bid/ask prices, spreads, and how to read currency pairs.'
      },
      {
        title: 'Types of Orders',
        description: 'Explore market, limit, stop, and pending orders in detail.'
      },
      {
        title: 'Trading Sessions',
        description: 'Understanding major trading sessions and their characteristics.'
      }
    ]
  },
  {
    title: 'Technical Analysis Fundamentals',
    description: 'Introduction to chart reading and basic technical analysis.',
    duration: '6-7 hours',
    assignments: 3,
    topics: [
      {
        title: 'Chart Types and Timeframes',
        description: 'Learn about line, bar, and candlestick charts and their interpretation.'
      },
      {
        title: 'Support and Resistance',
        description: 'Identify key price levels and understand their importance.'
      },
      {
        title: 'Basic Chart Patterns',
        description: 'Recognize and understand common chart patterns for trading.'
      },
      {
        title: 'Introduction to Indicators',
        description: 'Overview of basic technical indicators and their usage.'
      }
    ]
  },
  {
    title: 'Risk Management Essentials',
    description: 'Learn crucial risk management principles for sustainable trading.',
    duration: '5-6 hours',
    assignments: 4,
    topics: [
      {
        title: 'Position Sizing',
        description: 'Calculate appropriate position sizes based on your account.'
      },
      {
        title: 'Stop Loss Strategies',
        description: 'Learn different approaches to setting protective stops.'
      },
      {
        title: 'Risk-Reward Ratio',
        description: 'Understanding and applying proper risk-reward ratios.'
      },
      {
        title: 'Money Management Rules',
        description: 'Essential rules for preserving and growing your trading capital.'
      }
    ]
  },
  {
    title: 'Trading Psychology',
    description: 'Master the mental aspects of trading and emotional control.',
    duration: '4-5 hours',
    assignments: 2,
    topics: [
      {
        title: 'Emotional Control',
        description: 'Learn to manage fear, greed, and other trading emotions.'
      },
      {
        title: 'Trading Plan Development',
        description: 'Create a comprehensive trading plan for consistent results.'
      },
      {
        title: 'Journal Keeping',
        description: 'Learn how to maintain and analyze your trading journal.'
      },
      {
        title: 'Common Beginner Mistakes',
        description: 'Identify and avoid typical mistakes new traders make.'
      }
    ]
  },
  {
    title: 'Practice and Review',
    description: 'Put theory into practice with hands-on trading exercises.',
    duration: '6-7 hours',
    assignments: 4,
    topics: [
      {
        title: 'Demo Trading Practice',
        description: 'Apply learned concepts in a risk-free environment.'
      },
      {
        title: 'Trade Analysis',
        description: 'Learn to analyze and review your trading performance.'
      },
      {
        title: 'Strategy Development',
        description: 'Begin developing your own trading strategy.'
      },
      {
        title: 'Final Assessment',
        description: 'Comprehensive review and evaluation of your trading knowledge.'
      }
    ]
  }
];
