import React from 'react';
import { MainNavigation } from './Navigation';
import { Provider } from 'react-redux';
import { store } from './Redux';
import { ErrorModal } from './Features/Alert';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ErrorModal />
      <MainNavigation />
    </Provider>
  );
};

export default App;
