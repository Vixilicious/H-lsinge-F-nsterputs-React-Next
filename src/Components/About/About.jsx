import React, { forwardRef } from 'react';
import styles from './About.module.css';

const About = forwardRef((props, ref) => {
  return (
    <div className={styles['about-page']} ref={ref}>
      <div className={styles['about-container']}>
        <img
          className={styles['se-bra-img']}
          src='/assets/Images/se-bra-ut.png'
          alt=''
        />
        <div className={styles['about-text']}>
          <h4 className={styles['about-text-h4']}>
            Effektiv och högkvalitativ fönsterputs
          </h4>
          {/* <img
            className='gold-spray'
            src='/assets/Images/gold-spray-transparent.png'
            alt=''
          /> */}
          <p className={styles['about-p']}>
            Vi erbjuder en effektiv och högkvalitativ fönsterputstjänst som
            gör skillnad. Vi förstår vikten av rena fönster för både ditt
            välbefinnande och ditt proffesionella intryck. Med vår
            erfarenhet och expertis garanterar vi en noggrann och säker
            fönsterputs som höjer standarden för både ditt hem och din
            arbetsplats.
            <br />
            <br />
            Vår dedikerade och erfarna personal använder endast de bästa
            verktygen och tekniken för att säkerställa att dina fönster är
            rena och skinande. Vi strävar efter att alltid leverera en
            tjänst med kvalité som möter dina specifika behov och önskemål.{' '}
            <br />
            <br />
            Letar du efter en pålitlig fönsterputstjänst? Då är du mer än
            välkommen till oss på hälsinge fönsterputs! kontakta oss redan
            idag för en gratis offert och upplev skillnaden själv!
          </p>
        </div>
      </div>
    </div>
  );
});

About.displayName = 'About';
export default About;
