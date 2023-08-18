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
    error: null,
    isSuccessed: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
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
          action.payload.code === 200
        ) {
          // token
          state.token = action.payload.headers.Authorization;
          state.isSuccessed = true;
          state.loading = 'idle';
          state.currentRequestId = undefined;
        }
      })
      .addCase(postToLogin.rejected, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId &&
          action.payload.code === 401
        ) {
          state.isSuccessed = null;
          state.loading = 'idle';
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const { setEmail, setPassword, resetLogin } = loginSlice.actions;

export default loginSlice.reducer;
