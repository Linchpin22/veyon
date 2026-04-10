import CookiePolicy from "@/Components/Legal/CookiePolicy";
export const metadata = {
  title: "Cookie Policy | BlackGiraffe",
  description:
    "Learn about BlackGiraffe's cookie policy and how we use cookies to improve your browsing experience on our website.",

  alternates: {
    canonical: "https://blackgiraffe.in/cookie-policy",
  },

  openGraph: {
    title: "Cookie Policy | BlackGiraffe",
    description:
      "Learn about BlackGiraffe's cookie policy and how we use cookies to improve your browsing experience on our website.",
    url: "https://blackgiraffe.in/cookie-policy",
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
export default function Page() {
  return <CookiePolicy />;
}
