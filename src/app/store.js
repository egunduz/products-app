import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import basketReducer from '../components/basket/basketSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
  },
});
