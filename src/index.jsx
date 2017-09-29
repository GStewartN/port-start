import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import combinedReducer from './reducers/index';

const store = createStore(
  combinedReducer,
  applyMiddleware(
    thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById("react-app-root")
);
