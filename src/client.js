import reactDom from 'react-dom';
import React from 'react';
import { browserHistory, Router,Link } from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

injectTapEventPlugin();

const initialState = window.REDUX_INITIAL_STATE || {};

const store = configureStore(initialState);
reactDom.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('react-view')
);
