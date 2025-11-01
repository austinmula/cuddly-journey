// Meta (Facebook) Pixel Configuration
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

interface MetaPixelProduct {
  content_ids: string[];
  content_name: string;
  content_type: string;
  value: number;
  currency: string;
}

// Initialize Meta Pixel
export const initMetaPixel = () => {
  if (typeof window !== 'undefined' && window.fbq && FB_PIXEL_ID) {
    window.fbq('init', FB_PIXEL_ID);
  }
};

// Page view
export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// View content (product view)
export const viewContent = (productId: string, productName: string, value: number) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_ids: [productId],
      content_name: productName,
      content_type: 'product',
      value: value,
      currency: 'KES',
    });
  }
};

// Add to cart
export const addToCart = (productId: string, productName: string, value: number) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToCart', {
      content_ids: [productId],
      content_name: productName,
      content_type: 'product',
      value: value,
      currency: 'KES',
    });
  }
};

// Add to wishlist
export const addToWishlist = (productId: string, productName: string, value: number) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToWishlist', {
      content_ids: [productId],
      content_name: productName,
      content_type: 'product',
      value: value,
      currency: 'KES',
    });
  }
};

// Initiate checkout
export const initiateCheckout = (productIds: string[], value: number) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_ids: productIds,
      content_type: 'product',
      value: value,
      currency: 'KES',
    });
  }
};

// Purchase
export const purchase = (productIds: string[], value: number) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      content_ids: productIds,
      content_type: 'product',
      value: value,
      currency: 'KES',
    });
  }
};

// Search
export const search = (searchQuery: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Search', {
      search_string: searchQuery,
    });
  }
};

// Contact
export const contact = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact');
  }
};

// Lead (newsletter signup, etc.)
export const lead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
};
