import { create } from "zustand";
import { Product } from "../interface/product";
import { GetProductFilters } from "../data/ProductsData";

interface SelectedProduct {
  product: Product;
  quantity: number;
}

interface ProductStore {
  Product: Product[];
  selectedProducts: SelectedProduct[];
  setProduct: (Products: Product[]) => void;
  addProductNew: (newProduct: Product) => void;
  updateProduct: (updatedProduct: Product) => void;
  getProductById: (id: string) => Product | undefined;
  filters?: GetProductFilters;
  setFilters: (filters: GetProductFilters) => void;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  Product: [],
  selectedProducts: [],
  setProduct: (Product) => set({ Product }),
  addProductNew: (newProduct) =>
    set((state) => ({
      Product: [...state.Product, newProduct],
    })),
  
 
  updateProduct: (updatedProduct) =>
    set((state) => ({
      Product: state.Product.map((u) =>
        u._id === updatedProduct._id ? updatedProduct : u
      ),
    })),
  getProductById: (id) => {
    return get().Product.find((u) => u._id === id);
  },
  filters: undefined,
  setFilters: (filters) => set({ filters }),
}));
