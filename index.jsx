import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import reducers from './reducers.js';

import thunk from 'redux-thunk';

import App from './app.jsx';
import './index.scss';
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('mount-point')
);