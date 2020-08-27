import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';
import { LoadingView } from './components/LoadingView'
import { rootReducer } from './store';

import './index.css'

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 
 };

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
      <Router>
        <App className='App' />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

