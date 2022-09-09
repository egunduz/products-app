import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import basketReducer from '../components/basket/basketSlice';
import productReducer from '../pages/productBrowser/ProductBrowserSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
    products: productReducer,
  },
});
