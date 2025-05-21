import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

const contactInfo = [
  {
    icon: (
      <svg className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    value: 'info@example.com'
  },
  {
    icon: (
      <svg className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Phone',
    value: '+1 234 567 890'
  },
  {
    icon: (
      <svg className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Location',
    value: 'New York, USA'
  }
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.contentContainer}>
        {/* Başlık */}
        <div className={styles.header}>
          <span className={styles.subtitle}>- CONTACT</span>
          <h1 className={styles.title}>Get in touch</h1>
        </div>

        {/* İletişim bilgileri */}
        <div className={styles.contactInfoGrid}>
          {contactInfo.map((info, index) => (
            <div key={index} className={styles.contactInfoCard}>
              {info.icon}
              <h3 className={styles.contactInfoTitle}>{info.title}</h3>
              <p className={styles.contactInfoValue}>{info.value}</p>
            </div>
          ))}
        </div>

        {/* İletişim formu */}
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Subject" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Your Message" className={styles.textarea} rows={5}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
} 