import RefundPolicy from "@/Components/Legal/RefundPolicy";
export const metadata = {
  title: "Refund Policy | BlackGiraffe",
  description:
    "Learn about BlackGiraffe's refund policy and the terms for requesting refunds on our digital services.",

  alternates: {
    canonical: "https://blackgiraffe.in/refund-policy",
  },

  openGraph: {
    title: "Refund Policy | BlackGiraffe",
    description:
      "Learn about BlackGiraffe's refund policy and the terms for requesting refunds on our digital services.",
    url: "https://blackgiraffe.in/refund-policy",
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
  return <RefundPolicy />;
}
