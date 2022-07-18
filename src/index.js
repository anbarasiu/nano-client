import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/font-awesome/css/font-awesome.css";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/popper.js/dist/popper-utils";
import "../node_modules/bootstrap/js/src/modal";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap/dist/js/bootstrap';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMW from 'redux-promise';
import reducers from './Reducers/combinedReducers';
import { BrowserRouter as Router } from 'react-router-dom';

const createStoreWithMW = applyMiddleware(promiseMW)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMW(reducers)} >
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
