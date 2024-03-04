import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d7b71427d9a3bc1d7bae4d.mockapi.io';

export const serviceGetAllCar = createAsyncThunk(
  'car/fetchAll',
  async (_, thunkAPI) => {
    try {
      // const parameters = {
      //   limit: 12,
      // };
      const result = await axios.get('/advert/listcar');
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
