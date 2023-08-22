import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const deleteByAnswer = createAsyncThunk(
  'ask/deleteAnswer',
  async ({ id, answerId, token }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().deleteAnswer;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }

    let questionId = id;

    const response = await axios.delete(
      `${url}/questions/${questionId}/answers/${answerId}`,
      {
        id: '',
        answerId: '',
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.log(response);
    return response;
  }
);
