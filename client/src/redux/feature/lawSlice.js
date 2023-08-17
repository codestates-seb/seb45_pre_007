import { createSlice } from '@reduxjs/toolkit';
import { fetchLawById } from '../api/example';

export const lawsSlice = createSlice({
  name: 'laws',
  initialState: {
    title: '',
    content: '',
    koreaLaws: [],
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    // useEffect가 실행될 때 이전에 가져온 데이터 초기화 하기
    resetLaws: (state, action) => {
      state.koreaLaws = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLawById.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchLawById.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.koreaLaws.push(action.payload);
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchLawById.rejected, (state, action) => {
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

// 유저 관련
// 질문 관련
