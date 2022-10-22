import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import MyApp from './MyApp';

export default function MyProvider() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}
