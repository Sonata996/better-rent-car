import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';
import { filterReducer } from './filtersSlice';
import { favoritReducer } from './favoritSlise';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filterReducer,
    favorites: favoritReducer,
  },
});
