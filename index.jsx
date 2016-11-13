import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';

import App from './app.jsx';
import './index.scss';
const store = createStore(() => {}, applyMiddleware(thunk));

ReactDOM.render(
    <App />,
    document.getElementById('mount-point')
);