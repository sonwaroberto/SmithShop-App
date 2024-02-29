import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import Router from './src/infrastructure/router';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
