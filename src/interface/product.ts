import { photo } from "../pages/ProductDetail";

export interface Product {
  _id: string;
  name: string;
  material: string;
  img: string;
  price: number;
  view: number;
  bestseller: boolean;
  quantity: number;
  slug: string;
  category: {
    categoryId: string;
    categoryName: string;
  };
}

export interface pagination {
  countPro: number;
  countPage: number;
  currentPage: number;
  limit: number;
}

export interface ResponseProduct {
  result: Product[];
  pagination: pagination;
}

export interface ResponseProductDetails {
  result: Product;
  photos: photo[] | [];
  relatedProducts: Product[] | [];
}
