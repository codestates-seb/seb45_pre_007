import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const getByQuestion = createAsyncThunk(
  'ask/getQuestion',
  async (id, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().question;

    if (loading !== 'pending' || requestId !== currentRequestId) {
      // pending 상태가 아니거나 요청한 id가 갖지않다면 바로 return
      return;
    }
    //! 특정 question이 수정할 question이 맞는지 확인해서 id를 넣어야 함
    //! 질문 등록 시 나온 questionId랑 질문 조회 시 나온 questionId가 같은지...
    let questionId = id;
    // console.log(questionId);

    const response = await axios.get(`${url}/questions/${questionId}`);
    // console.log(...response.data.questionComments);
    return response.data;
  }
);
