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
            I'll probably have an edit for the Zorgus section, something like "Stay Tuned! Mint your Zorgus Passport soon!
          </p>
        </div>
        <h2>Mint your intergalactic passport here</h2>
      </div>
    </section>
  );
};

export default EveryoneSection;
