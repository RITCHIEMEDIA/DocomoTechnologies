import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Docomo Technologies Limited',
    default: 'Docomo Technologies Limited',
  },
  description: 'Oil field services, Civil/Electrical Engineering & general contractor. A subsidiary of Noble Environmental & Waste Management Ltd.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}