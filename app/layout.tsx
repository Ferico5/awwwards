import type { Metadata } from 'next';
import './globals.css';
import { circularWeb, general, robertMedium, robertRegular, zentry } from './fonts';

export const metadata: Metadata = {
  title: 'Awards 3D Website',
  description: 'A modern animation website with GSAP and Three.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${general.variable} ${circularWeb.variable} ${robertMedium.variable} ${robertRegular.variable} ${zentry.variable} antialiased`}>{children}</body>
    </html>
  );
}
