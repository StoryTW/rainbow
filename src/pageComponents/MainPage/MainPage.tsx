import StartBannerSection from '@/sections/StartBannerSection/StartBannerSection';
import WelcomZordSection from '@/sections/WelcomZordSection/WelcomZordSection';
import React from 'react';
import styles from './MainPage.module.scss';
import SliderSection from '@/sections/SliderSection/SliderSection';
import EveryoneSection from '@/sections/EveryoneSection/EveryoneSection';

export const MainPage = () => {
  return (
    <main className={styles.root}>
      <StartBannerSection />
      <WelcomZordSection />
      <SliderSection />
      <EveryoneSection />
    </main>
  );
};
