import { createSlice } from '@reduxjs/toolkit';
import { patchToEditComment } from '../../api/askEdit/patchAskComment';

export const patchCommentSlice = createSlice({
  name: 'patchComment',
  initialState: {
    content: '',
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    setEditComment: (state, action) => {
      state.content = action.payload;
    },
    resetEditComment: (state, action) => {
      state.content = '';
      state.loading = 'idle';
      state.currentRequestId = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(patchToEditComment.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(patchToEditComment.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.currentRequestId = undefined;
        }
      })
      .addCase(patchToEditComment.rejected, (state, action) => {
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

export const { setEditComment, resetEditComment } = patchCommentSlice.actions;

export default patchCommentSlice.reducer;
