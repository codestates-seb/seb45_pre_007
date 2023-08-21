import { createSlice } from '@reduxjs/toolkit';
import { getByQuestion } from '../../api/question/getByQuestion';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    id: 0,
    email: '',
    username: '',
    avatarImg: '',
    createAt: '',
    lastModifiedAt: '',
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    // setComments: (state, action) => {
    //   state.comments = action.payload;
    // },
    // // resetQuestion: (state, action) => {
    // //   state.id = 0;
    // //   state.title = '';
    // //   state.content = '';
    // //   state.comments = [];
    // //   state.loading = 'idle';
    // //   state.currentRequestId = undefined;
    // // },
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
          state.id = action.payload.userId;
          state.email = action.payload.userEmail;
          state.username = action.payload.userName;
          state.avatarImg = action.payload.avatarImg;
          state.createAt = action.payload.createdAt;
          state.lastModifiedAt = action.payload.createdAt;

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

// export const {} = usersSlice.actions;

export default usersSlice.reducer;
