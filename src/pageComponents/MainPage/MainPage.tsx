
import StartBannerSection from '@/sections/StartBannerSection/StartBannerSection';
import WelcomZordSection from '@/sections/WelcomZordSection/WelcomZordSection';
import React from 'react';
import styles from './MainPage.module.scss';
import SliderSection from '@/sections/SliderSection/SliderSection';
import EveryoneSection from '@/sections/EveryoneSection/EveryoneSection';
import dynamic from 'next/dynamic';
const TradeBankSection = dynamic(() => import('@/sections/TradeBankSection/TradeBankSection'));
const WhyZorgSection = dynamic(() => import('@/sections/WhyZorgSection/WhyZorgSection'));
const MotivationSection = dynamic(() => import('@/sections/MotivationSection/MotivationSection'));
const PartySection = dynamic(() => import('@/sections/PartySection/PartySection'));

export const MainPage = () => {
  return (
    <main className={styles.root}>
      <StartBannerSection />
      <WelcomZordSection />
      <SliderSection />
      <EveryoneSection />
      <PartySection />
      <MotivationSection />
      <TradeBankSection />
      <WhyZorgSection />
    </main>
  );
};
