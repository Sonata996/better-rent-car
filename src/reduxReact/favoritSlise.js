import { createSlice } from '@reduxjs/toolkit';

const favoritSlice = createSlice({
  name: 'favorite',
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteFavorite(state, action) {
      state.items = state.items.filter(elem => elem.id !== action.payload.id);
    },
  },
});

export const favoritReducer = favoritSlice.reducer;
export const { addFavorite, deleteFavorite } = favoritSlice.actions;
