import React, { FC } from 'react';
import styles from './CardMotivation.module.scss';
import Image from 'next/image';

interface ICardMotivation {
  image: string;
  title: string;
  description: string;
}

export const CardMotivation: FC<ICardMotivation> = ({ image, description, title }) => {
  return (
    <div className={styles.root}>
      <Image src={image} width={160} height={160} alt={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
