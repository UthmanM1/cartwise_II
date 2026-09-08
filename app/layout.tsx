import type { Metadata } from 'next';
import type React from 'react';
// Self-hosted via @fontsource-variable (npm packages, bundled at build time)
// instead of next/font/google. This removes a build-time dependency on
// fetching Google Fonts over the network — the same typefaces (Inter,
// Fraunces, JetBrains Mono) are used, just packaged as static files that
// ship with node_modules, so builds succeed in network-restricted CI/build
// environments without any change in rendered appearance.
import '@fontsource-variable/inter';
import '@fontsource-variable/fraunces/wght.css';
import '@fontsource-variable/jetbrains-mono';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'CARTWISE — Compare smarter. Buy with confidence.', template: '%s · CARTWISE' },
  description:
    'CARTWISE is an AI-powered product comparison and shopping intelligence platform. Search, filter, compare and track prices across laptops, phones, headphones and more.',
  openGraph: {
    title: 'CARTWISE — Compare smarter. Buy with confidence.',
    description: 'Find the right product without the research overload.',
    siteName: 'CARTWISE',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <div className="flex-1 pb-16 md:pb-0">{children}</div>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
