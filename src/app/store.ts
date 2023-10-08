import { configureStore } from '@reduxjs/toolkit';
import productReducer from './taskSlice';

const store = configureStore({
  reducer: {
    tasks: productReducer,
  },
});

export default store;