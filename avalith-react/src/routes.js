import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
// import About from './components/About';
// import Contact from './components/Contact';
import Post from './components/Post';
import Main from './components/Main';

// import App from './App';

// import Page404 from './components/Page404';


const AppRoutes = () =>
<App>
    <Switch>
            <Route path="/post" component={Post}  />
            {/* <Route path="/post" component={Post} />             */}
            {/* <Route path="/Contact" component={Contact} /> */}
            <Route path="/index" component={App} /> 
            {/* <Route component={Page404} /> */}
    </Switch>
</App>
    
    export default  AppRoutes;