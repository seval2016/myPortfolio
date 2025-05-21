import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles/BlogDetail.module.css';
import { blogs } from '../types/blogs.ts';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1>Blog post not found</h1>
          <Link to="/blogs" className={styles.backButton}>
            <svg className={styles.backIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Resmi import et
  const imagePath = new URL(blog.image, import.meta.url).href;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <span className={styles.subtitle}>- BLOG</span>
          <h1 className={styles.title}>{blog.title}</h1>
          <div className={styles.dateRow}>
            <svg className={styles.dateIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className={styles.date}>{blog.date}</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={imagePath} alt={blog.title} className={styles.blogImage} />
        </div>

        <div 
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
        />

        <Link to="/blogs" className={styles.backButton}>
          <svg className={styles.backIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blogs
        </Link>
      </div>
    </motion.div>
  );
} 