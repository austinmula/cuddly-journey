'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '@/lib/analytics/gtag';
import * as metaPixel from '@/lib/analytics/meta-pixel';

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

      // Track page view in Google Analytics
      gtag.pageview(url);

      // Track page view in Meta Pixel
      metaPixel.pageview();
    }
  }, [pathname, searchParams]);

  return null;
}
