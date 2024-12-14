'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  }
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className="flex flex-col min-h-screen bg-[#1E293B]" ref={targetRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1E293B] to-[#000000] text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }} />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.div 
                className="space-y-4"
                variants={fadeInLeft}
              >
                <motion.span 
                  className="inline-block px-4 py-2 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Transform Your Trading Journey
                </motion.span>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
                  variants={fadeInUp}
                >
                  Master Forex Trading with Expert Guidance
                </motion.h1>
                <motion.p 
                  className="text-xl text-[#D1D5DB] leading-relaxed"
                  variants={fadeInUp}
                >
                  Join our academy to learn proven trading strategies from experienced
                  traders. Start your journey to financial freedom today.
                </motion.p>
              </motion.div>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/courses"
                    className="bg-[#F59E0B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-block relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get Started Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="border-2 border-[#F59E0B] text-[#F59E0B] px-8 py-4 rounded-lg font-semibold hover:bg-[#F59E0B] hover:text-white transition-colors inline-block group"
                  >
                    <span className="relative z-10">Learn More</span>
                  </Link>
                </motion.div>
              </motion.div>
              {/* Trust Indicators */}
              <motion.div 
                className="flex items-center gap-8 text-sm text-[#D1D5DB]"
                variants={fadeInUp}
              >
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Trusted by 10,000+ Students</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>30+ Expert Instructors</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="hidden lg:block"
              variants={fadeInRight}
              initial="initial"
              animate="animate"
            >
              <motion.div 
                className="bg-[#2D3748] backdrop-blur-lg p-6 rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="aspect-w-16 aspect-h-9 relative h-[400px] bg-gradient-to-br from-[#F59E0B]/20 to-yellow-500/20 rounded-lg"
                  variants={floatingAnimation}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-center space-y-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-5xl font-bold">📈</div>
                      <div className="text-lg font-semibold text-[#D1D5DB]">Live Trading Charts</div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#000000] relative overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #F59E0B 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #F59E0B 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, #F59E0B 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Decorative Background */}
                <motion.div
                  className="absolute inset-0 bg-[#F59E0B]/5 rounded-lg -z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                />
                
                <motion.div 
                  className="p-6 rounded-lg relative"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-4xl font-bold text-[#F59E0B] mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    className="text-[#D1D5DB] relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 }}
                  >
                    {stat.label}
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#F59E0B] w-0 group-hover:w-full transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#1E293B] relative overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Academy</h2>
            <p className="text-[#D1D5DB] max-w-2xl mx-auto">
              Experience the difference with our comprehensive forex trading education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#2D3748] p-8 rounded-lg hover:bg-[#374151] transition-all duration-300 group"
              >
                <div className="mb-6 text-[#F59E0B]">
                  <div className="w-12 h-12">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#F59E0B] transition-colors">{feature.title}</h3>
                <p className="text-[#D1D5DB] mb-6">{feature.description}</p>
                {feature.stats && (
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[#F59E0B] font-bold text-lg">{stat.value}</div>
                        <div className="text-[#D1D5DB] text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">What Our Students Say</h2>
            <p className="text-[#D1D5DB] max-w-2xl mx-auto">
              Hear from our successful students who have transformed their trading journey with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1E293B] p-8 rounded-lg relative"
              >
                <div className="text-[#F59E0B] text-4xl mb-4">"</div>
                <p className="text-[#D1D5DB] mb-6">{testimonial.content}</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-[#D1D5DB]">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1E293B] to-[#000000] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] text-sm font-semibold">
                Start Your Journey Today
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Transform Your Trading Career
              </h2>
              <p className="text-xl text-[#D1D5DB] max-w-3xl mx-auto">
                Join thousands of successful traders who have mastered the forex market through our comprehensive education program.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link
                  href="/courses"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-yellow-500 transform hover:scale-105"
                >
                  <span className="relative">
                    Get Started Now
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-[#F59E0B] text-[#F59E0B] rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-[#F59E0B] hover:text-white transform hover:scale-105"
                >
                  <span className="relative">
                    Schedule a Demo
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </Link>
              </div>
              <div className="flex flex-wrap gap-8 justify-center text-sm text-[#D1D5DB] pt-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span>30-Day Money Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span>Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span>Expert Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1E293B] rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }} />
              </div>
              
              <div className="relative">
                <div className="text-center mb-8">
                  <span className="inline-block px-4 py-2 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] text-sm font-semibold mb-4">
                    Newsletter
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Get Weekly Trading Insights
                  </h2>
                  <p className="text-xl text-[#D1D5DB] max-w-2xl mx-auto">
                    Subscribe to receive expert analysis, trading tips, and exclusive educational content directly in your inbox.
                  </p>
                </div>
                
                <form className="max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-4 rounded-lg bg-[#2D3748] text-white placeholder-[#D1D5DB] border border-[#F59E0B]/20 focus:outline-none focus:border-[#F59E0B] transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-[#F59E0B] text-white rounded-lg font-semibold hover:bg-yellow-500 transition-colors transform hover:scale-105 duration-200 whitespace-nowrap"
                    >
                      Subscribe Now
                    </button>
                  </div>
                  <p className="text-sm text-[#D1D5DB] mt-4 text-center">
                    Join over 10,000+ traders receiving our weekly insights. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ... */}
    </div>
  );
}

const stats = [
  { value: '10,000+', label: 'Active Students' },
  { value: '95%', label: 'Success Rate' },
  { value: '30+', label: 'Expert Instructors' },
  { value: '24/7', label: 'Support Available' },
];

const whyChooseUsFeatures = [
  {
    title: "Expert Instructors",
    description: "Learn from professional traders with over 15+ years of market experience. Our instructors have managed institutional funds and bring real-world expertise to every lesson.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    stats: [
      { label: "Years Experience", value: "15+" },
      { label: "Students Taught", value: "10K+" }
    ]
  },
  {
    title: "Comprehensive Curriculum",
    description: "Access a structured learning path from basics to advanced strategies. Our curriculum is regularly updated to reflect current market conditions and trading techniques.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    stats: [
      { label: "Video Hours", value: "200+" },
      { label: "Trading Strategies", value: "50+" }
    ]
  },
  {
    title: "Lifetime Support",
    description: "Get unlimited access to our trading community, weekly live sessions, and personal mentoring. Our support team is available 24/7 to help you succeed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    stats: [
      { label: "Live Sessions", value: "Weekly" },
      { label: "Support", value: "24/7" }
    ]
  }
];

const testimonials = [
  {
    author: 'John Smith',
    title: 'Professional Trader',
    content: 'The comprehensive curriculum and expert guidance helped me transition from a complete beginner to a confident trader.',
  },
  {
    author: 'Sarah Johnson',
    title: 'Part-time Trader',
    content: 'I can now effectively manage my investments while maintaining my full-time job. The flexible learning schedule was perfect for me.',
  },
  {
    author: 'Michael Chen',
    title: 'Student',
    content: 'The community support and mentorship program have been invaluable in my trading journey. Highly recommended!',
  },
];
