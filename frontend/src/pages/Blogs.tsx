import { motion } from 'framer-motion';
import styles from '../styles/Blogs.module.css';
import BlogItemCard from '../common/BlogItemCard';
import { blogs } from '../types/blogs.ts';
import type { Blog } from '../types/blogs.ts';

export default function Blogs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.contentContainer}>
        {/* Başlık ve Get in touch */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.subtitle}>- BLOG</span>
            <h1 className={styles.title}>My blog & news</h1>
          </div>
          <button className={styles.getInTouch}>Get in touch</button>
        </div>

        {/* Blog kartları */}
        <div className={styles.blogsGrid}>
          {blogs.map((blog: Blog, index: number) => (
            <BlogItemCard
              key={blog.id}
              date={blog.date}
              title={blog.title}
              excerpt={blog.excerpt}
              link={blog.link}
              image={blog.image}
              highlight={index === 1} // İkinci blog kartı highlight olacak
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
} 