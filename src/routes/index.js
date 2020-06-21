import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../app';
import NewNotes from 'components/newnotes/newnotes.component';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact patch="/new-notes" component={NewNotes} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
