import { configureStore } from '@reduxjs/toolkit';
import themeReduce from '../features/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReduce
  }
});

export default store;