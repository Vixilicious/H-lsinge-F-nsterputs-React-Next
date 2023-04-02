import { forwardRef } from 'react';
import styles from './Contact.module.css';

const Contact = forwardRef((props, ref) => {
  return (
    <div className={styles['contact-page']} ref={ref}>
      <div className={styles['contact-form']}>
        <div className={styles['contact-header']}>
          <h5 className={styles['book-here']}>Boka här</h5>
          <img
            className={styles['down-arrow']}
            src='/assets/Images/down-arrow.png'
            alt=''
          />
        </div>
        <div className={styles['phone-mail-container']}>
          <div className={styles['phone']}>
            <img
              className={styles['phone-mail-icon']}
              src='/assets/Images/phone.png'
              alt=''
            />
            <p className={styles['phone-p']}>Via telefon: </p>
            <a className={styles['a-phone']} href='tel:+46723177375'>
              072 317 73 75
            </a>
          </div>
          <div className={styles['mail']}>
            <img
              className={styles['phone-mail-icon']}
              src='/assets/Images/email.png'
              alt=''
            />
            <p className={styles['mail-p']}>Via E-mail: </p>
            <a
              className={styles['a-mail']}
              href='mailto:jorgen.wennberg71@gmail.com'
            >
              Jorgen.Wennberg71@gmail.com
            </a>
          </div>
        </div>
      </div>
      <img
        className={styles['gratis-offert']}
        src='/assets/Images/gratis-offert.png'
        alt=''
      />
    </div>
  );
});

Contact.displayName = 'Contact';
export default Contact;
