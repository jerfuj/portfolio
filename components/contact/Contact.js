import styles from './Contact.module.css';

function Contact({ contactRef }) {
  return (
    <section ref={contactRef} className={styles.contactContainer}>
      <h1 className={styles.header}>Contact Me</h1>
    </section>
  )
};

export default Contact;