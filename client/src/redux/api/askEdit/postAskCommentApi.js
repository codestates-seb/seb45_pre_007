import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const postToAskComment = createAsyncThunk(
  'ask/postAskComment',
  async ({ id, content, token }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().askComment;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }
    let questionId = id;
    console.log(questionId);

    const response = await axios.post(
      `${url}/questions/${questionId}/comments`,
      {
        content: content,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return response;
  }
);
