import React from 'react';
import styles from './CardWhy.module.scss';

export const CardWhy = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Why Use $ZORG?</h3>
        <div className={styles.description}>
          $ZORG represents more than a medium of exchange; it is the cornerstone of our economic and
          cultural identity. Join us in upholding the values of integrity, community, and prosperity
          as we navigate the cosmos together.
        </div>
        <button className={styles.btn}>BUY $ZORG</button>
      </div>
    </div>
  );
};
