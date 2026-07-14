export interface ProductReview {
  rating: number;
  count: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  image: string;
  category: string;
  price: number;
  currency: string;
  description: string;
  shortDescription: string;
  affiliateUrl: string;
  rating: ProductReview;
  tags: string[];
  editorsPick?: boolean;
  bestseller?: boolean;
}
