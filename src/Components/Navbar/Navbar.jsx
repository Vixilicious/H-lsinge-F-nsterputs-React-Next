import React, { useRef } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ tjansterRef, aboutRef, contactRef }) {
  return (
    <div className={styles['nav-container']}>
      <div className={styles['nav-logoRes']}>
        <img
          className={styles['logoRes']}
          src='/assets/Images/Icon-transparent.png'
          alt=''
        />
      </div>
      <nav className={styles['navbar']}>
        <div className={styles['nav-logo']}>
          <img
            className={styles['logo']}
            src='/assets/Images/HF-logo-white.png'
            alt=''
          />
        </div>
        <div className={styles['h3-container']}>
          <div className={styles['nav-kt']}>
            <h3
              className={styles['nav-h3']}
              onClick={() => {
                const y =
                  tjansterRef.current.getBoundingClientRect().top +
                  scrollY;
                window.scrollTo({
                  top: y - 80 - 170,
                  behavior: 'smooth',
                });
              }}
            >
              Tjänster
            </h3>
          </div>
          <div className={styles['nav-kt']}>
            <h3
              className={styles['nav-h3']}
              onClick={() => {
                const y =
                  aboutRef.current.getBoundingClientRect().top + scrollY;
                window.scrollTo({
                  top: y - 80 - 170,
                  behavior: 'smooth',
                });
              }}
            >
              Kontakta oss
            </h3>
          </div>
          <div className={styles['nav-gold']}>
            <h3
              className={styles['nav-h3']}
              onClick={() => {
                const y =
                  contactRef.current.getBoundingClientRect().top + scrollY;
                window.scrollTo({
                  top: y - 80 - 170,
                  behavior: 'smooth',
                });
              }}
            >
              Boka här
            </h3>
          </div>
        </div>
      </nav>
    </div>
  );
}
