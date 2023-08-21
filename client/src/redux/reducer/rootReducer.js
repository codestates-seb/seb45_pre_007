import { combineReducers } from '@reduxjs/toolkit';
import { askSlice } from '../feature/ask/askSlice';
import { loginSlice } from '../feature/login/loginSlice';
import { counterSlice } from '../feature/counterSlice';
import { questionSlice } from '../feature/question/questionSlice';
import { askEditSlice } from '../feature/askEdit/askEditSlice';
import { askDeleteSlice } from '../feature/ask/askDeleteSlice';
import { askCommentSlice } from '../feature/askEdit/askCommentSlice';
import { patchCommentSlice } from '../feature/askEdit/patchComment';

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
});

export default rootReducer;
