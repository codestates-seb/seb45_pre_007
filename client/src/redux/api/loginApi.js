import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const postToLogin = createAsyncThunk(
  'login/postLogin',
  async ({ email, password }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().login;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }

    // console.log(email, password);
    const response = await axios.post(`${url}/users/login`, {
      userEmail: email,
      password,
    });

    console.log(response);
    return response;
  }
);
