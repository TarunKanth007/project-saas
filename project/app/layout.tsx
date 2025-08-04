import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Transform Your Campaigns with AI',
  description: 'AI-powered marketing platform that helps agencies predict trends, optimize performance, and automate tasks. Start your free 14-day trial today.',
  keywords: 'AI marketing, campaign optimization, marketing automation, agency tools, trend prediction',
  authors: [{ name: 'ADmyBRAND AI Suite' }],
  openGraph: {
    title: 'ADmyBRAND AI Suite - Transform Your Campaigns with AI',
    description: 'AI-powered marketing platform for modern agencies. Predict trends, optimize campaigns, and automate tasks.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}