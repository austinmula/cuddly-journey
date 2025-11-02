import type { Metadata } from 'next'
import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://sharpspaceltd.com'),
  title: {
    default: 'SharpSpaceLtd | Power Up Your Tech',
    template: '%s | SharpSpaceLtd'
  },
  description: 'At SharpSpaceLtd We Offer Top-Quality Computers, Accessories & Expert Laptop Repairs! Power up your tech with premium electronics and professional services.',
  keywords: ['computers', 'laptops', 'accessories', 'laptop repairs', 'tech store', 'electronics', 'SharpSpaceLtd'],
  authors: [{ name: 'SharpSpaceLtd' }],
  creator: 'SharpSpaceLtd',
  publisher: 'SharpSpaceLtd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sharpspaceltd.com',
    siteName: 'SharpSpaceLtd',
    title: 'SharpSpaceLtd | Power Up Your Tech',
    description: 'Top-Quality Computers, Accessories & Expert Laptop Repairs',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SharpSpaceLtd - Power Up Your Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SharpSpaceLtd | Power Up Your Tech',
    description: 'Top-Quality Computers, Accessories & Expert Laptop Repairs',
    images: ['/images/twitter-image.jpg'],
    creator: '@sharpspaceltd',
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
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
