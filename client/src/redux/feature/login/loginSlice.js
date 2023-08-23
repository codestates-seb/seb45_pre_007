import { createSlice } from '@reduxjs/toolkit';
import { postToLogin } from '../../api/login/postLoginApi';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    id: '',
    email: '',
    password: '',
    token: '',
    loading: 'idle',
    currentRequestId: undefined,
    isSuccessed: null,
    error: null,
    status: null,
    nextLevel: '',
    userName: 'test123',
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    resetLogin: (state, action) => {
      state.email = '';
      state.password = '';
      state.loading = 'idle';
      state.currentRequestId = undefined;
    },
    logout: (state, action) => {
      state.id = '';
      state.email = '';
      state.password = '';
      state.token = '';
      state.loading = 'idle';
      state.currentRequestId = undefined;
      state.isSuccessed = null;
      state.status = null;
    },
    setNextLevel: (state, action) => {
      state.nextLevel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postToLogin.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(postToLogin.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId &&
          action.payload.status === 200
        ) {
          console.log('API Response:', action.payload); // 확인용 로그

          //! 정확한 response에서 오는 userId 적기
          state.id = action.payload.headers.userid;
          state.token = action.payload.headers.authorization;
          state.loading = 'idle';
          state.isSuccessed = true;
          state.status = 200;
          state.currentRequestId = undefined;
        }
      })
      .addCase(postToLogin.rejected, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId &&
          action.payload?.status === 401
        ) {
          state.loading = 'idle';
          state.error = action.error;
          state.isSuccessed = false;
          state.status = 401;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const { setEmail, setPassword, resetLogin, logout, setNextLevel } =
  loginSlice.actions;

export default loginSlice.reducer;
