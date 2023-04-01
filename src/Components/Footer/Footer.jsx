import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles['footer-container']}>
      <footer className={styles['footer']}>
        <div className={styles['footer-2023']}>
          <p className={styles['footer-p']}>© 2023 Hälsinge Fönsterputs</p>
        </div>
        <div className={styles['vic-container']}>
          <a className={styles['vic']} href='mailto:victoria@askander.se'>
            Designad av: Vic Askander
          </a>
        </div>
      </footer>
    </div>
  );
}
