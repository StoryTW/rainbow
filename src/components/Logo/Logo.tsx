import React from 'react';
import styles from './Logo.module.scss';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href={'/'} className={styles.root}>
      Zorg Nation
    </Link>
  );
};
