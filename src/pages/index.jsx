import About from '@/Components/About/About';
import Contact from '@/Components/Contact/Contact';
import Footer from '@/Components/Footer/Footer';
import LandingPage from '@/Components/LandingPage/LandingPage';
import Navbar from '@/Components/Navbar/Navbar';
import Tjanster from '@/Components/Tjanster/Tjanster';
import React, { useRef } from 'react';
import Head from 'next/head';

export default function App() {
  const tjansterRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Alltid glasklart!</title>
        <link rel='icon' href='/favicon-16x16.png' />

        <meta
          name='description'
          content='Hällsinges pålitligaste fönsterputs! Alltid Glasklart!'
        />
        <meta
          name='keywords'
          content='Fönsterputs, Hällsinge, Hudiksvall, hällsingefönsterputs, puts, smuts, rena, fönster, gratis, offert,fönsterputs '
        />
      </Head>
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
    </div>
  );
}
