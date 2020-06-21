import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../app';
import NewNotes from 'components/newnotes/newnotes.component';

function DefaultLayout({config, component }) {
    return (
        <Route
            exact
            path={config.path}
            render={(props) => (
                <>
                {
                    config.header && (
                        <h1>Header</h1>
                    )
                }
                {React.createElement(component, [props])}
                </>
            )}
        />
    )
}
function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <DefaultLayout 
                    config={{ 
                        path: '/new-notes', 
                        header: true 
                    }} 
                    component={NewNotes} 
                />
            </Switch>
        </Router>
    )
}

export default AppRouter;
