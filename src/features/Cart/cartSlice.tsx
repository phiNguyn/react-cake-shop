import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interface/product';

 export interface CartItem  {
  quantity: number,
  _id: string,
  price: number,
  product : Product
}



export interface CartState { // Xuất kiểu CartState
  showMiniCart: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  showMiniCart: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex(item => item._id === newItem._id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },
    setQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex(item => item._id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      const p = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id != p._id);
    },

    updateItem(state,action:PayloadAction<CartItem>) {
      const p = action.payload
      const index = state.cartItems.findIndex(item=> item._id == p._id)
      state.cartItems[index].quantity = Math.max(1,p.quantity)
      return state
    }
,
    removeCart(state) {
      state.cartItems = []
    }
  },
});

export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeItem ,updateItem,removeCart } = cartSlice.actions;
export default cartSlice.reducer;
