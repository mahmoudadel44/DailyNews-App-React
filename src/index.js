import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore,applyMiddleware,compose} from 'redux'
import promiseMiddleware from 'redux-promise'
import App from "./components/App";
 import reducers from './reducers'
import "./css/bootstrap.min.css";
import "./App.css";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const createStoreWithApplyMiddleware=applyMiddleware(thunk)(createStore)
const store=createStore(reducers,composeEnhancers(applyMiddleware(promiseMiddleware)))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
