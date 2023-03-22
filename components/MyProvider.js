import { useState } from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import MyApp from './MyApp';

export default function MyProvider() {
  const [state, setState] = useState({})
  return (
    <Provider store={store}>
      <MyApp state={state} setState={setState} />
    </Provider>
  );
}
