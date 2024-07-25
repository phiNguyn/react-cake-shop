import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import cartReducer from '../features/Cart/cartSlice'; // Nhập kiểu CartState

const rootReducer = {
  count: counterReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
