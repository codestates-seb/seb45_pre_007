import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const getByUser = createAsyncThunk(
  'ask/getUser',
  async (id, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().users;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }
    let userId = id;
    console.log(userId);

    const response = await axios.get(`${url}/users/${userId}`);
    return response.data;
  }
);
