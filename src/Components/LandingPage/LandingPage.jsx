import React, { useRef } from 'react';

const LandingPage = () => {
  const aboutPage = useRef();
  return (
    <div className='landingPage'>
      <video className='video' autoPlay loop muted>
        <source src='/assets/dark-opacity.mp4' type='video/mp4' />
      </video>
      <div className='lp-text-container'>
        <div className='lp-all-content'>
          <h1>
            Välkommen till <br />
            <span>Hälsinge Fönsterputs!</span>
          </h1>
          <img
            className='gold-line'
            src='/assets/Images/gold-bar.png'
            alt=''
          />
          <h3 className='lp-h3'>
            Vi ger dina fönster en riktig <span>"Wow"</span> faktor!
          </h3>
        </div>
        <section className='svg-img'>
          <svg
            onClick={() =>
              aboutPage.current.scrollIntoView({ behavior: 'smooth' })
            }
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0'
            version='1.1'
            viewBox='0 0 16 16'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M8 15.5l7.5-7.5h-4.5v-8h-6v8h-4.5z'></path>
          </svg>
        </section>
      </div>
      <div className='about-page' ref={aboutPage}></div>
    </div>
  );
};

export default LandingPage;
