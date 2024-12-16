import React from 'react';
import Image from 'next/image';

export default function RiskManagement() {
  return (
    <div className="min-h-screen bg-[#1E293B]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1E293B] to-[#000000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                Risk Management & Psychology
              </h1>
              <p className="text-xl text-white mb-8">
                Master the most crucial aspects of trading: risk management and trading psychology
              </p>
              <button className="bg-[#F59E0B] text-[#1E293B] px-8 py-3 rounded-lg font-semibold hover:bg-[#F59E0B]/90 transition-colors">
                Start Learning Now
              </button>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-96 w-full">
              <Image
                src="/course-5.jpg"
                alt="Risk Management Course"
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
                <span className="bg-[#1E293B] text-white px-2 py-1 rounded mr-2">4 Weeks</span>
                <span className="text-white">Course Duration</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#1E293B] text-white px-2 py-1 rounded mr-2">All Levels</span>
                <span className="text-white">Difficulty Level</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#1E293B] text-white px-2 py-1 rounded mr-2">Certificate</span>
                <span className="text-white">Upon Completion</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#2D3748] p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Position Sizing</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Risk Calculation</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Psychology Mastery</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Portfolio Management</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#2D3748] p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4">Course Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">Risk Calculator Tools</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">Psychology Assessments</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">Trading Journal Template</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">1-on-1 Coaching Session</span>
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
    title: 'Risk Management Fundamentals',
    description: 'Learn the core principles of risk management in forex trading.',
    duration: '5-6 hours',
    assignments: 3,
    topics: [
      {
        title: 'Understanding Risk',
        description: 'Learn about different types of trading risks and their impact.'
      },
      {
        title: 'Risk-Reward Ratio',
        description: 'Master the concept of risk-reward ratios and their importance.'
      },
      {
        title: 'Position Sizing',
        description: 'Learn proper position sizing techniques for risk control.'
      },
      {
        title: 'Capital Preservation',
        description: 'Understand the importance of protecting your trading capital.'
      }
    ]
  },
  {
    title: 'Stop Loss Strategies',
    description: 'Master various stop loss techniques and their applications.',
    duration: '6-7 hours',
    assignments: 4,
    topics: [
      {
        title: 'Types of Stop Losses',
        description: 'Learn about fixed, trailing, and volatility-based stops.'
      },
      {
        title: 'Stop Loss Placement',
        description: 'Master the art of placing stops at optimal levels.'
      },
      {
        title: 'Dynamic Stop Losses',
        description: 'Advanced techniques for adapting stops to market conditions.'
      },
      {
        title: 'Psychology of Stops',
        description: 'Understanding the psychological aspects of using stops.'
      }
    ]
  },
  {
    title: 'Money Management',
    description: 'Essential money management principles for consistent trading.',
    duration: '5-6 hours',
    assignments: 3,
    topics: [
      {
        title: 'Account Management',
        description: 'Learn to manage your trading account effectively.'
      },
      {
        title: 'Risk Per Trade',
        description: 'Calculate and implement proper risk per trade limits.'
      },
      {
        title: 'Drawdown Management',
        description: 'Strategies for managing and recovering from drawdowns.'
      },
      {
        title: 'Profit Taking',
        description: 'Learn when and how to take profits effectively.'
      }
    ]
  },
  {
    title: 'Portfolio Management',
    description: 'Advanced concepts in managing a forex trading portfolio.',
    duration: '6-7 hours',
    assignments: 4,
    topics: [
      {
        title: 'Portfolio Diversification',
        description: 'Learn to diversify your trading across different pairs.'
      },
      {
        title: 'Correlation Analysis',
        description: 'Understanding currency pair correlations for risk management.'
      },
      {
        title: 'Risk Allocation',
        description: 'Proper risk allocation across multiple positions.'
      },
      {
        title: 'Portfolio Optimization',
        description: 'Techniques for optimizing your trading portfolio.'
      }
    ]
  },
  {
    title: 'Risk Analysis Tools',
    description: 'Master the use of various risk analysis tools and metrics.',
    duration: '7-8 hours',
    assignments: 4,
    topics: [
      {
        title: 'Risk Metrics',
        description: 'Learn key risk measurement tools and indicators.'
      },
      {
        title: 'Risk Assessment',
        description: 'Methods for evaluating potential trading risks.'
      },
      {
        title: 'Risk Reporting',
        description: 'Creating and analyzing risk reports for your trading.'
      },
      {
        title: 'Risk Management Systems',
        description: 'Using automated systems for risk management.'
      }
    ]
  },
  {
    title: 'Advanced Risk Management',
    description: 'Complex risk management strategies and implementations.',
    duration: '6-7 hours',
    assignments: 5,
    topics: [
      {
        title: 'Stress Testing',
        description: 'Learn to stress test your trading strategies.'
      },
      {
        title: 'Crisis Management',
        description: 'Preparing for and handling market crises.'
      },
      {
        title: 'Risk Automation',
        description: 'Implementing automated risk management systems.'
      },
      {
        title: 'Continuous Improvement',
        description: 'Methods for ongoing risk management optimization.'
      }
    ]
  }
];
