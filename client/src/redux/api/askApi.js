import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const postToAsk = createAsyncThunk(
  'ask/postAsk',
  async ({ title, content }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().ask;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }

    const response = await axios.post(`${url}/questions`, {
      title,
      content,
    });

    return response.data;
  }
);
