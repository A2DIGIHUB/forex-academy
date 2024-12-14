'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#1E293B] text-white">
      <Header />
      <main className="flex-grow flex flex-col relative">
        <div className="flex-grow">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
