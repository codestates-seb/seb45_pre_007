import { createSlice } from '@reduxjs/toolkit';
import { deleteByAskComment } from '../../api/askEdit/deleteAskComment';

export const deleteAskCommentSlice = createSlice({
  name: 'deleteComment',
  initialState: {
    status: '',
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteByAskComment.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(deleteByAskComment.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.status = 204;
          state.loading = 'idle';
          state.currentRequestId = undefined;
        }
      })
      .addCase(deleteByAskComment.rejected, (state, action) => {
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

export default deleteAskCommentSlice.reducer;
