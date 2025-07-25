import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import WebVitals from "@/components/analytics/WebVitals";

export const metadata: Metadata = {
  title: {
    default: "Nubble - AI-Powered Nutrition Tracker for Eating Disorders",
    template: "%s | Nubble"
  },
  description: "Transform your relationship with food using Nubble's AI-powered app. Track nutrition, overcome snacking addiction, get 24/7 AI coaching, and build healthier habits. Join thousands who've already changed their lives.",
  keywords: ["eating disorder", "snacking addiction", "AI nutrition", "food tracking", "panic button", "weight loss", "healthy habits", "food addiction recovery", "nutrition coach", "calorie tracking"],
  authors: [{ name: "Nubble" }],
  creator: "Nubble",
  publisher: "Nubble",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nubble.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nubble - AI-Powered Nutrition Tracker for Eating Disorders",
    description: "Transform your relationship with food using Nubble's AI-powered app. Track nutrition, overcome snacking addiction, get 24/7 AI coaching, and build healthier habits.",
    url: 'https://nubble.app',
    siteName: 'Nubble',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nubble - AI-Powered Nutrition Tracker',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nubble - AI-Powered Nutrition Tracker for Eating Disorders",
    description: "Transform your relationship with food using Nubble's AI-powered app. Track nutrition, overcome snacking addiction, get 24/7 AI coaching, and build healthier habits.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4ADE80" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <WebVitals />
        {children}</body>
    </html>
  );
}
