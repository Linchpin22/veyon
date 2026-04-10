import Portfolio from "@/Components/Portfolio/Portfolio";
export const metadata = {
  title: "Portfolio | BlackGiraffe",
  description:
    "Explore BlackGiraffe's portfolio of innovative digital projects and modern digital experiences crafted with precision and creativity.",

  alternates: {
    canonical: "https://blackgiraffe.in/portfolio",
  },

  openGraph: {
    title: "Portfolio | BlackGiraffe",
    description:
      "Explore BlackGiraffe's portfolio of innovative digital projects and modern digital experiences crafted with precision and creativity.",
    url: "https://blackgiraffe.in/portfolio",
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
      { url: "/blackgiraffe.png", sizes: "32x32", type: "image/png" },
      { url: "/blackgiraffe.png", sizes: "16x16", type: "image/png" },
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
export default function PortfolioPage() {
  return <Portfolio />;
}
