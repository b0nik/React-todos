import React, {Component} from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from './containers/App'
import Todos from './containers/Todos'


export default (
    <Route component={App}>
            <Route path="/" component={Todos}>
                <Route path="/:id" component={Todos}/>
            </Route>
    </Route>
)