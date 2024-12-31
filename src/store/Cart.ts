import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../interface/product";

export interface CartItem {
  quantity: number;
  _id: string;
  price: number;
  product: Product;
}

export interface CartState {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (newItem: CartItem) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  updateItem: (item: CartItem) => void;
  removeCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      cartCount: 0,
      cartTotal: 0,
      addToCart: (newItem) =>
        set((state) => {
          const index = state.cartItems.findIndex(
            (item) => item._id === newItem._id
          );
          let updatedCartItems;

          if (index >= 0) {
            updatedCartItems = [...state.cartItems];
            updatedCartItems[index].quantity = newItem.quantity;
          } else {
            updatedCartItems = [...state.cartItems, newItem];
          }

          return {
            cartItems: updatedCartItems,
            cartCount: updatedCartItems.reduce(
              (count, item) => count + item.quantity,
              0
            ),
            cartTotal: updatedCartItems.reduce(
              (total, item) => total + item.quantity * item.price,
              0
            ),
          };
        }),

      setQuantity: (id, quantity) =>
        set((state) => {
          const updatedCartItems = state.cartItems.map((item) =>
            item._id === id ? { ...item, quantity } : item
          );

          return {
            cartItems: updatedCartItems,
            cartCount: updatedCartItems.reduce(
              (count, item) => count + item.quantity,
              0
            ),
            cartTotal: updatedCartItems.reduce(
              (total, item) => total + item.quantity * item.price,
              0
            ),
          };
        }),

      removeItem: (id) =>
        set((state) => {
          const updatedCartItems = state.cartItems.filter(
            (item) => item._id !== id
          );

          return {
            cartItems: updatedCartItems,
            cartCount: updatedCartItems.reduce(
              (count, item) => count + item.quantity,
              0
            ),
            cartTotal: updatedCartItems.reduce(
              (total, item) => total + item.quantity * item.price,
              0
            ),
          };
        }),

      updateItem: (updatedItem) =>
        set((state) => {
          const updatedCartItems = state.cartItems.map((item) =>
            item._id === updatedItem._id
              ? { ...item, quantity: Math.max(1, updatedItem.quantity) }
              : item
          );

          return {
            cartItems: updatedCartItems,
            cartCount: updatedCartItems.reduce(
              (count, item) => count + item.quantity,
              0
            ),
            cartTotal: updatedCartItems.reduce(
              (total, item) => total + item.quantity * item.price,
              0
            ),
          };
        }),

      removeCart: () =>
        set(() => ({
          cartItems: [],
          cartCount: 0,
          cartTotal: 0,
        })),
    }),
    {
      name: "cart-storage", // Key lưu trong localStorage
      partialize: (state) => ({
        cartItems: state.cartItems, // Chỉ lưu `cartItems`
      }),
    }
  )
);
