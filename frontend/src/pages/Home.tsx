import { motion } from 'framer-motion'
import profileImg from '../assets/profile.png'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      {/* Sol boşluk Sidebar için */}
      <div className={styles.sidebarSpace} />
      {/* Ana içerik */}
      <div className={styles.contentContainer}>
        <div className={styles.mainContent}>
          {/* Sol: Başlık ve açıklama */}
          <div className={styles.textSection}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className={styles.title}>
                <span className={styles.greeting}>Merhaba, Ben</span>
                <span className={styles.nameHighlight}>Seval!</span>
              </h1>
              <h2 className={styles.roleLine}>
                <span className={styles.roleText}>Java Full Stack Geliştirici</span>
              </h2>
              <div className={styles.locationRow}>
                <span className={styles.locationIcon}>🌍</span>
                <span className={styles.locationChip}>Türkiye</span>
              </div>
              <p className={styles.introText}>
                Modern web ve backend teknolojilerinde uzman, kullanıcı odaklı yazılım geliştiricisi.
              </p>
              <div className={styles.buttonContainer}>
                <button className={styles.projectButton}>
                  <span className={styles.buttonText}>Got a project?</span>
                  <div className={styles.buttonHover}></div>
                </button>
                <button className={styles.downloadButton}>
                  Download CV
                </button>
              </div>
              <div className={styles.contactInfo}>
                <span className={styles.contactText}>+77 022 444 05 05</span>
                <span className={styles.contactText}>support@elisc.com</span>
                <span className={styles.addressText}>Ave Street Avenue, New York</span>
              </div>
            </motion.div>
          </div>
          {/* Sağ: Profil ve dekoratif elementler */}
          <div className={styles.profileSection}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={styles.profileContainer}
            >
              {/* Dekoratif arka plan şekli */}
              <svg
                width="380"
                height="380"
                viewBox="0 0 380 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.backgroundShape}
                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <path d="M190 0C295.228 0 380 84.7715 380 190C380 295.228 295.228 380 190 380C84.7715 380 0 295.228 0 190H190V0Z" fill="url(#gradient)" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="380" y2="380" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#818CF8" />
                    <stop offset="1" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
              <img
                src={profileImg}
                alt="Profile"
                className={styles.profileImage}
              />
              {/* Dekoratif elementler */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`${styles.decorativeElement} ${styles.starIcon}`}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 0L22.3607 13.6393L36 16L22.3607 18.3607L20 32L17.6393 18.3607L4 16L17.6393 13.6393L20 0Z" fill="#6366F1" fillOpacity="0.2"/>
                </svg>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className={`${styles.decorativeElement} ${styles.clockIcon}`}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="2" strokeOpacity="0.2"/>
                  <path d="M16 8V16L20 20" stroke="#6366F1" strokeWidth="2" strokeOpacity="0.2"/>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home 