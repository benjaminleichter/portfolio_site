import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import thunk from 'redux-thunk';

import reducers from './reducers.js';

import App from './app.jsx';
import AboutMe from './components/AboutMe.jsx';
import WorkExperience from './components/WorkExperience.jsx';

import './index.scss';

const store = createStore(reducers);
const scrollToTop = () => window.scrollTo(0, 0);
ReactDOM.render(
    <Provider store={ store }>
        <Router onUpdate={ scrollToTop } history={ hashHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={ AboutMe } />
                <Route path="work_experience/:id" component={ WorkExperience } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('mount-point')
);