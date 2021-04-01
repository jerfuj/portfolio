import styles from './Contact.module.css';

function Contact({ contactRef }) {
  return (
    <section ref={contactRef} className={styles.contactContainer}>
      <h1 className={styles.header}>Get in touch!</h1>
      <form name="contact" method="POST" data-netlify="true" className={styles.form}>
        <div className={styles.formField}>
          <label>Name <input type="text" name="name" /></label>   
        </div>
        <div className={styles.formField}>
          <label>Email <input type="email" name="email" /></label>
        </div>
        <div className={styles.formField}>
          <label>Message <textarea name="message" rows="8"></textarea></label>
        </div>
        <div className={styles.formField}>
          <button className={styles.btn} type="submit">Send</button>
        </div>
      </form>
    </section>
  )
};

export default Contact;