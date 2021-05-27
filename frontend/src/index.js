import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import mainReducer from "../src/redux/reducer/mainReducer";

const store = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
  document.getElementById('root')
);

