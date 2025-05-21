import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Works.module.css';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Dashboard UI',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Works() {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 4);
  };

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
          <span className={styles.subtitle}>- PORTFOLIO</span>
          <h1 className={styles.title}>My Works</h1>
        </div>

        {/* Proje kartları */}
        <div className={styles.projectsGrid}>
          {projects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects butonu */}
        {visibleProjects < projects.length && (
          <div className={styles.viewAllContainer}>
            <button onClick={loadMore} className={styles.viewAllButton}>
              <span>View All Projects</span>
              <svg className={styles.viewAllIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
} 