import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from 'uielements/loader/loader.component';
import RoutesManager from './src/routes';

const App = React.lazy(() => import('./src/app'));

const Index = () => (
    <RoutesManager>
        <Suspense fallback={<Loader />}>    
            <App />
        </Suspense>
    </RoutesManager>
);

ReactDOM.render(<Index />, document.getElementById('root'));
