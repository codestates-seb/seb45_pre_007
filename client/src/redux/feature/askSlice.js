import { createSlice } from '@reduxjs/toolkit';
import { postToAsk } from '../api/askApi';

export const askSlice = createSlice({
  name: 'ask',
  initialState: {
    title: '',
    content: '',
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    resetAsk: (state, action) => {
      state.title = '';
      state.content = '';
      state.loading = 'idle';
      state.currentRequestId = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postToAsk.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(postToAsk.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.currentRequestId = undefined;
        }
      })
      .addCase(postToAsk.rejected, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const { setContent, setTitle, resetAsk } = askSlice.actions;

export default askSlice.reducer;
