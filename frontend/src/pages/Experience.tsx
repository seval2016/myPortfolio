import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';
import { experiences } from '../data/experiences';

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '250+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '15+', label: 'Awards Won' }
];

export default function Experience() {
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
          <span className={styles.subtitle}>- EXPERIENCE</span>
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
              <h3 className={styles.experienceTitle}>{exp.title} <span className={styles.experienceType}>({exp.employmentType})</span></h3>
              <div className={styles.experienceCompany}>{exp.company}</div>
              <div className={styles.experienceDate}>{exp.startDate} - {exp.endDate || (exp.current ? 'Present' : '')}</div>
              {exp.location && <div className={styles.experienceLocation}>{exp.location}</div>}
              <p className={styles.experienceDescription}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 