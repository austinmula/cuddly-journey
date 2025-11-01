import { useCallback } from 'react';
import * as gtag from '@/lib/analytics/gtag';
import * as metaPixel from '@/lib/analytics/meta-pixel';
import { Product } from '@/models/product';

export function useAnalytics() {
  const trackProductView = useCallback((product: Product) => {
    const item = {
      item_id: product._id,
      item_name: product.title,
      item_brand: product.brand || 'SharpSpaceLtd',
      item_category: product.category?.title,
      price: product.discountedPrice || product.price,
      quantity: 1,
    };

    // GA4
    gtag.viewItem(item);

    // Meta Pixel
    metaPixel.viewContent(product._id, product.title, product.discountedPrice || product.price);
  }, []);

  const trackAddToCart = useCallback((product: Product, quantity: number = 1) => {
    const item = {
      item_id: product._id,
      item_name: product.title,
      item_brand: product.brand || 'SharpSpaceLtd',
      item_category: product.category?.title,
      price: product.discountedPrice || product.price,
      quantity,
    };

    // GA4
    gtag.addToCart(item);

    // Meta Pixel
    metaPixel.addToCart(product._id, product.title, (product.discountedPrice || product.price) * quantity);
  }, []);

  const trackRemoveFromCart = useCallback((product: Product, quantity: number = 1) => {
    const item = {
      item_id: product._id,
      item_name: product.title,
      item_brand: product.brand || 'SharpSpaceLtd',
      item_category: product.category?.title,
      price: product.discountedPrice || product.price,
      quantity,
    };

    // GA4
    gtag.removeFromCart(item);
  }, []);

  const trackAddToWishlist = useCallback((product: Product) => {
    const item = {
      item_id: product._id,
      item_name: product.title,
      item_brand: product.brand || 'SharpSpaceLtd',
      item_category: product.category?.title,
      price: product.discountedPrice || product.price,
      quantity: 1,
    };

    // GA4
    gtag.addToWishlist(item);

    // Meta Pixel
    metaPixel.addToWishlist(product._id, product.title, product.discountedPrice || product.price);
  }, []);

  const trackViewCart = useCallback((products: Product[], totalValue: number) => {
    const items = products.map((product) => ({
      item_id: product._id,
      item_name: product.title,
      item_brand: product.brand || 'SharpSpaceLtd',
      item_category: product.category?.title,
      price: product.discountedPrice || product.price,
      quantity: 1,
    }));

    // GA4
    gtag.viewCart(items, totalValue);
  }, []);

  const trackBeginCheckout = useCallback((products: Product[], totalValue: number) => {
    const items = products.map((product) => ({
      item_id: product._id,
      item_name: product.title,
      item_brand: product.brand || 'SharpSpaceLtd',
      item_category: product.category?.title,
      price: product.discountedPrice || product.price,
      quantity: 1,
    }));

    const productIds = products.map((p) => p._id);

    // GA4
    gtag.beginCheckout(items, totalValue);

    // Meta Pixel
    metaPixel.initiateCheckout(productIds, totalValue);
  }, []);

  const trackPurchase = useCallback(
    (
      transactionId: string,
      products: Product[],
      totalValue: number,
      tax?: number,
      shipping?: number
    ) => {
      const items = products.map((product) => ({
        item_id: product._id,
        item_name: product.title,
        item_brand: product.brand || 'SharpSpaceLtd',
        item_category: product.category?.title,
        price: product.discountedPrice || product.price,
        quantity: 1,
      }));

      const productIds = products.map((p) => p._id);

      // GA4
      gtag.purchase(transactionId, items, totalValue, tax, shipping);

      // Meta Pixel
      metaPixel.purchase(productIds, totalValue);
    },
    []
  );

  const trackSearch = useCallback((searchTerm: string) => {
    // GA4
    gtag.search(searchTerm);

    // Meta Pixel
    metaPixel.search(searchTerm);
  }, []);

  const trackCategoryView = useCallback((categoryName: string, itemCount: number) => {
    // GA4
    gtag.viewCategory(categoryName, itemCount);
  }, []);

  const trackWhatsAppClick = useCallback((productName: string) => {
    // GA4
    gtag.whatsappClick(productName);
  }, []);

  const trackCustomEvent = useCallback(
    (action: string, category: string, label?: string, value?: number) => {
      // GA4
      gtag.event({ action, category, label, value });
    },
    []
  );

  return {
    trackProductView,
    trackAddToCart,
    trackRemoveFromCart,
    trackAddToWishlist,
    trackViewCart,
    trackBeginCheckout,
    trackPurchase,
    trackSearch,
    trackCategoryView,
    trackWhatsAppClick,
    trackCustomEvent,
  };
}
