import Image from 'next/image';
import styles from './Contact.module.css';

function Contact({ contactRef }) {
  return (
    <section ref={contactRef} className={styles.contactContainer}>
      <h2 className={styles.header}>Get in touch!</h2>
      <div className={styles.linksContainer}>
        <a href="https://www.linkedin.com/in/jeremyfujimoto/" target="blank" className={styles.imgContainer}>
          <Image
            alt="linkedin"
            src="/images/linkedin-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </a>
        <a href="https://github.com/jerfuj" target="blank" className={styles.imgContainer}>
          <Image
            alt="github"
            src="/images/github-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </a>
      </div>
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
          <button className={styles.btn} type="submit">
            <span className={styles.btnText}>Send</span>
          </button>
        </div>
      </form>
    </section>
  )
};

export default Contact;