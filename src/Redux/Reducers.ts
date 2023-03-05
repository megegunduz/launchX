import { combineReducers } from '@reduxjs/toolkit';
import { HomeSlice } from '../Modules/Home';
import { SearchSlice } from '../Modules/Search';
import { AlertSlice } from '../Features/Alert';

export default combineReducers({
  [HomeSlice.name]: HomeSlice.reducer,
  [SearchSlice.name]: SearchSlice.reducer,
  [AlertSlice.name]: AlertSlice.reducer,
});
