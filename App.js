import React from 'react';
import { Provider } from 'react-redux';
import Counter from './src/page/Counter';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}