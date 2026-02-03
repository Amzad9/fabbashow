'use client';

import { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';
import MeetTheCastSection from '@/components/MeetTheCastSection';

export default function EventsPage() {
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
        <EventsSection />
        <MeetTheCastSection />
      </main>
      <Footer />
    </div>
  );
}
