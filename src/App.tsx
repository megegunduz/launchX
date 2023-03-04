import React from 'react';
import { MainNavigation } from './Navigation';
import { Provider } from 'react-redux';
import { store } from './Redux';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
