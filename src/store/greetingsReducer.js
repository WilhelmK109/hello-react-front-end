import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchGreeting = createAsyncThunk('greetings/fetchGreeting', async () => {
  const response = await axios.get('http://127.0.0.1:3001/api/v1/greetings');
  const { greeting } = response.data;
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        greeting: action.payload,
      }))
      .addCase(fetchGreeting.rejected, (state) => ({ ...state, loading: false, error: true }));
  },
});

export { fetchGreeting };
export default greetingSlice.reducer;
