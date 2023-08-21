import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const postToAnswer = createAsyncThunk(
  'ask/postByAnswer',
  async ({ id, content, token }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().postAnswer;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }

    let questionId = id;

    const response = await axios.post(
      `${url}/questions/${questionId}/answers`,
      {
        answerContent: content,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.log(response);
    return response.data;
  }
);
