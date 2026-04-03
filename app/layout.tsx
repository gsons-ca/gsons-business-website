import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from 'next/font/google';
import './globals.css';
import Background from './components/Background';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap'
});

const plexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-heading',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'RiverERP | Premium ERP Implementation',
  description:
    'RiverERP is a premium ERP platform and implementation studio for modern finance, ops, and leadership teams.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className={`${plexSans.variable} ${plexSansCondensed.variable} font-sans`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
