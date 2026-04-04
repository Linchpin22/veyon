import HeaderComp from '@/Components/Layout/HeaderComp';
import './global.css'
import { Poppins } from 'next/font/google';
import FloatingComp from '@/Components/Layout/FloatingComp';
import FooterComp from '@/Components/Layout/FooterComp';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'BlackGiraffe',
  description:
    'A social media analytics tool that provides insights into brand performance and audience engagement.',

  alternates: {
    canonical: '#',
  },

  openGraph: {
    title: 'BlackGiraffe',
    description:
      'A social media analytics tool that provides insights into brand performance and audience engagement.',
    url: '#',
    type: 'website',
    siteName: 'BlackGiraffe',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'BlackGiraffe',
      },
    ],
  },


  icons: {
    icon: [
      { url: '/blackgiraffe.png', sizes: '32x32', type: 'image/png' },
      { url: '/blackgiraffe.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-sans">
        <HeaderComp/>
        <FloatingComp/>
        {children}
        <FooterComp/>
      </body>
    </html>
  );
}
