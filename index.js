/**
 * @format
 */
// index.js
import React from 'react';
import { AppRegistry, ActivityIndicator } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configureStore();
console.log('store ', store);

const activityIndicator = <ActivityIndicator size="large" color="#000000" />;

const WithStore = () => (
  <Provider store={store}>
    <PersistGate loading={activityIndicator} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => WithStore);
