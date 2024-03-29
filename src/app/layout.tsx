import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SNUC-CC | DSA SHEET',
  description: `A Data Structures and Algorithms problem sheet curated by the Competitive Programming Team 
    at SNUC Coding Club `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <UserProvider>
        <body className={`${inter.className} bg-neutral-900 container mx-auto`}>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
