import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Successful Students', value: '5000+' },
    { label: 'Trading Strategies', value: '50+' },
    { label: 'Expert Instructors', value: '15+' },
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Best Forex Education Platform',
      description: 'Awarded by International Trading Association',
    },
    {
      year: '2022',
      title: 'Excellence in Trading Education',
      description: 'Global Finance Education Awards',
    },
    {
      year: '2021',
      title: 'Most Innovative Trading Academy',
      description: 'FinTech Innovation Awards',
    },
  ];

  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & Lead Instructor',
      image: '/images/team/john.jpg',
      description: 'Former Wall Street trader with 15+ years of experience in forex markets. Certified Financial Analyst and professional educator.',
      expertise: ['Technical Analysis', 'Risk Management', 'Market Psychology'],
      social: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Technical Analysis',
      image: '/images/team/sarah.jpg',
      description: 'Expert in advanced technical analysis with a background in quantitative finance. Previously worked at major investment banks.',
      expertise: ['Chart Patterns', 'Indicator Development', 'Trading Systems'],
      social: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Michael Chen',
      role: 'Risk Management Specialist',
      image: '/images/team/michael.jpg',
      description: 'Specialized in developing risk management strategies and portfolio optimization. Former hedge fund risk analyst.',
      expertise: ['Portfolio Management', 'Risk Assessment', 'Trading Psychology'],
      social: {
        twitter: '#',
        linkedin: '#',
      },
    },
  ];

  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover opacity-30"
        >
          <source src="/videos/trading-background.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            About Forex Academy
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Empowering traders with comprehensive education and practical skills
            since 2013.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                At Forex Academy, we are dedicated to providing high-quality forex
                education that empowers individuals to become successful traders.
                Our comprehensive curriculum combines theoretical knowledge with
                practical experience, ensuring our students are well-equipped for
                the dynamic world of forex trading.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#F59E0B] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Expert-led instruction from industry professionals</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#F59E0B] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Hands-on practice with real market scenarios</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[#F59E0B] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Comprehensive risk management strategies</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/about/mission.jpg"
                alt="Trading desk setup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1E293B] p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-bold text-[#F59E0B] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Achievements
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#F59E0B]"></div>
            
            {/* Achievement Items */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className="w-full lg:w-5/12">
                    <div className="bg-[#1E293B] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <div className="text-[#F59E0B] font-bold mb-2">
                        {achievement.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Meet Our Expert Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#0F172A] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-[#F59E0B] mb-4">{member.role}</div>
                  <p className="text-gray-300 mb-4">{member.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-[#1E293B] text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.twitter}
                      className="text-gray-300 hover:text-[#F59E0B]"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-gray-300 hover:text-[#F59E0B]"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description:
                  'We strive for excellence in everything we do, from our curriculum to our teaching methods.',
                icon: (
                  <svg
                    className="h-12 w-12 text-[#F59E0B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Integrity',
                description:
                  'We maintain the highest standards of honesty and ethical behavior in our teaching and business practices.',
                icon: (
                  <svg
                    className="h-12 w-12 text-[#F59E0B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Innovation',
                description:
                  'We continuously evolve our teaching methods and embrace new technologies to provide the best learning experience.',
                icon: (
                  <svg
                    className="h-12 w-12 text-[#F59E0B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-[#1E293B] p-6 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2013, Forex Academy emerged from a vision to transform
                  forex education. We recognized the need for a comprehensive,
                  practical approach to trading education that goes beyond theory.
                </p>
                <p>
                  Our journey began with a small team of passionate traders and
                  educators who believed in making professional-grade trading
                  education accessible to everyone. Today, we've grown into a
                  leading institution in forex education, helping thousands of
                  students achieve their trading goals.
                </p>
                <p>
                  What sets us apart is our commitment to practical learning,
                  personalized mentorship, and continuous innovation in our
                  teaching methods. We combine traditional trading wisdom with
                  cutting-edge market analysis tools and techniques.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/about/story.jpg"
                alt="Our journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 mb-8">
            Join our academy today and take the first step towards becoming a
            successful forex trader.
          </p>
          <button className="bg-[#F59E0B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D97706] transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E293B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our academy today and learn from the best in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F59E0B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D97706] transition-colors">
              Enroll Now
            </button>
            <button className="border-2 border-[#F59E0B] text-[#F59E0B] px-8 py-3 rounded-lg font-semibold hover:bg-[#F59E0B] hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
