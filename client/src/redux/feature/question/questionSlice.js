import { createSlice } from '@reduxjs/toolkit';
import { getByQuestion } from '../../api/question/getByQuestion';

export const questionSlice = createSlice({
  name: 'question',
  initialState: {
    id: 0,
    title: '',
    content: '',
    author: '',
    comments: '',
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    // resetQuestion: (state, action) => {
    //   state.id = 0;
    //   state.title = '';
    //   state.content = '';
    //   state.comments = [];
    //   state.loading = 'idle';
    //   state.currentRequestId = undefined;
    // },
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
          state.comments = action.payload.questionComments;

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

export const { setComments } = questionSlice.actions;

export default questionSlice.reducer;
