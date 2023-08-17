import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLawById = createAsyncThunk(
  'law/fetchByIdStatus',
  async (id, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().laws;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }

    const response = await axios.get(`https://koreanjson.com/posts/${id}`);
    return response.data;
  }
);
