import { call, fork, takeEvery, select, put } from 'redux-saga/effects';
import { getLaunches } from '../Services/GetLaunches';
import { Launch } from '../../../Types';
import { HomeSlice, HomeSelectors } from './HomeRedux';

function* watchFetchLaunches() {
  yield takeEvery(HomeSlice.actions.fetchLaunches, workerFetchLaunches);
}

function* workerFetchLaunches() {
  const page: number = yield select(HomeSelectors.page);
  const launches: Launch[] = yield select(HomeSelectors.launches);
  // Set loading true
  try {
    const data: Launch[] = yield call(getLaunches, { page });
    const newLaunches = page === 1 ? data : [...launches, ...data];
    yield put(HomeSlice.actions.setLaunches(newLaunches));
  } catch (error) {
    // Handle error
  } finally {
    // Sef loading false
  }
};

export const sagas = [
  fork(watchFetchLaunches),
];
