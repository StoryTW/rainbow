import React from 'react';
import styles from './WhyZorgSection.module.scss';
import { CardWhy } from './CardWhy/CardWhy';

export default function WhyZorgSection() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.imageWrapper} />

        <CardWhy />
      </div>
    </section>
  );
}
