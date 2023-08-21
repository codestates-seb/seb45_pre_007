import { createSlice } from '@reduxjs/toolkit';
import { postToAnswer } from '../../api/answer/postAnswer';

export const postAnswerSlice = createSlice({
  name: 'postAnswer',
  initialState: {
    content: '',
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    setAnswerContent: (state, action) => {
      state.content = action.payload;
    },
    resetAnswer: (state, action) => {
      state.content = '';
      state.loading = 'idle';
      state.currentRequestId = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postToAnswer.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(postToAnswer.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.currentRequestId = undefined;
        }
      })
      .addCase(postToAnswer.rejected, (state, action) => {
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

export const { setAnswerContent, resetAnswer } = postAnswerSlice.actions;

export default postAnswerSlice.reducer;
