import { motion } from 'framer-motion';
import styles from '../styles/Skills.module.css';
import Title from '../components/common/Title';

const skills = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: [
      {
        name: 'Java',
        proficiencyLevel: 90,
        description: 'Nesne Yönelimli Programlama (OOP), Spring Framework ve Hibernate ile enterprise uygulamalar'
      },
      {
        name: 'JavaScript/TypeScript',
        proficiencyLevel: 95,
        description: 'Modern web uygulamaları, React, Next.js ve Node.js ile full-stack geliştirme'
      },
      {
        name: 'PHP',
        proficiencyLevel: 85,
        description: 'Web uygulamaları ve e-ticaret sistemleri geliştirme'
      },
      {
        name: 'HTML/CSS',
        proficiencyLevel: 95,
        description: 'Responsive ve modern web arayüzleri tasarımı'
      }
    ]
  },
  {
    category: 'Frameworks & Technologies',
    icon: '⚡',
    skills: [
      {
        name: 'Spring Framework',
        proficiencyLevel: 85,
        description: 'REST API ve mikroservis mimarisi geliştirme'
      },
      {
        name: 'React & Next.js',
        proficiencyLevel: 90,
        description: 'Modern ve performanslı frontend uygulamaları'
      },
      {
        name: 'Node.js',
        proficiencyLevel: 85,
        description: 'Backend API geliştirme ve mikroservis mimarisi'
      },
      {
        name: 'Hibernate',
        proficiencyLevel: 80,
        description: 'Veritabanı işlemleri ve ORM yönetimi'
      },
      {
        name: 'Bootstrap',
        proficiencyLevel: 80,
        description: 'Hızlı ve responsive arayüz geliştirme için popüler CSS framework\'ü'
      }
    ]
  },
  {
    category: 'Database & DevOps',
    icon: '🗄️',
    skills: [
      {
        name: 'PostgreSQL',
        proficiencyLevel: 85,
        description: 'Veritabanı tasarımı, optimizasyonu ve yönetimi'
      },
      {
        name: 'MySQL',
        proficiencyLevel: 80,
        description: 'İlişkisel veritabanı yönetimi ve optimizasyonu'
      },
      {
        name: 'MongoDB',
        proficiencyLevel: 75,
        description: 'NoSQL veritabanı yönetimi ve optimizasyonu'
      },
      {
        name: 'Git & GitHub',
        proficiencyLevel: 90,
        description: 'Versiyon kontrolü ve takım çalışması'
      }
    ]
  },
  {
    category: 'Development Tools & Practices',
    icon: '🛠️',
    skills: [
      {
        name: 'REST API Development',
        proficiencyLevel: 90,
        description: 'API tasarımı, geliştirme ve dokümantasyonu (Swagger)'
      },
      {
        name: 'UI/UX Design',
        proficiencyLevel: 85,
        description: 'Kullanıcı odaklı arayüz tasarımı ve geliştirme'
      },
      {
        name: 'Agile/Scrum',
        proficiencyLevel: 90,
        description: 'Proje yönetimi ve takım çalışması metodolojileri'
      },
      {
        name: 'Testing & Documentation',
        proficiencyLevel: 85,
        description: 'API testi (Postman) ve teknik dokümantasyon'
      }
    ]
  },
  {
    category: 'Specialized Experience',
    icon: '🎯',
    skills: [
      {
        name: 'E-Commerce Development',
        proficiencyLevel: 85,
        description: 'Responsive web ve e-ticaret sistemleri geliştirme'
      },
      {
        name: 'Educational Technology',
        proficiencyLevel: 90,
        description: 'Eğitim teknolojisi platformları geliştirme'
      },
      {
        name: 'Teaching Experience',
        proficiencyLevel: 85,
        description: 'Scratch, Frontend ve Backend (PHP) eğitimi'
      },
      {
        name: 'Problem Solving',
        proficiencyLevel: 95,
        description: 'Kullanıcı odaklı yazılım çözümleri ve analiz'
      }
    ]
  }
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.contentContainer}>
        <Title subtitle="- SKILLS" title="My Expertise" description="Full Stack Developer with expertise in modern web technologies and software development practices" />
        {/* Skills Grid */}
        <div className={styles.skillsContainer}>
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.categorySection}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h2 className={styles.categoryTitle}>{category.category}</h2>
              </div>
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ y: -3 }}
                    className={styles.skillCard}
                  >
                    <div className={styles.skillHeaderCompact}>
                      <h3 className={styles.skillNameCompact}>{skill.name}</h3>
                      <div className={styles.proficiencyContainerCompact}>
                        <div className={styles.proficiencyBarCompact}>
                          <motion.div 
                            className={styles.proficiencyFillCompact}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiencyLevel}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                        <span className={styles.proficiencyLevelCompact}>{skill.proficiencyLevel}%</span>
                      </div>
                    </div>
                    <p className={styles.skillDescriptionCompact}>{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 