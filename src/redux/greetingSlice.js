import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL_API = 'http://localhost:3000/api/v1/greetings/random';
export const fetchRandomGreeting = createAsyncThunk('greetings/fetchRandomGreeting', async () => {
  try {
    const response = await fetch(URL_API, {
      headers: {
        method: 'GET',
        'Content-Type': 'application/json',
      },
    });
    const greeting = await response.json();
    return greeting;
  } catch (error) {
    return error.message;
  }
});

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
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.status = 'completed';
        const { message } = action.payload;
        state.message = message;
        state.error = '';
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload.message;
      });
  },
});

export default greetingSlice.reducer;
