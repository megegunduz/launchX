import { call, fork, takeEvery, select, put } from 'redux-saga/effects';
import { searchLaunches } from '../Services/SearchLaunches';
import { Launch } from '../../../Types';
import { SearchSlice, SearchSelectors } from './SearchRedux';
import { PayloadAction } from '@reduxjs/toolkit';

function* watchSearchLaunch() {
  yield takeEvery(SearchSlice.actions.searchLaunches, workerSearchLaunch);
}

function* workerSearchLaunch(action: PayloadAction<string>) {
  const date = action.payload;

  try {
    const data: Launch[] = yield call(searchLaunches, { date });
    yield put(SearchSlice.actions.setLaunches(data));
  } catch (error) {

  } finally {

  }
}

export const sagas = [
  fork(watchSearchLaunch),
];
