import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Apple Store Clone',
  description: 'Apple Store Clone créé avec Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="pt-16 flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
