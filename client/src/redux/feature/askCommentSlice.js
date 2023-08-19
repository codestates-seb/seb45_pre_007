import { createSlice } from '@reduxjs/toolkit';
import { postToAskComment } from '../api/askCommentApi';

export const askCommentSlice = createSlice({
  name: 'askComment',
  initialState: {
    id: 0,
    content: '',
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
    resetAskComment: (state, action) => {
      state.title = '';
      state.content = '';
      state.loading = 'idle';
      state.currentRequestId = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postToAskComment.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(postToAskComment.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.id = action.payload.questionCommentId;
          state.loading = 'idle';
          state.currentRequestId = undefined;
        }
      })
      .addCase(postToAskComment.rejected, (state, action) => {
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

export const { setContent, resetAskComment } = askCommentSlice.actions;

export default askCommentSlice.reducer;
