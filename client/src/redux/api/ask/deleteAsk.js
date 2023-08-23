import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const deleteByAsk = createAsyncThunk(
  'ask/deleteAsk',
  async ({ id, token }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().askDelete;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }

    let questionId = id;

    const response = await axios.delete(`${url}/questions/${questionId}`, {
      headers: {
        Authorization: token,
      },
    });

    console.log(response);
    return response;
  }
);
