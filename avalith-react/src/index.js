import React from 'react';
import { render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppRoutes from './routes';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import BrowserHistory  from 'react-router-dom';

render(
    <Router>
        <AppRoutes /> 
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
