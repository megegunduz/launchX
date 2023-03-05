import { all } from 'redux-saga/effects';
import { HomeSagas } from '../Modules/Home';
import { SearchSagas } from '../Modules/Search';

export default function* rootSaga() {
  yield all([
    ...HomeSagas,
    ...SearchSagas
  ]);
};
