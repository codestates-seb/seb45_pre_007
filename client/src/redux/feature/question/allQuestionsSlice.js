import { createSlice } from '@reduxjs/toolkit';
import { getByQuestions } from '../../api/question/getByQuestions';

export const allQuestionsSlice = createSlice({
  name: 'allQuestions',
  initialState: {
    questions: [],
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    reset: (state, action) => {
      state.questions = [];
      state.currentRequestId = undefined;
      state.error = null;
      state.loading = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getByQuestions.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getByQuestions.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.questions = action.payload;
          state.loading = 'idle';
          state.currentRequestId = undefined;
        }
      })
      .addCase(getByQuestions.rejected, (state, action) => {
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

export const { reset } = allQuestionsSlice.actions;

export default allQuestionsSlice.reducer;
