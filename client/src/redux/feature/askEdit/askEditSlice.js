import { createSlice } from '@reduxjs/toolkit';
import { patchToAskEdit } from '../../api/askEdit/patchAskEditApi';

export const askEditSlice = createSlice({
  name: 'askEdit',
  initialState: {
    id: 0,
    title: '',
    content: '',
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    setEditTitle: (state, action) => {
      state.title = action.payload;
    },
    setEditContent: (state, action) => {
      state.content = action.payload;
    },
    resetAskEdit: (state, action) => {
      state.title = '';
      state.content = '';
      state.loading = 'idle';
      state.error = null;
      state.currentRequestId = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(patchToAskEdit.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(patchToAskEdit.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.id = action.payload.questionId;
          state.loading = 'idle';
          state.currentRequestId = undefined;
        }
      })
      .addCase(patchToAskEdit.rejected, (state, action) => {
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

export const { setEditContent, setEditTitle, resetAskEdit } =
  askEditSlice.actions;

export default askEditSlice.reducer;
