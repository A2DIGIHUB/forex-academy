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
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1E293B]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
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
                    <div key={item.name} className="relative group">
                      {item.children ? (
                        <>
                          <button
                            onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                            className={`px-3 py-2 text-sm font-medium transition-colors ${
                              pathname === item.href
                                ? 'text-[#F59E0B]'
                                : 'text-gray-300 hover:text-white'
                            }`}
                          >
                            {item.name}
                          </button>
                          {openDropdown === item.name && (
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#2D3748] ring-1 ring-black ring-opacity-5">
                              <div className="py-1" role="menu">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#374151] hover:text-white"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={`px-3 py-2 text-sm font-medium transition-colors ${
                            pathname === item.href
                              ? 'text-[#F59E0B]'
                              : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center lg:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2D3748]">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              {/* Mobile menu */}
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="lg:hidden absolute top-full left-0 right-0 bg-[#1E293B]/95 backdrop-blur-sm shadow-lg">
                  <div className="px-4 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.children ? (
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-[#2D3748] rounded-md"
                                >
                                  <span>{item.name}</span>
                                  <svg
                                    className={`${
                                      open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-gray-300`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-2 pb-2 space-y-1">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.name}
                                      href={child.href}
                                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-[#2D3748] rounded-md"
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ) : (
                          <Link
                            href={item.href}
                            className={`block px-3 py-2 text-base font-medium rounded-md ${
                              pathname === item.href
                                ? 'text-[#F59E0B] bg-[#2D3748]'
                                : 'text-gray-300 hover:text-white hover:bg-[#2D3748]'
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </header>
      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-20"></div>
    </>
  );
}
