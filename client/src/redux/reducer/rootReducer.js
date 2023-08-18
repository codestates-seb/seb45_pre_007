import { combineReducers } from '@reduxjs/toolkit';
import { askSlice } from '../feature/askSlice';
import { loginSlice } from '../feature/loginSlice';
import { counterSlice } from '../feature/counterSlice';
// 아래에 createSlice import 해오기!

const rootReducer = combineReducers({
  ask: askSlice.reducer,
  login: loginSlice.reducer,
  counter: counterSlice.reducer,
});

export default rootReducer;
