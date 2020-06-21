import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../app';
import Header from 'components/header/header.component';
import NewNotes from 'components/newnotes/newnotes.component';
import Sidebar from 'components/sidebar/sidebar.component';

const styles = {
    container: `
        absolute mt-24 ml-4
    `
}
function DefaultLayout({config, component }) {
    return (
        <Route
            exact
            path={config.path}
            render={(props) => (
                <div className="bg-gray-800 h-screen">
                {
                    config.header && (
                        <Header />
                    )
                }
                {
                    config.sidebar && <Sidebar />
                }

                <div 
                    className={styles.container} 
                    style={{ 
                        marginLeft: config.sidebar ? '21%' : 0 
                    }}
                >
                    {React.createElement(component, [props])}
                </div>
                </div>
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
                        header: true,
                        sidebar: true,
                    }} 
                    component={NewNotes} 
                />
            </Switch>
        </Router>
    )
}

export default AppRouter;
