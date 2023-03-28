import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import LandingPage from '@/components/LandingPage/LandingPage';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

export default function index() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
      <Contact />
    </div>
  );
}
