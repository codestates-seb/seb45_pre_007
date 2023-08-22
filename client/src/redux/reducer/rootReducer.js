import { combineReducers } from '@reduxjs/toolkit';
import { askSlice } from '../feature/ask/askSlice';
import { loginSlice } from '../feature/login/loginSlice';
import { counterSlice } from '../feature/counterSlice';
import { questionSlice } from '../feature/question/questionSlice';
import { askEditSlice } from '../feature/askEdit/askEditSlice';
import { askDeleteSlice } from '../feature/ask/askDeleteSlice';
import { askCommentSlice } from '../feature/askEdit/askCommentSlice';
import { patchCommentSlice } from '../feature/askEdit/patchComment';
import { allQuestionsSlice } from '../feature/question/allQuestionsSlice';
import { usersSlice } from '../feature/users/userSlice';
import { postAnswerSlice } from '../feature/answer/postAnswerSlice';
import { deleteAnswerSlice } from '../feature/answer/deleteAnswerSlice';

// 아래에 createSlice import 해오기

const rootReducer = combineReducers({
  ask: askSlice.reducer,
  login: loginSlice.reducer,
  counter: counterSlice.reducer,
  question: questionSlice.reducer,
  askEdit: askEditSlice.reducer,
  askDelete: askDeleteSlice.reducer,
  askComment: askCommentSlice.reducer,
  editComment: patchCommentSlice.reducer,
  questions: allQuestionsSlice.reducer,
  users: usersSlice.reducer,
  postAnswer: postAnswerSlice.reducer,
  deleteAnswer: deleteAnswerSlice.reducer,
});

export default rootReducer;
