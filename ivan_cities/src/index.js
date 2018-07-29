import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import ReduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';
//import Query from "./containers/query";
//import HostsShow from "./containers/hosts";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
, document.getElementById('root')
);
