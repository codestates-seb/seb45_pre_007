import { combineReducers } from '@reduxjs/toolkit';
import { lawsSlice } from '../feature/lawSlice';
import { counterSlice } from '../feature/counterSlice';
// 아래에 createSlice import 해오기!

const rootReducer = combineReducers({
  laws: lawsSlice.reducer,
  counter: counterSlice.reducer,
});

export default rootReducer;
