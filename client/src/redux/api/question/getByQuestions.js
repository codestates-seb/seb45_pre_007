import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

// 궁금하군...
export const getByQuestions = createAsyncThunk(
  'ask/getQuestions',
  async (_, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().allQuestions;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }

    const response = await axios.get(`${url}/questions`);
    console.log(response);
    return response;
  }
);
