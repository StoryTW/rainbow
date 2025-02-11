import React from 'react';
import styles from './Socials.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const DATA = [
  {
    src: '/images/socials/telegram.svg',
    href: '/',
    alt: 'telegram',
  },
  {
    src: '/images/socials/twitter.svg',
    href: '/',
    alt: 'twitter',
  },
  {
    src: '/images/socials/row.svg',
    href: '/',
    alt: 'row',
  },
];

export const Socials = () => {
  return (
    <div className={styles.root}>
      {DATA.map((item, index) => {
        return (
          <Link key={index} href={item.href} className={styles.link}>
            <Image src={item.src} width={36} height={36} alt={item.alt} />
          </Link>
        );
      })}
    </div>
  );
};
