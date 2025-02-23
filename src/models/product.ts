export interface Product {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  brand: string;
  price: number;
  discountedPrice: number;
  stock: number;
  category: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };
  images: Image[];
  summary: any[]; // Sanity rich text format (Portable Text)
  description: any[]; // Sanity rich text format (Portable Text)
//   specifications: Specifications;
  variants: Variant[];
  reviews: Review[];
  relatedProducts: RelatedProduct[];
  createdAt: string;
}

export interface Image {
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface Specifications {
  processor?: string;
  ram?: string;
  storage?: string;
  gpu?: string;
  display?: string;
  battery?: string;
  os?: string;
  ports?: string;
}

export interface Variant {
  title: string;
  price: number;
  color?: string;
  images?: Image[];
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
}

export interface RelatedProduct {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  brand: string;
  price: number;
  stock: number;
  category: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };
  images: Image[];
}
