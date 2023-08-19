import { createSlice } from '@reduxjs/toolkit';
import { getByQuestion } from '../api/getByQuestion';

export const questionSlice = createSlice({
  name: 'question',
  initialState: {
    id: 0,
    title: '',
    content: '',
    author: '',
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    resetQuestion: (state, action) => {
      state.id = 0;
      state.title = '';
      state.content = '';
      state.loading = 'idle';
      state.currentRequestId = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getByQuestion.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getByQuestion.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.id = action.payload.questionId;
          state.title = action.payload.questionTitle;
          state.content = action.payload.questionContent;
          state.author = action.payload.questionUser;

          state.loading = 'idle';
          state.currentRequestId = undefined;
        }
      })
      .addCase(getByQuestion.rejected, (state, action) => {
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

export const { resetQuestion } = questionSlice.actions;

export default questionSlice.reducer;
