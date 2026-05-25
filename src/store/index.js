import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cartSlice';
import checkoutReducer from './slices/checkout';
import categoriesReducer from './slices/categoriesSlice';
import ordersReducer from './slices/ordersSlice';
import productsReduecer from './slices/productsSlice';
import usersReducer from './slices/usersSlice';
import { use } from 'react';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    categories: categoriesReducer,
    orders: ordersReducer,
    products: productsReduecer,
    users: usersReducer,
  },
});

export default store;
