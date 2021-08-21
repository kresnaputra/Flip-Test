import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';
import store from './src/config/storeConfig';
import Main from './src';

const App = () => {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
