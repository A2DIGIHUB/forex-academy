import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About Forex Academy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering traders with comprehensive education and practical skills
              for success in the forex market.
            </p>
          </div>
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

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'Lead Instructor',
                image: '/images/team/john.jpg',
                description:
                  '15+ years of forex trading experience. Certified financial analyst and professional trader.',
              },
              {
                name: 'Sarah Johnson',
                role: 'Technical Analysis Expert',
                image: '/images/team/sarah.jpg',
                description:
                  'Specializes in advanced technical analysis and chart patterns. Former institutional trader.',
              },
              {
                name: 'Michael Chen',
                role: 'Risk Management Specialist',
                image: '/images/team/michael.jpg',
                description:
                  'Expert in developing risk management strategies and portfolio optimization.',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[#F59E0B] mb-2">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
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
    </div>
  );
}
