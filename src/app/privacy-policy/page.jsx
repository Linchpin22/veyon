import Privacy from "@/Components/Legal/Privacy";
export const metadata = {
  title: "Privacy Policy | BlackGiraffe",
  description:
    "Review BlackGiraffe's privacy policy to understand how we collect, use, and protect your personal information.",

  alternates: {
    canonical: "https://blackgiraffe.in/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | BlackGiraffe",
    description:
      "Review BlackGiraffe's privacy policy to understand how we collect, use, and protect your personal information.",
    url: "https://blackgiraffe.in/privacy-policy",
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
  return <Privacy />;
}
