'use client';

import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/lib/analytics/gtag';

export default function GoogleAnalytics() {
  // Check if GA_MEASUREMENT_ID is defined
  // If not defined, return null to avoid loading the script
  // This is useful for environments where you don't want to load Google Analytics
  // such as development or staging environments
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}
