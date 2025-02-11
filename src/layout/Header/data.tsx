import { ReactNode } from 'react';
import IconTelegram from '@/assets/images/icons/telegram.svg';
import IconTwitter from '@/assets/images/icons/prime_twitter.svg';
import IconRow from '@/assets/images/icons/row.svg';

type TSocials = {
  icon: ReactNode;
  href: string;
};

export const SOCIALS: TSocials[] = [
  {
    icon: <IconTelegram />,
    href: '/',
  },
  {
    icon: <IconTwitter />,
    href: '/',
  },
  {
    icon: <IconRow />,
    href: '/',
  },
];
