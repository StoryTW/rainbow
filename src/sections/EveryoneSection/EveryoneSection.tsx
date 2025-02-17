import React from 'react';
import styles from './EveryoneSection.module.scss';
import Image from 'next/image';

const EveryoneSection = () => {
  return (
    <section className={styles.root}>
      <Image
        src={'/images/everyBottom.png'}
        width={1440}
        height={70}
        alt=''
        className={styles.everyBottom}
      />
      <Image src={'/images/carts3.svg'} width={1642} height={334} alt='' className={styles.carts} />
      <div className={styles.content}>
        <Image
          src={'/images/leftElEveryone.png'}
          width={253}
          height={193}
          alt=''
          className={styles.leftEl}
        />
        <Image
          src={'/images/rightElEveryone.png'}
          width={249}
          height={75}
          alt=''
          className={styles.rightEl}
        />
        <h1>Everyone needs ZORGUS</h1>
        <div className={styles.innerContent}>
          <Image src={'/images/personEveryone.svg'} width={200} height={134} alt='' />
          <p>
            You're required by the law of our country to have this!
            <br />
            Everyone knows what it is, so there's no reason to explain it.
          </p>
        </div>
        <h2>Stay Tuned! Mint your Zorgus Passport soon!</h2>
      </div>
    </section>
  );
};

export default EveryoneSection;
