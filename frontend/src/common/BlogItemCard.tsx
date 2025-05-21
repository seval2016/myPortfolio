import React from 'react';
import styles from '../styles/Blogs.module.css';

interface BlogItemCardProps {
  date: string;
  title: string;
  excerpt: string;
  link: string;
  image: string;
  highlight?: boolean;
}

const BlogItemCard: React.FC<BlogItemCardProps> = ({ date, title, excerpt, link, image, highlight }) => {
  // Resmi import et
  const imagePath = new URL(image, import.meta.url).href;

  return (
    <div className={highlight ? styles.blogCardHighlight : styles.blogCard}>
      <div className={styles.blogCardImageContainer}>
        <img src={imagePath} alt={title} className={styles.blogCardImage} />
      </div>
      <div className={styles.blogCardContent}>
        <div className={styles.blogDateRow}>
          <svg className={styles.blogDateIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className={styles.blogDate}>{date}</span>
        </div>
        <div className={styles.blogTitle}>{title}</div>
        <div className={styles.blogExcerpt}>{excerpt}</div>
        <a href={link} className={styles.blogLearnMore}>
          Learn More
          <span className={styles.blogLearnMoreIcon}>
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 5-7 5V5z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default BlogItemCard; 