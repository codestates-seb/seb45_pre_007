import { createSlice } from '@reduxjs/toolkit';
import { postToLogin } from '../api/loginApi';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    token: '',
    loading: 'idle',
    currentRequestId: undefined,
    isSuccessed: null,
    error: null,
    status: null,
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
      state.email = '';
      state.password = '';
      state.token = '';
      state.loading = 'idle';
      state.currentRequestId = undefined;
      state.isSuccessed = null;
      state.status = null;
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

          // 토큰을 어떻게 가져오는지 확인
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

export const { setEmail, setPassword, resetLogin, logout } = loginSlice.actions;

export default loginSlice.reducer;
