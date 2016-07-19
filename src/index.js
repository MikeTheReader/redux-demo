import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const loggerMiddleware = (store) => (next) => (action) => {
    document.querySelector('#action').innerHTML = JSON.stringify(action, null, 2);
    let result = next(action);
    return result
};

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#root'));
