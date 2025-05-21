import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '250+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '15+', label: 'Awards Won' }
];

const experiences = [
  {
    title: 'Senior UI/UX Designer',
    company: 'Google',
    date: '2020 - Present',
    description: 'Leading the design team in creating innovative user interfaces and experiences for Google products.'
  },
  {
    title: 'UI/UX Designer',
    company: 'Facebook',
    date: '2018 - 2020',
    description: 'Designed user interfaces and experiences for Facebook\'s mobile and web applications.'
  }
];

export default function About() {
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
          <span className={styles.subtitle}>- ABOUT</span>
          <h1 className={styles.title}>My Experience</h1>
        </div>

        {/* İstatistikler */}
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statBox}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Deneyimler */}
        <div className={styles.experienceContainer}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <h3 className={styles.experienceTitle}>{exp.title}</h3>
              <div className={styles.experienceCompany}>{exp.company}</div>
              <div className={styles.experienceDate}>{exp.date}</div>
              <p className={styles.experienceDescription}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 