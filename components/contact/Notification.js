import ReactDOM from 'react-dom';
import styles from './Notification.module.css';

function Notification({ title, message, status }) {
  let statusClass = '';

  if (status === 'success') {
    statusClass = styles.success;
  }

  if (status === 'error') {
    statusClass = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClass}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.querySelector('#notifications')
  );
}

export default Notification;
