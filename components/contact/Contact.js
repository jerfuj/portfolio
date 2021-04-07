import { useState, useEffect } from 'react';
import * as emailjs from 'emailjs-com'
import Image from 'next/image';
import Notification from './Notification';
import styles from './Contact.module.css';
import PropTypes from 'prop-types';

function Contact({ contactRef }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState();

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000)

      return () => clearTimeout(timer);
    }
  },[status])

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus('pending');

    const templateParams = {
      from_name: name,
      email,
      message
    }

    emailjs.send(
      'service_vuc6pd2',
      'template_54us8tm',
      templateParams,
      'user_v5NQLoLcwDuaIOnJziJfY'
    )
    .then(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch(() => {
      setStatus('error');
    })
  } 

  let notification;

  if (status === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending',
      message: 'Sending message...'
    };
  }

  if (status === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Thank you for your message!'
    };
  }

  if (status === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: 'Something went wrong...'
    };
  }

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

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formField}>
          <label>Name <input type="text" onChange={handleNameChange} value={name} /></label>   
        </div>
        <div className={styles.formField}>
          <label>Email <input type="email" onChange={handleEmailChange} value={email} /></label>
        </div>
        <div className={styles.formField}>
          <label>Message <textarea rows="8" onChange={handleMessageChange} value={message} ></textarea></label>
        </div>
        <div className={styles.formField}>
          <button className={styles.btn} type="submit">
            <span className={styles.btnText}>Send</span>
          </button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  )
}

Contact.propTypes = {
  contactRef: PropTypes.instanceOf(Object).isRequired
}

export default Contact;