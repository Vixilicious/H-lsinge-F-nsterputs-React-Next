import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Footer from '@/Components/Footer/Footer';
import LandingPage from '@/components/LandingPage/LandingPage';
import Navbar from '@/components/Navbar/Navbar';
import Tjanster from '@/Components/Tjanster/Tjanster';
import React, { useRef } from 'react';

export default function index() {
  const tjansterRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 120 }}>
      <div style={{ height: '100vh' }}>
        <Navbar
          tjansterRef={tjansterRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
        <LandingPage aboutRef={aboutRef} />
      </div>
      <Tjanster ref={tjansterRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}
