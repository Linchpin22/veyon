import HeaderComp from "@/Components/Layout/HeaderComp";
import "./global.css";
import { Poppins } from "next/font/google";
import FloatingComp from "@/Components/Layout/FloatingComp";
import FooterComp from "@/Components/Layout/FooterComp";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://blackgiraffe.in"),
  title: "BlackGiraffe",
  description:
    "BlackGiraffe is a boutique digital studio specializing in crafting high-end digital products that blend architectural precision with creative soul.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-sans">

        {/* ✅ Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-336C6NSBFK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-336C6NSBFK');
          `}
        </Script>

        <HeaderComp />
        <FloatingComp />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}