import React from 'react';
import Image from 'next/image';

export default function TechnicalAnalysis() {
  return (
    <div className="min-h-screen bg-[#1E293B]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1E293B] to-[#000000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                Technical Analysis Mastery
              </h1>
              <p className="text-xl text-white mb-8">
                Master the art of technical analysis and chart reading to make data-driven trading decisions
              </p>
              <button className="bg-[#F59E0B] text-[#1E293B] px-8 py-3 rounded-lg font-semibold hover:bg-[#F59E0B]/90 transition-colors">
                Start Learning Now
              </button>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-96 w-full">
              <Image
                src="/course-4.jpg"
                alt="Technical Analysis Course"
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
                <span className="bg-[#1E293B] text-white px-2 py-1 rounded mr-2">6 Weeks</span>
                <span className="text-white">Course Duration</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#F59E0B] text-[#1E293B] px-2 py-1 rounded mr-2">Intermediate</span>
                <span className="text-white">Difficulty Level</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#8B9467] text-[#1E293B] px-2 py-1 rounded mr-2">Certificate</span>
                <span className="text-white">Upon Completion</span>
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
                <span className="text-white">Advanced Chart Patterns</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Technical Indicators</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Price Action Trading</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Market Structure Analysis</span>
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
                <span className="text-white">Live Chart Analysis</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">Trading Setups Library</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">Indicator Templates</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">Weekly Live Sessions</span>
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
    title: 'Chart Analysis Foundations',
    description: 'Master the fundamentals of chart reading and analysis.',
    duration: '5-6 hours',
    assignments: 3,
    topics: [
      {
        title: 'Types of Charts',
        description: 'Deep dive into candlestick, bar, and line charts with advanced patterns.'
      },
      {
        title: 'Multiple Timeframe Analysis',
        description: 'Learn to analyze markets across different timeframes for better decision making.'
      },
      {
        title: 'Price Action Basics',
        description: 'Understanding how to read raw price movements and market structure.'
      },
      {
        title: 'Chart Patterns Recognition',
        description: 'Identify and interpret basic and complex chart patterns.'
      }
    ]
  },
  {
    title: 'Advanced Chart Patterns',
    description: 'Learn to identify and trade complex chart patterns.',
    duration: '6-7 hours',
    assignments: 4,
    topics: [
      {
        title: 'Reversal Patterns',
        description: 'Master head and shoulders, double tops/bottoms, and other reversal patterns.'
      },
      {
        title: 'Continuation Patterns',
        description: 'Learn flags, pennants, triangles, and other continuation patterns.'
      },
      {
        title: 'Harmonic Patterns',
        description: 'Advanced study of Fibonacci-based harmonic trading patterns.'
      },
      {
        title: 'Pattern Trading Strategies',
        description: 'Develop strategies for trading various chart patterns effectively.'
      }
    ]
  },
  {
    title: 'Technical Indicators',
    description: 'Master the use of various technical indicators.',
    duration: '7-8 hours',
    assignments: 4,
    topics: [
      {
        title: 'Trend Indicators',
        description: 'Moving averages, MACD, and other trend-following indicators.'
      },
      {
        title: 'Momentum Indicators',
        description: 'RSI, Stochastic, and other momentum measurement tools.'
      },
      {
        title: 'Volume Analysis',
        description: 'Understanding volume indicators and their importance in trading.'
      },
      {
        title: 'Custom Indicators',
        description: 'Learn to combine indicators and create custom trading tools.'
      }
    ]
  },
  {
    title: 'Price Action Trading',
    description: 'Advanced price action trading techniques.',
    duration: '6-7 hours',
    assignments: 3,
    topics: [
      {
        title: 'Support and Resistance',
        description: 'Advanced concepts in identifying and trading key price levels.'
      },
      {
        title: 'Candlestick Patterns',
        description: 'Master single and multiple candlestick patterns for trading.'
      },
      {
        title: 'Price Action Concepts',
        description: 'Advanced concepts including order flow and market structure.'
      },
      {
        title: 'Trading Without Indicators',
        description: 'Develop skills to trade using pure price action.'
      }
    ]
  },
  {
    title: 'Advanced Analysis',
    description: 'Complex technical analysis concepts and methods.',
    duration: '7-8 hours',
    assignments: 4,
    topics: [
      {
        title: 'Elliott Wave Theory',
        description: 'Understanding and applying Elliott Wave principles in trading.'
      },
      {
        title: 'Fibonacci Trading',
        description: 'Advanced applications of Fibonacci tools in technical analysis.'
      },
      {
        title: 'Market Profile',
        description: 'Learn to use Market Profile for advanced market analysis.'
      },
      {
        title: 'Intermarket Analysis',
        description: 'Understand relationships between different markets and assets.'
      }
    ]
  },
  {
    title: 'Strategy Development',
    description: 'Build and optimize your trading strategies.',
    duration: '6-7 hours',
    assignments: 5,
    topics: [
      {
        title: 'Strategy Building',
        description: 'Create complete trading strategies using technical analysis.'
      },
      {
        title: 'Backtesting Methods',
        description: 'Learn to test and validate your trading strategies.'
      },
      {
        title: 'Strategy Optimization',
        description: 'Fine-tune and improve your trading strategies.'
      },
      {
        title: 'Performance Analysis',
        description: 'Evaluate and improve your trading system performance.'
      }
    ]
  }
];
