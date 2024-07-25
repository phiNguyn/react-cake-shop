import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CartItem } from '../Cart/cartSlice'; // Nhập kiểu CartItem

// Selector để lấy danh sách các item trong giỏ hàng
export const cartItemsSelector = (state: RootState): CartItem[] => state.cart.cartItems;

// Tổng số lượng các mặt hàng trong giỏ
export const cartCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);

// Tổng giá trị của giỏ hàng
export const cartTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);
