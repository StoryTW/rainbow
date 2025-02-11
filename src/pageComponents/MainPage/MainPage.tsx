import dynamic from 'next/dynamic';
import React from 'react';

const TradeBankSection = dynamic(() => import('@/sections/TradeBankSection/TradeBankSection'));
const WhyZorgSection = dynamic(() => import('@/sections/WhyZorgSection/WhyZorgSection'));
const MotivationSection = dynamic(() => import('@/sections/MotivationSection/MotivationSection'));
const PartySection = dynamic(() => import('@/sections/PartySection/PartySection'));

export const MainPage = () => {
  return (
    <main>
      <PartySection />
      <MotivationSection />
      <TradeBankSection />
      <WhyZorgSection />
    </main>
  );
};
