import React from 'react';
import styles from '../../styles/Skills.module.css';

interface TitleProps {
  subtitle: string;
  title: string;
  description?: string;
}

const Title: React.FC<TitleProps> = ({ subtitle, title, description }) => (
  <div className={styles.header}>
    <span className={styles.subtitle}>{subtitle}</span>
    <h1 className={styles.title}>{title}</h1>
    {description && <p className={styles.subtitleText}>{description}</p>}
  </div>
);

export default Title; 