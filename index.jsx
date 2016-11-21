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
import Intro from './components/Intro.jsx';
import WorkExperience from './components/WorkExperience.jsx';

import './index.scss';

const store = createStore(reducers);
ReactDOM.render(
    <Provider store={ store }>
        <Router history={ hashHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Intro } />
                <Route path="about_me" component={ AboutMe } />
                <Route path="work_experience/:id" component={ WorkExperience } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('mount-point')
);