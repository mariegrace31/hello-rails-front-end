import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/v1/greetings/random');
      const data = await response.json();
      return data;
    } catch (error) {
      return error.message;
    }
  },
);

export const greetingSlice = createSlice({
  name: 'greetings',
  initialState: {
    status: 'idle',
    message: [],
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.status = 'completed';
        const { message } = action.payload;
        state.message = message;
        state.error = null;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
