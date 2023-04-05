import styles from './LandingPage.module.css';

const LandingPage = ({ aboutRef }) => {
  return (
    <div className={styles['bg-container']}>
      <img
        className={styles['og-bg']}
        src='/assets/Images/og-bg-window.png'
        alt=''
      />
      <div className={styles['lp-text-container']}>
        <div className={styles['lp-all-content']}>
          <h1 className={styles['h1']}>
            Välkommen till <br />
            <span>Hälsinge Fönsterputs!</span>
          </h1>
          <h2 className={styles['h2']}>- Alltid glasklart! -</h2>
          <img
            className={styles['gold-line']}
            src='/assets/Images/gold-bar.png'
            alt=''
          />
          <h3 className={styles['lp-h3']}>
            Vi ger dina fönster en riktig <span>&#34;Wow&#34; </span>
            faktor!
          </h3>
        </div>
        <section className={styles['svg-img']}>
          <svg
            className={styles['svg']}
            onClick={() => {
              const y =
                aboutRef.current.getBoundingClientRect().top + scrollY;
              window.scrollTo({
                top: y - 80 - 170,
                behavior: 'smooth',
              });
            }}
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
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
    </div>
  );
};

export default LandingPage;
