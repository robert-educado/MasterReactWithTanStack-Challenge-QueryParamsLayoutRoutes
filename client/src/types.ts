export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  brand: string;
  sku: string;
  price: number;
  new: boolean;
  locale: string;
  slug: string;
}

export interface ProductDetailsResponse {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  brand: string;
  sku: string;
  price: number;
  new: boolean;
  locale: string;
  slug: string;
}

export type AboutResponse = {
  title: string;
  sections: Section[];
};

export interface Section {
  heading: string;
  content: string | Section[];
}
