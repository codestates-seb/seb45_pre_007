import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const postToAskEdit = createAsyncThunk(
  'ask/postAskEdit',
  async ({ title, content, token, id }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().askEdit;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }

    let questionId = id;

    const response = await axios.patch(
      `${url}/questions/${questionId}`,
      {
        questionTitle: title,
        questionContent: content,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.log(response.data);
    return response.data;
  }
);
