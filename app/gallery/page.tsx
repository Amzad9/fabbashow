'use client';

import { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background overflow-x-hidden">
      <Nav isScrolled={isScrolled} />
      <main id="main-content" tabIndex={-1}>
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
