import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'cars',
  initialState: '',
  reducers: {
    addfilter(state, action) {
      return (state = action.payload);
    },
  },
});
export const { addfilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
