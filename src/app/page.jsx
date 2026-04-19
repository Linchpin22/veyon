import HeroSection from "@/Components/Home/HeroSection";
import PortfolioComp from "@/Components/Home/PortfolioComp";
import ServicesComp from "@/Components/Home/ServicesComp";
import WhyChooseUsComp from "@/Components/Home/WhyChooseUsComp";

export const metadata = {
  title: "Home | BlackGiraffe",
  description:
    "Welcome to BlackGiraffe, a boutique digital studio crafting modern digital experiences with architectural precision and creative innovation.",

  alternates: {
    canonical: "https://blackgiraffe.in",
  },

  openGraph: {
    title: "Home | BlackGiraffe",
    description:
      "Welcome to BlackGiraffe, a boutique digital studio crafting modern digital experiences with architectural precision and creative innovation.",
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
      { url: "/fav32.png", sizes: "32x32", type: "image/png" },
      { url: "/fav16.png", sizes: "16x16", type: "image/png" },
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

export default function Page() {
  return (
    <>
      <HeroSection />
      <ServicesComp />
      <WhyChooseUsComp />
      <PortfolioComp />
    </>
  );
}
