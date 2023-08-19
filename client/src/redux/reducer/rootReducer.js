import { combineReducers } from '@reduxjs/toolkit';
import { askSlice } from '../feature/askSlice';
import { loginSlice } from '../feature/loginSlice';
import { counterSlice } from '../feature/counterSlice';
import { questionSlice } from '../feature/questionSlice';
import { askEditSlice } from '../feature/askEditSlice';
import { askDeleteSlice } from '../feature/askDeleteSlice';
import { askCommentSlice } from '../feature/askCommentSlice';

// 아래에 createSlice import 해오기

const rootReducer = combineReducers({
  ask: askSlice.reducer,
  login: loginSlice.reducer,
  counter: counterSlice.reducer,
  question: questionSlice.reducer,
  askEdit: askEditSlice.reducer,
  askDelete: askDeleteSlice.reducer,
  askComment: askCommentSlice.reducer,
});

export default rootReducer;
