import React from 'react';
import styles from './MotivationSection.module.scss';
import { CardMotivation } from './CardMotivation/CardMotivation';

const DATA = [
  {
    image: '/images/motivations/image1.png',
    title: 'Promote Ethical Trade',
    description: 'The integrity of our trading system reflects the strength of our society.',
  },
  {
    image: '/images/motivations/image2.png',
    title: 'Cultural Diplomacy',
    description:
      'Zorgians aim to share their values and practices with civilizations across the galaxy.',
  },
  {
    image: '/images/motivations/image3.png',
    title: 'Foster Innovation and Uniqueness',
    description:
      'Success in Zorg is measured by contributions to societal progress and cultural enrichment.',
  },
];

export default function MotivationSection() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Motivations of the zorg nation</h3>
        {DATA.map((item, i) => {
          return <CardMotivation key={i} {...item} />;
        })}
      </div>
    </section>
  );
}
