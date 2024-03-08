import { createSlice } from '@reduxjs/toolkit';

const favoritSlice = createSlice({
  name: 'cars',
  initialState: [],
  reducers: {
    addFavorite(state, action) {
      return (state = [...state, action.payload]);
    },
  },
});

export const favoritReducer = favoritSlice.reducer;
export const { addFavorite } = favoritSlice.actions;
