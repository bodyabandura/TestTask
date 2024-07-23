import { combineReducers } from '@reduxjs/toolkit';
import slice from './slice'; 

const rootReducer = combineReducers({
  feature: slice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
