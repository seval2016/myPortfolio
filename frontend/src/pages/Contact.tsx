import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        {/* Left: Contact Info */}
        <div className={styles.infoSection}>
          <span className={styles.subtitle}>- LET'S CONNECT</span>
          <h1 className={styles.title}>Get in touch</h1>
          <p className={styles.description}>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me.
          </p>
          <div className={styles.infoList}>
            <a href="tel:+987987654321" className={styles.infoLink}>(+987) 987 654 321</a>
            <a href="mailto:info@elisc.com" className={styles.infoLink}>info@elisc.com</a>
            <a href="https://maps.google.com/?q=32+Avenuie+Florida,+USA" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
              32 Avenuie Florida, USA
            </a>
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className={styles.formSection} onSubmit={e => e.preventDefault()}>
          <input className={styles.input} type="text" placeholder="Enter your name" required />
          <input className={styles.input} type="email" placeholder="Your email" required />
          <textarea className={styles.textarea} placeholder="Write something..." required />
          <button className={styles.submitButton} type="submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 