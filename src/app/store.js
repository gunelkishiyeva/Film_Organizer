import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favorites/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
