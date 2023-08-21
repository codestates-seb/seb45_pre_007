import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, PERSIST, PURGE } from 'redux-persist';
import rootReducer from '../reducer/rootReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage, // local storage 사용
};

//! rootReducer를 영속성을 가진 reducer로 wrapping
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, PURGE],
      },
    }),
  ],
});
