import { combineReducers } from '@reduxjs/toolkit';
import { lawsSlice } from '../feature/lawSlice';
// 아래에 createSlice import 해오기

const rootReducer = combineReducers({
  laws: lawsSlice.reducer,
});

export default rootReducer;
