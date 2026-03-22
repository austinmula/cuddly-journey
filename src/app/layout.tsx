import type { Metadata } from 'next'
import Script from 'next/script'
import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics'
import OrganizationSchema from '@/components/StructuredData/OrganizationSchema'

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
    locale: 'en_KE',
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
    google: '69e6c3336ad8d7bf',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body>
        <GoogleAnalytics />
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","vzsqp8x615");`,
          }}
        />
        {children}
      </body>
    </html>
  )
}
