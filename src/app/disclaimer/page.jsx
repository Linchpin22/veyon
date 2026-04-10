import Disclaimer from "@/Components/Legal/Disclaimer";
export const metadata = {
  title: "Disclaimer | BlackGiraffe",
  description:
    "Read BlackGiraffe's disclaimer to understand the terms and limitations of our services and website content.",

  alternates: {
    canonical: "https://blackgiraffe.in/disclaimer",
  },

  openGraph: {
    title: "Disclaimer | BlackGiraffe",
    description:
      "Read BlackGiraffe's disclaimer to understand the terms and limitations of our services and website content.",
    url: "https://blackgiraffe.in/disclaimer",
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
export default function DisclaimerPage() {
  return <Disclaimer />;
}
