'use client';

import { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import GallerySection from '@/components/GallerySection';
import RecreatingMagicSection from '@/components/RecreatingMagicSection';
import MeetTheCastSection from '@/components/MeetTheCastSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EventsSection from '@/components/EventsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ClientSection from '@/components/ClientSection';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background overflow-visible">
      <Nav isScrolled={isScrolled} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ClientSection />
        <EventsSection />
        <RecreatingMagicSection />
        <GallerySection />
        <MeetTheCastSection />
        <CTASection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
