import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const deleteByAskComment = createAsyncThunk(
  'ask/deleteAskComment',
  async ({ userQuestionId, userCommentId, token }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().deleteComment;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }

    let questionId = userQuestionId;
    let commentId = userCommentId;
    // console.log(questionId, commentId);

    const response = await axios.delete(
      `${url}/questions/${questionId}/comments/${commentId}`,
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
