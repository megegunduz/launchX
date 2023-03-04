import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import Reducers from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();
applyMiddleware(sagaMiddleware);

const store = configureStore({
  reducer: Reducers,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { store };
