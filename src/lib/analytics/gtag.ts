// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Types
interface GtagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface EcommerceItem {
  item_id: string;
  item_name: string;
  item_brand?: string;
  item_category?: string;
  price: number;
  quantity: number;
}

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Generic event tracking
export const event = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// E-commerce events
export const viewItem = (item: EcommerceItem) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'KES',
      value: item.price,
      items: [item],
    });
  }
};

export const addToCart = (item: EcommerceItem) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'KES',
      value: item.price * item.quantity,
      items: [item],
    });
  }
};

export const removeFromCart = (item: EcommerceItem) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'remove_from_cart', {
      currency: 'KES',
      value: item.price * item.quantity,
      items: [item],
    });
  }
};

export const viewCart = (items: EcommerceItem[], totalValue: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_cart', {
      currency: 'KES',
      value: totalValue,
      items: items,
    });
  }
};

export const beginCheckout = (items: EcommerceItem[], totalValue: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'KES',
      value: totalValue,
      items: items,
    });
  }
};

export const purchase = (
  transactionId: string,
  items: EcommerceItem[],
  totalValue: number,
  tax?: number,
  shipping?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      currency: 'KES',
      value: totalValue,
      tax: tax || 0,
      shipping: shipping || 0,
      items: items,
    });
  }
};

export const search = (searchTerm: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm,
    });
  }
};

export const selectContent = (contentType: string, itemId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'select_content', {
      content_type: contentType,
      item_id: itemId,
    });
  }
};

export const addToWishlist = (item: EcommerceItem) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_wishlist', {
      currency: 'KES',
      value: item.price,
      items: [item],
    });
  }
};

export const viewCategory = (categoryName: string, itemCount: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item_list', {
      item_list_name: categoryName,
      items_count: itemCount,
    });
  }
};

// WhatsApp click tracking
export const whatsappClick = (productName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: productName,
    });
  }
};

// Social share tracking
export const shareProduct = (productName: string, method: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'share', {
      method: method,
      content_type: 'product',
      item_id: productName,
    });
  }
};
