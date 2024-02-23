import { createSlice } from '@reduxjs/toolkit';
import { serviceGetAllCar } from 'serviceAPI/serviceAPI';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
  },
  extraReducers: builder => {
    builder.addCase(serviceGetAllCar.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const carsReducer = carsSlice.reducer;
