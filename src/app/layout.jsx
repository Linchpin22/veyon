import HeaderComp from "@/Components/Layout/HeaderComp";
import "./global.css";
import { Poppins } from "next/font/google";
import FloatingComp from "@/Components/Layout/FloatingComp";
import FooterComp from "@/Components/Layout/FooterComp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "BlackGiraffe",
  description:
    "BlackGiraffe is a boutique digital studio specializing in crafting high-end digital products that blend architectural precision with creative soul.",

  alternates: {
    canonical: "https://blackgiraffe.in",
  },

  openGraph: {
    title: "BlackGiraffe",
    description:
      "BlackGiraffe is a boutique digital studio specializing in crafting high-end digital products that blend architectural precision with creative soul.",
    url: "https://blackgiraffe.in",
    type: "website",
    siteName: "BlackGiraffe",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "BlackGiraffe",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/brandbuzz.png", sizes: "32x32", type: "image/png" },
      { url: "/brandbuzz.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
        <HeaderComp />
        <FloatingComp />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
