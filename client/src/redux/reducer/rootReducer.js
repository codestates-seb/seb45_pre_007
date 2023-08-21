import { combineReducers } from '@reduxjs/toolkit';
import { askSlice } from '../feature/askSlice';
import { loginSlice } from '../feature/loginSlice';
// 아래에 createSlice import 해오기

const rootReducer = combineReducers({
  ask: askSlice.reducer,
  login: loginSlice.reducer,
});

export default rootReducer;
