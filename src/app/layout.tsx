import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/assets/styles/index.scss';
import { Header } from './layout/Header/Header';
import { Footer } from './layout/Footer/Footer';

const creatoDisplay = localFont({
  src: [
    {
      path: './fonts/creato-display/CreatoDisplay-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/creato-display/CreatoDisplay-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/creato-display/CreatoDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/creato-display/CreatoDisplay-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/creato-display/CreatoDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/creato-display/CreatoDisplay-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Zorg Nation',
  description: 'Zorg Nation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={creatoDisplay.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
