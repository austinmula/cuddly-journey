# Analytics & Tracking Setup Guide

This guide will help you set up comprehensive user traffic tracking for SharpSpaceLtd.

## 🎯 What's Included

1. **Google Analytics 4 (GA4)** - Web traffic and user behavior
2. **E-commerce Tracking** - Product views, cart actions, purchases
3. **Page View Tracking** - Automatic page navigation tracking

## 📊 Setup Instructions

### 1. Google Analytics 4 (GA4)

#### Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com)
2. Click **Admin** (gear icon)
3. Click **Create Property**
4. Enter property details:
   - Property name: `SharpSpaceLtd`
   - Time zone: `(GMT+03:00) East Africa Time - Nairobi`
   - Currency: `Kenyan Shilling (KES)`
5. Click **Next** and complete the setup
6. Under **Data Streams**, click **Add stream** → **Web**
7. Enter your website URL: `https://sharpspaceltd.com`
8. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

#### Add to Environment Variables
Create a `.env.local` file in your project root:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Enable E-commerce Tracking
1. In GA4, go to **Admin** → **Data display** → **E-commerce Settings**
2. Toggle **Enable e-commerce data collection**
3. Save changes

### 2. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://sharpspaceltd.com`
3. Verify ownership using the HTML tag method
4. Copy the verification code
5. Update `src/app/layout.tsx`:

```typescript
verification: {
  google: 'your-verification-code-here',
}
```

6. Submit your sitemap: `https://sharpspaceltd.com/sitemap.xml`

## 🚀 Deployment

1. **Add environment variables** to your hosting platform (Vercel/Netlify):
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`

2. **Build and deploy** your site

3. **Verify tracking** is working:
   - Open your site in incognito mode
   - Navigate to a few pages
   - Check real-time reports in GA4

## 📈 What Gets Tracked

### Automatic Events
- ✅ Page views (all pages)
- ✅ Category page views
- ✅ Product page views
- ✅ Search queries
- ✅ Navigation clicks

### E-commerce Events
- 🛒 Product view
- 🛍️ Add to cart
- ❤️ Add to wishlist
- 💳 Begin checkout
- ✅ Purchase complete
- 🗑️ Remove from cart
- 👁️ View cart

### Custom Events
- 📱 WhatsApp click
- 🔗 Product share
- 📊 Category browse

## 🔍 Viewing Your Data

### Google Analytics 4

#### Real-time Reports
1. Go to **Reports** → **Realtime**
2. See users currently on your site
3. View pages being viewed
4. See traffic sources

#### E-commerce Reports
1. Go to **Reports** → **Monetization** → **E-commerce purchases**
2. View:
   - Revenue
   - Transactions
   - Average order value
   - Top products

#### Traffic Sources
1. Go to **Reports** → **Acquisition** → **Traffic acquisition**
2. See where users come from:
   - Organic search (Google)
   - Social media
   - Direct traffic
   - Referrals

#### User Behavior
1. Go to **Reports** → **Engagement** → **Pages and screens**
2. See most viewed pages
3. View engagement time
4. Bounce rate per page

## 🎨 Custom Tracking Examples

### Track Button Clicks
```typescript
import * as gtag from '@/lib/analytics/gtag';

function handleClick() {
  gtag.event({
    action: 'button_click',
    category: 'engagement',
    label: 'contact_us_button',
  });
}
```

### Track Custom Conversions
```typescript
import * as gtag from '@/lib/analytics/gtag';

function handleNewsletterSignup(email: string) {
  gtag.event({
    action: 'newsletter_signup',
    category: 'conversion',
    label: email,
  });
}
```

## 🔐 Privacy & GDPR Compliance

### Cookie Consent (Optional)
Consider adding a cookie consent banner:
1. Install: `npm install react-cookie-consent`
2. Add to layout
3. Only track after consent

### Privacy Policy
Update your privacy policy to mention:
- Google Analytics usage
- Cookie usage
- Data retention
- User rights

## 📱 Testing

### Test in Development
```bash
npm run dev
```

Open browser console and look for:
- `gtag` function calls
- Network requests to Google Analytics

### Test in Production
1. Deploy to production
2. Use [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)
3. Check real-time reports

## 🎯 Key Metrics to Monitor

### Daily
- Active users
- Page views
- Top pages
- Traffic sources

### Weekly
- New vs returning users
- E-commerce conversion rate
- Top selling products
- Revenue

### Monthly
- User growth trend
- Traffic source effectiveness
- Customer lifetime value
- Cart abandonment rate

## 🆘 Troubleshooting

### GA4 not tracking
1. Check environment variable is set
2. Verify Measurement ID format (G-XXXXXXXXXX)
3. Check browser console for errors
4. Wait 24-48 hours for data to appear in reports

### Events not firing
1. Check network tab for outgoing requests
2. Verify event syntax in code
3. Test in incognito mode
4. Clear browser cache

## 📚 Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [Google Tag Manager](https://tagmanager.google.com/)
- [Next.js Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)

## ✅ Checklist

- [ ] Created GA4 property
- [ ] Added environment variables
- [ ] Deployed to production
- [ ] Verified tracking in GA4 real-time
- [ ] Submitted sitemap to Search Console
- [ ] Set up conversion goals
- [ ] Tested e-commerce events
- [ ] Updated privacy policy
