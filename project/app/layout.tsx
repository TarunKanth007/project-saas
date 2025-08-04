import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Calculator } from '@/components/Calculator';
import { Header } from '@/components/sections/Header'; // <-- Import Header

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://admybrand.com'),
  title: 'ADmyBRAND AI Suite - Transform Your Campaigns with AI',
  description: 'AI-powered marketing platform that helps agencies predict trends, optimize performance, and automate tasks. Start your free 14-day trial today.',
  keywords: 'AI marketing, campaign optimization, marketing automation, agency tools, trend prediction',
  authors: [{ name: 'ADmyBRAND AI Suite' }],
  openGraph: {
    title: 'ADmyBRAND AI Suite - Transform Your Campaigns with AI',
    description: 'AI-powered marketing platform for modern agencies. Predict trends, optimize campaigns, and automate tasks.',
    url: 'https://admybrand.com',
    type: 'website',
    siteName: 'ADmyBRAND AI Suite',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Transform Your Campaigns with AI',
    description: 'AI-powered marketing platform for modern agencies. Predict trends, optimize campaigns, and automate tasks.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased`}>
        <Header /> {/* <-- Added fixed header */}
        <div className="pt-20">{children}</div> {/* Push content below header */}
        <Calculator />
      </body>
    </html>
  );
}
