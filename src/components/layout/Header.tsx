'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses', children: [
    { name: 'Beginner Forex', href: '/courses/beginner-forex' },
    { name: 'Technical Analysis', href: '/courses/technical-analysis' },
    { name: 'Risk Management', href: '/courses/risk-management' },
  ]},
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1E293B] shadow-lg' : 'bg-transparent'
    }`}>
      <Disclosure as="nav" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {({ open }) => (
          <>
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#F59E0B] to-yellow-500 bg-clip-text text-transparent">
                  Forex Academy
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                        pathname === item.href
                          ? 'text-[#F59E0B]'
                          : 'text-[#D1D5DB] hover:text-[#F59E0B]'
                      }`}
                    >
                      {item.name}
                      {item.children && (
                        <span className="inline-block ml-1">▼</span>
                      )}
                      {pathname === item.href && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F59E0B]"
                          layoutId="underline"
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.children && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-48 py-2 mt-1 bg-[#1E293B] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block px-4 py-2 text-sm ${
                              pathname === child.href
                                ? 'text-[#F59E0B] bg-[#2D3748]'
                                : 'text-[#D1D5DB] hover:bg-[#2D3748]'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex lg:items-center lg:space-x-4">
                <Link
                  href="/login"
                  className="text-[#D1D5DB] hover:text-[#F59E0B] px-4 py-2 text-sm font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-[#F59E0B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500 transition-colors"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-[#D1D5DB] hover:text-[#F59E0B] hover:bg-[#2D3748]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <Transition
              as={motion.div}
              show={open}
              enter="transition duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Disclosure.Button
                        as={Link}
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          pathname === item.href
                            ? 'text-[#F59E0B] bg-[#2D3748]'
                            : 'text-[#D1D5DB] hover:bg-[#2D3748]'
                        }`}
                      >
                        {item.name}
                      </Disclosure.Button>
                      {item.children && (
                        <div className="pl-4 space-y-1">
                          {item.children.map((child) => (
                            <Disclosure.Button
                              key={child.name}
                              as={Link}
                              href={child.href}
                              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                pathname === child.href
                                  ? 'text-[#F59E0B] bg-[#2D3748]'
                                  : 'text-[#D1D5DB] hover:bg-[#2D3748]'
                              }`}
                            >
                              {child.name}
                            </Disclosure.Button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 space-y-2">
                    <Disclosure.Button
                      as={Link}
                      href="/login"
                      className="block w-full px-3 py-2 text-center rounded-md text-[#D1D5DB] hover:bg-[#2D3748] font-medium"
                    >
                      Login
                    </Disclosure.Button>
                    <Disclosure.Button
                      as={Link}
                      href="/signup"
                      className="block w-full px-3 py-2 text-center rounded-md bg-[#F59E0B] text-white hover:bg-yellow-500 font-medium"
                    >
                      Get Started
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </header>
  );
}
