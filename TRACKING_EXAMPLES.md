# Analytics Tracking Implementation Examples

## How to Use the Analytics Hook

### Basic Setup

Import the hook in any component:

```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

function MyComponent() {
  const analytics = useAnalytics();

  // Use analytics methods
}
```

## Example Implementations

### 1. Product Page - Track View

```typescript
'use client';
import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Product } from '@/models/product';

export default function ProductDetails({ product }: { product: Product }) {
  const analytics = useAnalytics();

  useEffect(() => {
    // Track product view when page loads
    analytics.trackProductView(product);
  }, [product, analytics]);

  return (
    <div>
      <h1>{product.title}</h1>
      {/* Rest of component */}
    </div>
  );
}
```

### 2. Add to Cart Button

```typescript
'use client';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Product } from '@/models/product';

export default function AddToCartButton({ product }: { product: Product }) {
  const analytics = useAnalytics();

  const handleAddToCart = () => {
    // Your existing add to cart logic
    dispatch(addItemToCart({ ...product, quantity: 1 }));

    // Track the event
    analytics.trackAddToCart(product, 1);
  };

  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
}
```

### 3. WhatsApp Quick Order

```typescript
'use client';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function QuickOrderButton({ productName }: { productName: string }) {
  const analytics = useAnalytics();

  const handleWhatsAppClick = () => {
    // Your existing WhatsApp logic
    const message = encodeURIComponent(`I'm interested in ${productName}`);
    window.open(`https://wa.me/254732652000?text=${message}`, '_blank');

    // Track the click
    analytics.trackWhatsAppClick(productName);
  };

  return (
    <button onClick={handleWhatsAppClick}>
      Quick Order via WhatsApp
    </button>
  );
}
```

### 4. Wishlist Button

```typescript
'use client';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Product } from '@/models/product';

export default function WishlistButton({ product }: { product: Product }) {
  const analytics = useAnalytics();

  const handleAddToWishlist = () => {
    // Your existing wishlist logic
    dispatch(addItemToWishlist({ ...product }));

    // Track the event
    analytics.trackAddToWishlist(product);
  };

  return (
    <button onClick={handleAddToWishlist}>
      ❤️ Add to Wishlist
    </button>
  );
}
```

### 5. Category Page - Track View

```typescript
'use client';
import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Category } from '@/models/category';
import { Product } from '@/models/product';

export default function CategoryPage({
  category,
  products
}: {
  category: Category;
  products: Product[];
}) {
  const analytics = useAnalytics();

  useEffect(() => {
    // Track category view
    analytics.trackCategoryView(category.title, products.length);
  }, [category, products, analytics]);

  return (
    <div>
      <h1>{category.title}</h1>
      <p>{products.length} products</p>
      {/* Rest of component */}
    </div>
  );
}
```

### 6. Search Functionality

```typescript
'use client';
import { useState } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const analytics = useAnalytics();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Your existing search logic
    performSearch(query);

    // Track the search
    analytics.trackSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
```

### 7. Checkout Page

```typescript
'use client';
import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useAppSelector } from '@/redux/store';

export default function CheckoutPage() {
  const analytics = useAnalytics();
  const cartItems = useAppSelector((state) => state.cartReducer.value);

  useEffect(() => {
    // Calculate total
    const total = cartItems.reduce((sum, item) =>
      sum + (item.discountedPrice || item.price) * item.quantity, 0
    );

    // Track checkout initiation
    analytics.trackBeginCheckout(cartItems, total);
  }, [cartItems, analytics]);

  return (
    <div>
      <h1>Checkout</h1>
      {/* Rest of component */}
    </div>
  );
}
```

### 8. Order Success/Thank You Page

```typescript
'use client';
import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function OrderSuccessPage({
  orderId,
  items,
  total
}: {
  orderId: string;
  items: Product[];
  total: number;
}) {
  const analytics = useAnalytics();

  useEffect(() => {
    // Track purchase completion
    analytics.trackPurchase(orderId, items, total);
  }, [orderId, items, total, analytics]);

  return (
    <div>
      <h1>Thank You for Your Order!</h1>
      <p>Order ID: {orderId}</p>
      {/* Rest of component */}
    </div>
  );
}
```

### 9. Custom Button Tracking

```typescript
'use client';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function CustomButton() {
  const analytics = useAnalytics();

  const handleClick = () => {
    // Track custom event
    analytics.trackCustomEvent(
      'button_click',           // action
      'engagement',             // category
      'contact_us_footer',      // label (optional)
      1                         // value (optional)
    );

    // Your button logic
    router.push('/contact');
  };

  return (
    <button onClick={handleClick}>
      Contact Us
    </button>
  );
}
```

### 10. Newsletter Signup

```typescript
'use client';
import { useState } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const analytics = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Your newsletter logic
    await subscribeToNewsletter(email);

    // Track signup
    analytics.trackCustomEvent(
      'newsletter_signup',
      'conversion',
      email
    );

    // Show success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}
```

## Direct Function Calls

If you prefer not to use the hook, you can call functions directly:

```typescript
import * as gtag from '@/lib/analytics/gtag';
import * as metaPixel from '@/lib/analytics/meta-pixel';

// Google Analytics
gtag.event({
  action: 'click',
  category: 'button',
  label: 'contact_us',
  value: 1
});

// Meta Pixel
metaPixel.viewContent('product-id', 'Product Name', 999);
```

## Testing Your Implementation

### 1. Browser Console
Open browser console and check for:
```javascript
// GA4
window.gtag
window.dataLayer

// Meta Pixel
window.fbq
```

### 2. Network Tab
Look for requests to:
- `google-analytics.com`
- `facebook.com/tr`

### 3. Extensions
- [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)
- [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper)

### 4. Real-time Reports
- GA4: Reports → Realtime
- Meta: Events Manager → Test Events

## Best Practices

1. **Track meaningful events** - Only track events that provide value
2. **Use consistent naming** - Keep event names standardized
3. **Don't over-track** - Too many events can overwhelm your data
4. **Test before deploying** - Always test in development first
5. **Respect user privacy** - Consider adding cookie consent
6. **Document your events** - Keep a list of all tracked events

## Common Pitfalls

❌ **Don't:**
- Track personally identifiable information (PII)
- Track on every small interaction
- Forget to test in incognito mode
- Deploy without environment variables

✅ **Do:**
- Track business-critical events
- Use descriptive event names
- Test thoroughly
- Monitor your data quality
