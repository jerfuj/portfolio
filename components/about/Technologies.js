import Image from 'next/image';
import styles from './About.module.css';

function Technologies() {
  return (
    <div className={styles.techContainer}>
      <h2>Technologies</h2>
      <div className={styles.logosContainer}>
        <div className={styles.imgContainer}>
          <Image
            alt="html5"
            src="/images/html-logo.svg"
            // height={512}
            // width={512}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="css"
            src="/images/css-logo.svg"
            // height={512}
            // width={363}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="javascript"
            src="/images/js-logo.svg"
            // height={560}
            // width={397}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="react"
            src="/images/react-logo.svg"
            // height={362}
            // width={512}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="next.js"
            src="/images/next-logo.svg"
            // height={124}
            // width={207}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="node.js"
            src="/images/node-logo.svg"
            // height={361}
            // width={590}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="express.js"
            src="/images/express-logo.png"
            // height={141}
            // width={465}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="git"
            src="/images/git-logo.svg"
            // height={97}
            // width={97}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="mysql"
            src="/images/mysql-logo.png"
            // height={115}
            // width={170}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="mongoDB"
            src="/images/mongodb-logo.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            alt="postgreSQL"
            src="/images/postgres-logo.svg"
            layout="fill"
            objectFit="contain"
            // height={557}
            // width={540}
          />
        </div>
      </div>
    </div>
  )
};

export default Technologies;