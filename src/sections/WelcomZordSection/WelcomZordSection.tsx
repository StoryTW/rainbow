import React from 'react';
import styles from './WelcomZordSection.module.scss';
import Image from 'next/image';

const WelcomZordSection = () => {
  return (
    <section className={styles.root}>
      <Image
        src={'/images/greenElLeft.svg'}
        width={249}
        height={250}
        alt=''
        className={styles.greenElLeft}
      />
      <Image
        src={'/images/greenElRight.svg'}
        width={213}
        height={215}
        alt=''
        className={styles.greenElRight}
      />
      <Image
        src={'/images/monsterRight.svg'}
        width={305}
        height={305}
        alt=''
        className={styles.monsterRight}
      />
      <Image
        src={'/images/monsterLeft.svg'}
        width={387}
        height={387}
        alt=''
        className={styles.monsterLeft}
      />
      <Image
        src={'/images/figureLeft.png'}
        width={255}
        height={369}
        alt=''
        className={styles.figureLeft}
      />
      <Image
        src={'/images/figureRight.png'}
        width={447}
        height={251}
        alt=''
        className={styles.figureRight}
      />
      <Image
        src={'/images/bottomPurpleElement.png'}
        width={1440}
        height={70}
        alt=''
        className={styles.bottomPurpleElement}
      />
      <div className={styles.topText}>
        <h2>Welcome to the Zorg Nation</h2>
        <h1>The Official Currency of a Sovereign Alien Civilization</h1>
      </div>
      <div className={styles.centerText}>
        <h1>In the far reaches of Quantum Quadrant 9 lies Zorg</h1>
        <p>
          A distinguished civilization founded on the principles of innovation, trade, and cosmic
          harmony. Here, commerce is a respected art form, and $ZORG stands as the universal
          currency that binds our society together. The Zorg Nation is governed by the revered
          Constitution of Zorg, a testament to our enduring values and unique way of life.
        </p>
      </div>
    </section>
  );
};

export default WelcomZordSection;
